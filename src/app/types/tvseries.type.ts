/**
 * This specifie a list of tv series in an array of individual series.
 */
export class TvList {

    public total_pages: number;
    public total_results: number;
    public tv_series: TvIndividual[] = [];

    public static import(rawData: any) {

        let response: TvList = new TvList();

        let tv_serie: TvIndividual;

        response.total_pages = rawData.hasOwnProperty('total_pages') ? rawData.total_pages : 0;
        response.total_results = rawData.hasOwnProperty('total_results') ? rawData.total_results : 0;

        if(rawData.hasOwnProperty("results")){
            for(var i = 0; i < rawData.results.length; i++){
                let row: any = rawData.results[i];
                tv_serie = TvIndividual.import(row);
                response.tv_series.push(tv_serie);
            }
        }
        return response;
    }
}

/**
 * This specifies the types used for the tv series in the list-tv component
 */
export class TvIndividual {

    public id: number;
    public name: string;
    public poster_path: string;

    public static import(rawData: any) {
        let tvInd: TvIndividual = new TvIndividual();
        
        tvInd.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        tvInd.name = rawData.hasOwnProperty('name') ? rawData.name: '';
        tvInd.poster_path = rawData.hasOwnProperty('poster_path') ? rawData.poster_path : '';

        return tvInd;
    }
}
