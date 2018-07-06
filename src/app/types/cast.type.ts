/**
 * This class contains the descriptor for the movies that contain the cast and crew
 * of a movie.
 */
export class CastMoviesDescriptor {

    public actors: IndividualActor[] = [];

    public total_crew: IndividualActor[] = [];

    public static import(rawData: any) {

        let response: CastMoviesDescriptor = new CastMoviesDescriptor();

        let actor: IndividualActor;

        if(rawData.hasOwnProperty("cast")){
            for(var i = 0; i < rawData.cast.length; i++){
                let row: any = rawData.cast[i];
                actor = IndividualActor.import(row);
                response.actors.push(actor);
            }
        }

        let crew: IndividualActor;

        if(rawData.hasOwnProperty("crew")){
            for(var i = 0; i < rawData.crew.length; i++){
                let row: any = rawData.crew[i];
                crew = IndividualActor.import(row);
                response.total_crew.push(crew);
            }
        }

        return response;
    }
}

/**
 * This class stablish the types for the individual actors and crew.
 */
export class IndividualActor {

    public id: number;
    public gender: number;
    public name: string;
    public character: string;
    public job: string;
    public profile_path: string;

    public static import(rawData: any) {
        let actorInd: IndividualActor = new IndividualActor();
        
        actorInd.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        actorInd.gender = rawData.hasOwnProperty('gender') ? rawData.gender : 0;
        actorInd.name = rawData.hasOwnProperty('name') ? rawData.name : '';
        actorInd.character = rawData.hasOwnProperty('character') ? rawData.character : '';
        actorInd.job = rawData.hasOwnProperty('job') ? rawData.job : '';
        actorInd.profile_path = rawData.hasOwnProperty('profile_path') ? rawData.profile_path : '';

        return actorInd;
    }
}

/**
 * This class contains the descriptor for the tv series that contain the cast and crew
 * of a serie.
 */
export class CastSeriesDescriptor {

    public actors: IndividualActor[] = [];

    public total_crew: IndividualActor[] = [];

    public static import(rawData: any) {

        let response: CastSeriesDescriptor = new CastSeriesDescriptor();

        let actor: IndividualActor;

        if(rawData.hasOwnProperty("cast")){
            for(var i = 0; i < rawData.cast.length; i++){
                let row: any = rawData.cast[i];
                actor = IndividualActor.import(row);
                response.actors.push(actor);
            }
        }

        let crew: IndividualActor;

        if(rawData.hasOwnProperty("crew")){
            for(var i = 0; i < rawData.crew.length; i++){
                let row: any = rawData.crew[i];
                crew = IndividualActor.import(row);
                response.total_crew.push(crew);
            }
        }

        return response;
    }
}