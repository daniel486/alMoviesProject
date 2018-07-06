/**
 * This specifies a list of similar movies in an array of individual movies.
 */
export class SimilarMoviesDescriptor {

    public movies: MovieIndividual[] = [];

    public static import(rawData: any) {

        let response: SimilarMoviesDescriptor = new SimilarMoviesDescriptor();

        let movie: MovieIndividual;

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
 * This specifies the types used for the movies in the detail-movie component
 */
export class MovieIndividual {

    public id: number;
    public title: string;
    public poster_path: string;

    public static import(rawData: any) {
        let movieInd: MovieIndividual = new MovieIndividual();
        
        movieInd.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        movieInd.title = rawData.hasOwnProperty('title') ? rawData.title: '';
        movieInd.poster_path = rawData.hasOwnProperty('poster_path') ? rawData.poster_path : '';

        return movieInd;
    }
}

/**
 * This specifies a list of similar series in an array of individual series.
 */
export class SimilarSeriesDescriptor {

    public series: SerieIndividual[] = [];

    public static import(rawData: any) {

        let response: SimilarSeriesDescriptor = new SimilarSeriesDescriptor();

        let serie: SerieIndividual;

        if(rawData.hasOwnProperty("results")){
            for(var i = 0; i < rawData.results.length; i++){
                let row: any = rawData.results[i];
                serie = SerieIndividual.import(row);
                response.series.push(serie);
            }
        }
        return response;
    }
}

/**
 * This specifies the types used for the series in the detail-tv component
 */
export class SerieIndividual {

    public id: number;
    public name: string;
    public poster_path: string;

    public static import(rawData: any) {
        let serieInd: SerieIndividual = new SerieIndividual();
        
        serieInd.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        serieInd.name = rawData.hasOwnProperty('name') ? rawData.name: '';
        serieInd.poster_path = rawData.hasOwnProperty('poster_path') ? rawData.poster_path : '';

        return serieInd;
    }
}