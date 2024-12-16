import { Routes, Route } from 'react-router-dom';
import './App.css'
import{
    HomePage
} from "./pages"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Board from "./pages/Board/Board";
import Error404Page from "./pages/Error404Page";
import AuthProvider from "./context/auth/AuthProvider";
import CardsProvider from "./context/cards/CardsProvider";
// import PrivateRoute from "./components/PrivateRoute";




function App() {
 
  return (
    <>
      <AuthProvider>
      <CardsProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <PrivateRoute> */}
            <Route path="/board" element={<Board />} />
          {/* </PrivateRoute> */}
          <Route path="*" element={<Error404Page />} />
        </Routes>

      </CardsProvider>
      </AuthProvider>
    </>
  )
}

export default App
