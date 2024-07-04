import "./App.css";
import { ThemeProvider } from "./Context/ThemeContext";
import Fetching from "./components/Fetching";
import Timer from "./Timer";
import Counter from "./components/Counter";
import FIleAccepter from "./components/FIleAccepter";
import Input from "./components/Input";
import Pagination from "./components/Pagination";
import RegistrationForm from "./components/RegistrationForm";
import Routers from "./components/Routers";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import Toggle from "./components/Toggle";
import ToggleTheme from "./components/ToggleTheme";
import Weather from "./components/Weather";
import Dragable from "./components/Dragable";
import DragableUsingUseReducer from "./components/DragableUsingUseReducer";
import { LanguageProvider } from "./Context/LanguageContext";
import Translator from "./components/Translator";
import ImageGallery from "./components/ImageGallery";
import Accordian from "./components/Accordian";
import StarRating from "./components/StarRating";
import LoadMoreData from "./components/LoadMoreData";

const App = (props) => {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Input/> */}
      {/* <Toggle/> */}
      {/* <Fetching/> */}
      {/* <Timer/> */}
      {/* <TodoList/> */}
      {/* <Routers/> */}
      {/* <FIleAccepter/> */}
      {/* <Weather/> */}
      {/* <Search/> */}
      {/* <Pagination ItemPerPage={3}/>     */}

      {/* <ThemeProvider> */}
        {/* // provide children here  */}
        {/* <ToggleTheme /> */}
      {/* </ThemeProvider> */}

      {/* <RegistrationForm/> */}
      {/* <Dragable/> */}
      {/* <DragableUsingUseReducer/> */}

      {/* <LanguageProvider>
          <Translator/>
      </LanguageProvider> */}

      {/* <ImageGallery/> */}

      {/* <Accordian/> */}

      {/* <StarRating noOfStar={10}/> */}
      <LoadMoreData/>
      
    </div>
  );
};

export default App;
