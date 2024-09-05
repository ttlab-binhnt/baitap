import "./App.css";
import { LandingPage } from "./pages/landingPage";
import Data from "./pages/Data";
function App() {
  return (
    <>
      <LandingPage items={Data} />
    </>
  );
}

export default App;
