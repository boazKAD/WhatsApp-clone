import Sidbar from "./components/Sidbar";
import Sidbar2 from "./components/Sidbar2";
import Home from './pages/home'

function App() {
  return (
      <div className="bg-primary  h-screen flex text-white">
        <Sidbar />
        <Sidbar2 />
        
        <Home />
      </div>
  );
}

export default App;