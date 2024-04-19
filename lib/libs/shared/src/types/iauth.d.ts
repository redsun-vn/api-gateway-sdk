import { tags } from 'typia';
export declare namespace IAuth {
    interface ILogin {
        shopId: string;
        username: string & tags.MinLength<3> & tags.MaxLength<50>;
        password: string;
        deviceId: string;
        deviceInfo: string;
    }
    interface ICreateUser {
        username: string & tags.MinLength<3> & tags.MaxLength<50>;
        password: string & tags.MinLength<3>;
        deviceId: string;
        deviceInfo: string;
        branch_id: number & tags.Type<'uint64'>;
    }
    interface ILoginResponse {
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
    interface IRefreshToken {
        refresh_token: string;
    }
    interface IOTPSMS {
        shop_id: string;
        phone: string & tags.Pattern<'^(0[0-9]{2})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$'>;
    }
    interface IOTPEmail {
        shop_id: string;
        email: string & tags.Format<'email'>;
    }
    interface IResetPassword {
        shop_id: string;
        user_id: string & tags.Format<'uuid'>;
        type: 'phone' | 'email';
        payload: string;
        otp: string;
        password: string;
        confirmPassword: string;
    }
    interface IOTPResponse {
        shop_id: string;
        user_id: string & tags.Format<'uuid'>;
    }
}
