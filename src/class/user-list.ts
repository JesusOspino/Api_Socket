import { User } from "./user";

export class UserList {
    public list: User[] = [];

    constructor() {

    }

    public agregar(user: User) {
        this.list.push(user);
        console.log(this.list);

        return user;
    }

    public actualizarUsername(id: string, username: string) {
        for (const user of this.list) {
            if (user.id === id) {
                user.username = username;
                break;
            }
        }

        console.log('Actualizando user');
        console.log(this.list);

    }

    public getList() {
        return this.list;
    }

    public getUser(id: string) {
        return this.list.find(u => u.id = id)
    }

    public getUserSala(sala: string) {
        return this.list.find(u => u.sala = sala)
    }

    public borrarUser(id: string) {
        const tempuser = this.getUser(id);

        this.list = this.list.filter(u => u.id !== id)
        return tempuser;
    }
}