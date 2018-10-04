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

  /**
   * This function make a search if the query is filled, in other case clean
   * the search descriptor.
   */
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
  * This function clean the query input and set the search descriptor.
  **/
  cleanInput() {
    this.query = "";
    this.search = new SearchDescriptor
  }

}
