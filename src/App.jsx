import './boots.css'
import './global.css'

import {Outlet} from 'react-router-dom';
import Navbar from "./components/Nav/Navmenu";
import Footer from "./components/Footer/Footer";


function App() {

  return (

    <>
      
      <main className='content_aol'>
        <Navbar/>
        <Outlet/>
      </main>

      <Footer/>
    </>

  )
}

export default App
