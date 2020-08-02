import React, {Component} from 'react'
import './Counter.css'
import PropTypes from 'prop-types'

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter : 0
        }
        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
        this.reset=this.reset.bind(this)
    }
    render(){
        return (
          //JSX
          <div className="counter">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <span className="count">{this.state.counter}</span> 
            <div><button onClick={this.reset }>Reset</button></div>
          </div>
        );
        }
        increment(by){
            console.log(`increment ${by}`);
            this.setState(
                (prevState) =>   {
                    return {counter: prevState.counter +by}
                });
        }

        decrement(by){
            console.log(`decrement ${by}`);
            this.setState(
                (prevState) =>   {
                    return {counter: prevState.counter -by}
                });
        }

        reset(){
            console.log(`reset`);
            this.setState({counter: 0}
                );
        }

}

class CounterButton extends Component{

    //define init state in constructor
    // constructor(){
    //     super();
    //     this.state = {
    //         counter : 0
    //     }
    //     this.increment=this.increment.bind(this)
    //     this.decrement=this.decrement.bind(this)
    // }

    render(){
        return (
        <div className="counterButton">
            <button onClick={() => this.props.incrementMethod(this.props.by) }>+{this.props.by}</button>
            <button onClick={() => this.props.decrementMethod(this.props.by) }>-{this.props.by}</button>
        </div>
        )
    }

    // increment(){
    //     //console.log('increment');
    //     this.setState(
    //         {
    //             counter: this.state.counter+this.props.by
    //         });
    //     this.props.incrementMethod(this.props.by);
    // }
    // decrement(){
    //     //console.log('increment');
    //     this.setState(
    //         {
    //             counter: this.state.counter-this.props.by
    //         });
    //     this.props.decrementMethod(this.props.by);
    // }
  }

// Counter.defaultProps = {
//     by: 1
// }

// Counter.propTypes = {
//     by : PropTypes.number
// }
  export default Counter