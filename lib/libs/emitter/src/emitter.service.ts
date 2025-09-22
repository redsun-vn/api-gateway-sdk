import { BadRequestException, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ERRORS_DICTIONARY } from '@shared';

@Injectable()
export class EmitterService {
	constructor(private eventEmitter: EventEmitter2) {}
	public emit<T extends object>(topic: string, data: T) {
		try {
			this.eventEmitter.emit(topic, data);
		} catch (error) {
			throw new BadRequestException({
				message: `TOPIC: ${topic} CAN NOT EMIT EVENT`,
				errorCode: ERRORS_DICTIONARY.EMIT_EVENT_CREATE_INDEX_EXCEPTION,
			});
		}
	}
}
