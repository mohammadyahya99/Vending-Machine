import React, { Component } from "react";
import "../style/Keypad.css";
import MoneySlots from "./MoneySlots";
export default class Keypad extends Component {
  constructor() {
    super();
    this.state = {
      ArrayOfLetters: ["A", "B", "C", "D", "E"],
     lettersFlag: 1,
      ArrayOfNumbers: ["0", "1", "2", "3", "4"],
      numbersFlag: 1,
      price: 0,
      choosenItem: "",
     
    };
  }
  choosItem = (e) => {
    let dataChoosen = this.state.choosenItem + e.target.innerHTML;

    if (
      parseInt(e.target.innerHTML) >= 0
    ) {
      if (this.state.numbersFlag) {
        this.setState({
          choosenItem: dataChoosen,
          numbersFlag: 0,
        });
      }
    } else {
      if (this.state.lettersFlag) {
        this.setState({
          choosenItem: dataChoosen,
          lettersFlag: 0,
        });
      }
    }
  };

  confirm = () => {
    let checkFlag = 1;
    let snackItems = this.props.items;
    for (let i = 0; i < snackItems.length && checkFlag; i++)
      for (let j = 0; j < snackItems[i].length && checkFlag; j++) {
        if (this.state.choosenItem === snackItems[i][j].name) {
          this.setState({ price: snackItems[i][j].price });
          checkFlag = 0;
        }
      }

    if (checkFlag) {
      this.setState({ choosenItem: "Wrong Entry", price: 0 });
    }
  };
  
  clear = () => {
    this.setState({
      choosenItem: "",
      lettersFlag: 1,
      numbersFlag: 1,
      price: 0,
    });
  };
  render() {
    return (
      <div className="keypadContainer">
    <div className="key">
      <h2>Keypad</h2>
      <div className="thePrice">{this.state.price}$</div>
      <div className="choosenItem">{this.state.choosenItem}</div>
        <div className="keypad">
          <div className="lettersList">
            {this.state.ArrayOfLetters.map((l) => {
              return (
                <div className="letter" onClick={this.choosItem}>
                  {l}
                </div>
              );
            })}
          </div>
        
          <div className="numbersLest">
            {this.state.ArrayOfNumbers.map((n) => {
              return (
                <div className="number" onClick={this.choosItem}>
                  {n}
                </div>
              );
            })}
          </div>

          <button id="ok" onClick={this.confirm}>
            OK
          </button>
          <button id="clear" onClick={this.clear}>
            Clear
          </button>
        </div>
        </div>
        <div className="buy">
          {this.state.price > 0 ? (
            <MoneySlots
            clear={this.clear}
              price={this.state.price}
            
            />
          ) : (
         <p></p>
          )}
        </div>
      </div>
    );
  }
}
