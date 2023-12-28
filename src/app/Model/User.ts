export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    profilepic?: string;
    roles: string;
    constructor(
        id = -1,
        name = '',
        email = '',
        password = '',
        profilepic = '',
        roles = ''
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.profilepic = profilepic;
        this.roles = roles;
    }

}