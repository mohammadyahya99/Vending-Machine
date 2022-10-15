import React, { Component } from 'react';
import "../style/MoneySlots.css";

class MoneySlots extends Component {
    constructor() {
        super();
        this.state = {
          choosenMoney: 0,
          changedMoney: 0,
          changeMoneyData: 0,
          coinsType: ["10c", "20c", "50c", "1$"],
          notesType: ["20$", "50$"],  
          moneyState: 0,
          
        };
      }
    
     
      enteredCredit = () => {
        let price = this.props.price;
    
        if (this.state.moneyState === 1) {
          alert(
            "Enough money,Press on ok button please"
          );
          return 0;
        }
        this.setState({
          choosenMoney: price,
          changedMoney: 0,
          moneyState: 1,
        });
      };
      enteredMoney = (e) => {
        if (this.state.moneyState === 1) {
          alert(
            " Press On Ok button Please"
          );
          return 0;
        }
        let price = this.props.price;
        let tempNum = parseInt(e.target.innerHTML);
        let typeOfCoin = e.target.innerHTML[e.target.innerHTML.length - 1];
        if (typeOfCoin === "c") {
          tempNum /= 100;
        }
        tempNum = tempNum + this.state.choosenMoney;
        if (tempNum >= price) {
          this.setState({
            choosenMoney: tempNum,
            changedMoney: tempNum - price,
            moneyState: 1,
          });
        } else {
          this.setState({
            choosenMoney: tempNum,
            moneyState: -1,
          });
        }
      };
      returnMoney = () => {
        let changedMoney = this.state.changedMoney;
        let changeMoneyData = changedMoney;
        let changeMoneyStringTemp = "";
        let coinsArr = [50, 20, 1, 0.5, 0.2, 0.1];
        for (let i = 0; i < coinsArr.length; i++) {
          if (changeMoneyData - coinsArr[i] >= 0) {
            if (changeMoneyStringTemp.length === 0)
              changeMoneyStringTemp += coinsArr[i] + " ";
            else changeMoneyStringTemp += "+ " + coinsArr[i];
            changeMoneyData -= coinsArr[i];
            i--;
          }
        }
        return changeMoneyStringTemp;
      };
    
      buyingProcess = () => {
        let changeMoney = this.state.changedMoney;
        this.returnMoney();
        if (changeMoney != 0)
          alert(
            "Thank you,Your change = " + changeMoney +"$"
          );
        else alert("Have a good meal");
        this.clear();
      };
      clear = () => {
        this.setState({ choosenMoney: 0, changedMoney: 0, moneyState: 0 });
        this.props.clear();
      };
      render() {
        return (
          <div className="MoneySlots">
            <div className="moneyContainer">
                <h3>Choose a payment method, please</h3>
              <div className="sellState">
              {this.state.moneyState < 0 ? (
                <h2 className='errorMassege'> Not enough Money</h2>
              ) : (<div> <h3>The amount paid: {this.state.choosenMoney}</h3>
              </div>
               
              )}
            
            </div>
            {this.state.moneyState > 0 ? (
              <div className="buyingProcess">
                <button className="ok" onClick={this.buyingProcess}>
                  Ok
                </button>
                <button className="clear" onClick={this.clear}>
                  Cancel
                </button>
              </div>
            ) : (
              <p></p>
            )}
             <div className="creditPayment" onClick={this.enteredCredit}>
                Credit
              </div>
             
              <div className="notesPayment">
                {this.state.notesType.map((n) => {
                  return (
                    <div className={n} onClick={this.enteredMoney}>
                      {n}
                    </div>
                  );
                })}
              </div>
              <div className="coinsPayment">
                {this.state.coinsType.map((c) => {
                  {
                    return (
                      <div className={c} onClick={this.enteredMoney}>
                        {c}
                      </div>
                    );
                  }
                })}
              </div>
             
            </div>
           
          </div>
        );
      }
}

export default MoneySlots;