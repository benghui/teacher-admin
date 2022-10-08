CREATE TABLE teachers (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(255) NOT NULL
);

CREATE TABLE students (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(255) NOT NULL,
	isSuspended BOOLEAN DEFAULT FALSE
);

CREATE TABLE register (
	teacher_id INT NOT NULL,
	student_id INT NOT NULL,

	CONSTRAINT register PRIMARY KEY (teacher_id, student_id),

	CONSTRAINT fk_to_teachers FOREIGN KEY (teacher_id)
	REFERENCES teachers (id) ON DELETE CASCADE,

	CONSTRAINT fk_to_students FOREIGN KEY (student_id)
	REFERENCES students (id) ON DELETE CASCADE
);

CREATE INDEX fk_to_students ON register (student_id);

INSERT INTO teachers (email) VALUES("teacherken@gmail.com");
INSERT INTO teachers (email) VALUES("teacherjoe@gmail.com");
INSERT INTO teachers (email) VALUES("teachersally@gmail.com");

INSERT INTO students (email) VALUES("studentjon@gmail.com");
INSERT INTO students (email) VALUES("studenthon@gmail.com");
INSERT INTO students (email) VALUES("studentpete@gmail.com");
INSERT INTO students (email) VALUES("studentmary@gmail.com");
INSERT INTO students (email) VALUES("studentbob@gmail.com");
INSERT INTO students (email) VALUES("studentmich@gmail.com");
INSERT INTO students (email) VALUES("studentagnes@gmail.com");

INSERT INTO register (teacher_id, student_id) VALUES(1, 1);
INSERT INTO register (teacher_id, student_id) VALUES(1, 3);
INSERT INTO register (teacher_id, student_id) VALUES(1, 4);
INSERT INTO register (teacher_id, student_id) VALUES(2, 1);
INSERT INTO register (teacher_id, student_id) VALUES(2, 2);
INSERT INTO register (teacher_id, student_id) VALUES(2, 7);
INSERT INTO register (teacher_id, student_id) VALUES(3, 1);
