// 설치한 express 모듈 불러오는 코드
const express = require('express');

// express 모듈 객체를 app이라는 이름을 가진 친구에게 넣어주기
const app = express();
app.set('port', process.env.PORT || 8080); // "port" : 8080 포트 번호 설정하기

// GET 요청과 URL localhost:8080/test 로 request가 오면 함수 실행
app.get('/test', (req, res, next) =>  {
    res.send('Hello kblaschool');
    console.log('Test Server');
});

// 서버 실행 시 포트 번호 8080번으로 서버를 실행
app.listen(app.get('port'), () =>  {
    console.log(app.get('port'), '번 포트에서 대기 중');
});