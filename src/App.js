import React, { Component } from 'react';
import PageTemplate from './components/PageTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    input: '', // input 값
    todos: [
      { id:0, text: '용산IMAX-어벤져스 예매하기', done: true},
      { id:1, text: '내일이 발표인데...', done: false}
    ]
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  }

  render() {
    const { input, todos } = this.state;
    const { 
      handleChange
    } = this;

    return (
      <PageTemplate>
        <TodoInput onChange={handleChange} value={input}/>
        <TodoList todos={todos}/>
      </PageTemplate>
    );
  }
}

export default App;