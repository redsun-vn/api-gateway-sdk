import { v4 as uuidv4 } from 'uuid';

export const createConsumerGroupId = (id: string): string => {
	return `api-gateway-${id}`;
};

export const createClientId = (id: string): string => {
	const uuid = uuidv4();
	return `${id}-${uuid}`;
};
