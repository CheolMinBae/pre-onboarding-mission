import styles from './SearchBox.module.css';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder="Search for companies, people, or job titles..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default SearchBox;