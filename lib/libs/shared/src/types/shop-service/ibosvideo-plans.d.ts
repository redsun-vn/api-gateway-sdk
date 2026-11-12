export declare namespace IBosvideoPlans {
    interface ICycle {
        packageId: number;
        packageAdditionId: number;
        months: number;
        listPrice: number;
        price: number;
        isTrial: boolean;
        isDefault: boolean;
        trialDays?: number;
        bonus?: ICycleBonus;
    }
    interface ICycleBonus {
        value: number;
        unit: 'day' | 'month' | 'year';
    }
    interface IFeature {
        id: string;
        name: string;
        description: string;
    }
    interface IPlan {
        packageId: number;
        code: string;
        mainCode: string;
        name: string;
        description: string;
        highlight: boolean;
        creditAi: number;
        limitUser: number | null;
        limitBranch: number | null;
        features: IFeature[];
        isFree: boolean;
        cycles: ICycle[];
    }
}
