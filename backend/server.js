import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'board1',  // DB이름
});

db.connect((err) => {
    if (err) {
        console.error('데이터베이스 연결 오류:', err);
        return;
    }
    console.log('데이터베이스에 연결되었습니다.');
});

// 글 목록 조회 API (type별로 필터링)
app.get('/api/posts', (req, res) => {
    const { type } = req.query;  // 쿼리 파라미터로 type 받기

    if (!type) {
        return res.status(400).json({ success: false, message: 'type이 누락되었습니다.' });
    }

    const query = 'SELECT * FROM posts WHERE type = ? ORDER BY date DESC';

    db.query(query, [type], (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, message: '데이터베이스 조회 오류' });
        }

        // [추가된 부분] 글 목록에 순번 추가
        const postsWithNumber = results.map((post, index) => ({
            ...post,
            number: results.length - index,  // 역순으로 글 번호 매기기 (1~)
        }));

        res.status(200).json({ success: true, posts: postsWithNumber });  // 글 목록을 반환
    });
});

// 개별 게시물 조회 API
app.get('/api/posts/:id', (req, res) => {
    const { id } = req.params;

    // 게시물 조회 쿼리와 조회수 증가 쿼리 추가
    const selectQuery = 'SELECT * FROM posts WHERE id = ?';
    const updateViewsQuery = 'UPDATE posts SET views = views + 1 WHERE id = ?';

    // 조회수를 먼저 증가시키고, 게시물 정보를 조회
    db.query(updateViewsQuery, [id], (updateErr) => {
        if (updateErr) {
            console.error('조회수 증가 오류:', updateErr);
            return res.status(500).json({ success: false, message: '조회수 증가 오류' });
        }

        db.query(selectQuery, [id], (selectErr, results) => {
            if (selectErr) {
                console.error('데이터베이스 조회 오류:', selectErr);
                return res.status(500).json({ success: false, message: '데이터베이스 조회 오류' });
            }

            if (results.length === 0) {
                return res.status(404).json({ success: false, message: '게시물을 찾을 수 없습니다.' });
            }

            res.status(200).json({ success: true, post: results[0] });
        });
    });
});


// 글쓰기 API
app.post('/api/posts', (req, res) => {
    const { title, content, type } = req.body;  // 프론트엔드에서 전달받은 데이터

    if (!title || !content || !type) {
        return res.status(400).json({ success: false, message: '필수 필드가 누락되었습니다.' });
    }

    const query = 'INSERT INTO posts (title, content, type, date, views) VALUES (?, ?, ?, NOW(), 0)';

    db.query(query, [title, content, type], (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, message: '데이터베이스 삽입 오류' });
        }
        res.status(201).json({ success: true, message: '글 작성이 완료되었습니다.', id: result.insertId });
    });
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});
