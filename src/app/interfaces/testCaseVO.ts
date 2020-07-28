/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { TestStepVO } from './testStepVO';


export interface TestCaseVO { 
    executedTestStepsCount?: number;
    executionEndTime?: Date;
    executionStartTime?: Date;
    executionStatus?: TestCaseVO.ExecutionStatusEnum;
    executionStatusValue?: string;
    failedTestStepsCount?: number;
    id?: number;
    name?: string;
    passedTestStepsCount?: number;
    testSteps?: Array<TestStepVO>;
    testStepsCountWithWarnings?: number;
    testSuiteId?: number;
    testSuiteName?: string;
    totalTestSteps?: number;
}
export namespace TestCaseVO {
    export type ExecutionStatusEnum = 'PROGRESS' | 'PASSED' | 'FAILED' | 'WARNING';
    export const ExecutionStatusEnum = {
        PROGRESS: 'PROGRESS' as ExecutionStatusEnum,
        PASSED: 'PASSED' as ExecutionStatusEnum,
        FAILED: 'FAILED' as ExecutionStatusEnum,
        WARNING: 'WARNING' as ExecutionStatusEnum
    };
}