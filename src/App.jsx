import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./components/home"
import SignUp from "./components/signUp"
import CustomerInfo from "./components/customerInfo"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/info" element={<CustomerInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
