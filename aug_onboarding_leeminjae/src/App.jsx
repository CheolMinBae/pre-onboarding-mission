import "./App.css";
import SelectBox from "./components/SelectBox.jsx";
import { dummy } from "./data/data.js";
function App() {
    return (
        <>
            <SelectBox data={dummy}/>
        </>
    );
}

export default App;
