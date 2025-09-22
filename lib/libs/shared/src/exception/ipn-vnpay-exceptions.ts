import { BadRequestException } from '@nestjs/common';

export class IPNVNPayQRCodeException extends BadRequestException {
	constructor() {
		super('The api key was invalid');
	}
}

export class IPNVNPayWebException extends BadRequestException {
	constructor() {
		super('The api key was invalid');
	}
}
