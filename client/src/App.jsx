import { Route, Routes } from "react-router-dom";
import LandingPage from './views/LandingPage/LandingPage';
import "tailwindcss/tailwind.css"



function App() {

  return (
    <div>
      <Routes> 
        <Route path="/" element={<LandingPage />}/>
      </Routes>
    </div>
  )
}

export default App
