import SearchBar from "../components/SearchBar.tsx";
import SearchList from "../components/SearchList.tsx";
import {useState} from "react";

const MainPage = () => {
    const [value, setValue] = useState<string>('');
    return (
        <div>
            <SearchBar value={value} setValue={setValue}/>
            {value && <SearchList/>}
        </div>
    );
};

export default MainPage;