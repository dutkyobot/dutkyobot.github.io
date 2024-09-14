// server.js

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// 앱 초기화
const app = express();
const port = 3000;

// 업로드 디렉토리 설정
const uploadDir = 'uploads';

// 업로드 디렉토리가 없으면 생성
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

// Multer 설정: 파일 저장 위치와 파일 이름 정의
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // 파일 이름을 고유하게 설정
    }
});

// Multer 미들웨어
const upload = multer({ storage: storage });

// 정적 파일 제공 (클라이언트 HTML 파일)
app.use(express.static('public'));

// 이미지 업로드 엔드포인트
app.post('/upload', upload.single('image'), (req, res) => {
    if (req.file) {
        res.json({ message: 'Upload successful!', file: req.file });
    } else {
        res.status(400).json({ message: 'No file uploaded.' });
    }
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
