import React, { Component } from 'react';
import './Game.css'

class Game extends Component {
    constructor() {
        super();
        this.state ={
            number: "",
            message: "Hola cara de bola",
            random: generateRandomNumber(100)
        }
    }

    handleOnChange = e => {
        /*
        //const value = e.target.value
        const event = {
            name: "Thavi",
            target: {
                value: 40
            }
        }

        event.target.value
        const{name} = event;
        name

        e.target.value;
        this.setState({
            number: value,
        })
        */
        const {target: {value}} = e;
        console.log(value); 

        if (value.trim() > 0){
            this.setState({
                number: value,
            });
        }
    }
    handleOnCLick = () => {
        const number = parseInt(this.state.number)
        const random = parseInt(this.state.random);


        const text = calculateText(number, random);

        this.setState({
            message: text
        })
    }
    render() {
        console.log(this.state.random);
        return (
            <div className="Game">
                <input 
                    type="number"
                    value = {this.state.number}
                    onChange = {this.handleOnChange}
                />
                
                <button onClick={this.handleOnClick}> Probar </button>
                <p>{this.state.message}</p>
            </div>
        );
    }
}


export default Game;

function generateRandomNumber(max, min=1){
    return Math.floor(Math.random()*(max - min) + min);
}

function calculateText(number, random){
    if (number === random){
        return "Felicidades, encontraste el numero";
    }
}