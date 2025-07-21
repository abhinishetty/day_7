import First from "./First";
import Second from "./second";
import Third from "./third"; 
import Fourth from "./Fourth"
import Card from "./Card";
function App() {
  return (
    <div>
      <h1>React app with vite tool</h1>
      <First />
      <Second />
      <Third />
      <Fourth/>
      <Card name="adhi" city="mangalore"/>
      <Card name="Rayna" city="Bangalore"/>
      <Card name="shri" city="puttur"/>
    </div>
  );
}

export default App;
