
import "./App.css";
import { Person, Country } from "./Person";

function App() {
  return (
    <div className="App">
    <Person 
    name={"Roshan"}
    email="roshankhatri212@gmail.com"
    age={22}
    isMarried={false}
    friends={["Ram","Shyam","Hari"]}
    country={Country.Nepal}/>
    </div>
  );}
  export default App;