/**
 * This is the genres descriptor that contains all the genres.
 */
export class GenresDescriptor {

    public genres: GenreDescriptor[] = [];

    public static import(rawData: any) {

        let response: GenresDescriptor = new GenresDescriptor();

        let genre: GenreDescriptor;
        if (rawData.hasOwnProperty("genres")) {
            for (var i = 0; i < rawData.genres.length; i++) {
                let row: any = rawData.genres[i];
                genre = GenreDescriptor.import(row);
                response.genres.push(genre);
            }
        }
        return response;
    }
}

/**
 * This genre descriptor set the types that will be used for genres.
 */
export class GenreDescriptor {

    public id: number;
    public name: string;

    public static import(rawData: any) {
        let movie: GenreDescriptor = new GenreDescriptor();

        movie.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
        movie.name = rawData.hasOwnProperty('name') ? rawData.name: '';
        return movie;
    }
}
