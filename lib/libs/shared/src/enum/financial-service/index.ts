export * from './debt';
export * from './invoice';

export enum CARD_TYPE {
	PAYMENT = 'payment', // chi
	RECEIPT = 'receipt', // thu
}

export enum PAYMENT_CARD_STATUS {
	UNPAID = 'unpaid',
	PAID = 'paid',
}
