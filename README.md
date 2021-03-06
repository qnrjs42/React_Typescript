타입스크립트는 자체적으로 babel처럼 최신문법을 ES3~ES5까지 지원해준다
그래서 babel를 잘 쓰진 않지만 쓰는 경우도 있다

webpack과 typescript 연결해주는 모듈

1. ts-loader
2. awesome-typescript-loader(atl)

---

실행 명령어

- npm run dev
- npx webpack

해당 명령어 실행하면 /dist/app.js 파일이 생긴다.

---

webpack.config.js : webpack 설정 파일
tsconfig.json : typescript 설정 파일

---

tsconfig.json 설정 중에
esModuleInterop": true <- 웬만하면 쓰지말고 그냥

import \* as React from "react";
-> 이렇게 사용하자

---

input!.focus();
-> input이 확실히 존재할 때 느낌표를 붙힌다
input이 존재할 때만 포커스
단점은 아주 작은 확률이라도 에러가 발생할 수 있다

대체 코드
if(input) input.focus();
-> 100% 안전

---

const [tries, setTries] = useState([]);
-> tries 타입이 never일 경우

```typescript
interface TryInfo {
  try: string;
  result: string;
}

const [tries, setTries] = useState<TryInfo[]>([]);
```

```typescript
// 제네릭을 쓰지 않을 경우 값의 타입이 any 또는 null로 타입이 지정된다.
// 제네릭을 이용하여 수동으로 값의 타입을 지정한다.
const [result, setResult] = useState<number[]>([]);
const timeout = useRef<number | null>(null);
```

---

interface는 별도의 파일로 분리하자

types.ts

---

```typescript
// string
const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};

// as const가 붙으면 readonly 값 고정
const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
} as const;
```

---

```typescript
const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
} as const;

// rspCoords의 값
type ImgCoords = typeof rspCoords[keyof typeof rspCoords];
const computerChoice = (imgCoords: ImgCoords) => {
  // rspCoords의 키, 강제 형 변환
  return (Object.keys(rspCoords) as ["바위", "가위", "보"]).find((k) => {
    return rspCoords[k] === imgCoords;
  })!; //undefined가 없다는 걸 확신할 때 느낌표를 붙힘
};

type ImgCoords = "0" | "-142px" | "-284px"; // rspCoords 변수 값이 바뀌면 이 코드도 똑같이 바꿔줘야 함
type ImgCoords = typeof rspCoords[keyof typeof rspCoords]; // rspCoords의 값 (rspCoords 변수 값만 바뀌면 된다, 유동적)
type ImgCoords = keyof typeof rspCoords; // rspCoords의 키
```
