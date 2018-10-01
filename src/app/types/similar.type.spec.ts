import { SimilarMoviesDescriptor } from './similar.type';
import { SimilarSeriesDescriptor } from './similar.type';

describe('Similar Type', () => {

    let similarMoviesType: SimilarMoviesDescriptor;
    let similarSeriesType: SimilarSeriesDescriptor;

    beforeEach(() => {
        let similarMoviesType = new SimilarMoviesDescriptor();
        let similarSeriesType = new SimilarSeriesDescriptor();
    });

    it('should create the list of similar movies', () => {
        let response = {
            "results": [{
                "id": 1994,
                "title": "Daniel's Life",
                "poster_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
            }, {
                "id": 1990,
                "title": "Catalina's Life",
                "poster_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
            }]
        };

        similarMoviesType = SimilarMoviesDescriptor.import(response);

        expect(similarMoviesType.movies[0].title).toBe("Daniel's Life");
        expect(similarMoviesType.movies[1].title).toBe("Catalina's Life");
    });

    it('should create the list of similar series', () => {
        let response = {
            "results": [{
                "id": 1994,
                "name": "Angular Life",
                "poster_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
            }, {
                "id": 1990,
                "name": "Testing Life",
                "poster_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
            }]
        };

        similarSeriesType = SimilarSeriesDescriptor.import(response);

        expect(similarSeriesType.series[0].name).toBe("Angular Life");
        expect(similarSeriesType.series[1].name).toBe("Testing Life");
    });

    it('should create the similar movies with empty values', () => {
        let response = {
            "results": [
                { "test": "should appear empty values" },
            ]
        };

        similarMoviesType = SimilarMoviesDescriptor.import(response);

        expect(similarMoviesType.movies[0].id).toBe(0);
        expect(similarMoviesType.movies[0].title).toBe("");
        expect(similarMoviesType.movies[0].poster_path).toBe("");
    });

    it('should create the similar series with empty values', () => {
        let response = {
            "results": [
                { "test": "should appear empty values" },
            ]
        };

        similarSeriesType = SimilarSeriesDescriptor.import(response);

        expect(similarSeriesType.series[0].id).toBe(0);
        expect(similarSeriesType.series[0].name).toBe("");
        expect(similarSeriesType.series[0].poster_path).toBe("");
    });

    it('should skip the first confitionals for SimilarMoviesDescriptor', () => {
        let response = {
            "testing": [
                { "test": "should appear empty values" },
            ]
        };

        similarMoviesType = SimilarMoviesDescriptor.import(response);

        expect(similarMoviesType.movies.length).toBe(0);
    });

    it('should skip the first confitionals for SimilarSeriesDescriptor', () => {
        let response = {
            "testing": [
                { "test": "should appear empty values" },
            ]
        };

        similarSeriesType = SimilarSeriesDescriptor.import(response);

        expect(similarSeriesType.series.length).toBe(0);
    });

});
