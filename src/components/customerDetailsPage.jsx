import { useState } from "react";

const CustomerDetailPage = () => {
  const [customerId, setCustomerId] = useState("");
  const [streetNumber, setStreetNumber] = useState(0);
  const [streetName, setStreetName] = useState("");
  const [suburb, setSuburb] = useState("");
  const [postcode, setPostcode] = useState(0);
  const [state, setState] = useState("");

  const handleSubmit = () =>{
    const response = {
      streetNumber: streetNumber,
      streetName: streetName,
      suburb: suburb,
      postcode: postcode,
      state: state
    }
    console.log("response", response)
  }
  return (
    <>
      <h1>Customer Details Page</h1>
      <form>
        <div>
          <label htmlFor="streetNumber">Street Number</label>
          <input
            type="text"
            name="streetNumber"
            id="streetNumber"
            value={streetNumber}
            onChange={(e) => setStreetNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="streetName">Street Name</label>
          <input
            type="text"
            name="streetName"
            id="streetName"
            value={streetName}
            onChange={(e) => setStreetName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="suburb">Suburb</label>
          <input
            type="text"
            name="suburb"
            id="suburb"
            value={suburb}
            onChange={(e) => setSuburb(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="postcode">PostCode</label>
          <input
            type="text"
            name="postcode"
            id="postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default CustomerDetailPage;
