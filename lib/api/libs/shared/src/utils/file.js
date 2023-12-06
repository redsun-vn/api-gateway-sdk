"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileCanUpload = exports.padNumber = exports.hashString = exports.isNumber = exports.generateFullUploadPathByType = exports.generateUploadFilePath = exports.generateUploadPath = exports.generateFullUploadPath = exports.generateFilename = exports.randomString = exports.formatDate = exports.IMAGE_MAX_FILE_SIZE = exports.UPLOADS_PATH = exports.UPLOADS_FOLDER = exports.PUBLIC_FOLDER = exports.IMAGE_MIME_TYPES = void 0;
const crypto = __importStar(require("crypto"));
const path_1 = require("path");
const file_type_checker_1 = require("file-type-checker");
exports.IMAGE_MIME_TYPES = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp',
    'image/gif',
    'text/csv',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/vnd.microsoft.icon',
    'application/json',
    'application/pdf',
    'image/svg+xml',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];
exports.PUBLIC_FOLDER = 'public';
exports.UPLOADS_FOLDER = 'uploads';
exports.UPLOADS_PATH = `${exports.PUBLIC_FOLDER}/${exports.UPLOADS_FOLDER}/`;
exports.IMAGE_MAX_FILE_SIZE = 5000000;
const formatDate = () => {
    const d = new Date();
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join('/');
};
exports.formatDate = formatDate;
const randomString = (size = 16) => {
    return crypto.randomBytes(size).toString('hex');
};
exports.randomString = randomString;
const generateFilename = (file) => {
    return `${Date.now()}-${String((0, exports.randomString)()).toLowerCase()}${(0, path_1.extname)(file.originalname)}`;
};
exports.generateFilename = generateFilename;
const generateFullUploadPath = () => {
    return `${exports.UPLOADS_PATH}${(0, exports.formatDate)()}`;
};
exports.generateFullUploadPath = generateFullUploadPath;
const generateUploadPath = () => {
    return `${exports.UPLOADS_FOLDER}/${(0, exports.formatDate)()}`;
};
exports.generateUploadPath = generateUploadPath;
const generateUploadFilePath = (file) => {
    return `${(0, exports.generateUploadPath)()}${(0, exports.generateFilename)(file)}`;
};
exports.generateUploadFilePath = generateUploadFilePath;
const generateFullUploadPathByType = () => {
    return `${exports.UPLOADS_PATH}/${(0, exports.formatDate)()}`;
};
exports.generateFullUploadPathByType = generateFullUploadPathByType;
const isNumber = (str) => {
    if (typeof str !== 'string') {
        return false;
    }
    if (str.trim() === '') {
        return false;
    }
    return !Number.isNaN(Number(str));
};
exports.isNumber = isNumber;
const hashString = (string) => {
    const hmac = crypto.createHmac('sha256', (0, exports.randomString)());
    return hmac.update(string).digest('hex');
};
exports.hashString = hashString;
const padNumber = (number, padding = 6) => {
    return String(number).padStart(padding, '0');
};
exports.padNumber = padNumber;
const fileCanUpload = (fileBuffer) => {
    const detectedFile = (0, file_type_checker_1.detectFile)(fileBuffer);
    if (detectedFile?.mimeType &&
        exports.IMAGE_MIME_TYPES.includes(detectedFile?.mimeType)) {
        return true;
    }
    return false;
};
exports.fileCanUpload = fileCanUpload;
//# sourceMappingURL=file.js.map