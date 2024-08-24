import { useCallback, useRef, useState } from "react";

const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

interface TryInfo {
  try: string;
  result: string;
}

const NumberBaseball = () => {
  const [answer, setAnswer] = useState(getNumbers());
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [tries, setTries] = useState<TryInfo[]>([]);
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputEl.current;
    if (value === answer.join("")) {
      setTries((t) => {
        return [...t, { try: value, result: "홈런!" }];
      });
      setResult("홈런!");
      alert("게임을 다시 실행합니다.");
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
      if (input) {
        input.focus();
      }
    } else {
      const answerArray = value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(",")}였습니다!`);
        alert("게임을 다시 시작합니다.");
        setValue("");
        setAnswer(getNumbers());
        setTries([]);
        if (input) {
          input.focus();
        }
      } else {
        console.log("답은", answer.join(""));
      }
    }
  }, []);

  return (
    <>
      <h1>result</h1>
      <form onSubmit={(e) => {}}>
        <input type="text" />
      </form>
    </>
  );
};

export default NumberBaseball;
