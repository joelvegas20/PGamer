import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Pages/Home";
import About from "./containers/Pages/About";
import Contact from "./containers/Pages/Contact";
import Search from "./containers/Pages/Search";
import Error404 from "./containers/Errors/Error404";
import Detail from "./containers/Pages/Detail";
import Create from "./containers/Pages/Create";



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/search/:id" element={<Detail/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
