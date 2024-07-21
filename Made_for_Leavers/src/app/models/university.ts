/*university.ts - Daniel Syrén (20105070)*/
export class University {
    email: string|null;
    name: string;
    webPage: string;

    constructor(email: string|null, name: string, webPage: string) {
        this.email = email;
        this.name = name;
        this.webPage = webPage;
    }
}