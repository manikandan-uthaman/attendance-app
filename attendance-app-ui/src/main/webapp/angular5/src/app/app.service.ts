import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http'

@Injectable()
export class AppService{
    
    constructor(private _http: Http){}

    getUserDetails(){
        return this._http.get("/attendanceApp/getUserDetails").map(data => data.json());
    }
}