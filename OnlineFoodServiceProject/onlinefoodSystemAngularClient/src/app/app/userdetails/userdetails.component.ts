import { Component } from '@angular/core';
import { User } from '../Models/User';
import { UserService } from '../user.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {
  users:User[]=[];
  constructor(private service:UserService){

  }

  ngOnInit()
  {
    this.service.getAllUsers().subscribe(data=>{
      this.users=data;
      console.log(this.users)
    })
  }

  downloadExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.users);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Candidates');
    XLSX.writeFile(wb, 'users.xlsx');
  }

}
