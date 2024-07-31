import classNames from "classnames"
import type { ReactNode } from "react"
import styles from "./Layout.module.css"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return <section className={classNames(styles.layout)}>{children}</section>
}
