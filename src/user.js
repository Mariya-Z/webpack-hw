import './user.css';
import './styles/user.sass';

export default class User {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    sayHi() {
        return `Hello, ${this.firstname} ${this.lastname}`;
    }
}