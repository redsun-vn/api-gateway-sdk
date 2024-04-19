import { tags } from 'typia';
import { CustomDataType } from './common.type';
export declare namespace INotification {
    interface ISubscriber {
        firstName?: string;
        lastName?: string;
        email?: string;
        phone?: string;
        avatar?: string;
        locale?: string;
        data?: CustomDataType;
    }
    interface ICreateSubscriber {
        subscriberId: string & tags.Format<'uuid'>;
        data?: INotification.ISubscriber;
    }
    interface ICreateSubscriberResponse {
        subscriberId: string & tags.Format<'uuid'>;
        firstName?: string;
        lastName?: string;
        email?: string;
        phone?: string;
    }
    interface ITriggerPayloadOptions {
        workflowIdentifier: string;
        data: any;
    }
}
