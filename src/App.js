import React, { Component } from "react";
import Header from "./Components/Header" ;
import Artist from "./Components/Artist" ;

import "./App.css";


class App extends Component {
  render() {
    return (
      <div class="App">
        <Header class="App-header" header="Favorite Artist" />
        <Artist src="http://t1.gstatic.com/images?q=tbn:ANd9GcTrZDjfV3IswSYp_FhwAdAiNOycnHhooUKtYq9SIPiElrQUzEfB" name="Eden" topSong="Wake Up" />
      </div>
    )
  }
}

export default App;
