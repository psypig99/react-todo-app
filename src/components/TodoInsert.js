import React, {useState, useCallback} from "react";
import {MdAdd} from "react-icons/md"
import "./TodoInsert.scss"

const TodoInsert = ({onInsert}) => {

    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); // insert 후 초기화
            e.preventDefault(); // submit 이벤트는 브라우저에서 새로고침을 발생시킴.
            // 이를 방지하기 위해서 preventDefault를 호출해줌.
        }, [onInsert, value]
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요"
                   value={value}
                   onChange={onChange}/>
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;