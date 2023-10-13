
import './App.css';
import Add from './Components/Add';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import {Route,Routes} from 'react-router-dom'
import Addsub from './Components/Addsub';
import View from './Components/View';
function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path='/' element={<ProductList></ProductList>}></Route>
      <Route path='/add' element={ <Add></Add>}></Route>
      <Route path='/view/:id' element={ <View></View>}></Route>
      <Route path='/add_sub' element={ <Addsub></Addsub>}></Route>



    </Routes>
      <Footer></Footer>
    
    </div>
  );
}

export default App;
