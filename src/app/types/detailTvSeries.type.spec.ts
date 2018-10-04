import { TvDescriptor } from './detailTvSeries.type';

describe('Detail Movie Type', () => {

    let serieDescriptorType: TvDescriptor;

    beforeEach(() => {
        serieDescriptorType = new TvDescriptor();
    });

    it('should create the descriptor for the tv serie', () => {
        let response = {
            "backdrop_path": "/4jMlfAIlN1zKNcqE6xjuQsrFse2.jpg",
            "first_air_date": "1989-12-17",
            "genres": [{
                "id": 16,
                "name": "Animation"
            }, {
                "id": 35,
                "name": "Comedy"
            }],
            "homepage": "http://www.thesimpsons.com/",
            "id": 456,
            "name": "The Simpsons",
            "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
            "popularity": 124.977,
            "poster_path": "/yTZQkSsxUFJZJe67IenRM0AEklc.jpg",
            "vote_average": 7.1,
            "vote_count": 1690,
            "videos": {
                "results": [{
                    "id": "5336dbb79251417db4000ed8",
                    "iso_639_1": "en",
                    "iso_3166_1": "US",
                    "key": "DX1iplQQJTo",
                    "name": "Simpsons",
                    "site": "YouTube",
                    "size": 720,
                    "type": "Trailer"
                }, {
                    "key":"0000000",
                    "name":"The simpsons - HD",
                    "type":"Teaser"
                }, {
                    "type":"Trailer"
                }, {
                    "key":"111111",
                    "name":"The simpsons - HD"
                }]
            }
        };

        serieDescriptorType = TvDescriptor.import(response);

        expect(serieDescriptorType.name).toBe("The Simpsons");
        expect(serieDescriptorType.id).toBe(456);
        expect(serieDescriptorType.genres.length).toBe(2);
        expect(serieDescriptorType.videos_trailer[0].key).toBe("DX1iplQQJTo");
        expect(serieDescriptorType.videos_trailer[0].name).toBe("Simpsons");
        expect(serieDescriptorType.videos_trailer[1].key).toBe("");
        expect(serieDescriptorType.videos_trailer[1].name).toBe("");
    });

    it('should create the TvDescriptor with empty values', () => {
        let response = {
            "videos": {
                "test": "should appear empty values"
            }
        };

        serieDescriptorType = TvDescriptor.import(response);

        expect(serieDescriptorType.id).toBe(0);
        expect(serieDescriptorType.backdrop_path).toBe("");
        expect(serieDescriptorType.homepage).toBe("");
        expect(serieDescriptorType.popularity).toBe(0);
        expect(serieDescriptorType.poster_path).toBe("");
        expect(serieDescriptorType.name).toBe("");
        expect(serieDescriptorType.overview).toBe("");
        expect(serieDescriptorType.first_air_date).toBe("No date available");
        expect(serieDescriptorType.vote_average).toBe(0);
        expect(serieDescriptorType.vote_count).toBe(0);
        expect(serieDescriptorType.genres.length).toBe(0);
        expect(serieDescriptorType.videos_trailer.length).toBe(0);
    });

    it('should skip the first conditionals for genres and videos', () => {
        let response = {
            "genres": { "test": "should appear empty values" },
            "videos": {
                "results": { "test": "should appear empty values" }
            }
        };

        serieDescriptorType = TvDescriptor.import(response);

        expect(serieDescriptorType.genres.length).toBe(0);
        expect(serieDescriptorType.videos_trailer.length).toBe(0);
    });

});
