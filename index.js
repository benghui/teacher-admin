import express from "express";
import dotenv from "dotenv";
import routes from "./routes/routes.js";
import { sequelize } from "./config/db.config.js";
import {logger} from "./utils/logger.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

try {
	await sequelize.authenticate();
	logger.info('Connection has been established successfully.');
} catch (error) {
	logger.error('Unable to connect to the database:', error);
}

app.listen(port, () => logger.info(`AHOY listening on PORT ${port}`));
