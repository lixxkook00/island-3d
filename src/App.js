import './App.scss';
import Loading from './pages/Loading';

import MainPage from './pages/MainPage'
import Routers from './routers/Routers';

function App() {
  return (
    <div className="App">

      <Routers />

      <Loading />

    </div>
  );
}

export default App;
