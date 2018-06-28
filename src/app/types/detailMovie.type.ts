import { GenreDescriptor } from "./genres.type";

export class MovieDescriptor {

    public id: number;
    public backdrop_path: string;
    public homepage: string;
    public popularity: number;
    public poster_path: string;
    public genres: GenreDescriptor[] = [];
    public title: string;
    public overview: string;
    public release_date: string;
    public vote_average: number;
    public vote_count: number;
    public spoken_languages: SpokenLanguageDescriptor[] = [];

    public static import(rawData: any) {
        let movie: MovieDescriptor = new MovieDescriptor();

        movie.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        movie.backdrop_path = rawData.hasOwnProperty('backdrop_path') ? rawData.backdrop_path : '';
        movie.homepage = rawData.hasOwnProperty('homepage') ? rawData.homepage : '';
        movie.popularity = rawData.hasOwnProperty('popularity') ? rawData.popularity : 0;
        movie.poster_path = rawData.hasOwnProperty('poster_path') ? rawData.poster_path : '';
        movie.title = rawData.hasOwnProperty('title') ? rawData.title: '';
        movie.overview = rawData.hasOwnProperty('overview') ? rawData.overview : '';
        movie.release_date = rawData.hasOwnProperty('release_date') ? rawData.release_date : 'No date available';
        movie.vote_average = rawData.hasOwnProperty('vote_average') ? rawData.vote_average : 0;
        movie.vote_count = rawData.hasOwnProperty('vote_count') ? rawData.vote_count : 0;

        let genre: GenreDescriptor;
        if (rawData.hasOwnProperty("genres")) {
            for (var i = 0; i < rawData.genres.length; i++) {
                let row: any = rawData.genres[i];
                genre = GenreDescriptor.import(row);
                movie.genres.push(genre);
            }
        }

        let spoken_language: SpokenLanguageDescriptor;
        if (rawData.hasOwnProperty("spoken_languages")) {
            for (var i = 0; i < rawData.spoken_languages.length; i++) {
                let row: any = rawData.spoken_languages[i];
                spoken_language = SpokenLanguageDescriptor.import(row);
                movie.spoken_languages.push(spoken_language);
            }
        }

        return movie;
    }
}

export class SpokenLanguageDescriptor {
    public name: string;

    public static import(rawData: any) {
        let spokenLanguageDescriptor: SpokenLanguageDescriptor = new SpokenLanguageDescriptor();

        spokenLanguageDescriptor.name = rawData.hasOwnProperty('name') ? rawData.name: '';
        return spokenLanguageDescriptor;
    }
}
