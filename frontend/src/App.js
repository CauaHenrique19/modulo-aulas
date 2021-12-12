import Routes from "./routes";
import ContextProvider from "./Context/context";

import './global.css'

const App = () => {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  )
}

export default App;
