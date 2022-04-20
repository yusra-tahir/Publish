DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    user_id int,
    body varchar(140) NOT NULL
);
