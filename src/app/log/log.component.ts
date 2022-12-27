import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  dateVal = new Date();

  logForm = new FormGroup({
    studID : new FormControl(null)
  })

  constructor(private route:Router, private posting: StudentService){}

  sample: any;
  log: any;

  StudLogin(){
    //console.log(this.logForm.value)
    this.posting.StudLogin(this.logForm.value).subscribe((result:any)=>{
      console.log(result);
      if(result != '0'){
        localStorage.setItem("id_num",result);
        this.route.navigate(['/data']);
      }
      else{
        // location.reload();
          setTimeout(function(){
            window.location.reload();
         }, 800);
      }
    });
  }

  ngOnInit(): void { 
  }


}
