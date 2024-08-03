import type { onChange } from "../types/eventHandler.type"

interface ParamsType {
  onChange: onChange
}

export const SearchForm = ({ onChange }: ParamsType) => {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <form>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        autoFocus
        onChange={handleChangeInput}
      />
    </form>
  )
}

