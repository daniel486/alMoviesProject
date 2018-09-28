import { GenresDescriptor } from './genres.type';

describe('Actor Type', () => {

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

});
