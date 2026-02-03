import './index.css'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Farmer from './pages/Farmer';
import Buyer from './pages/Buyer';
import NotFound from './pages/NotFound';


const App = () => {

  return (
    <div className="min-h-screen bg-[#8ba848] font-sans transition-all duration-500 sm:p-5">
       <Header/>
       <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/farmer' element={<Farmer/>}/>
          <Route path='/buyer' element={<Buyer/>}/>

          <Route path='*' element={<NotFound/>}/>
       </Routes>
    </div>
  
  )
};

export default App;
