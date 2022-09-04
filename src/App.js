

import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/main/main.component';
import Menu from './components/menu/menu.component';
import './index.css';


function App() {

  return (
    <Suspense fallback={'loading...'}>
      <Routes>
        <Route path='/' element={<Menu />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;



