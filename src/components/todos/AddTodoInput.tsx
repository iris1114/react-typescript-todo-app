import React, { FormEvent, useState } from "react";

interface Props {
    onCreate: AddTodo;
}

const AddTodoInput: React.FC<Props> = ({ onCreate }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onCreate && onCreate(text);
        setText("");
    };

    return (
        <form className="input-group mb-5" onSubmit={handleSubmit}>
            <input
                className="form-control border-primary"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className="btn btn-primary"
                type="submit"
                onClick={handleSubmit}
                disabled={!text}
            >
                Add Todo
            </button>
        </form>
    );
};

export default AddTodoInput;
