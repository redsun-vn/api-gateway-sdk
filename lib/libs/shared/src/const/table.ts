export const RESERVATION_TABLE_IMPORT_HEADER = [
	'Tên bàn',
	'Chi nhánh',
	'Khu vực',
	'Số lượng người lớn',
	'Số lượng trẻ em',
	'Ghi chú',
];

export const RESERVATION_TABLE_HEADER_MAPPING_KEY: { [key: string]: string } = {
	'Tên bàn': 'name',
	'Chi nhánh': 'branchName',
	'Khu vực': 'floorPlanName',
	'Số lượng người lớn': 'maxAdult',
	'Số lượng trẻ em': 'maxChild',
	'Ghi chú': 'description',
};
