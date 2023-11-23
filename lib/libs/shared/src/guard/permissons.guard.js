"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var HasPermissionGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasPermissionGuard = void 0;
const microservices_1 = require("@configs/microservices");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const microservices_2 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const const_1 = require("../const");
const decorator_1 = require("../decorator");
const topics_1 = require("@configs/topics");
const _logger_1 = require("@logger");
let HasPermissionGuard = HasPermissionGuard_1 = class HasPermissionGuard {
    constructor(reflector, shopClient, _logger) {
        this.reflector = reflector;
        this.shopClient = shopClient;
        this._logger = _logger;
        this._logger.setContext(HasPermissionGuard_1.name);
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user) {
            throw new common_1.BadRequestException({
                message: 'user not found',
                errorCode: const_1.ERRORS_DICTIONARY.AUTH_UNAUTHORIZED_EXCEPTION,
            });
        }
        const requiredPermission = this.reflector.getAllAndOverride(decorator_1.PERMISSION_KEY, [context.getHandler(), context.getClass()]);
        if (!requiredPermission) {
            return true;
        }
        try {
            const userId = user.sub;
            const res = await (0, rxjs_1.lastValueFrom)(this.shopClient.send(topics_1.SHOP_STAFF_CHECK_PERMISSION_TOPIC, JSON.stringify({ id: userId })));
            const permissionsUser = res.data;
            this._logger.log(`[ ${permissionsUser.toString()} ]`);
            if (permissionsUser.includes('manage')) {
                return true;
            }
            const valid = requiredPermission.some((pms) => permissionsUser.includes(pms));
            if (!valid) {
                throw new common_1.ForbiddenException({
                    message: 'Forbidden resource',
                    errorCode: const_1.ERRORS_DICTIONARY.AUTH_FORBIDDEN_EXCEPTION,
                });
            }
            return true;
        }
        catch (error) {
            this._logger.error(error?.message, error);
            throw new common_1.BadRequestException({
                message: error?.message,
                errorCode: error?.response?.errorCode ||
                    error?.errorCode ||
                    const_1.ERRORS_DICTIONARY.GENERIC_ARGUMENT_INVALID,
                statusCode: error?.status,
            });
        }
    }
    async onModuleInit() {
        this.shopClient.subscribeToResponseOf(topics_1.SHOP_STAFF_CHECK_PERMISSION_TOPIC);
        await this.shopClient.connect();
    }
};
exports.HasPermissionGuard = HasPermissionGuard;
exports.HasPermissionGuard = HasPermissionGuard = HasPermissionGuard_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(microservices_1.ESM_MICROSERVICES_NAME.shop.name)),
    __metadata("design:paramtypes", [core_1.Reflector,
        microservices_2.ClientKafka,
        _logger_1.LoggerService])
], HasPermissionGuard);
//# sourceMappingURL=permissons.guard.js.map