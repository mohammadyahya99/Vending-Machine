import React, { Component } from 'react';
import Keypad from "./Keypad";
import "../style/SnackSlots.css";

class SnackSlots extends Component {
    constructor() {
        super();
        this.state = {
          items: [],
        };
      }
      snackItem =(col, row, maxPrice)=>{
        let newItemArr = [];
       let items = [] ;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
              let snack = {
                name: String.fromCharCode("A".charCodeAt(0) + i) + j,
                price: Math.floor(Math.random() * maxPrice) + 1,
              };
              newItemArr.push(snack);
              
            }
            items.push(newItemArr);
            newItemArr = [];
          }
          this.setState({ items: items });

      }
      componentDidMount() {
        this.snackItem(5, 5, 8);
      }
    render() {
        return (
            <div className="mainContainer">
            <h2 className="VendingMachine">Vending Machine</h2>
            <div className="snacks">
              {this.state.items.map((S) => {
                return S.map((s) => {
                  return <div className="item">{s.name}</div>;
                });
              })}
              
            </div>
            <Keypad items={this.state.items}  />
          </div>
        );
    }
}

export default SnackSlots;