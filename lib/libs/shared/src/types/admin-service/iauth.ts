/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';
import { IAdminUser } from './iuser';

export namespace IAdminAuth {
	export interface ILogin {
		email: string & tags.Format<'email'>;
		password: string;
	}
	export interface IRefreshToken {
		refreshToken: string;
	}
	export interface ITokenPayload {
		userId: string;
		email: string;
		permissions: string[];
	}
	export interface ILoginResponse {
		accessToken: string;
		expiresIn: number | string;
		tokenType: string;
		user: IAdminUser.IResponseWithoutSecret;
		permissions: string[];
		refreshToken: string;
		refreshTokenExpiresIn: number | string;
	}
}
