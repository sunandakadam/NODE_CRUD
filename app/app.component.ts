import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { DbApiService } from './db-api.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form1: FormGroup;
  res:any;
  studs:any;
  constructor(private fb: FormBuilder,
    private ser: DbApiService) {
    this.form1 = this.fb.group(
      {
        stud_no: [],
        stud_name: [],
        stud_marks: [],
        stud_phone: [],
      }
    )
  }

  ngOnInit() {
    
  }
  onSave(data) {
    console.log(data);
    this.ser.addData(data).subscribe((res)=>{
      console.log(res);
    })
  }
  onDel(no){
    console.log(no);
    this.ser.delData(no).subscribe((res)=>{
      console.log(res);
    })
  }

  onEdit(data){
    this.ser.editData(data).subscribe((res)=>{
      console.log(res);
    })
  }
  onView()
  {
    this.ser.getData().subscribe((res)=>{
      //  console.log(res);
      this.studs=res;
    })
  }
}
