export class User {
    public nickName;
    public email;
    public password;
    public date;

    constructor(nickName: string, email?: string, password?: string  ) {
     this.nickName =  nickName;
     this.email = email;
     this.password = password;
     this.date = new Date();
    }

}
