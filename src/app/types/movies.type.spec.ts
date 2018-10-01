import { MovieList } from './movies.type';

describe('Movies Type', () => {

    let movieType: MovieList;

    beforeEach(() => {
        movieType = new MovieList();
    });

    it('should create the list of movies', () => {
        let response = {
            "total_pages": 1,
            "results": [{
                "id": 20,
                "title": "Your Name",
                "poster_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg",
                "popularity": 448,
                "vote_average": 5
            }, {
                "id": 19,
                "title": "7 Sins",
                "poster_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg",
                "popularity": 247,
                "vote_average": 3
            }]
        };

        movieType = MovieList.import(response);

        console.log(movieType);

        expect(movieType.movies[0].title).toBe("Your Name");
        expect(movieType.movies[1].title).toBe("7 Sins");
        expect(movieType.total_pages).toBe(1);
    });

    it('should create the list of movies with empty values', () => {
        let response = {
            "results": [
                { "test": "should appear empty values" },
            ]
        };

        movieType = MovieList.import(response);

        expect(movieType.movies[0].id).toBe(0);
        expect(movieType.movies[0].title).toBe("");
        expect(movieType.movies[0].poster_path).toBe("");
        expect(movieType.movies[0].popularity).toBe(0);
        expect(movieType.movies[0].vote_average).toBe(0);
        expect(movieType.total_pages).toBe(0);
    });

    it('should skip the first confitionals for MovieList', () => {
        let response = {
            "testing": [
                { "test": "should appear empty values" },
            ]
        };

        movieType = MovieList.import(response);

        expect(movieType.movies.length).toBe(0);
    });

});
