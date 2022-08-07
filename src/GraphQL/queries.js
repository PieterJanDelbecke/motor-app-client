import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
  query {
    getAllCustomers {
      firstName
      lastName
      id
    }
  }
`;
