import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Homepage from './Homepage';
import Home from './home';
import QuoteApp from './QuoteApp';
import Contact from './contact';
import CountryList from './countries';
import CurrencyConverter from './Convertor';

// 1. Oddiy komponentlar (saxifalar)
// const Home =()=> <h2>Bosh sahifa</h2>;
const About =()=> <h2>Biz haqimizda</h2>;
// const Contact=()=> <h2>Aloqa bo'limi</h2>;

function App(){
  return(
    <BrowserRouter>
    {/* {2. Menu yaratish (Link ishlatamiz, <a> emas!)} */}
    <nav style={{padding: '20px', background: '#eee'}}>
      <Link to='/home' style={{marginRight:'10px'}}>Home</Link>
      <Link to='/about' style={{marginRight:'10px'}}>My projects</Link>
      <Link to='/country' style={{marginRight:'10px'}}>Countries</Link>
      <Link to="/cc" style={{marginRight:'10px'}}>Currency</Link>
      <Link to='men'>About me</Link>
    </nav>
    <div style={{padding:'20px'}}>
      <Routes>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/about' element={<QuoteApp />}></Route>
        <Route path='/country' element={<CountryList/>}></Route>
        <Route path='/men' element={<Homepage />}></Route>
        <Route path='/cc' element={<CurrencyConverter/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}
export default App
