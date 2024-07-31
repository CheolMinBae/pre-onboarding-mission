import classNames from "classnames"
import styles from "Layout.module.css"
import type { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return <section className={classNames(styles.layout)}>{children}</section>
}
