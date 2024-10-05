const fs = require('fs');
const path = require('path');

// urls.json 파일에서 URL 데이터를 가져옴
const urls = require('./urls.json');

// 각 단축 URL에 대해 리디렉션 HTML 파일 생성
Object.keys(urls).forEach(shortUrl => {
  const originalUrl = urls[shortUrl];
  const redirectHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta http-equiv="refresh" content="0; url=${originalUrl}" />
        <title>Redirecting...</title>
    </head>
    <body>
        <p>Redirecting to <a href="${originalUrl}">${originalUrl}</a></p>
    </body>
    </html>
  `;

  // 리디렉션 파일 저장 경로 설정
  const redirectPath = path.join(__dirname, 'redirects', shortUrl + '.html');
  
  // 리디렉션 HTML 파일 생성
  fs.writeFileSync(redirectPath, redirectHtml, 'utf8');
});

console.log('Redirect files generated successfully.');
