import { v4 as uuidv4 } from 'uuid';

export default class Post {
    static posts = []
    constructor(data) {
        this.id = uuidv4();
        this.userId = data.userId;
        this.caption = data.caption;
        this.postUrl = data.postUrl
    }

    static getAllPost() {
        return this.posts
    }

    static creatPost(data) {
        let createdPost = new Post(data);
        if (!createdPost) {
            return false
        }
        return createdPost;
    }

    static getUserPosts(userId) {
        return this.posts.map(post => post.userId === userId);
    }

    static getPostById(id) {
        return this.posts.map(post => post.id === id);
    }
}