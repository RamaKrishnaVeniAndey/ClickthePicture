import React, { Component, useState } from 'react'
import './Clickthepicture.css'
export class Clickthepicture extends Component {
    constructor(){
        super()
        this.state={
            time:10,
            count:0,
            msg:''
        }
    }
    incrementCounter=() =>{
        if(this.state.time!==0)
             this.setState({
                 count :this.state.count+1
            })
         }
        
        restart=()=>{
            this.setState({
                count:0,
                time:10,
                msg:''
               
    
        })
        this.interval=setInterval(this.tick,1000)
        
        } 
    componentDidMount(){
        this.interval=setInterval(this.tick,1000);
    }
   componentWillUnmount(){
        clearInterval(this.interval)
    }
    tick=()=>{
        if(this.state.time==0)
        {
           
            clearInterval(this.interval)
            this.setState({ 
                msg:"Enough! I can't be beaten by you"
            })
           
        }
        else{
        this.setState({
            time:this.state.time-1
        })
       }
    }
    
   
       

      render() {
       return (
      <div id="background">
        <h1>Click the bird picture as many times as you can in {this.state.time} seconds...</h1>
        <img  src="https://e0.pxfuel.com/wallpapers/40/181/desktop-wallpaper-small-cute-cuba-bird-portrait-beautiful-birds-colorful-birds-cute-birds-thumbnail.jpg "onClick={this.incrementCounter}/>
        <h2 id="count">Your Score {this.state.count}</h2>
        <h3 id="msg">{this.state.msg}</h3>
        {this.state.time==0 &&
            <button onClick={this.restart}>Restart </button>
        }
      </div>
    )
  }
}

export default Clickthepicture