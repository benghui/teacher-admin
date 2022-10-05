import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config()

export const dbConn = await mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	connectionLimit: process.env.DB_CONNECTION_LIMIT
});
