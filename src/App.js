import { useState } from "react";
import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  const [showDropdown, setShowDropdown] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function handleAppClick(e) {
    if (!(document.getElementById('dropdownNavbarLink').contains(e.target))) {
      setShowDropdown(false)
    }
  }

  return (
    <div onClick={handleAppClick} className="App">
      <Header showDropdown={showDropdown} setShowDropdown={setShowDropdown} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <AllRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Footer />
    </div>
  );
}

export default App;
