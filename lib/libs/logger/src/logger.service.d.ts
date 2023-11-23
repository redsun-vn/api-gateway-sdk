import { ConsoleLogger } from '@nestjs/common';
export declare class LoggerService extends ConsoleLogger {
    private readonly _environment;
    constructor();
    error(message: string, trace: string): void;
    warn(message: string): void;
    debug(message: string): void;
    verbose(message: string): void;
}
