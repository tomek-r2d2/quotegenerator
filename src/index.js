import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Quotes {

  constructor() {

    this.quotes = ["Zamknij się!",
      "Tomek, czy Tobie też staje (na signer-ze)?",
      "Nigdy się nie nauczysz, prawda? Mimo, że nie związane, to wpychasz dalej do tych zgłoszeń.",
      "Komentarz w kodzie (SendBookWorkerBean)" +
      " Usówanie nie urzywanego setSendBookGroup",
      "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died. [...]",
      "tak teraz ten tak i przydałoby sie",
      "Moja rekomendacja: wycofać wszystko z tego zgłoszenia i nie robić żadnych innych \"drobnych poprawek\" do historii. Nigdy.",
      "Ze swojej strony dodam jeszcze: biedny Mirek, coś nie ma szczęścia przy wyborze zgłoszeń, którymi się zajmuje :).",
      "Te uprawnienia do dokumentów na listach w przesyłkach i sprawach to prawdziwa stajnia Augiasza. Próbowałem tam coś posprzątać" +
      " ale nie jestem Heraklesem (ani tym bardziej Chuckiem Norrisem). Zwątpiłem i zostawiłem ten bałagan w spokoju. Jako rozwiązanie problemu proponuję beczkę napalmu...",
      "Ma ktoś maskę przeciwgazową? Przecież tam się drzwi rozpuszczają od wewnętrznej strony!",
    ];

    this.authors=["Andrzej Sz",
    "Paulina H.",
    "Krzysztof O.",
    "Tomasz P.",
    "Eclipsjusz, faliture test",
    "Paulina W.",
    "Krzysztof O",
    "Krzysztof O",
    "Krzysztof O",
    "Kamil S"
    ];

    this.index=null;
    this.lastQuote = null;
  }

  generateQuote() {
    let tmp = -1;
    do {
      tmp = Math.floor((Math.random() * this.quotes.length) + 1);
    }
    while (tmp === this.lastQuote)


    this.lastQuote = tmp;
    this.index=tmp-1;
    return this.quotes[this.index];
  }

  generateAuthor()
  {
    return this.authors[this.index];
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: '',
      quote: new Quotes(),
    }
    this.updateState = this.updateState.bind(this);
  };

  updateState() {

    this.setState({ 
      data: "\"" + this.state.quote.generateQuote() +"\"",
      author: this.state.quote.generateAuthor() 
   })}

  render() {

    return (
      <div>
        <button onClick={this.updateState} >Wygeneruj cytat</button>
         <h4>{this.state.data}</h4>
         <h5 id="author">{this.state.author}</h5>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));