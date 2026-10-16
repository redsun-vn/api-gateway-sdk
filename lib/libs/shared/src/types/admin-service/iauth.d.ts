import { tags } from 'typia';
import { IAdminUser } from './iuser';
import { CREATE_SHOP_FROM_SOURCE_ENUM } from '../../enum';
export declare namespace IAdminAuth {
    interface ILogin {
        email: string & tags.Format<'email'>;
        password: string;
    }
    interface IRefreshToken {
        refreshToken: string;
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
        refreshToken: string;
        refreshTokenExpiresIn: number | string;
    }
    interface ICreateCustomerAccount {
        source: CREATE_SHOP_FROM_SOURCE_ENUM;
        phone?: string | null;
        email?: (string & tags.Format<'email'>) | null;
        user_id?: string | null;
    }
    interface ICreateCustomerAccountResponse {
        user_id: string;
        created: boolean;
    }
}
