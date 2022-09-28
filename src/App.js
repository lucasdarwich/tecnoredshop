import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import CarouselGreet from "./components/Carousel";

function App() {
  return (
    <div className='App'>
      <header>
        <NavBar />
        <ItemListContainer greeting={<CarouselGreet />} />
      </header>
    </div>
  );
}
export default App;
