import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ========================================
// https://facebook.github.io/react/docs/handling-events.html

class Quotes {

  constructor() {
    console.log("sdfdsfds");

    this.quotes = ["Zamknij się!",
      "Tomek, czy Tobie też staje (na signer-ze)?",
      "Jeśli Content-Transfer-Encoding było base64 to dataHandler part.getContent zwraca"];
    this.lastQuote = null;
  }

  generateQuote() {

    console.log("generuje !!");
    let tmp = -1;

    do {
      tmp = Math.floor((Math.random() * this.quotes.length) + 1);
       }
    while (tmp === this.lastQuote)

    console.log(this.quotes[tmp]);

    this.lastQuote = tmp;
    return this.quotes[tmp];
  }
}


class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      data: 'Wygeneruj cytat',
      quote: new Quotes()
    }

    this.updateState = this.updateState.bind(this);

  };

  updateState() {
    console.log("robie update");

    this.setState({ data: this.state.quote.generateQuote() })
  }

  render() {
    return (
      <div>
        <button onClick={this.updateState}>Wygeneruj cytat</button>
        <h4>{this.state.data}</h4>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

