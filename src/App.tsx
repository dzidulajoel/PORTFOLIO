import { Route, Routes } from "react-router-dom"
import Page from "./components/pages/Page"
import Admin from "./components/pages/Admin"

const App = () => {
        return (
                <>
                        <Routes>
                                <Route path="/" element={<Page/>}/>
                                <Route path="admin" element={<Admin/>}/>
                        </Routes>
                </>
        )
}

export default App
