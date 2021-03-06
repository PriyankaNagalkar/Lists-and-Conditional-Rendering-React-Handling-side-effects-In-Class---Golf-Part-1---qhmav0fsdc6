import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
     constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        this.keyDown=this.keyDown.bind(this)
      };

      buttonClickHandler() {
      this.setState({
        ...this.state,
        renderBall:true
      })
    }

    keyDown(e){
      if(e.keyCode===39){
        this.setState({
          ...this.state,
          posi: this.state.posi+5
        }, ()=>{
          this.setState({
            ...this.state,
            ballPosition: {left: `${this.state.posi}px`}
          })
        })
      }
    }

    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" tabIndex={0} style={this.state.ballPosition} onKeyDown={this.keyDown}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
		}
    }

    // bind ArrowRight keydown event
    componentDidMount() {
      document.addEventListener("keydown",this.keyDown.bind(this));
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}



export default App;
