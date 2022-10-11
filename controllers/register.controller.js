import { QueryTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";

export const getCommonStudents = async (req, res) => {
  if (!req.query.teacher) res.status(422).send({ message: "Invalid query key" });

  const teachers = req.query.teacher;
  const length = typeof teachers == 'string' ? 1 : teachers.length;

  const students = await sequelize.query(
    `SELECT s.email FROM students s
			JOIN register r ON s.id = r.student_id
			JOIN teachers t ON r.teacher_id = t.id
			WHERE t.email IN (:teachers)
			GROUP BY s.email
			HAVING COUNT(*) = :length`,
    {
      replacements: {
        teachers,
        length
      },
      type: QueryTypes.SELECT
    }
  );

  res.send({ students: students.map(data => data.email) });
}

export const suspendStudent = async (req, res) => {
  await sequelize.query(
    `UPDATE students SET isSuspended = true WHERE email = :email`,
    {
      replacements: {
        email: req.body.student
      },
      type: QueryTypes.UPDATE
    }
  )

  res.status(204).send("Updated");
}

export const receiveNotification = async (req, res) => {
  const mentioned = req.body.notification.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g) ?? [];

  const countMentioned = await sequelize.query(
    `SELECT 1 FROM students WHERE email IN (:mentioned)`,
    {
      replacements: {
        mentioned
      },
      type: QueryTypes.SELECT
    }
  );

  if (mentioned.length !== Object.values(countMentioned).length) {
    res.status(422).send({ message: "One or more mentioned student emails are invalid" });
  }

  const students = await sequelize.query(
    `SELECT s.email FROM students s
			JOIN register r ON s.id = r.student_id
			JOIN teachers t ON r.teacher_id = t.id
			WHERE t.email = :teacher
			AND s.isSuspended = false`,
    {
      replacements: {
        teacher: req.body.teacher
      },
      type: QueryTypes.SELECT
    }
  );

  res.send({ recipients: [...new Set([...students.map(data => data.email), ...mentioned])] })
}

export const registerStudents = async (req, res) => {
  const { teacher, students } = req.body;

  await sequelize.query(
    `INSERT INTO register (teacher_id, student_id)
			SELECT teachers.id, students.id FROM teachers
			CROSS JOIN students
			WHERE teachers.email = :teacher
			AND students.email IN (:students)`,
    {
      replacements: {
        teacher,
        students
      },
      type: QueryTypes.INSERT
    }
  )

  res.status(204).send("Registered");
}
