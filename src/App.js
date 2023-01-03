import { initNavigation } from "@noriginmedia/react-spatial-navigation";

import "./styles.css";
import CardContainer from "./CardContainer";

initNavigation();

export default function App() {
  return (
    <div className="App">
      <CardContainer />
    </div>
  );
}
