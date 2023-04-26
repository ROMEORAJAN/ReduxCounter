
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Counts from "./counter/count"
function App() {
  
  return (
    
   <BrowserRouter>
   <h1>asdasd</h1>
   <Routes>
    <Route path='/' element={<Counts/>}  ></Route>
   
   </Routes>
   </BrowserRouter>
  );
}

export default App;
