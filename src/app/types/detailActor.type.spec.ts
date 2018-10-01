import { ActorDescriptor } from './detailActor.type';

describe('Detail Actor Type', () => {

    let actorDescriptorType: ActorDescriptor;

    beforeEach(() => {
        actorDescriptorType = new ActorDescriptor();
    });

    it('should create the descriptor for the actor', () => {
        let response = {
            "id": 45,
            "birthday": "1994-07-12",
            "name": "Daniel Felipe García",
            "gender": 0,
            "biography": "System's engineering student at the Universidad del Valle.",
            "popularity": 5,
            "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg",
            "place_of_birth": "Cali"
        };

        actorDescriptorType = ActorDescriptor.import(response);

        expect(actorDescriptorType.name).toBe("Daniel Felipe García");
        expect(actorDescriptorType.place_of_birth).toBe("Cali");
    });

    it('should create the ActorDescriptor with empty values', () => {
        let response = {
            "results": [
                { "test": "should appear empty values" },
            ]
        };

        actorDescriptorType = ActorDescriptor.import(response);

        expect(actorDescriptorType.id).toBe(0);
        expect(actorDescriptorType.birthday).toBe("");
        expect(actorDescriptorType.name).toBe("");
        expect(actorDescriptorType.gender).toBe(0);
        expect(actorDescriptorType.biography).toBe("");
        expect(actorDescriptorType.popularity).toBe(0);
        expect(actorDescriptorType.profile_path).toBe("");
        expect(actorDescriptorType.place_of_birth).toBe("");
    });

});
