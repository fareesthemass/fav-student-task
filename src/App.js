import Navbar from "./components/Navbar"
import { createContext, useState } from "react"
import Try from './Contextprovider'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Fav from "./Fav"
const Arrcontext = createContext()
function App() {

    const [arr, setarr] = useState(['hasan', 'farees', 'hussain', 'ali'])
    const [fav, setfav] = useState([])
    return (
        <><BrowserRouter>
            <Arrcontext.Provider value={{ arr, setarr, fav, setfav }}>
                <Routes>

                    <Route path="/" element={[<Navbar></Navbar>,<Try/>]}></Route>
<Route path="fav" element={[<Navbar></Navbar>,<Fav></Fav>]}></Route>

                </Routes>
            </Arrcontext.Provider>
        </BrowserRouter>
        </>)
}

export default App
export { Arrcontext }