
import Main from "./components/Main/Main";
import { HashRouter  as  Router, Routes, Route   } from 'react-router-dom';
import Agro from "./components/agroStore/Agro";
import SubAgro from "./components/subAgro/subAgro";
import { Registration } from "./components/Registration";
import {Password} from './components/Password'
import {Login} from './components/Login'
import {BasketList} from './components/BasketList'
import {Item} from './components/Item'
import {Context} from './components/Context'


function App() {



  return (
     <>
      <div>
        <Router>
          <Context>
            <Routes>
              <Route exact path="/" element={<Main/>} />
              <Route path="/agroStore" element={<Agro/>} />
              <Route path="/register" element={<Registration />} />
              <Route path="/password" element={<Password />} />
              <Route path="/login" element={<Login />} />
              <Route path="/basket" element={<BasketList />} />
              <Route path="/item" element={<Item />} />
              <Route path="/agroStore/subAgro" element={<SubAgro/>} />
            </Routes>
          </Context>
        </Router>
      </div>
    </>
    
  );
}

export default App;
