export declare namespace IConversationCannedReply {
    interface IItem {
        id: number | string;
        title: string;
        body: string;
        created_by: number | string | null;
        created_at: Date | string;
        updated_at: Date | string;
    }
    interface IListQuery {
        search?: string;
        page?: number;
        limit?: number;
    }
    interface IListResponse {
        items: IItem[];
        total: number;
    }
    interface ICreateBody {
        title: string;
        body: string;
    }
    interface IUpdateBody {
        title?: string;
        body?: string;
    }
    interface IDetailResponse {
        item: IItem;
    }
    interface IDeleteResponse {
        id: number | string;
        deleted: boolean;
    }
}
