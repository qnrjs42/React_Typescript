import * as React from "react";
import { TryInfo } from "./types";

// 함수형 컴포넌트 - React.FunctionComponent
// 제네릭은 props 자리
const Try: React.FunctionComponent<{ tryInfo: TryInfo }> = ({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
};
export default Try;
