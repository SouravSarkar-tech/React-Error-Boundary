import React,{Component} from 'react'
import './Counter.css'

export default class Counter extends Component{
    state={
      count:0
    }

    handleClick=()=>{
        this.setState({
            count:this.state.count + 2
        })
    }
    render(){
        if(this.state.count == 8){
            throw Error("Encountered with an Error! Do Check Your Code Again!")
        }else{
        return(
            <div className='counter'>
                <h2>The Increment Counter</h2>
                <h3>Value of the counter : <span>{this.state.count}</span></h3>
                <br/>
                <button onClick={this.handleClick}> Press Here to increse the value by 2</button>             
            </div>
        )
        }
    }
}