import express from "express";
import supertest from "supertest";

const app = express();

describe("Test /api/retrievefornotifications start", () => {
	it("Should have a status code of 204 with valid request body", () => {
		supertest(app)
			.post("/api/retrievefornotifications")
			.set("Content-Type", "application/json")
			.send({
				teacher: "teacherken@gmail.com",
				notification: "Hello students! @studentagnes@gmail.com @studentmiche@gmail.com"
			})
			.expect("Content-Type", /json/)
			.expect(200)
			.expect({ recipients: ["studentagnes@gmail.com", "studentmiche@gmail.com"] });
	});

	it("Should have a status code of 422 for invalid request body for teacher", () => {
		supertest(app)
			.post("/api/retrievefornotifications")
			.set("Content-Type", "application/json")
			.send({
				teachers: "teacherken@gmail.com",
				notification: "Hello students!"
			})
			.expect(422);
	});

	it("Should have a status code of 422 for invalid request body for notification", () => {
		supertest(app)
			.post("/api/retrievefornotifications")
			.set("Content-Type", "application/json")
			.send({
				teacher: "teacherken@gmail.com",
				notifications: "Hello students!"
			})
			.expect(422);
	});

	it("Should have a status code of 422 for invalid teacher email", () => {
		supertest(app)
			.post("/api/retrievefornotifications")
			.set("Content-Type", "application/json")
			.send({
				teacher: "something",
				notification: "Hello students!"
			})
			.expect(422);
	});
});
