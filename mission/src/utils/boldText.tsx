const boldText = (text: string, query: string) => {
  if (!query.trim()) return text;

  const parts = text.split(new RegExp(`(${query})`, "gi"));

  return parts.map((part, index) =>
    query.toLowerCase() === part.toLowerCase() ? (
      <strong key={index} className="font-bold">
        {part}
      </strong>
    ) : (
      part
    )
  );
};

export default boldText;
