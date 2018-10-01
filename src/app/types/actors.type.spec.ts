import { ActorList } from './actors.type';

describe('Actor Type', () => {

    let actorType: ActorList;

    beforeEach(() => {
        actorType = new ActorList();
    });

    it('should create the list of actors', () => {
        let response = {
            "page": 1,
            "total_results": 2,
            "total_pages": 1,
            "results": [{
                "popularity": 20.601,
                "id": 1245,
                "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg",
                "name": "Scarlett Johansson",
                "known_for": [{
                    "vote_average": 7.6,
                    "vote_count": 16331,
                    "id": 24428,
                    "video": false,
                    "media_type": "movie",
                    "title": "The Avengers",
                    "popularity": 39.786,
                    "poster_path": "\/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
                    "original_language": "en",
                    "original_title": "The Avengers",
                    "genre_ids": [878, 28, 12],
                    "backdrop_path": "\/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg",
                    "adult": false,
                    "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
                    "release_date": "2012-04-25"
                }],
                "adult": false
            }, {
                "popularity": 19.275,
                "id": 9827,
                "profile_path": "\/laJdQNmsuR2iblYUggEqr49LvwJ.jpg",
                "name": "Rose Byrne",
                "known_for": [{
                    "vote_average": 6.5,
                    "vote_count": 6078,
                    "id": 1894,
                    "video": false,
                    "media_type": "movie",
                    "title": "Star Wars: Episode II - Attack of the Clones",
                    "popularity": 11.47,
                    "poster_path": "\/2vcNFtrZXNwIcBgH5e2xXCmVR8t.jpg",
                    "original_language": "en",
                    "original_title": "Star Wars: Episode II - Attack of the Clones",
                    "genre_ids": [12, 28, 878],
                    "backdrop_path": "\/1Slt26IGf2XHqv8xjEJ7LMZqCYb.jpg",
                    "adult": false,
                    "overview": "Ten years after the invasion of Naboo, the galaxy is on the brink of civil war. Under the leadership of a renegade Jedi named Count Dooku, thousands of solar systems threaten to break away from the Galactic Republic. When an assassination attempt is made on Senator Padmé Amidala, the former Queen of Naboo, twenty-year-old Jedi apprentice Anakin Skywalker is assigned to protect her. In the course of his mission, Anakin discovers his love for Padmé as well as his own darker side. Soon, Anakin, Padmé, and Obi-Wan Kenobi are drawn into the heart of the Separatist movement and the beginning of the Clone Wars.",
                    "release_date": "2002-05-15"
                }],
                "adult": false
            }]
        };

        actorType = ActorList.import(response);

        console.log(actorType);

        expect(actorType.actors[0].name).toBe("Scarlett Johansson");
        expect(actorType.actors[1].name).toBe("Rose Byrne");
    });

    it('should create the list of actors with empty values', () => {
        let response = {
            "results": [
                { "test": "should appear empty values" },
            ]
        };

        actorType = ActorList.import(response);

        expect(actorType.actors[0].id).toBe(0);
        expect(actorType.actors[0].name).toBe("");
        expect(actorType.actors[0].profile_path).toBe("");
        expect(actorType.total_pages).toBe(0);
    });

    it('should skip the first confitionals for ActorList', () => {
        let response = {
            "testing": [
                { "test": "should appear empty values" },
            ]
        };

        actorType = ActorList.import(response);

        expect(actorType.actors.length).toBe(0);
    });

});
