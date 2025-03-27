import "./styles/global.scss";
import Navbar from "./components/Navbar/Navbar";
import Products from "./pages/Products";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Products />
      <h1>Protein Store Rosario</h1>
    </div>
  );
}

export default App;
