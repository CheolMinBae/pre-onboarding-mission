import { Dispatch, SetStateAction, ChangeEventHandler } from "react"
import classNames from "classnames"
import styles from "./SearchInput.module.css"

interface SearchInputProps {
  value: string
  onChange: Dispatch<SetStateAction<string>>
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
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
      <button>🔍</button>
    </form>
  )
}
