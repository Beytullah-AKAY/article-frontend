import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './page/homepage';
import Login from './page/Login';
import Register from './page/Register';
import ToArticle from './page/listenarticle'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/Makaledinle' element={<ToArticle/>} />



    </Routes>
    </BrowserRouter>
  );
}
export default App;
