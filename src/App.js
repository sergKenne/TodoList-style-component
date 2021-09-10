import {useState, useEffect} from 'react'
import styled from "styled-components";
import FooterButtons from './components/FooterButtons';
import ListButton from "./components/ListButton";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import data from './data.js'

const Container = styled.div`
  min-height: 100vh;
  max-width: 1400px;
  width: 50%;
  margin: 0 auto;
`
const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    padding: 0 12px;
`

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data)
  }, [])

  return (
    <Container>
        <Title>TodoInput</Title>
        <TodoInput />
        <Title>TodoList</Title>
        <ListButton />
        <TodoList tasks={tasks} />
        <FooterButtons />
    </Container>
  );
}

export default App;
