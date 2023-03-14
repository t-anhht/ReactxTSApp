import { SetStateAction, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";

function App() {
  const [count, setCount] = useState(0);
  let items = ["Hà Nội", "TP Hồ Chí Minh", "Đà Nẵng", "Buôn Ma Thuột"];
  
  const handleSelectItem = (item: string) => {
        console.log(item);
  }

  const [alertVisiable, setAlertVisibility] = useState(false);

  const [formValue, setFormValue] = useState({
    email: ""
  });

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    const {name, value} = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const { email } = formValue;

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div>
        <Message />
      </div>
      <br></br>

      <div>
        <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/>
      </div>
      <br></br>

      <div>
        <Alert>
          Hello <span>there</span>
        </Alert>
      </div>

      <br></br>

      <div>
        {
          alertVisiable &&
          <Alert onClose={() => setAlertVisibility(false)}>
            Alert visible by Button
          </Alert>
        }
        <Button color="primary"
          onClick={() => setAlertVisibility(true)}>
          My Button
        </Button>
      </div>

      <br></br>

      <div>
        <Label>Email</Label>
        <Input 
        id="email" 
        name = "email" 
        errorMessage=""
        value={email}
        onChange={() => handleChange}/>
        <Button color="primary">Submit</Button>
      </div>
    </div>
  );
}

export default App;
