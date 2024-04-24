import { useState } from "react";
import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  const [showDropdown, setShowDropdown] = useState(false)

  function handleAppClick(e) {
    if (!(document.getElementById('dropdownNavbarLink').contains(e.target))) {
      setShowDropdown(false)
    }
  }

  return (
    <div onClick={handleAppClick} className="App">
      <Header showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
