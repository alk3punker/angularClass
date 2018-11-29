export class Json {
    id: number;
    name: string;
    role: string;
    gcwwe: boolean;

    constructor(id: number, name: string, role: string = 'student', gcwwe: boolean) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.gcwwe = gcwwe;
    }
}
