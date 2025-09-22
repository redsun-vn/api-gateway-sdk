export const PARTNER_ADDRESSE_HEADER = [
	'Loại địa chỉ',
	'Số điện thoại',
	'Địa chỉ',
	'Tỉnh/Thành phố',
	'Quận/Huyện',
	'Phường/Xã',
	'Mô tả địa chỉ',
];
export const PARTNER_IMPORT_HEADER = [
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
];

export const SUPLLIER_IMPORT_HEADER = [
	'Mã nhà cung cấp',
	'Tên nhà cung cấp',
	'Chi nhánh',
	'Email',
	'Mã số thuế',
	'Website',
	'Công ty',
	'Mô tả',
];

export const genderMapping = {
	0: 'Nữ',
	1: 'Nam',
};

export const typeAddressMapping = {
	contact: 'Liên hệ',
	delivery: 'Giao hàng',
	private: 'Cá nhân',
	invoice: 'Thanh toán',
	other: 'Khác',
};

export const typePartnerMapping = {
	is_customer: 'Cá nhân',
	is_company: 'Công ty',
};

export const typePartnerList = [
	'is_employee',
	'is_company',
	'is_customer',
	'is_supplier',
];

export const PARTNER_HEADER_MAPPING_KEY: { [key: string]: string } = {
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
	'Loại địa chỉ': 'typeAddress',
	'Số điện thoại': 'phone',
	'Địa chỉ': 'address1',
	'Tỉnh/Thành phố': 'province',
	'Quận/Huyện': 'district',
	'Phường/Xã': 'ward',
	'Mô tả địa chỉ': 'addressNote',
};
