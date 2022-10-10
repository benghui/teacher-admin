import dotenv from "dotenv";
import express from "express";
import { getCommonStudents } from "../controllers/register.controller.js";
import * as db from "../config/db.config.js"
import { expect } from "chai";
import sinon from "sinon";
import supertest from "supertest";

const app = express();
dotenv.config();

describe("Test API start", () => {
	describe("Test /api/register route", () => {
		it("Should have a status code of 204 with valid request body", () => {
			supertest(app)
				.post("/api/register")
				.set("Content-Type", "application/json")
				.send({
					teacher: "teacherken@gmail.com",
					students: [
							"studentjon@gmail.com",
							"studenthon@gmail.com"
						]
				})
				.expect(204);
		});

		it("Should have a status code of 422 for invalid teacher email", () => {
			supertest(app)
				.post("/api/register")
				.set("Content-Type", "application/json")
				.send({
					teacher: "something",
					students: [
						"studentjon@gmail.com",
						"studenthon@gmail.com"
					]
				})
				.expect(422);
		});

		it("Should have a status code of 422 for invalid request body for teacher", () => {
			supertest(app)
				.post("/api/register")
				.set("Content-Type", "application/json")
				.send({
					teachers: "teacherken@gmail.com",
					students: [
						"studentjon@gmail.com",
						"studenthon@gmail.com"
					]
				})
				.expect(422);
		});

		it("Should have a status code of 422 for invalid request body for students", () => {
			supertest(app)
				.post("/api/register")
				.set("Content-Type", "application/json")
				.send({
					teacher: "teacherken@gmail.com",
					student: [
						"studentjon@gmail.com",
						"studenthon@gmail.com"
					]
				})
				.expect(422);
		});

		it("Should have a status code of 422 for empty students array", () => {
			supertest(app)
				.post("/api/register")
				.set("Content-Type", "application/json")
				.send({
					teacher: "teacherken@gmail.com",
					students: []
				})
				.expect(422);
		});

		it("Should have a status code of 422 for invalid email in students array", () => {
			supertest(app)
				.post("/api/register")
				.set("Content-Type", "application/json")
				.send({
					teacher: "teacherken@gmail.com",
					students: ["something"]
				})
				.expect(422);
		});

		it("Should have a status code of 422 when there is no students array", () => {
			supertest(app)
				.post("/api/register")
				.set("Content-Type", "application/json")
				.send({
					teacher: "teacherken@gmail.com",
					students: "studentjon@gmail.com"
				})
				.expect(422);
		});
	});
})