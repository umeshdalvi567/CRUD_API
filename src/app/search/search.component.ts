import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../player-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private ps:PlayerServiceService) { }
  players:any;
  searchData(data:any){
   this.ps.searchPlayer(data.value).subscribe((resp:any)=>{this.players=resp});
  console.log(this.players)
  }

  ngOnInit(): void {
  }

}
