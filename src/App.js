import Timer from "./components/Timer";
import Form from "./components/Form";
import {Routes, Route, Link} from 'react-router-dom'
import { useState } from "react";
function App() {
  const [state, setState] = useState(true)
  return (
    <div className="App">
      {state && <Link onClick={()=>setState(false)} className="linkTimer" to='form'>Запустить таймер</Link>}
      <Routes>
        <Route path="/form" element={<Form setState={setState}/>}/>
        <Route path="/timer" element={<Timer setnewState={setState}/>}/>
      </Routes>    
    </div>
  );
}

export default App;
