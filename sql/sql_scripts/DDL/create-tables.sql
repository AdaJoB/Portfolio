--==== MAIN TABLES ====--

CREATE TABLE tag (
    tag_id INTEGER PRIMARY KEY AUTOINCREMENT,
    tag TEXT UNIQUE
);

CREATE TABLE post (
    post_id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    body TEXT,
    date TEXT
);

CREATE TABLE credentials (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    credential_id BLOB NOT NULL UNIQUE,
    public_key BLOB NOT NULL,
    login_count INTEGER NOT NULL DEFAULT 0
);

--==== MANY-TO-MANY TABLES ====--

-- relationship between post and tag tables
CREATE TABLE post_tag (
    post_id INTEGER,
    tag_id INTEGER,
    PRIMARY KEY (tag_id, post_id),
        FOREIGN KEY (tag_id) REFERENCES tag(tag_id),
        FOREIGN KEY (post_id) REFERENCES post(post_id)
);