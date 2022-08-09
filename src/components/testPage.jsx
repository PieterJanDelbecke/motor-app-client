import { useEffect, useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

import { GET_CUSTOMERS } from "../GraphQL/queries";
import { CREATE_CUSTOMER } from "../GraphQL/mutations";

const TestPage = () => {
  const [firstName, setFirstName] = useState("");
  const firstNameList = ["Adam", "Bob", "Charlie", "Delta", "Echo"];

  const { data: queryData, loading: queryLoading, error: queryError } = useQuery(GET_CUSTOMERS);
  const [
    createCustomer,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation(CREATE_CUSTOMER);

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    if (queryData) {
      console.log(queryData);
      setCustomers(queryData.getAllCustomers)
    }
  }, [queryData]);

  const addCustomer = async () => {
    await createCustomer({
      variables: {
        email: "Xreact@test.com",
        password: "XreactPassword",
        firstName: firstName,
        lastName: "Doe",
        phoneNumber: "0499888777",
      },
    });
    if (mutationError) {
      console.log(mutationError);
    }
    console.log(mutationData);
  };

  return (
    <>
      <h1>Test Page:</h1>
      <h2>Get Customers</h2>
      <select onChange={(e) => setFirstName(e.target.value)} defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Please Select
        </option>
        {firstNameList.map((firstNameItem) => {
          return <option key={firstNameItem} value={firstNameItem}>
            {firstNameItem}
          </option>;
        })}
      </select>
      <button onClick={addCustomer}>Create Customer</button>
    </>
  );
};

export default TestPage;
