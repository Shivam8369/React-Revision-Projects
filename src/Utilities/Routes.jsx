import Counter from "../components/Counter";
import TodoList from "../components/TodoList";
import Toggle from "../components/Toggle";
import Input from "../components/Input";
import Fetching from "../components/Fetching";
import Timer from "../components/Timer.jsx";
import FileAccepter from "../components/FIleAccepter";
import Weather from "../components/Weather";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import RegistrationForm from "../components/RegistrationForm";
import Dragable from "../components/Dragable";
import ImageGallery from "../components/ImageGallery";
import Accordian from "../components/Accordian";
import StarRating from "../components/StarRating";
import LoadMoreData from "../components/LoadMoreData";
import MenuTree from "../components/MenuBar/MenuTree";
import menus from "../Utilities/MenuData.jsx";
import Scroll from "../components/Scroll_Indicator.jsx";
import ModalTest from "../components/Custom-Modal/ModalTest";
import TicTacToe from "../components/TicTacToe";
import OnMouseOut from "../components/OnMouseOut";
import { LanguageProvider } from "../Context/LanguageContext";
import Translator from "../components/Translator";
import { ThemeProvider } from "../Context/ThemeContext";
import ToggleTheme from "../components/ToggleTheme";

export const routesArray = [
  { path: "/", element: <TodoList /> },
  { path: "/counter", element: <Counter /> },
  { path: "/toggle", element: <Toggle /> },
  { path: "/Input", element: <Input /> },
  { path: "/fetching", element: <Fetching /> },
  { path: "/timer", element: <Timer /> },
  { path: "/todoList", element: <TodoList /> },
  { path: "/fileAccepter", element: <FileAccepter /> },
  { path: "/weather", element: <Weather /> },
  { path: "/search", element: <Search /> },
  { path: "/pagination", element: <Pagination ItemPerPage={3} /> },
  { path: "/registrationForm", element: <RegistrationForm /> },
  { path: "/dragable", element: <Dragable /> },
  { path: "/imageGallery", element: <ImageGallery /> },
  { path: "/accordian", element: <Accordian /> },
  { path: "/starRating", element: <StarRating noOfStar={10} /> },
  { path: "/loadMoreData", element: <LoadMoreData /> },
  { path: "/menuTree", element: <MenuTree menu={menus} /> },
  {
    path: "/scroll",
    element: <Scroll url={"https://dummyjson.com/products?limit=100"} />,
  },
  { path: "/modalTest", element: <ModalTest /> },
  { path: "/tictacToe", element: <TicTacToe /> },
  { path: "/onMouseOut", element: <OnMouseOut /> },
  {
    path: "/languageTranslator",
    element: (
      <LanguageProvider>
        <Translator />{" "}
      </LanguageProvider>
    ),
  },
  {
    path: "/theme",
    element: (
      <ThemeProvider>
        <ToggleTheme />
      </ThemeProvider>
    ),
  },
];
