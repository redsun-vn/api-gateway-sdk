import { Global, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LarkSuitAlert } from '@redsun-vn/bot-alert';
import { parseErrorException } from '../utils';

@Global()
@Injectable()
export class BotAlertMessage {
	private larkSuit: LarkSuitAlert;
	constructor(private readonly configService: ConfigService) {
		this.larkSuit = new LarkSuitAlert({
			webHookUrl: this.configService.get('LARK_SUIT_WEBHOOK_URL') as string,
			secretKey: this.configService.get('LARK_SUIT_API_TOKEN') as string,
		});
	}

	public async sendMessage(
		serviceName: string,
		message: string,
		topic?: string | null,
	) {
		return this.larkSuit.sendMessage(serviceName, message, topic);
	}

	public async sendAndThrowError(
		error: any,
		serviceName: string,
		topic?: string | null,
	) {
		await this.larkSuit.sendMessageError(
			serviceName,
			error?.message || '',
			topic,
		);
		throw parseErrorException(error);
	}
}
