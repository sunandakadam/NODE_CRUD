import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http'
import { map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DbApiService {

  constructor(private http:Http) { 
    
  }

  getData(){
    return this.http.get("http://localhost:3000/student/view",null).
    pipe(map((res:Response)=>{
      return res.json()
    }
    ))
  }
  editData(data){
    return this.http.post("http://localhost:3000/student/edit",data).pipe
    (map((res:Response)=>{
      return res.json;
    }))
  }

  delData(no){
    console.log("in service"+no);
    return this.http.delete("http://localhost:3000/student/del/"+no,null).pipe
    (map((res:Response)=>{
      return res.json;
    }))
  }

  addData(data){
    return this.http.post("http://localhost:3000/student/add",data).pipe(
      map((res:Response)=>{
        return res.json;
      })
    )
  }
}
