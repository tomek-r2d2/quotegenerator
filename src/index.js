import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ========================================
// https://facebook.github.io/react/docs/handling-events.html
class GenerateButton extends React.Component {

  renderQuote() {

    return (
      <div>
        gothca
      </div>

    );
  }

  render() {
    return (
      <div>
        <button onClick={() => this.renderQuote()}>
          Wygeneruje Rdatowy cytat
      </button>
      </div>
    );
  }

}


class App extends React.Component {

  render() {
    return (

      <div>

        <GenerateButton />
      </div>



    );

  }

}

ReactDOM.render(<App />, document.getElementById("root"));

