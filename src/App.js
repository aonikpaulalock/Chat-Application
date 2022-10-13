import { ChatEngine} from 'react-chat-engine'
import './App.css';
function App() {
  const projectID = '041235c5-6df4-404f-96c8-c1b697dc8664';
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName="Aonik Paul Alock"
      userSecret="12345678"
    />
  );
}

export default App;
