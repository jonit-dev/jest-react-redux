import React, { Component } from "react";
import Header from "../Header";
import "./styles.scss";
import GiftForm from "../GiftForm/GiftForm";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container app-container">
          <div className="col-md-12">
            <div className="jumbotron" data-test="jumbotron">
              <h2>Add your gift</h2>
              <p>Write down your gift and the click the button below</p>

              <GiftForm />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
