import styled from "styled-components";
import { SCREEN } from "./utils/SCREEN";
import { Todolist } from "./component/Todolist/TodoList";

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
  @media (min-width: ${SCREEN.md}) {
    border-radius: 0.25rem;
    background-color: rgb(126, 126, 126);
    padding: 10% 0;
  }
`;

const ContentContainer = styled.div`
  width: 90%;
  background-color: #ffffff;
  margin: 0 auto;
  padding: 1rem;
  min-height: 80vh;
  @media (min-width: ${SCREEN.md}) {
    width: 70%;
  }
`;

export interface ITodoState {
  id: number;
  title: string;
  content: string;
  checked: boolean;
}
