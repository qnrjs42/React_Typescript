타입스크립트는 자체적으로 babel처럼 최신문법을 ES3~ES5까지 지원해준다
그래서 babel를 잘 쓰진 않지만 쓰는 경우도 있다

webpack과 typescript 연결해주는 모듈

1. ts-loader
2. awesome-typescript-loader(atl)

---

실행 명령어

- npm run deb
- npx webpack

---

webpack.config.js : webpack 설정 파일
tsconfig.json : typescript 설정 파일

---

tsconfig.json 설정 중에
esModuleInterop": true <- 웬만하면 쓰지말고 그냥

import \* as React from "react";
-> 이렇게 사용하자
