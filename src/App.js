import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/routes/Home';
import About from './components/routes/About';
import Contact from './components/routes/Contact';
import Service from './components/routes/Service';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
