import { NoteCategory, NotePriority, NoteStatus } from '../../enum/reservation-note.enum';
import { BaseResponse } from '../common.type';
export declare namespace ITableNote {
    interface ICreate {
        shop_id?: number;
        branch_id: number;
        table_id?: number;
        staff_id?: number;
        category?: NoteCategory;
        priority?: NotePriority;
        content: string;
    }
    type IUpdate = Partial<Omit<ICreate, 'shop_id' | 'branch_id' | 'table_id'>>;
    interface IUpdateStatus {
        status: NoteStatus;
        resolved_by?: number;
    }
    interface IFilter {
        category?: NoteCategory;
        priority?: NotePriority;
        status?: NoteStatus;
        page?: number;
        limit?: number;
    }
    interface ITableNoteResponse extends BaseResponse {
        shop_id: number;
        branch_id: number;
        table_id: number;
        staff_id: number;
        category: NoteCategory;
        priority: NotePriority;
        status: NoteStatus;
        content: string;
        resolved_by: number | null;
        resolved_at: string | null;
    }
}
