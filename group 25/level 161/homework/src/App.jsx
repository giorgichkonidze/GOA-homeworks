import Greeting from "./components/Greeting";
import Message from "./components/Message";
import Age from "./components/Age";
import Status from "./components/Status";

function App() {
  return (
    <div>
      <Greeting name="Davit" />
      <Greeting name="Nino" />
      <Greeting name="Luka" />

      <Message text="this is my first message" />
      <Age number={16} />
      <Status isOnline={true} />
      <Status isOnline={false} />
    </div>
  )
}
export default App