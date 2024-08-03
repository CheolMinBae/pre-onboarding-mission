export const highlightText = (text: string, highlight: string) => {
  if (!highlight || !text) return text;
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return parts.map((item, index) =>
    item.toLowerCase() === highlight.toLowerCase() ? (
      <b key={index} >{item}</b>) : (item));
};