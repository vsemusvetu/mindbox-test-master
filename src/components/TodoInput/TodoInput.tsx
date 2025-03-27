import "./TodoInput.scss";
import { useAppDispatch } from "../../hook";
import { useState, useLayoutEffect, useRef } from "react";
import { addTodo } from "../../app/reducers/todoReducer";

const TodoInput: React.FC = () => {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState("");

    useLayoutEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <>
            <input
                type="text"
                className="todo-input"
                placeholder="What needs to be done?"
                value={value}
                ref={inputRef}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && value !== "") {
                        dispatch(addTodo(value));
                        setValue("");
                    }
                }}
            />
        </>
    );
};

export default TodoInput;
