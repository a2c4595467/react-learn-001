/**
 * 再レンダリングの最適化を学ぶ。
 * 2022.01.01
 * @see https://www.udemy.com/course/react_stepup/
 */
import "./styles.css";
import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = (e) => {
    setOpen(!open);
  };

  // アロー関数で記述すると、毎回生成される関数としてstate,propsが
  // 変更されると解釈されてしまう
  // const onClickClose = () => setOpen(false);
  // ↓↓
  // useCallBack() で関数を使い回す。(関数のmemo化)
  const onClickClose = useCallback(
    // 第２引数で見張る値を指定する
    () => setOpen(false),
    [setOpen]
  );

  return (
    <>
      <div className="App">
        <input value={text} onChange={onChangeText} />
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose} />
      </div>
    </>
  );
}
