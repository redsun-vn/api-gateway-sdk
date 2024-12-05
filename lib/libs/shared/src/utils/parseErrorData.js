"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseErrorException = void 0;
const common_1 = require("@nestjs/common");
const const_1 = require("../const");
const parseErrorException = (error) => {
    try {
        const parsedError = JSON.parse(error.error.message);
        const errorData = parsedError.error_data || {};
        return new common_1.BadRequestException({
            message: error?.message || 'An error occurred',
            errorCode: errorData.errorCode || const_1.ERRORS_DICTIONARY.GENERIC_ARGUMENT_INVALID,
        });
    }
    catch (e) {
        return new common_1.BadRequestException({
            message: 'Invalid error format',
            errorCode: const_1.ERRORS_DICTIONARY.GENERIC_ARGUMENT_INVALID,
        });
    }
};
exports.parseErrorException = parseErrorException;
//# sourceMappingURL=parseErrorData.js.map