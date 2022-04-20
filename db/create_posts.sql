DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    writer varchar(255) NOT NULL,
    content varchar(3000) NOT NULL
);
