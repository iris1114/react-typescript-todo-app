//定義Todo介面， 會有text, 及complete是否完成
interface Todo {
    text: string;
    complete: boolean;
}

//定義IAddTodo ， 回傳參數text為string型別， 並無回傳值void
type AddTodo = (text: string) => void;

//定義ToggleTodo， 回傳參數index為number型別， 並無回傳值void (點擊todo改變complete狀態用)
type ToggleTodo = (index: number) => void;

//定義DeleteTodo ， 回傳參數index為number型別， 並無回傳值void (刪除todo用)
type DeleteTodo = (index: number) => void;


