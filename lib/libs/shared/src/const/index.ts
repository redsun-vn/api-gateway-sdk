export * from './errors';
export * from './file.status';
export * from './multer';
export * from './filter.rule';
export * from './product.state';
export * from './elastic-index';
export * from './order';
export * from './report';
export * from './partner';
export * from './hr';
export * from './table';
export * from './regex';
export * from './team';

export const UNIT_TIME = ['day', 'week', 'month', 'quarter', 'year'];
export const SHIPPING_PROVIDER_CONFIG_KEY = {
	GHN: ['shopId', 'token'],
	GHTK: ['token'],
};

export const PAGINATE_LIMIT_NUMBER = 200;
export const MOMENT_VN_TIMEZONE = 'Asia/Ho_Chi_Minh';
export const DOMAIN_HEADER_KEY = 'sipos-x-domain';
