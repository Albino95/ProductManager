import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element={<AllProducts />} exact path= '/' default />
        <Route element = {<OneProduct />} exact path = '/products/:id' />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
