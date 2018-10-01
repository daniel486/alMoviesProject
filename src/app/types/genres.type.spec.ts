import { GenresDescriptor } from './genres.type';

describe('Genres Type', () => {

    let genreType: GenresDescriptor;

    beforeEach(() => {
        genreType = new GenresDescriptor();
    });

    it('should create the list of actors', () => {
        let response = {
            "genres": [
                { "id": 28, "name": "Action" },
                { "id": 878, "name": "Science Fiction" },
                { "id": 12, "name": "Adventure" }
            ]
        };

        genreType = GenresDescriptor.import(response);

        expect(genreType.genres[0].name).toBe("Action");
        expect(genreType.genres[1].name).toBe("Science Fiction");
    });

    it('should create the list of actors with empty values', () => {
        let response = {
            "genres": [
                { "test": "should appear empty values" },
            ]
        };

        genreType = GenresDescriptor.import(response);

        expect(genreType.genres[0].id).toBe(0);
        expect(genreType.genres[0].name).toBe("");
    });

    it('should skip the first confitionals for GenresDescriptor', () => {
        let response = {
            "testing": [
                { "test": "should appear empty values" },
            ]
        };

        genreType = GenresDescriptor.import(response);

        expect(genreType.genres.length).toBe(0);
    });

});
