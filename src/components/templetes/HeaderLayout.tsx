import { memo, FC, ReactNode } from "react";
import { Header } from "../organisms/layout/Header";

type Props = {
  //ReactNodeは下のタグで囲った要素を渡せる
  children: ReactNode;
};
export const HeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
