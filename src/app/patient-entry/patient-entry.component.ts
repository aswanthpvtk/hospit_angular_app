import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {

  pname=""
  pid=""
  address=""
  cno=""
  doa=""
  pimg=""
  dname=""


  readValues=()=>
  {
    let data:any={"pname":this.pname,
                  "pid":this.pid,
                  "address":this.address,
                  "cno":this.cno,
                  "doa":this.doa,
                  "pimg":this.pimg,
                  "dname":this.dname}
      console.log(data)
  }



}
