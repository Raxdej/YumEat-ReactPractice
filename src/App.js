import TopNav from "./components/TopNav";
import Featured from "./components/Fetured"
import Delivery from "./components/Delivery";
import TopPicks from "./components/TopPicks";
import Meal from "./components/Meal";
import Categories from "./components/Categories";
import NewLetter from "./components/NewLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App max-w-[1520px]">
      <TopNav/>
      <Featured/>
      <Delivery/>
      <TopPicks/>
      <Meal/>
      <Categories/>
      <NewLetter/>
      <Footer/>
    </div>
  );
}

export default App;
