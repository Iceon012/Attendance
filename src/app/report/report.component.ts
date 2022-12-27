import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  dateVal = new Date();


  studentLogs: any;

  constructor(private post : StudentService) { }

  ngOnInit(): void {
    this.post.getLogs().subscribe((result:any)=>{
      console.log(result)
      this.studentLogs = result;
      if(result == true) {
        this.ngOnInit()
      }
    });
  }
}
