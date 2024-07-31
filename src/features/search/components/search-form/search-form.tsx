import { Dispatch, SetStateAction, ChangeEventHandler } from "react"
import classNames from "classnames"
import styles from "./search-form.module.css"

interface SearchFormProps {
  value: string
  onChange: Dispatch<SetStateAction<string>>
}

export default function SearchForm({ value, onChange }: SearchFormProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value)
  }

  return (
    <form className={classNames(styles["search-form"])}>
      <input
        className={classNames(styles["search-form__input"])}
        onChange={handleChange}
        id={"search-input"}
        value={value}
        type="text"
        placeholder="Please enter your keyword(s) to search."
        autoFocus
      />
      <button className={classNames(styles["search-form__button"])}>🔍</button>
    </form>
  )
}
