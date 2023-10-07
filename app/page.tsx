'use client'

import Cardstat from "./components/card";
import Navtop from "./components/navpar";
import Allcard from './components/Allcard'

function app() {
  return (
    <>
    <Navtop/>
    <div className="container">

      <Allcard />

    </div>
    </>
    
  );
}

export default app;