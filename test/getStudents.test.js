import express from "express";
import supertest from "supertest";

const app = express();

describe("Test /api/commonstudents start", () => {
	it("Should have a status code of 200 with valid request query with 1 teacher", () => {
		supertest(app)
			.get("/api/commonstudents")
			.query({ teacher: "teacherken@gmail.com" })
			.expect(200)
			.expect({
				"students":
					[
						"commonstudent1@gmail.com",
						"commonstudent2@gmail.com",
						"student_only_under_teacher_ken@gmail.com"
					]
			});
	});

	it("Should have a status code of 200 with valid request query with 2 teachers", () => {
		supertest(app)
			.get("/api/commonstudents")
			.query({
				teacher: "teacherken@gmail.com",
				teacher: "teacherjoe@gmail.com"
			})
			.expect(200)
			.expect({
				"students":
					[
						"commonstudent1@gmail.com",
						"commonstudent2@gmail.com"
					]
			});
	});

	it("Should have a status code of 400 with invalid request query", () => {
		supertest(app)
			.get("/api/commonstudents")
			.query({ teachers: "teacherken@gmail.com" })
			.expect(422)
	});
});
