import Joi from "joi";

export const registerValidation = Joi.object().keys({
	teacher: Joi.string()
		.email()
		.required(),
	students: Joi.array()
		.items(
			Joi.string()
				.email()
				.required()
		)
})

export const suspendValidation = Joi.object().keys({
	student: Joi.string()
		.email()
		.required()
})

export const notificationValidation = Joi.object().keys({
	teacher: Joi.string()
		.email()
		.required(),
	notification: Joi.string()
		.required()
})
