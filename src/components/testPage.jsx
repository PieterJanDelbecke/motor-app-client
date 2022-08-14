import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  height: 100vh;
  border: red solid 1px;
  margin: 0 auto; 
`;
const Block1 = styled.div`
  width: 400px;
  height: 400px;
  border: black solid 2px;
  margin: 10px;
  position: relative;
  right: 100px;
  color: red;
  background-color: yellow;
  opacity: 0.5;
`;
const Block2 = styled.div`
  width: 400px;
  height: 400px;
  border: black solid 2px;
  margin: 10px;
  position:absolute;
  right: 200px;
`;
const Block3 = styled.div`
  width: 400px;
  height: 400px;
  border: black solid 2px;
  margin: 10px;
`;

const H1 = styled.h1`
  text-align: center;
`

const TestPage = () => {
  return (
    <>
      <H1>Test Page</H1>
      <Container>
        <Block1>block 1</Block1>
        <Block2>block 2</Block2>
        <Block3>block 3</Block3>
      </Container>
    </>
  );
};

export default TestPage;
