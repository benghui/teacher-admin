import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config()

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DIALECT, DB_DATABASE } = process.env

export const sequelize = new Sequelize(
	DB_DATABASE,
	DB_USERNAME,
	DB_PASSWORD,
	{
		host: DB_HOST,
		dialect: DB_DIALECT,
	}
);
