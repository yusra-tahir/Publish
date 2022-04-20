const db = require('../db_config/config');

module.exports = class Post {
    constructor(data){
        this.id = data.id;
        this.name = data.name;
    };

    static get all(){ 
        return new Promise (async (resolve, reject) => {
            try {
                console.log(db);
                const result = await db.query('SELECT * FROM posts;');
                const posts = result.rows.map(a => new Post({ id: a.id, name: a.name }))
                resolve(posts);
            } catch (err) {
                reject("Error retrieving posts")
            }
        })
    };
}
