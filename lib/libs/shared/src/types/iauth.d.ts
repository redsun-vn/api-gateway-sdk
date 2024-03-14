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
        branch_id: number & tags.Type<'uint32'>;
    }
    interface ILoginResponse {
        accessToken: string;
        refreshToken: string;
        expiresIn: number & tags.Type<'uint32'>;
        refreshExpiresIn: number & tags.Type<'uint32'>;
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
}
