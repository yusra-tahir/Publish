const db = require("../dbConfig/init");
const Post = require("./Post");

module.exports = class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.writer = data.writer;
    this.content = data.content;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        let result = await db.query("SELECT * FROM posts;");
        let posts = result.rows.map((p) => new Post(p));
        resolve(posts);
      } catch (err) {
        reject("Error retrieving posts");
      }
    });
  }

  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        let result = await db.query(
          `SELECT * FROM posts WHERE posts.id = $1;`,
          [id]
        );
        let post = new Post(result.rows[0]);
        resolve(post);
      } catch (err) {
        reject("Post not found");
      }
    });
  }

  static async create(postData) {
    return new Promise(async (resolve, reject) => {
        try {
            const { title, writer, content} = postData;
            let result = await db.query(`INSERT INTO posts (title, writer, content) VALUES ($1, $2, $3) RETURNING *;`, [ title, writer, content]);
            resolve (result.rows[0]);
        } catch (err) {
            reject('Post could not be created');
        }
    });
};

};
