import { BadRequestException } from '@nestjs/common';
import { ERRORS_DICTIONARY } from '../const';

interface ErrorData {
	errorCode?: string;
}

/**
 * Parse error data and throw BadRequestException
 * @param error
 * @returns BadRequestException
 */
export const parseErrorException = (error: any): BadRequestException => {
	try {
		const parsedError = JSON.parse(error.error.message);
		const errorData: ErrorData = parsedError.error_data || {};

		return new BadRequestException({
			message: error?.message || 'An error occurred',
			errorCode:
				errorData.errorCode || ERRORS_DICTIONARY.GENERIC_ARGUMENT_INVALID,
		});
	} catch (e) {
		return new BadRequestException({
			message: 'Invalid error format',
			errorCode: ERRORS_DICTIONARY.GENERIC_ARGUMENT_INVALID,
		});
	}
};
