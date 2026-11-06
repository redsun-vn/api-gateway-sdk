import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import type { IAdsCommon } from "../../../../../../../libs/shared/src/types/ads-service/iads-common";
import type { ISocialPost } from "../../../../../../../libs/shared/src/types/ads-service/isocial-post";
import type { IResponse } from "../../../../../../../libs/shared/src/types/common.type";
export declare function notes(connection: IConnection, id: IAdsCommon.Id): Promise<notes.Output>;
export declare namespace notes {
    type Output = Primitive<IResponse<Array<ISocialPost.INoteView>>>;
    const METADATA: {
        readonly method: "GET";
        readonly path: "/shop/mkt-os/social/posts/:id/notes";
        readonly request: null;
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 200;
    };
    const path: (id: IAdsCommon.Id) => string;
}
export declare function addNote(connection: IConnection, id: IAdsCommon.Id, body: addNote.Input): Promise<addNote.Output>;
export declare namespace addNote {
    type Input = Resolved<ISocialPost.INoteAdd>;
    type Output = Primitive<IResponse<ISocialPost.INoteView>>;
    const METADATA: {
        readonly method: "POST";
        readonly path: "/shop/mkt-os/social/posts/:id/notes";
        readonly request: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly response: {
            readonly type: "application/json";
            readonly encrypted: false;
        };
        readonly status: 201;
    };
    const path: (id: IAdsCommon.Id) => string;
}
