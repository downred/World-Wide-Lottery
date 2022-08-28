import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavbarComponent from "./components/navbar_comp";
import Home from "./Home";
import Winners from "./Winners";
import Players from "./Players";
import Statistics from "./Statistics";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/player";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavbarComponent />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="home" />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="winners" element={<Winners />}></Route>
            <Route path="players" element={<Players />}></Route>
            <Route path="statistics" element={<Statistics />}></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
