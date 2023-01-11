
import './App.scss';
import Home from './components/home/Home';
// import Home from './components/home/Home'
// import Login from './components/login/Login';

// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from 'react-router-dom'
// import Forgot from './components/forgot/Forgot';

function App() {
  return (
    <div className='App'>
    <Home />
      {/* <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Login />} />
          <Route  path='/forgot' element={<Forgot />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;