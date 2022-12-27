import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = "http://localhost/Attendance/";

  constructor(private http: HttpClient) { }

  StudentLogs(lib:any){
    return this.http.post(this.url + 'log.php',JSON.stringify(lib));
  }

  getLogs(){
    return this.http.get(this.url + 'displayLog.php');
  }

  StudLog(eid: any) {
    return this.http.get(this.url + 'displayOne.php?eid=' + eid);
  }
  
  StudLogin(log: any) {
    return this.http.post(this.url + 'studlog.php', JSON.stringify(log));
  }
}
