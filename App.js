import React, { Component } from "react";
import "./styles.css";
import Student from "./components/Student";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h2 className="leadersboardheading">Leadersboard</h2>
        <hr />
        <Student
          name="Laviza Falak Naz"
          University="NED University"
          score={350}
        />
        <Student
          name="Zeeshan Siddiqui"
          University="Bahria University"
          score={345}
        />
        <Student
          name="Arsalan Sheikh"
          University="NUST University"
          score={302}
        />
        <Student
          name="Tanzeela Sahar"
          University="Karachi University"
          score={396}
        />
        <Student name="Amna Imran" University="IoBM Institute" score={330} />
      </div>
    );
  }
}

export default App;
