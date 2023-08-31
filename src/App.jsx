import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Table from "./components/Table"
import AddPage from "./components/AddPage"
import EditPage from "./components/EditPage"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" Component={Table} />
          <Route path="/add" Component={AddPage} />
          <Route path="/edit/:id" Component={EditPage} />
        </Routes>
    </BrowserRouter>
  )
}

export default App