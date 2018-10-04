import { CastMoviesDescriptor } from './cast.type';
import { CastSeriesDescriptor } from './cast.type';

describe('Cast Type', () => {

    let castMovieType: CastMoviesDescriptor;
    let castSerieType: CastSeriesDescriptor;

    beforeEach(() => {
        castMovieType = new CastMoviesDescriptor();
        castSerieType = new CastSeriesDescriptor();
    });

    it('should create the cast of the movie', () => {
        let response = {
            "cast": [{
                "id": 128,
                "gender": 1,
                "name": "Maria",
                "character": "Evil",
                "job": "Assistant",
                "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
            }, {
                "id": 129,
                "gender": 0,
                "name": "Manuel",
                "character": "Driver",
                "job": "Count",
                "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
            }],
        "crew": [{
            "id": 228,
            "gender": 1,
            "name": "Catalina",
            "character": "Martha",
            "job": "Graphic Designer",
            "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
        }, {
            "id": 229,
            "gender": 0,
            "name": "Daniel",
            "character": "Felipe",
            "job": "Engineer",
            "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
        }]
        };

        castMovieType = CastMoviesDescriptor.import(response);

        expect(castMovieType.actors[0].name).toBe("Maria");
        expect(castMovieType.actors[1].name).toBe("Manuel");
        expect(castMovieType.total_crew[0].name).toBe("Catalina");
        expect(castMovieType.total_crew[1].name).toBe("Daniel");
    });

    it('should create the cast of the serie', () => {
        let response = {
            "cast": [{
                "id": 128,
                "gender": 1,
                "name": "Maria",
                "character": "Evil",
                "job": "Assistant",
                "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
            }, {
                "id": 129,
                "gender": 0,
                "name": "Manuel",
                "character": "Driver",
                "job": "Count",
                "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
            }],
            "crew": [{
                "id": 228,
                "gender": 1,
                "name": "Catalina",
                "character": "Martha",
                "job": "Graphic Designer",
                "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
            }, {
                "id": 229,
                "gender": 0,
                "name": "Daniel",
                "character": "Felipe",
                "job": "Engineer",
                "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
            }]
        };

        castSerieType = CastSeriesDescriptor.import(response);

        expect(castSerieType.actors[0].name).toBe("Maria");
        expect(castSerieType.actors[1].name).toBe("Manuel");
        expect(castSerieType.total_crew[0].name).toBe("Catalina");
        expect(castSerieType.total_crew[1].name).toBe("Daniel");
    });

    it('should create new CastMoviesDescriptor', () => {
        let response = {
            "cast": [
                { "test": "should appear empty values" }
            ],
            "crew": [
                { "test": "should appear empty values" }
            ]
        };

        castMovieType = CastMoviesDescriptor.import(response);

        expect(castMovieType.actors[0].id).toBe(0);
        expect(castMovieType.actors[0].gender).toBe(0);
        expect(castMovieType.actors[0].name).toBe("");
        expect(castMovieType.actors[0].character).toBe("");
        expect(castMovieType.actors[0].job).toBe("");
        expect(castMovieType.actors[0].profile_path).toBe("");
    });

    it('should create new CastSeriesDescriptor', () => {
        let response = {
            "cast": [
                { "test": "should appear empty values" }
            ],
            "crew": [
                { "test": "should appear empty values" }
            ]
        };

        castSerieType = CastSeriesDescriptor.import(response);

        expect(castSerieType.total_crew[0].id).toBe(0);
        expect(castSerieType.total_crew[0].gender).toBe(0);
        expect(castSerieType.total_crew[0].name).toBe("");
        expect(castSerieType.total_crew[0].character).toBe("");
        expect(castSerieType.total_crew[0].job).toBe("");
        expect(castSerieType.total_crew[0].profile_path).toBe("");
    });

    it('should skip the first conditionals for CastMoviesDescriptor', () => {
        let response = {
            "testing": [
                { "test": "should appear empty values" },
            ]
        };

        castMovieType = CastMoviesDescriptor.import(response);

        expect(castMovieType.actors.length).toBe(0);
    });

    it('should skip the first conditionals for CastSeriesDescriptor', () => {
        let response = {
            "testing": [
                { "test": "should appear empty values" },
            ]
        };

        castSerieType = CastSeriesDescriptor.import(response);

        expect(castSerieType.total_crew.length).toBe(0);
    });

});
