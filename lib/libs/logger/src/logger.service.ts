import { ConsoleLogger, Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends ConsoleLogger {
	private readonly _environment: string;

	constructor() {
		super();
		this._environment = process.env.NODE_ENV || 'development';
	}

	public override error(message: string, trace: string): void {
		super.error(message, trace);
		if (this._environment === 'production') {
			// TODO - Persist error to database
		}
	}
	public override warn(message: string): void {
		super.warn(message);
		if (this._environment === 'production') {
			// TODO - Persist warn to database
		}
	}
	public override debug(message: string): void {
		super.debug(message);
		if (this._environment === 'production') {
			// TODO - Persist debug to database
		}
	}
	public override verbose(message: string): void {
		super.debug(message);
		if (this._environment === 'production') {
			// TODO - Persist verbose to database
		}
	}
}
