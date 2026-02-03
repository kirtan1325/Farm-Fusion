import './index.css'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Farmer from './pages/Farmer';
import Buyer from './pages/Buyer';
import NotFound from './pages/NotFound';
import Main from './Components/Main';


const App = () => {

  return (
       <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/farmer' element={<Farmer/>}/>
          <Route path='/buyer' element={<Buyer/>}/>

          <Route path='*' element={<NotFound/>}/>
       </Routes>

  )
};

export default App;
