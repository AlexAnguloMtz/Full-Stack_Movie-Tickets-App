export class UrlService {

    public static baseUrl(): string {
        return `http://localhost:8080/movies`;
    }

    public static assembleUrl(baseUrl: string, restOfUrl: string): string {
        return baseUrl + UrlService._prependSlash(restOfUrl);
    }

    private static _prependSlash(restOfUrl: string) {
        return `/${restOfUrl}`;
    }

}