import styled from "styled-components";
import { SCREEN } from "./utils/SCREEN";
import { Todolist } from "./component/Todolist/TodoList";

export interface ITodoState {
  id: number;
  title: string;
  content: string;
  checked: boolean;
}

function App() {
  return (
    <PageContainer>
      <ContentContainer>
        <div style={{ textAlign: "center" }}>
          <h1>TODOLIST</h1>
        </div>
        <Todolist />
      </ContentContainer>
    </PageContainer>
  );
}

export default App;

const PageContainer = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  @media (min-width: ${SCREEN.md}) {
    background-color: rgb(126, 126, 126);
    padding: 5% 0 4%;
  }
`;

const ContentContainer = styled.div`
  width: 90%;
  background-color: #ffffff;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.5rem;
  min-height: 80vh;
  @media (min-width: ${SCREEN.md}) {
    box-shadow: 5px 5px 12px 1px rgba(0, 0, 0, 0.5);
    width: 70%;
  }
`;
