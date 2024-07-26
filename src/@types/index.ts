export interface Components {
  word: string;
  setWord: React.Dispatch<React.SetStateAction<string>>;
};

export interface Company {
  description: string;
  key: string;
  type: string;
};