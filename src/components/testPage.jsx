import { useState, useRef } from "react"


const TestPage = () => {
  const [name, setName] = useState("")
  const inputRef = useRef()

  const handleClick = () => {
    console.log(inputRef)
    const inputObject = inputRef?.current
    console.dir(inputObject)
  }

    console.log("Name: ", name)
  return(
      <>
      <h1>useRef test</h1>
      <label htmlFor="firstName">First Name: </label>
      <input ref={inputRef} type="text" name="firstName" value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={handleClick}>Click</button>
    </>
  )
}

export default TestPage