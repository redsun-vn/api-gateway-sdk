"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilteringParams = void 0;
const common_1 = require("@nestjs/common");
const const_1 = require("../const");
exports.FilteringParams = (0, common_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    const filter = req.query.filter;
    if (!filter)
        return null;
    if (typeof data != 'object')
        throw new common_1.BadRequestException({
            message: 'Invalid filter parameter',
            errorCode: const_1.ERRORS_DICTIONARY.FILTERS_PARAMS_INVALID_EXCEPTION,
        });
    if (!filter.match(/.*^[a-zA-Z0-9_]+:(eq|neq|gt|gte|lt|lte|like|nlike|in|nin):[a-zA-Z0-9_,]+.*$/) &&
        !filter.match(/^[a-zA-Z0-9_]+:(isnull|isnotnull)$/)) {
        throw new common_1.BadRequestException({
            message: 'Invalid filter parameter',
            errorCode: const_1.ERRORS_DICTIONARY.FILTERS_PARAMS_INVALID_EXCEPTION,
        });
    }
    const [property, rule, value] = filter.split(':');
    if (!data.includes(property))
        throw new common_1.BadRequestException(`Invalid filter property: ${property}`);
    if (!Object.values(const_1.FilterRule).includes(rule))
        throw new common_1.BadRequestException({
            message: `Invalid filter rule: ${rule}`,
            errorCode: const_1.ERRORS_DICTIONARY.FILTERS_PARAMS_INVALID_EXCEPTION,
        });
    return { property, rule, value };
});
//# sourceMappingURL=filtering.parms.decorator.js.map