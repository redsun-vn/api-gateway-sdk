import { tags } from 'typia';
export declare namespace IIdentity {
    interface ICreateUser {
        username: string & tags.MinLength<5>;
        password: string;
    }
    interface IResetPassword {
        id: string;
        password: string;
    }
    interface IUpdateUsername {
        username: string;
        id: string;
    }
}
