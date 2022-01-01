import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// memo() をつかうと、親コンポーネントが更新されても
// 子コンポーネントは再レンダリングされない
export const ChildArea = memo((props) => {
  console.log("ChildAreaコンポーネントの再レンダリング");

  const { open, onClickClose } = props;

  // 再レンダリングを理解しやすいよう、重い処理をあえて用意
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
