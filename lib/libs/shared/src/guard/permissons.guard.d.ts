import { CanActivate, ExecutionContext, OnModuleInit } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ClientKafka } from '@nestjs/microservices';
import { LoggerService } from '@logger';
export declare class HasPermissionGuard implements CanActivate, OnModuleInit {
    private reflector;
    private readonly shopClient;
    private readonly _logger;
    constructor(reflector: Reflector, shopClient: ClientKafka, _logger: LoggerService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    onModuleInit(): Promise<void>;
}
