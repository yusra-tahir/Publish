DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    writer VARCHAR(255) NOT NULL,
    content VARCHAR(3000) NOT NULL
);
