import { MovieDescriptor } from './detailMovie.type';

describe('Detail Movie Type', () => {

    let movieDescriptorType: MovieDescriptor;

    beforeEach(() => {
        movieDescriptorType = new MovieDescriptor();
    });

    it('should create the descriptor for the movie', () => {
        let response = {
            "backdrop_path":"/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg",
            "genres":[{
                "id":18,
                "name":"Drama"
            }, {
                "id":18,
            }],
            "homepage":"http://www.foxmovies.com/movies/fight-club",
            "id":550,
            "overview":"A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
            "popularity":31.515,
            "poster_path":"/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
            "release_date":"1999-10-15",
            "spoken_languages":[
                {
                    "name":"English"
                }, {
                    "test":"test"
                }
            ],
            "title":"Fight Club",
            "vote_average":8.4,
            "vote_count":13768,
            "videos":{
                "results":[{
                    "key":"SUXWAEX2jlg",
                    "name":"Fight Club Trailer - HD",
                    "type":"Trailer"
                }, {
                    "key":"0000000",
                    "name":"Fight Club Trailer - HD",
                    "type":"Teaser"
                }, {
                    "type":"Trailer"
                }, {
                    "key":"111111",
                    "name":"Fight Club Trailer - HD"
                }]
            }
        };

        movieDescriptorType = MovieDescriptor.import(response);

        expect(movieDescriptorType.title).toBe("Fight Club");
        expect(movieDescriptorType.id).toBe(550);
        expect(movieDescriptorType.genres.length).toBe(2);
        expect(movieDescriptorType.spoken_languages[1].name).toBe("");
        expect(movieDescriptorType.videos_trailer[1].key).toBe("");
        expect(movieDescriptorType.videos_trailer[1].name).toBe("");
    });

    it('should create the MovieDescriptor with empty values', () => {
        let response = {
            "videos": {
                "test": "should appear empty values"
            }
        };

        movieDescriptorType = MovieDescriptor.import(response);

        expect(movieDescriptorType.id).toBe(0);
        expect(movieDescriptorType.backdrop_path).toBe("");
        expect(movieDescriptorType.homepage).toBe("");
        expect(movieDescriptorType.popularity).toBe(0);
        expect(movieDescriptorType.poster_path).toBe("");
        expect(movieDescriptorType.title).toBe("");
        expect(movieDescriptorType.overview).toBe("");
        expect(movieDescriptorType.release_date).toBe("No date available");
        expect(movieDescriptorType.vote_average).toBe(0);
        expect(movieDescriptorType.vote_count).toBe(0);
        expect(movieDescriptorType.genres.length).toBe(0);
        expect(movieDescriptorType.spoken_languages.length).toBe(0);
        expect(movieDescriptorType.videos_trailer.length).toBe(0);
    });

    it('should skip the first conditionals for genres, languages and videos', () => {
        let response = {
            "backdrop_path":"/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg",
            "homepage":"http://www.foxmovies.com/movies/fight-club",
            "id":550,
            "overview":"A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
            "popularity":31.515,
            "poster_path":"/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
            "release_date":"1999-10-15",
            "title":"Fight Club",
            "vote_average":8.4,
            "vote_count":13768,
            "genres": { "test": "should appear empty values" },
            "videos": {
                "results": { "test": "should appear empty values" }
            },
            "spoken_languages": { "test": "should appear empty values" }
        };

        movieDescriptorType = MovieDescriptor.import(response);

        expect(movieDescriptorType.genres.length).toBe(0);
        expect(movieDescriptorType.spoken_languages.length).toBe(0);
        expect(movieDescriptorType.videos_trailer.length).toBe(0);
    });

});
