import { gql } from "@apollo/client";

export const CREATE_CUSTOMER = gql`

    mutation createCustomer(
        $email: String!
        $password: String!
        $firstName: String!
        $lastName: String!
        $phoneNumber:String!
    ){
        createCustomer(
            email: $email
            password: $password
            firstName: $firstName
            lastName: $lastName
            phoneNumber: $phoneNumber
        ){
            firstName
            lastName
            uuid
            id
        }
    }

`