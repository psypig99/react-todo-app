import React, {useReducer, useState, useRef, useCallback} from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTodos() {
    const array = [];
    for(let i=1; i <= 2500; i++){
        array.push({
            id : i,
            text: `할일 ${i}`,
            checked : false
        });
    }
    return array;
}

function todoReducer(todos, action) {
    switch (action.type) {
        case 'INSERT': // 신규항목 추가
            // {type : 'INSERT', todo : {id:1, text: 'todo', checked: false}}
            return todos.concat(action.todo);
        case 'REMOVE' :
            // {type : 'REMOVE', id : 1}
            return todos.filter(todo => todo.id !== action.id);
        case 'TOGGLE':
            return todos.map(todo => todo.id === action.id ? {...todo, checked: !todo.checked} : todo);
        default:
            return todos;
    }
}

const App = () => {
  // const [todos, setTodos] = useState([
  //   {
  //     id : 1,
  //     text : '리액트의 기초 알아보기',
  //     checked : true
  //   },
  //   {
  //     id: 2,
  //     text : '컴포넌트 스타일링 해보기',
  //     checked: true
  //   },
  //   {
  //     id: 3,
  //     text : '일정 관리 앱을 만들어 보기',
  //     checked: false
  //   }
  // ]);

    // useReducer를 사용하는 경우에는 useState를 사용하지 않음.
    // const [todos, setTodos] = useState(createBulkTodos);

    const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback(
      text => {
        const todo = {
          id : nextId.current,
          text,
          checked : false
        };
        // setTodos(todos.concat(todo));
        // setTodos(todos => todos.concat(todo));

          dispatch({type : 'INSERT', todo});
        nextId.current += 1; // nextId를 1씩 더하기
      }, [todos]
  );

  const onRemove = useCallback(
      id => {
        // setTodos(todos.filter(todo => todo.id !== id));
        // setTodos(todos => todos.filter(todo => todo.id !== id));
          dispatch({type : 'REMOVE', id});
      }, [todos]
  );

  const onToggle = useCallback(
      // id => {setTodos(todos => todos.map(todo => todo.id ===id ? {...todo, checked: !todo.checked} : todo))
    id => {
        dispatch({type : 'TOGGLE', id});
      }, [todos]
  )

  return <TodoTemplate>
    <TodoInsert onInsert={onInsert}/>
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
  </TodoTemplate>
}

export default App;
