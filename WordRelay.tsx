import * as React from "react";
import { useState, useRef, useCallback } from "react";

// <> === React.Fragment
const WordRelay = () => {
  const [word, setWord] = useState("제로초");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = useRef<HTMLInputElement>(null);

  const onsubmitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const input = inputEl.current;
      if (word[word.length - 1] === value[0]) {
        setResult("딩동댕");
        setWord(value);
        setValue("");
        if (input) input.focus();
      } else {
        setResult("땡");
        setValue("");
        if (input) input.focus();
      }
    },
    [value]
  );

  const onChange = useCallback<
    (e: React.ChangeEvent<HTMLInputElement>) => void
  >((e) => setValue(e.currentTarget.value), []);

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onsubmitForm}>
        <input ref={inputEl} value={value} onChange={onChange} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default WordRelay;
