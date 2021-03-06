import React from "react";
import Home from "./Home";
import Speakers from "./Speakers";

export const ConfigContext = React.createContext();

const pageToShow = pageName => {
  if (pageName === "Home") return <Home />;
  if (pageName === "Speakers") return <Speakers />;
  return <div>Not Found</div>;
};

const configValue = {
  showSignMeUp: false,
  showSpeakerSpeakingDays: true
};

const App = ({ pageName }) => {
  return <ConfigContext.Provider value={configValue}>{pageToShow(pageName)}</ConfigContext.Provider>;
};

export default App;
