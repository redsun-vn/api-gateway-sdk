import { tags } from 'typia';
import { IAdminUser } from './iuser';
export declare namespace IAdminAuth {
    interface ILogin {
        email: string & tags.Format<'email'>;
        password: string;
    }
    interface ITokenPayload {
        userId: string;
        email: string;
        permissions: string[];
    }
    interface ILoginResponse {
        accessToken: string;
        expiresIn: number | string;
        tokenType: string;
        user: IAdminUser.IResponseWithoutSecret;
        permissions: string[];
    }
}
