import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import LandingPage from './pages/App'
import Cadastro from './pages/cadastro/cadastro'

export default () => {
    return (
        <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route index element={<LandingPage />} />
                    <Route path='/cadastro' element={<Cadastro/>}/>
                </Routes>
        </BrowserRouter>
    )
}