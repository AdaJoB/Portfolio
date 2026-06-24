--==== MAIN TABLES ====--

CREATE TABLE tag (
    tag_id INTEGER PRIMARY KEY AUTOINCREMENT,
    tag TEXT
);

CREATE TABLE title (
    title_id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT
);

CREATE TABLE post (
    post_id INTEGER PRIMARY KEY AUTOINCREMENT,
    body TEXT,
    post_date TEXT,
    title_id INTEGER,
        FOREIGN KEY (title_id) REFERENCES title(title_id)
);

CREATE TABLE user (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name TEXT
);

--==== MANY-TO-MANY TABLES ====--

-- relationship between post and tag tables
CREATE TABLE post_tags (
    post_id INTEGER,
    tag_id INTEGER,
    PRIMARY KEY (tag_id, post_id),
        FOREIGN KEY (tag_id) REFERENCES tag(tag_id),
        FOREIGN KEY (post_id) REFERENCES post(post_id)
);