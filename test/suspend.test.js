import express from "express";
import supertest from "supertest";

const app = express();

describe("Test /api/suspend start", () => {
	it("Should have a status code of 204 with valid request body", () => {
		supertest(app)
			.post("/api/suspend")
			.set("Content-Type", "application/json")
			.send({
				student: "studentmary@gmail.com"
			})
			.expect("Content-Type", /json/)
			.expect(204);
	});

	it("Should have a status code of 204 with valid request body and suspending the same student more than once", () => {
		supertest(app)
			.post("/api/suspend")
			.set("Content-Type", "application/json")
			.send({
				student: "studentmary@gmail.com"
			})
			.expect("Content-Type", /json/)
			.expect(204);
		supertest(app)
			.post("/api/suspend")
			.set("Content-Type", "application/json")
			.send({
				student: "studentmary@gmail.com"
			})
			.expect("Content-Type", /json/)
			.expect(204);
	});

	it('Should have a status code of 422 for invalid request body for student', () => {
		supertest(app)
			.post('/api/suspend')
			.set('Content-Type', 'application/json')
			.send({
				students: "studentmary@gmail.com"
			})
			.expect('Content-Type', /json/)
			.expect(422);
	});

	it("Should have a status code of 422 for invalid email", () => {
		supertest(app)
			.post("/api/suspend")
			.set("Content-Type", "application/json")
			.send({
				student: "something"
			})
			.expect("Content-Type", /json/)
			.expect(422);
	});
});
