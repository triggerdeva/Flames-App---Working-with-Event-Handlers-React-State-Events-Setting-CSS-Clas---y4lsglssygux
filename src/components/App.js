import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(){
        super();
        this.state={
            input1Value: "",
            input2Value: "",
            answerValue: "",
        }
    }
    buttonClicked = ()=>{
        if(!this.state.input1Value || !this.state.input2Value){
            this.setState({answerValue: "Please Enter valid input"});
            return;
        }
        let totalLength = Number(this.state.input1Value.length) + Number(this.state.input2Value.length);
        let name1 = this.state.input1Value.split("");
        let name2 = this.state.input2Value.split("");
        let commonWord = 0;

        name1.forEach((ch)=>{
            if(name2.includes(ch)){
                name2.splice(name2.indexOf(ch), 1);
                commonWord+= 1;
            }
        })
        totalLength = totalLength - commonWord*2;
        let obtainedValue = totalLength%6;

        if(obtainedValue == 1) this.setState({answerValue: "Friends"});
        if(obtainedValue == 2) this.setState({answerValue: "Love"});
        if(obtainedValue == 3) this.setState({answerValue: "Affection"});
        if(obtainedValue == 4) this.setState({answerValue: "Marriage"});
        if(obtainedValue == 5) this.setState({answerValue: "Enemy"});
        if(obtainedValue == 0) this.setState({answerValue: "Siblings"});
    }

    clearClicked = ()=>{
        this.setState({input1Value : "",input2Value : "",answerValue: ""})
    }

    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <label htmlFor="first-name">First Name</label>
               <input onChange={(e)=>this.setState({input1Value: e.target.value})} data-testid="input1" id="first-name" value={this.state.input1Value} />

               <label htmlFor="second-name">Second Name</label>
               <input onChange={(e)=>this.setState({input2Value: e.target.value})} data-testid="input2" id="second-name" value={this.state.input2Value} />

               <button onClick={this.buttonClicked} data-testid="calculate_relationship">Calculate Relationship Future</button>
               <button onClick={this.clearClicked} data-testid="clear">Clear</button>

               <h3 data-testid="answer">{this.state.answerValue}</h3>
            </div>
        )
    }
}


export default App;
