import "./styles/App.module.scss";
import BaseLayout from "./layout";
import { BrowserRouter } from "react-router-dom";
import "./styles/variables.scss";
const App = () => {
  return (
    <BrowserRouter>
      <BaseLayout />
    </BrowserRouter>
  );
};

export default App;
