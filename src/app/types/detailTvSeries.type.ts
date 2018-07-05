import { GenreDescriptor } from "./genres.type";

export class TvDescriptor {

    public id: number;
    public backdrop_path: string;
    public homepage: string;
    public popularity: number;
    public poster_path: string;
    public genres: GenreDescriptor[] = [];
    public name: string;
    public overview: string;
    public first_air_date: string;
    public vote_average: number;
    public vote_count: number;
    public videos_trailer: VideosTrailerDescriptor[] = [];

    public static import(rawData: any) {
        let serie: TvDescriptor = new TvDescriptor();

        serie.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        serie.backdrop_path = rawData.hasOwnProperty('backdrop_path') ? rawData.backdrop_path : '';
        serie.homepage = rawData.hasOwnProperty('homepage') ? rawData.homepage : '';
        serie.popularity = rawData.hasOwnProperty('popularity') ? rawData.popularity : 0;
        serie.poster_path = rawData.hasOwnProperty('poster_path') ? rawData.poster_path : '';
        serie.name = rawData.hasOwnProperty('name') ? rawData.name: '';
        serie.overview = rawData.hasOwnProperty('overview') ? rawData.overview : '';
        serie.first_air_date = rawData.hasOwnProperty('first_air_date') ? rawData.first_air_date : 'No date available';
        serie.vote_average = rawData.hasOwnProperty('vote_average') ? rawData.vote_average : 0;
        serie.vote_count = rawData.hasOwnProperty('vote_count') ? rawData.vote_count : 0;

        let genre: GenreDescriptor;
        if (rawData.hasOwnProperty("genres")) {
            for (var i = 0; i < rawData.genres.length; i++) {
                let row: any = rawData.genres[i];
                genre = GenreDescriptor.import(row);
                serie.genres.push(genre);
            }
        }

        let video_trailer: VideosTrailerDescriptor;
        if(rawData.videos.hasOwnProperty("results")){
            for(var i = 0; i < rawData.videos.results.length; i++){
                if(rawData.videos.results[i].hasOwnProperty("type")){
                    if(rawData.videos.results[i].type == 'Trailer'){
                        let row: any = rawData.videos.results[i];
                        video_trailer = VideosTrailerDescriptor.import(row);
                        serie.videos_trailer.push(video_trailer);
                    }
                }
            }
        }

        return serie;
    }
}

export class VideosTrailerDescriptor {
    public key: string;
    public name: string;

    public static import(rawData: any) {
        let videosTrailerDescriptor: VideosTrailerDescriptor = new VideosTrailerDescriptor();
        
        videosTrailerDescriptor.key = rawData.hasOwnProperty('key') ? rawData.key : '';
        videosTrailerDescriptor.name = rawData.hasOwnProperty('name') ? rawData.name : '';

        return videosTrailerDescriptor;
    }
}