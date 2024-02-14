import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import ClientSide from './components/ClientSide';
import Product from './components/Product.jsx';

function App() {
  return (
    <div className="App">
      <header>

        <Product/>
        {/* <a href="/editprofil">Client</a> */}
<BrowserRouter>
<Routes>
{/* <Route path='/Product' element={<Product/>}/> */}
  {/* <Route path='editprofil' element={<ClientSide/>}/> */}
</Routes>
</BrowserRouter>
      </header>
    </div>
  );
}

export default App;
