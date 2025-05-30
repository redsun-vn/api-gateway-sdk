import { tags } from 'typia';
export declare namespace IAuth {
    interface ILogin {
        shopId?: string;
        username: string & tags.MinLength<3> & tags.MaxLength<50>;
        password: string;
        deviceId: string;
        deviceInfo: string;
        ip?: string;
    }
    interface IValidPassword {
        shopId: string;
        username: string & tags.MinLength<3> & tags.MaxLength<50>;
        password: string;
    }
    interface ICreateUser {
        username: string & tags.MinLength<3> & tags.MaxLength<50>;
        password: string & tags.MinLength<6>;
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
        phone: string;
    }
    interface IOTPEmail {
        email: string & tags.Format<'email'>;
    }
    interface IResetPassword {
        user_id: string & tags.Format<'uuid'>;
        type: 'phone' | 'email';
        payload: string;
        otp: string;
        password: string;
        confirmPassword: string;
    }
    interface IOTPResponse {
        user_id: string & tags.Format<'uuid'>;
        otp?: string;
    }
    interface IRegisterTemporaryResponse {
        verification_id: string & tags.Format<'uuid'>;
        otp?: string;
    }
    interface IRegisterTemporaryRequest {
        verification_id: string & tags.Format<'uuid'>;
        otp: string;
        password: string & tags.MinLength<6>;
        confirm_password: string & tags.MinLength<6>;
        phone: string;
        first_name?: null | string;
    }
}
