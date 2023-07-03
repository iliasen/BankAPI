// import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  //const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter />
            <Footer/>
        </BrowserRouter>
    );
}

export default App
