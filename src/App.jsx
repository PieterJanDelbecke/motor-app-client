import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./components/home"
import SignUp from "./components/signUp"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
