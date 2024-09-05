import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

export default class User {
    static users = [];
    constructor(name, email, password) {
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static getAllUsers() {
        return users;
    }

    static checkExisting(email) {
        let userExist = false
        if (this.users.find(user => user.email === email)) {
            userExist = true
        }
        return userExist;
    }

    static async userSignUp(data) {
        let { name, email, password } = data;
        // let bcrypt the password and store
        try {
            const hash = await bcrypt.hash(password, 10); // Hashing the password asynchronously
            const user = new User(name, email, hash); // Storing the hashed password
            this.users.push(user);
            return user;
        } catch (error) {
            throw new Error('Error signing up user');
        }
    }
    static async userLogin(data) {
        const { email, password } = data;
        const user = this.users.find(user => user.email === email);       

        if (!user) {
            return false; // User not found
        }
        try {
            const isMatch = await bcrypt.compare(password, user.password); // Comparing the hashed password
            return isMatch; // Returns true if the password matches, otherwise false
        } catch (error) {
            console.error('Error comparing passwords:', error);
            return false;
        }
    }
}