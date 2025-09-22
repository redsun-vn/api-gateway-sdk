/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';

export namespace IAuth {
	export interface ILogin {
		shopId?: string;
		username: string & tags.MinLength<3> & tags.MaxLength<50>;
		password: string;
		deviceId: string;
		deviceInfo: string;
		ip?: string;
	}

	export interface IValidPassword {
		shopId: string;
		username: string & tags.MinLength<3> & tags.MaxLength<50>;
		password: string;
	}
	export interface ICreateUser {
		username: string & tags.MinLength<3> & tags.MaxLength<50>;
		password: string & tags.MinLength<6>;
		deviceId: string;
		deviceInfo: string;
		branch_id: number & tags.Type<'uint64'>;
	}
	export interface ILoginResponse {
		accessToken: string;
		refreshToken: string;
		expiresIn: number & tags.Type<'uint64'>;
		refreshExpiresIn: number & tags.Type<'uint64'>;
		tokenType: string;
		scope: string;
		sessionState: string;
		notBeforePolicy: number;
		idToken?: string;
		user?: unknown;
		role?: unknown;
		permissions?: string[];
	}
	export interface IRefreshToken {
		refresh_token: string;
	}
	export interface IOTPSMS {
		// shop_id: string;
		phone: string;
	}
	export interface IOTPEmail {
		// shop_id: string;
		email: string & tags.Format<'email'>;
	}
	export interface IResetPassword {
		// shop_id?: string;
		user_id: string & tags.Format<'uuid'>;
		type: 'phone' | 'email';
		payload: string;
		otp: string;
		password: string;
		confirmPassword: string;
	}
	export interface IOTPResponse {
		// shop_id: string;
		user_id: string & tags.Format<'uuid'>;
		otp?: string;
	}
	export interface IRegisterTemporaryResponse {
		verification_id: string & tags.Format<'uuid'>;
		otp?: string;
	}
	export interface IRegisterTemporaryRequest {
		verification_id: string & tags.Format<'uuid'>;
		otp: string;
		password: string & tags.MinLength<6>;
		confirm_password: string & tags.MinLength<6>;
		phone: string;
		first_name?: null | string;
	}
}
