import NavBar from "./components/Header/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemListContainer from "./components/Main/ItemListContainer";
import ItemDetailContainer from "./components/Main/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Provider from "./context/CartContext";
import Form from "./components/Forms/Form";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route
            exact
            path='/category/:categoryName'
            element={<ItemListContainer />}
          />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/checkout' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
