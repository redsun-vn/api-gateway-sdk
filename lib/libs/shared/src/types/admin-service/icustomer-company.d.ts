import { tags } from 'typia';
import { BaseResponse } from '../common.type';
import { AdminCCompanySize, AdminCustomerCompanyStatus } from '../../enum/admin-service/customer-company';
import { IStaff } from '../istaff';
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
        customerId?: number;
        shopIds?: number[] | null;
        companyId?: string;
        customerType?: string;
        startDate?: string;
        city?: string;
        ward?: string;
        interestedProduct?: string | null;
        interestLevel?: string;
        estimatedBudget?: string;
        leadSource?: string;
        funnelStatus?: string;
        assignedStaffId?: string;
        isSendEmailCongratulation?: boolean;
        enableNotiPay?: boolean;
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
        customerType?: string | null;
        startDate?: string | null;
        shops?: IAdminCustomerCompanyShop.IResponse[] | null;
        city?: string | null;
        ward?: string | null;
        interestedProduct?: string | null;
        interestLevel?: string | null;
        estimatedBudget?: string | null;
        leadSource?: string | null;
        funnelStatus?: string | null;
        assignedStaffId?: string | null;
        assignedStaff?: IStaff.IStaffResponse | null;
        isSendEmailCongratulation?: boolean;
        enableNotiPay?: boolean;
    }
}
