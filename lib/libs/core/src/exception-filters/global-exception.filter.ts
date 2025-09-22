import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException,
	HttpStatus,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import {
	ERRORS_DICTIONARY,
	IPNVNPayQRCodeException,
	IPNVNPayWebException,
	VNPAYQRCodeIpnWrongAuthentication,
} from '@shared';
import { IpnFailChecksum as IpnFailChecksumVNPayWeb } from '@redsun-vn/vnpay';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
	constructor(private readonly config_service: ConfigService) {}
	catch(exception: any, host: ArgumentsHost) {
		// console.log({ exception });
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();

		let status =
			exception instanceof HttpException ? exception.getStatus() : 500;
		const message =
			exception instanceof HttpException
				? exception.message
				: 'Internal server error';

		let errorCode: string = ERRORS_DICTIONARY.GENERIC_UNKNOWN;
		if (exception?.response?.errorCode) {
			errorCode = exception?.response?.errorCode;
		} else {
			if (status !== 401 && exception?.response?.path) {
				errorCode = ERRORS_DICTIONARY.VALIDATION_INVALID_TYPE;
			}
		}

		let dataException: any = {
			statusCode: exception?.response?.statusCode | status,
			message,
			errorCode:
				status !== 401
					? errorCode
					: ERRORS_DICTIONARY.AUTH_UNAUTHORIZED_EXCEPTION,
			error:
				this.config_service.get('NODE_ENV') !== 'production'
					? {
							response: exception.response,
							stack: exception.stack,
					  }
					: null,
		};

		if (exception instanceof IPNVNPayQRCodeException) {
			status = HttpStatus.OK;
			dataException = {
				...VNPAYQRCodeIpnWrongAuthentication,
				message: 'API key is missing or invalid for the environment',
			};
		}

		if (exception instanceof IPNVNPayWebException) {
			status = HttpStatus.OK;
			dataException = {
				...IpnFailChecksumVNPayWeb,
				Message: 'API key is missing or invalid for the environment',
			};
		}

		console.log('global exception', exception);

		response.status(status).json({ ...dataException });
	}
}
