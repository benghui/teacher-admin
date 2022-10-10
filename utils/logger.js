import { format, createLogger, transports } from "winston";

const { combine, timestamp, prettyPrint } = format;

export const logger = createLogger({
	level: "debug",
	format: combine(
		timestamp({
			format: "MMM-DD-YYYY HH:mm:ss",
		}),
		prettyPrint()
	),
	transports: [new transports.Console()],
});
