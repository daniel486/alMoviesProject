/**
 * This is the descriptor for the search component, this store each
 * item in an array, each item can be a tv serie, movie or a person.
 */
export class SearchDescriptor {

    public search: IndividualSearch[] = [];

    public static import(rawData: any) {

        let response: SearchDescriptor = new SearchDescriptor();

        let searchInd: IndividualSearch;

        if(rawData.hasOwnProperty("results")){
            for(var i = 0; i < rawData.results.length; i++){
                let row: any = rawData.results[i];
                searchInd = IndividualSearch.import(row);
                response.search.push(searchInd);
            }
        }
        return response;
    }
}

/**
 * This is the individual search that stablish the types used in the search.
 */
export class IndividualSearch {

    public id: number;
    public name: string;
    public title: string;
    public media_type: string;
    public poster_path: string;
    public backdrop_path: string;
    public profile_path: string;

    public static import(rawData: any) {

        let searchIndiv: IndividualSearch = new IndividualSearch();
        
        searchIndiv.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        searchIndiv.name = rawData.hasOwnProperty('name') ? rawData.name: '';
        searchIndiv.title = rawData.hasOwnProperty('title') ? rawData.title: '';
        searchIndiv.media_type = rawData.hasOwnProperty('media_type') ? rawData.media_type: '';
        searchIndiv.poster_path = rawData.hasOwnProperty('poster_path') ? rawData.poster_path: '';
        searchIndiv.backdrop_path = rawData.hasOwnProperty('backdrop_path') ? rawData.backdrop_path: '';
        searchIndiv.profile_path = rawData.hasOwnProperty('profile_path') ? rawData.profile_path: '';

        return searchIndiv;
    }
}