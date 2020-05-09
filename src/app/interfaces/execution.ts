export interface Execution {
        "id" : number,
        "name": String,
        "environment" : String,
        "browserType" : String,
        "operatingSystem" : String,
        "systemName" : String,
        "executedBy" : String,
        "startTime" : Date,
        "endTime" : Date,
        "totalSuites" : number,
        "totalCases" : number,
        "finishedSuites" : number,
        "executedCases" : number,
        "failedCases": number,
        "status" : String
}