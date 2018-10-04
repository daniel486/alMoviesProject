/**
 * This specifies a list of movies in an array of individual movies.
 */
export class MovieList {

    public total_pages: number;
    public movies: MovieIndividual[] = [];

    public static import(rawData: any) {

        let response: MovieList = new MovieList();

        let movie: MovieIndividual;

        response.total_pages = rawData.hasOwnProperty('total_pages') ? rawData.total_pages : 0;

        if(rawData.hasOwnProperty("results")){
            for(var i = 0; i < rawData.results.length; i++){
                let row: any = rawData.results[i];
                movie = MovieIndividual.import(row);
                response.movies.push(movie);
            }
        }
        return response;
    }
}

/**
 * This specifies the types used for the movies in the list-movies component
 */
export class MovieIndividual {

    public id: number;
    public title: string;
    public poster_path: string;
    public popularity: number;
    public vote_average: number;

    public static import(rawData: any) {
        let movieInd: MovieIndividual = new MovieIndividual();
        
        movieInd.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        movieInd.title = rawData.hasOwnProperty('title') ? rawData.title: '';
        movieInd.poster_path = rawData.hasOwnProperty('poster_path') ? rawData.poster_path : '';
        movieInd.popularity = rawData.hasOwnProperty('popularity') ? rawData.popularity : 0;
        movieInd.vote_average = rawData.hasOwnProperty('vote_average') ? rawData.vote_average : 0;

        return movieInd;
    }
}
