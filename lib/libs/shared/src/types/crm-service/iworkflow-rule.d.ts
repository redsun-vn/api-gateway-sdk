import { tags } from 'typia';
export declare namespace IWorkflowRuleSchema {
    type WorkflowTrigger = 'lead_created' | 'lead_qualified' | 'stage_changed' | 'opportunity_won' | 'opportunity_lost';
    type WorkflowAction = 'assign_owner' | 'create_task' | 'notify_owner' | 'notify_manager';
    type ConditionOp = 'AND' | 'OR' | 'NOT' | '==' | '!=' | '>' | '>=' | '<' | '<=' | 'in' | 'not_in' | 'field_set' | 'field_unset';
    interface IConditionAst {
        op: ConditionOp;
        field?: string;
        value?: unknown;
        children?: IConditionAst[];
    }
    interface IAssignOwnerParams {
        action: 'assign_owner';
        target_staff_id: string | null;
        strategy?: 'rule_target_staff' | 'lead_owner' | 'opportunity_owner';
    }
    interface ICreateTaskParams {
        action: 'create_task';
        subject: string & tags.MinLength<1> & tags.MaxLength<200>;
        body: string & tags.MaxLength<2000>;
        due_in_days?: number & tags.Type<'int32'> & tags.Minimum<0>;
        assignee_strategy: 'lead_owner' | 'opportunity_owner' | 'rule_target_staff';
        target_staff_id?: string;
    }
    interface INotifyOwnerParams {
        action: 'notify_owner';
        subject: string & tags.MinLength<1> & tags.MaxLength<200>;
        body: string & tags.MaxLength<2000>;
    }
    interface INotifyManagerParams {
        action: 'notify_manager';
        subject: string & tags.MinLength<1> & tags.MaxLength<200>;
        body: string & tags.MaxLength<2000>;
    }
    type WorkflowActionParams = IAssignOwnerParams | ICreateTaskParams | INotifyOwnerParams | INotifyManagerParams;
    interface IWorkflowRule {
        name?: string;
        trigger: WorkflowTrigger;
        condition: IConditionAst;
        action_params: WorkflowActionParams;
        order_index: number & tags.Type<'int32'>;
        active: boolean;
    }
    interface IWorkflowRulesCustomizations {
        workflow_rules?: IWorkflowRule[];
    }
}
