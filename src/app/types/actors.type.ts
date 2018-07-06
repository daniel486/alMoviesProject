/**
 * This specifies a list of actors in an array of individual actors.
 */
export class ActorList {

    public total_pages: number;
    public actors: ActorIndividual[] = [];

    public static import(rawData: any) {

        let response: ActorList = new ActorList();

        let actor: ActorIndividual;

        response.total_pages = rawData.hasOwnProperty('total_pages') ? rawData.total_pages : 0;

        if(rawData.hasOwnProperty("results")){
            for(var i = 0; i < rawData.results.length; i++){
                let row: any = rawData.results[i];
                actor = ActorIndividual.import(row);
                response.actors.push(actor);
            }
        }
        return response;
    }
}

/**
 * This specifies the types used for the actors in the list-actors component
 */
export class ActorIndividual {

    public id: number;
    public name: string;
    public profile_path: string;

    public static import(rawData: any) {
        let actorInd: ActorIndividual = new ActorIndividual();
        
        actorInd.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        actorInd.name = rawData.hasOwnProperty('name') ? rawData.name: '';
        actorInd.profile_path = rawData.hasOwnProperty('profile_path') ? rawData.profile_path : '';

        return actorInd;
    }
}
