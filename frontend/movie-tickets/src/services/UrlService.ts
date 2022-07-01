export class UrlService {

    static baseUrl(): string {
        return `http://localhost:8080/movies`;
    }

    static assembleUrl(baseUrl: string, restOfUrl: string): string {
        return baseUrl + UrlService._prependSlash(restOfUrl);
    }

    static _prependSlash(restOfUrl: string) {
        return `/${restOfUrl}`;
    }

}