export class User {
    public id: string;
    public username: string;
    public sala: string;

    constructor(id: string) {
        this.id = id;
        this.username = 'Anonimo';
        this.sala = 'sin sala';
    }
}