import styled from "styled-components";
import ListButton from "./components/ListButton";
import TodoInput from "./components/TodoInput";

const Container = styled.div`
  min-height: 100vh;
  max-width: 1400px;
  width: 70%;
  margin: 0 auto;
`
const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    padding: 0 12px;
`

function App() {
  return (
    <Container>
        <Title>TodoInput</Title>
        <TodoInput />
        <Title>TodoList</Title>
        <ListButton />
        <h3>salut</h3>
    </Container>
  );
}

export default App;
