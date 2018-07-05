export class ActorDescriptor {

    public id: number;
    public birthday: string;
    public name: string;
    public gender: number;
    public biography: string;
    public popularity: number;
    public profile_path: string;

    public static import(rawData: any) {

        let detailActor: ActorDescriptor = new ActorDescriptor();

        detailActor.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        detailActor.birthday = rawData.hasOwnProperty('birthday') ? rawData.birthday : '';
        detailActor.name = rawData.hasOwnProperty('name') ? rawData.name : '';
        detailActor.gender = rawData.hasOwnProperty('gender') ? rawData.gender : 0;
        detailActor.biography = rawData.hasOwnProperty('biography') ? rawData.biography : '';
        detailActor.popularity = rawData.hasOwnProperty('popularity') ? rawData.popularity : 0;
        detailActor.profile_path = rawData.hasOwnProperty('profile_path') ? rawData.profile_path : '';
        
        return detailActor;
    }
}
