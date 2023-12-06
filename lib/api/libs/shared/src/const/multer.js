"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerOptionsAPIGateway = void 0;
const utils_1 = require("../utils");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const errors_1 = require("./errors");
exports.multerOptionsAPIGateway = {
    limits: {
        fileSize: utils_1.IMAGE_MAX_FILE_SIZE,
    },
    fileFilter: async (req, file, cb) => {
        if (utils_1.IMAGE_MIME_TYPES.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            throw new common_1.BadRequestException({
                message: `Unsupported file type ${(0, path_1.extname)(file.originalname)}`,
                errorCode: errors_1.ERRORS_DICTIONARY.FILE_UNSUPPORTED_FILE_MIMETYPE_EXCEPTION,
            });
        }
    },
};
//# sourceMappingURL=multer.js.map