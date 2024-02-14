import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ClientSide from './components/ClientSide';

function App() {
  return (
    <div className="App">
      <header>
        <a href="/editprofil">Client</a>
<BrowserRouter>
<Routes>
  <Route path='editprofil' element={<ClientSide/>}/>
</Routes>
</BrowserRouter>
      </header>
    </div>
  );
}

export default App;
