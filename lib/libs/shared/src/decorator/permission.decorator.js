"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasPermission = exports.PERMISSION_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.PERMISSION_KEY = 'permissions';
const HasPermission = (...permissions) => {
    return (0, common_1.SetMetadata)(exports.PERMISSION_KEY, permissions);
};
exports.HasPermission = HasPermission;
//# sourceMappingURL=permission.decorator.js.map