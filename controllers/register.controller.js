import { QueryTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";

export const getCommonStudents = async (req, res) => {
	const teachers = req.query.teacher;
	const length = typeof teachers == 'string' ? Object.keys(req.query).length : teachers.length;

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
		`UPDATE students SET isSuspended = 1 WHERE email = :email`,
		{
			replacements: {
				email: req.body.student
			},
			type: QueryTypes.UPDATE
		}
	).then(res.status(204).send("Updated"));
}