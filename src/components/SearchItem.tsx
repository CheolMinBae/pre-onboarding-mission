type Props = {
  search: string;
  description: string;
};

export function SearchItem({search, description}: Props) {
  const regex = new RegExp(`(${search})`, 'gi');

  const parts = description.split(regex);

  const newDescription =
    parts.map((part, index) => regex.test(part) ? <strong key={index}>{part}</strong> : part)

  return (
    <div>
      {newDescription}
    </div>
  );
};