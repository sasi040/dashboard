import { Execution } from './execution';

export interface ApplicationDetails{
    "id": number,
    "name": String,
    "environment": String,
    "applicationUrl": String,
    "latestExecution": Execution,
    "executions": Execution[];
}