import { Route, Routes } from 'react-router-dom';
import './App.css';
import Buttons from './Buttons';
import Main from './Main';
import NavBar from './NavBar';
import Retrives from './Retrives';

function App() {
  return (
    <div className="App" style={{border:"1px solid grey",margin:'50px 100px'}}>
      <NavBar/>
      <Buttons/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/retrive' element={<Retrives/>} />
      </Routes>
      
    </div>
  );
}

export default App;
