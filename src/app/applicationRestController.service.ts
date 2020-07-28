import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationVO } from './interfaces/ApplicationVO';
import { Configuration } from './configuration';


@Injectable({
    providedIn: 'root'
})
export class ApplicationRestControllerService {

    protected basePath = 'http://localhost:4200';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient) {
        // if (basePath) {
        //     this.basePath = basePath;
        // }
        // if (configuration) {
        //     this.configuration = configuration;
        //     this.basePath = basePath || configuration.basePath || this.basePath;
        // }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * create
     * 
     * @param applicationVO applicationVO
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createUsingPOST(applicationVO: ApplicationVO, observe?: 'body', reportProgress?: boolean): Observable<ApplicationVO>;
    public createUsingPOST(applicationVO: ApplicationVO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApplicationVO>>;
    public createUsingPOST(applicationVO: ApplicationVO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApplicationVO>>;
    public createUsingPOST(applicationVO: ApplicationVO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (applicationVO === null || applicationVO === undefined) {
            throw new Error('Required parameter applicationVO was null or undefined when calling createUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<ApplicationVO>(`${this.basePath}/rs/application`,
            applicationVO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * delete
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/rs/application/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * getAll
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
 // public getAllUsingGET(observe?: any = 'body', reportProgress?: boolean): Observable<any>;
  //   public getAllUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ApplicationVO>>>;
    // public getAllUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ApplicationVO>>>;
    public getAllUsingGET(observe: any= 'body', reportProgress: boolean = false ): Observable<Array<ApplicationVO>> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<ApplicationVO>>(`${this.basePath}/rs/application`);
    }

    /**
     * get
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<ApplicationVO>;
    public getUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApplicationVO>>;
    public getUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApplicationVO>>;
    public getUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<ApplicationVO>(`${this.basePath}/rs/application/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * update
     * 
     * @param applicationVO applicationVO
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsingPUT(applicationVO: ApplicationVO, observe?: 'body', reportProgress?: boolean): Observable<ApplicationVO>;
    public updateUsingPUT(applicationVO: ApplicationVO, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ApplicationVO>>;
    public updateUsingPUT(applicationVO: ApplicationVO, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ApplicationVO>>;
    public updateUsingPUT(applicationVO: ApplicationVO, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (applicationVO === null || applicationVO === undefined) {
            throw new Error('Required parameter applicationVO was null or undefined when calling updateUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<ApplicationVO>(`${this.basePath}/rs/application`,
            applicationVO,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
