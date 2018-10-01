import { SearchDescriptor } from './search.type';

describe('Search Type', () => {

    let searchType: SearchDescriptor;

    beforeEach(() => {
        searchType = new SearchDescriptor();
    });

    it('should create the searches', () => {
        let response = {
            "results": [{
                "id": 1994,
                "name": "Daniel",
                "title": "Daniel's Life",
                "media_type": "type dan",
                "poster_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg",
                "backdrop_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg",
                "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
            }, {
                "id": 1990,
                "name": "Catalina",
                "title": "Catalina's Life",
                "media_type": "type cat",
                "poster_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg",
                "backdrop_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg",
                "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
            }]
        };

        searchType = SearchDescriptor.import(response);

        expect(searchType.search[0].name).toBe("Daniel");
        expect(searchType.search[1].name).toBe("Catalina");
    });

    it('should create the searches with empty values', () => {
        let response = {
            "results": [
                { "test": "should appear empty values" },
            ]
        };

        searchType = SearchDescriptor.import(response);

        expect(searchType.search[0].id).toBe(0);
        expect(searchType.search[0].name).toBe("");
        expect(searchType.search[0].title).toBe("");
        expect(searchType.search[0].media_type).toBe("");
        expect(searchType.search[0].poster_path).toBe("");
        expect(searchType.search[0].backdrop_path).toBe("");
        expect(searchType.search[0].profile_path).toBe("");
    });

    it('should skip the first conditionals for SearchDescriptor', () => {
        let response = {
            "testing": [
                { "test": "should appear empty values" },
            ]
        };

        searchType = SearchDescriptor.import(response);

        expect(searchType.search.length).toBe(0);
    });

});
