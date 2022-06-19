// 설치한 express 모듈 불러오는 코드
const express = require('express'); 

// express 모듈 객체를 app이라는 이름을 가진 친구에게 넣어주기
const app = express();
app.set('port', process.env.PORT || 8080); // "port" : 8080 포트 번호 설정하기, key-value

// 애플리케이션 레벨 미들웨어
// 1. 모든 요청에서 미들웨어를 실행시키는 코드, 인자, 파라미터(parameter)
app.use((req, res, next) => {
    console.log('모든 요청에서 실행되는 부분입니다');
    next(); // 다음 미들웨어로 이동, 미들웨어 3가지 정도 있다고 해도 여기서 그냥 끝내버립니다.
});

// 2. Method : GET, URL : localhost:8080/test 미들웨어가 실행되는 코드
// GET 요청과 URL localhost:8080/test 로 request가 오면 함수 실행
app.get('/test', (req, res, next) =>  {
    res.send('Hello kblaschool');
    console.log('Test Server');
});

// 에러를 발생시키는 미들웨어를 연습
app.get('/error', (req, res, next) => {
    throw new Error('에러 처리 미들웨어 실행'); // 에러 발생 코드
});

// 3. 에러 처리 미들웨어
app.use((err, req, res, next) => {
    console.error(err); // 콘솔 창에 에러에 대한 정보
    res.status(500).send(err.message); // 사용자가 보는 메시지
});

// 서버 실행 시 포트 번호 8080번으로 서버를 실행, app,get('port') = 8080
app.listen(app.get('port'), () =>  {
    console.log(app.get('port'), '번 포트에서 대기 중');
});


// 미들웨어의 가장 중요한 특징 중 하나는 실행 순서가 위에서 아래로 진행됩니다.