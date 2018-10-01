import { TvList } from './tvseries.type';

describe('TV List Type', () => {

    let tvSeriesType: TvList;

    beforeEach(() => {
        tvSeriesType = new TvList();
    });

    it('should create the list of TV Series', () => {
        let response = {
            "total_pages": 1,
            "results": [{
                "id": 550,
                "name": "Game of Life",
                "poster_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
            }, {
                "id": 551,
                "name": "Rick & Morty",
                "poster_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg",
            }]
        };

        tvSeriesType = TvList.import(response);

        expect(tvSeriesType.tv_series[0].name).toBe("Game of Life");
        expect(tvSeriesType.tv_series[1].name).toBe("Rick & Morty");
        expect(tvSeriesType.total_pages).toBe(1);
    });

    it('should create the list of Tv Series with empty values', () => {
        let response = {
            "results": [
                { "test": "should appear empty values" },
            ]
        };

        tvSeriesType = TvList.import(response);

        expect(tvSeriesType.tv_series[0].id).toBe(0);
        expect(tvSeriesType.tv_series[0].name).toBe("");
        expect(tvSeriesType.tv_series[0].poster_path).toBe("");
        expect(tvSeriesType.total_pages).toBe(0);
    });

    it('should skip the first conditionals for TvList', () => {
        let response = {
            "testing": [
                { "test": "should appear empty values" },
            ]
        };

        tvSeriesType = TvList.import(response);

        expect(tvSeriesType.tv_series.length).toBe(0);
    });

});
