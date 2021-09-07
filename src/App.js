import react from "react";
import reactDom from "react-dom";

import Header from "./Components/Header/Header"
import {Map} from "./Components/Maps/Map";
import List from "./Components/List/List";


function App() {
  return (
    <>
    <div className="container-fluid m-0 p-0">
      <Header />
      <div className="container-fluid ">
          <section className="row">
            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
                <List />
            </div>
            <div className="com-12 col-md-8 col-lg-8 col-xl-8">
                <Map />
            </div>
          </section>
      </div>
    </div>

    </>
  )
}

export default App;
