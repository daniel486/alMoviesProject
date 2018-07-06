import { Component, OnInit } from '@angular/core';
import { SearchDescriptor } from '../../types/search.type';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public search: SearchDescriptor = new SearchDescriptor();
  public query: string = "";
  public serieType: string = "tv";
  public movieType: string = "movie";
  public peopleType: string = "person";
  

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  searchMulti(){
    if(this.query){
      this.searchService.getMultipleSearch(this.query).subscribe(
        (data: any) => {
          this.search = data;
        }
      );
    }else{
      this.search = new SearchDescriptor;
    }
  }
  
  /**
  * This function clean the query input
  **/
  cleanInput() {
    this.query = "";
    this.search = new SearchDescriptor
  }

}
