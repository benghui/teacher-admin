import express from "express";
import dotenv from "dotenv";
import routes from "./routes/routes.js";
import { sequelize } from "./config/db.config.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

try {
	await sequelize.authenticate();
	console.log('Connection has been established successfully.');
} catch (error) {
	console.error('Unable to connect to the database:', error);
}

app.listen(port, () => console.log(`AHOY listening on PORT ${port}`));
