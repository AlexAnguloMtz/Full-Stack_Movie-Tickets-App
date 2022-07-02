import { Movie } from "../common/types/Movie";
import { DateFormatter } from "../common/utility/DateFormatter";
import { FetchService } from "./FetchService";
import { UrlService } from "./UrlService";

export class MovieService {

    _fetchService: FetchService;

    constructor() {
        this._fetchService = new FetchService();
    }

    public getMoviesForDate(date: Date): Promise<Movie[]> {
        const urlForDate: string = this._assembleUrlForDate(date);
        return this._fetchService.get(urlForDate);
    }

    private _assembleUrlForDate(date: Date): string {
        const baseUrl: string = UrlService.baseUrl(); 
        const restOfUrl: string = DateFormatter.formatForUrl(date);
        return UrlService.assembleUrl(baseUrl, restOfUrl);
    }
    
}