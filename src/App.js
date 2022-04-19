import './App.css';
import Insert from "./componentes/Insert";
import {useState} from "react";
import Menu from "./componentes/Menu";

function App() {

  const [menu, setMenu] = useState(false);

   const changeMenu = () => {
       setMenu(!menu);
   }

  return (
    <div className="App">
        <div className="container-insert">
            {menu ? <Menu change={changeMenu}/> : <Insert change={changeMenu}/>}
        </div>
    </div>
  );
}

export default App;
