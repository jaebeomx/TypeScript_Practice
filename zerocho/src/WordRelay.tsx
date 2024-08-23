import { useCallback, useRef, useState } from "react";

export default function WordRelay() {
  const [word, setWord] = useState("제로초");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = useRef(null);

  const onSubmitForm = useCallback((e: React.FormEvent<HTMLFormElement>) => {}, []);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value),
    []
  );
  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input type="text" ref={inputEl} value={value} onChange={onChange} />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
}
