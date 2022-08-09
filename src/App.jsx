import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

import Home from "./components/home"
import SignUp from "./components/signUp"
import CustomerDetailPage from "./components/customerDetailsPage"
import CustomerInfo from "./components/customerInfo"
import TestPage from "./components/testPage"

const errorLink = onError(({ graphqlErrors, networkError}) => {
  if (graphqlErrors){
    graphqlErrors.map(({message, location, path}) => {
      alert (`Graphql error ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:8000/graphql"})
])

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/customerdetails" element={<CustomerDetailPage />} />
          <Route path="/info" element={<CustomerInfo />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
    </>
  )
}

export default App
