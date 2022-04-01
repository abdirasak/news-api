\c nc_news_test

-- SELECT * FROM topics;
SELECT * FROM comments WHERE article_id = 3;
SELECT * FROM comments;
SELECT * FROM users;


-- SELECT articles.*, count(comments.comment_id) FROM articles 
-- LEFT JOIN comments
-- ON articles.article_id = comments.article_id
-- GROUP BY articles.article_id
-- ORDER BY created_at DESC


 

