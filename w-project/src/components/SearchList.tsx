import { useState, useEffect } from "react";
import { dummy } from "../data";
import "../assets/styles/SearchList.scss";

interface Types {
  description: string;
  key: string;
  type: string;
}

interface Props {
  keyWord: string;
}

const searchList = ({ keyWord }: Props) => {
  const [data, setData] = useState<{ [key: string]: Types[] }>({});

  useEffect(() => {
    const dum: Record<string, Types[]> = dummy.reduce((acc, obj) => {
      if (!acc[obj.type]) {
        acc[obj.type] = [];
      }
      acc[obj.type].push(obj);
      return acc;
    }, {} as Record<string, Types[]>);

    setData(dum);
  }, []);

  const checkText = (text: string) => {
    const key = new RegExp(keyWord, "gi");
    text = text.replace(key, (match) => `<strong>${match}</strong>`);
    return text;
  };

  return (
    <>
      <div className="search-area">
        {Object.keys(data).map((category) => (
          <div className="category" key={category}>
            <div>{category}</div>
            {data[category].map((text, index) => (
              <div key={index} dangerouslySetInnerHTML={{ __html: checkText(text.description) }}></div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default searchList;
