import type { onChange } from "../types/eventHandler.type"
import styles from "./SearchForm.module.css"

interface ParamsType {
  onChange: onChange
}

export const SearchForm = ({ onChange }: ParamsType) => {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        autoFocus
        onChange={handleChangeInput}
        className={styles.textarea}
      />
      <button type="submit" className={styles.search}><img src="search.svg" alt="검색" /></button>
    </form>
  )
}

