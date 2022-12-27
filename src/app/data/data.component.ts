import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  student = {studID:localStorage.getItem("id_num")};
  students: any;
  
  dateVal = new Date();

  log = new FormGroup({
    studID : new FormControl(this),
    yearcourse: new FormControl(this),
    studName: new FormControl(this)
  })

  constructor(private post: StudentService,
    private route: Router){

  }
  
  ngOnInit(): void {
    this.post.StudLog(this.student.studID).subscribe((result:any)=>{
      this.students = result;
      console.log(this.students[0].id_num)

      this.log.controls['studID'].setValue(this.students[0].id_num);
      this.log.controls['yearcourse'].setValue(this.students[0].year_course);
      this.log.controls['studName'].setValue(this.students[0].Name);

    }) 
  }

  StudentLogs() {
    console.log(this.log.value)
    this.post.StudentLogs(this.log.value).subscribe((result:any)=>
    {
      this.log.reset()  
      console.log(result)
      if(result == "OK") {
        this.route.navigate(['/log']);
        console.log(alert('Succesfully Login!'))
      }
    })
  }
}
