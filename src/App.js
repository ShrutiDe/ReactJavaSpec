import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learn example/FirstComp'
import SecondComponent from './components/learn example/SecondComp'
import ThirdComponent from './components/learn example/ThirdComp'
import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'
import './bootstrap.css'

class App extends Component {
  render(){
  return (
    //JSX
    <div className="App">
      {/* <Counter /> */}
      <TodoApp />
    </div>
  );
  }
}



class LearnComp extends Component{
  render(){
    return (
      //JSX
      <div className="LearnComponent">
        Hello, Shruti
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
    }
}




export default App;
