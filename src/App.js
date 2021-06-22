import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import HomeScreenContent from "./Components/HomeScreenContent/HomeScreenContent";
import PropertyDetailPage from "./Components/PropertyDetailPage/PropertyDetailPage";

function App() {
  const [isOpenProperty, setOpenProperty] = useState(false);

  const openProperty = (value = true) => {
    setOpenProperty(value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {!isOpenProperty ? (
            <HomeScreenContent openProperty={openProperty} />
          ) : (
            <PropertyDetailPage openProperty={openProperty} />
          )}
        </div>
      </header>
      <footer>copyright </footer>
    </div>
  );
}

export default App;
