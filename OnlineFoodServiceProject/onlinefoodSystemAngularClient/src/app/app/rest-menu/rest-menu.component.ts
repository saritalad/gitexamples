import { Component } from '@angular/core';
import { RestMenu } from '../Models/RestMenu';
import { RestMenuService } from '../rest-menu.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-rest-menu',
  templateUrl: './rest-menu.component.html',
  styleUrls: ['./rest-menu.component.css']
})
export class RestMenuComponent {
  restMenus:RestMenu[]=[];
  constructor(private service:RestMenuService){

  }

  ngOnInit()
  {
    this.service.getAllRestMenu().subscribe(data=>{
      this.restMenus=data;
      console.log(this.restMenus)
    })
  }

  downloadExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.restMenus);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Candidates');
    XLSX.writeFile(wb, 'restMenus.xlsx');
  }
}

