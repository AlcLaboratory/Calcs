import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

/*
    TODO: Make real http methods in the next version of the app.
        We don't use this service right now, we have mocks.
*/

@Injectable()
export class HttpRequestService {

    // public constructor(private http: HttpClient) {}

    // public get(url: string): Observable<any> {
    //     return this.http.get(url);
    // }

    // public post(url: string): Observable<any> {
    //     return this.http.post(url, {});
    // }

    // public delete(url: string): Observable<any> {
    //     return this.http.delete(url);
    // }

    // public update(url: string): Observable<any> {
    //     return this.http.put(url, {});
    // }
}
