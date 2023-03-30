import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../player-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private is:PlayerServiceService) { }
deleteData(del :any){
 this.is.deleteService(del.value).subscribe();
 alert("deleted!!!!!!!!!!!!!!!!!!!")
}
  ngOnInit(): void {
  }
}
