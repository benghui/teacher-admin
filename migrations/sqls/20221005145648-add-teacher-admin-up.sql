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

CREATE INDEX fk_to_students ON register (student_id)
