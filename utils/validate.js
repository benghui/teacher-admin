import Joi from "joi";

export const registerValidation = Joi.object().keys({
	teacher: Joi.string()
		.pattern(/[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+/)
		.required(),
	students: Joi.array()
		.items(
			Joi.string()
				.pattern(/[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+/)
				.required()
		)
})

export const suspendValidation = Joi.object().keys({
	student: Joi.string()
		.pattern(/[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+/)
		.required()
})

export const notificationValidation = Joi.object().keys({
	teacher: Joi.string()
		.pattern(/[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+/)
		.required(),
	notification: Joi.string().required()
})
