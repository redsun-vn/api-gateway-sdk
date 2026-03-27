import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { AdminCCompanySize, AdminCustomerCompanyStatus } from '../../enum/admin-service/customer-company';
export declare namespace IAdminCustomerCompanyShop {
    interface IResponse extends BaseResponse {
        shopId?: number | null;
        customerCompanyId?: number | null;
    }
}
export declare namespace IAdminCustomerCompany {
    interface ICreate {
        name: string;
        email?: (string & tags.Format<'email'>) | null;
        phone?: string | null;
        website?: string | null;
        address?: string | null;
        logo?: string | null;
        description?: string | null;
        industry?: string | null;
        taxCode?: string | null;
        status?: AdminCustomerCompanyStatus | null;
        planType?: string | null;
        companySize?: AdminCCompanySize | null;
        userLimit?: number | null;
        contactName?: string | null;
        contactEmail?: (string & tags.Format<'email'>) | null;
        contactPhone?: string | null;
        contactPosition?: string | null;
        customerId: number;
        shopIds?: number[] | null;
        companyId?: string;
    }
    interface IUpdate extends Partial<ICreate> {
    }
    interface IResponse extends BaseResponse {
        name?: string | null;
        email?: string | null;
        phone?: string | null;
        website?: string | null;
        address?: string | null;
        logo?: string | null;
        description?: string | null;
        industry?: string | null;
        taxCode?: string | null;
        status?: AdminCustomerCompanyStatus | null;
        planType?: string | null;
        companySize?: AdminCCompanySize | null;
        userLimit?: number | string | null;
        contactName?: string | null;
        contactEmail?: string | null;
        contactPhone?: string | null;
        contactPosition?: string | null;
        customerId?: number | string | null;
        shops?: IAdminCustomerCompanyShop.IResponse[] | null;
    }
}
