## UI 구성하기
1. Todo Template : 화면응ㄹ 가운데에 정렬시켜 주며, 앱 타이틀(일정관리)을 보여줍니다. 
    children으로 내부 JSX를 props로 받아와서 렌더링해 줍니다.     
2. TodoInsert : 새로운 항목을 입력하고 추가할 수 있는 컴포넌트임. state를 통해 input의 상태를 관리함.
3. TodoListItem : 각 할 일 항목에 대한 정보를 보여주는 컴포넌트임. todo 객체를 props로 받아와서 상태에 따라 다른 스타일의 UI를 보여줌.
4. TodoList : todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여줌.


## 컴포넌트 성능 최적화
### 11.3 느려지는 원인 분석
1. 자신이 전달받은 props가 변경될 대
2. 자신의 state가 변경될 때
3. 부모 컴포넌트가 렌더링 될 때
4. forceUpdate 함수가 실행될 때

### 11.4 React.memo를 사용하여 컴포넌트 성능 최적화

### 11.5 onToggle, onRemove 함수가 바뀌지 않게 하기
함수가 계속 만들어지는 상황을 방지하는 방법
> 1. useState의 함수형 업데이트 기능을 사용하는 것.
> 2. useReducer를 사용하는 것임.

### 11.8 react-vitrualized를 사용한 렌더링 최적화
> react-virtualized를 사용하면 리스트 컴포넌트에서 스크롤되기 전에 보이지 않는 컴포넌트는 렌더링 하지 않고 크기만 차지하게끔 할 수 있음.

> yarn add react-virturalized

