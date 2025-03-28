import "./styles/global.scss";
import Navbar from "./components/Navbar/Navbar";
import Products from "./pages/Products";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
