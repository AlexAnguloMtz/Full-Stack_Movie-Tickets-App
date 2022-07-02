export class FetchService {
    
    public async get(url: string) : Promise<any> {
        const response = await fetch(url);
        return response.json();
    }

}