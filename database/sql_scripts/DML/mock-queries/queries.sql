--==== USER ====--

SELECT *
FROM user;

SELECT user_name
FROM user;

--==== POST ====--

SELECT *
FROM post;

SELECT t.title, p.body, p.post_date
FROM title t, post p
WHERE t.title_id = p.title_id;

SELECT ti.title, ta.tag
FROM title ti, post p, tag ta, post_tags pt
WHERE ti.title_id = p.title_id
AND p.post_id = pt.post_id
AND ta.tag_id = pt.tag_id;

SELECT t.tag, COUNT(p.post_id)
FROM tag t, post p, post_tags pt
WHERE t.tag_id = pt.tag_id
AND p.post_id = pt.post_id
GROUP BY p.post_id;

SELECT COUNT(t.tag)
FROM tag t, post p, post_tags pt
WHERE t.tag_id = pt.tag_id
AND p.post_id = pt.post_id
AND t.tag = 'Blue';