"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortingParams = void 0;
const common_1 = require("@nestjs/common");
const const_1 = require("../const");
exports.SortingParams = (0, common_1.createParamDecorator)((validParams, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    let sort = req.query.sort;
    if (!sort) {
        sort = 'createdAt:desc';
        const [property, direction] = sort.split(':');
        return { property, direction };
    }
    if (typeof validParams != 'object')
        throw new common_1.BadRequestException({
            message: 'Invalid sort parameter',
            errorCode: const_1.ERRORS_DICTIONARY.SORTING_PARAMS_INVALID_EXCEPTION,
        });
    const sortPattern = /^([a-zA-Z0-9]+):(asc|desc)$/;
    if (!sort.match(sortPattern))
        throw new common_1.BadRequestException({
            message: 'Invalid sort parameter',
            errorCode: const_1.ERRORS_DICTIONARY.SORTING_PARAMS_INVALID_EXCEPTION,
        });
    const [property, direction] = sort.split(':');
    if (!validParams.includes(property))
        throw new common_1.BadRequestException({
            message: `Invalid sort property: ${property}`,
            errorCode: const_1.ERRORS_DICTIONARY.SORTING_PARAMS_INVALID_EXCEPTION,
        });
    return { property, direction };
});
//# sourceMappingURL=sorting.params.decorator.js.map