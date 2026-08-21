"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PARTNER_HEADER_MAPPING_KEY = exports.typePartnerList = exports.identityTypeExportMapping = exports.typePartnerMapping = exports.typeAddressMapping = exports.genderMapping = exports.SUPLLIER_IMPORT_HEADER = exports.PARTNER_IMPORT_HEADER = exports.PARTNER_ADDRESSE_HEADER = void 0;
exports.PARTNER_ADDRESSE_HEADER = [
    'Loại địa chỉ',
    'Số điện thoại',
    'Địa chỉ',
    'Tỉnh/Thành phố',
    'Quận/Huyện',
    'Phường/Xã',
    'Mô tả địa chỉ',
];
exports.PARTNER_IMPORT_HEADER = [
    'Mã khách hàng',
    'Tên khách hàng',
    'Chi nhánh',
    'Giới tính',
    'Ngày sinh',
    'Loại khách hàng',
    'Email',
    'Mã số thuế',
    'Website',
    'Công ty',
    'Mô tả',
    'Loại giấy tờ',
    'Số giấy tờ',
    'Quốc tịch',
    'Nhóm khách hàng',
    'Nhân viên phụ trách',
];
exports.SUPLLIER_IMPORT_HEADER = [
    'Mã nhà cung cấp',
    'Tên nhà cung cấp',
    'Chi nhánh',
    'Loại khách hàng',
    'Email',
    'Mã số thuế',
    'Website',
    'Công ty',
    'Mô tả',
    'Loại giấy tờ',
    'Số giấy tờ',
    'Quốc tịch',
    'Nhóm khách hàng',
    'Nhân viên phụ trách',
];
exports.genderMapping = {
    0: 'Nữ',
    1: 'Nam',
};
exports.typeAddressMapping = {
    contact: 'Liên hệ',
    delivery: 'Giao hàng',
    private: 'Cá nhân',
    invoice: 'Thanh toán',
    other: 'Khác',
};
exports.typePartnerMapping = {
    is_customer: 'Cá nhân',
    is_company: 'Công ty',
};
exports.identityTypeExportMapping = {
    cmnd: 'CMND',
    cccd: 'CCCD',
    passport: 'Hộ chiếu',
    other: 'Khác',
};
exports.typePartnerList = [
    'is_employee',
    'is_company',
    'is_customer',
    'is_supplier',
];
exports.PARTNER_HEADER_MAPPING_KEY = {
    'Mã khách hàng': 'code',
    'Mã nhà cung cấp': 'code',
    'Tên khách hàng': 'display_name',
    'Tên nhà cung cấp': 'display_name',
    'Chi nhánh': 'branchName',
    'Giới tính': 'genderMapping',
    'Ngày sinh': 'dayBirth',
    'Loại khách hàng': 'typePartner',
    Email: 'email',
    'Mã số thuế': 'tax_code',
    Website: 'website',
    'Công ty': 'company_name',
    'Mô tả': 'note',
    'Loại giấy tờ': 'identityTypeLabel',
    'Số giấy tờ': 'identity_number',
    'Quốc tịch': 'nationality',
    'Nhóm khách hàng': 'partnerCategoryNames',
    'Nhân viên phụ trách': 'ownerName',
    'Loại địa chỉ': 'typeAddress',
    'Số điện thoại': 'phone',
    'Địa chỉ': 'address1',
    'Tỉnh/Thành phố': 'province',
    'Quận/Huyện': 'district',
    'Phường/Xã': 'ward',
    'Mô tả địa chỉ': 'addressNote',
};
//# sourceMappingURL=partner.js.map