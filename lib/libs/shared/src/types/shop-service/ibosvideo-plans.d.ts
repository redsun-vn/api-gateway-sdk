export declare namespace IBosvideoPlans {
    interface ICycle {
        packageId: number;
        packageAdditionId: number;
        months: number;
        listPrice: number;
        price: number;
        isTrial: boolean;
        trialDays?: number;
    }
    interface IPlan {
        code: string;
        name: string;
        description: string;
        highlight: boolean;
        creditAi: number;
        cycles: ICycle[];
    }
}
