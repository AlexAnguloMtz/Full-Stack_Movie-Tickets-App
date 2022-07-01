export class FetchService {
    
    async get(url: string) : Promise<any> {
        console.log(`called service with url ${url}`);
        const response = await fetch(url);
        return response.json();
    }

}