import { Routes, Route } from 'react-router-dom';
import './App.css'
import{
    HomePage
} from "./pages"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Board from "./pages/Board/Board";
import AuthProvider from "./context/auth/AuthProvider";
import CardsProvider from "./context/cards/CardsProvider";




function App() {
 
  return (
    <>
      <AuthProvider>
      <CardsProvider>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/board" element={<Board />} />
        </Routes>

      </CardsProvider>
      </AuthProvider>
    </>
  )
}

export default App
