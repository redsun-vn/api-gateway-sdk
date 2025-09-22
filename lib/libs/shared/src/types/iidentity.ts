/* eslint-disable @typescript-eslint/no-namespace */
import { tags } from 'typia';

export namespace IIdentity {
	export interface ICreateUser {
		username: string & tags.MinLength<5>;
		password: string & tags.MinLength<6>;
	}
	export interface IResetPassword {
		id: string;
		password: string;
	}

	export interface IUpdateUsername {
		username: string;
		id: string;
	}
}
