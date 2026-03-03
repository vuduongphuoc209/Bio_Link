import { ReactNode } from "react";
import Header from "@/components/header/header";
import styles from "@/components/layout/layout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className={cx('main')}>{children}</main>
    </>
  );
}