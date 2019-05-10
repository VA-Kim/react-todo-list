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

  // 일정 데이터 안에 들어가는 id 값
  id = 1
  getId = () => {
    return ++this.id; // 현재 값에서 1을 더한 값을 반환
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  }

  // 새 데이터 추가
  handleInsert = () => {
    const { todos, input } = this.state;
    
    // 새 데이터 객체 만들기
    const newTodo = {
      text: input,
      done: false,
      id: this.getId()
    }

    // 배열 안에 새 데이터 삽입
    this.setState({
      todos: [...todos, newTodo],
      input: ''
    });
  }

  // to do 아이템 토글하기
  handleToggle = (id) => {
    // id로 배열의 인덱스를 찾는다.
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    // 찾은 데이터의 done 값을 반전
    const toggled = {
      ...todos[index],
      done: !todos[index].done
    };

    // 데이터 수정
    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  render() {
    const { input, todos } = this.state;
    const { 
      handleChange,
      handleInsert,
      handleToggle
    } = this;

    return (
      <PageTemplate>
        <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
        <TodoList todos={todos} onToggle={handleToggle}/>
      </PageTemplate>
    );
  }
}

export default App;