


import { func } from "prop-types"
import { AddNote } from "./AddNote";



export class NoteTodos extends React.Component {

    
    state = {
        value:'',
    }

    getElTodos = () => {
        const { note, onToggleDone } = this.props.dataProps;
        if (!note.info.todos) return;

        const todos = note.info.todos.map(todo =>
            <li className="clean-list todo"
                key={todo.id}>
                <i className={`far ${(todo.isDone) ? 'fa-check-square' : 'fa-square'}`}
                    onClick={() => this.onToggleDone((todo.id))}>
                </i>
                <span contentEditable className={`${(todo.isDone) ? 'todo-done' : ''}`} onBlur={(ev)=>this.onUpdateTodoContent(ev,todo.id)}>{todo.txt}</span>
                <i onClick={() => this.onRemoveTodo(todo.id)} className="fas fa-minus-circle"></i>
                
            </li>)
    
        return todos;

    }


     onUpdateTodoContent = (ev,todoId) => {
         const { updateTodoContent, note } = this.props.dataProps;
         
        const value = ev.target.textContent
        updateTodoContent(todoId,note.id, value)   
    }

    
    onToggleDone = (todoId) => {
         const {note,toggleDoneTodo } = this.props.dataProps;
        toggleDoneTodo(todoId, note.id)
    }

    onAddTodo = (ev) => {
        ev.preventDefault();
        const { value } = this.state;
        if (!value) return;
        const {note,addTodo} = this.props.dataProps
        addTodo(value, note.id);
        this.cleanForm()
    }

    onRemoveTodo = (todoId) => {
        const { removeTodo, note } = this.props.dataProps;
        removeTodo(todoId, note.id);
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState((prevState) => ({ ...prevState, [field]: value })); 
    }

    cleanForm = () => {
        this.setState({value:''})
    }



    render() {
        const { value } = this.state;
        const {note}= this.props.dataProps
        return (<React.Fragment>
            <h3>{note.info.title}</h3>
            <ul>
                {this.getElTodos()}
            </ul>
    
            <form onSubmit={this.onAddTodo}>
                <input
                    className="note-todo-input"
                    placeholder="Enter a todo..."
                    type="text"
                    name="value"
                    value={value}
                    onChange={this.handleChange}
                    onBlur={this.onAddTodo} >
                </input>
            </form>
     
        </React.Fragment>)
    
    }

}

// export function NoteTodos({ dataProps, dataProps: { note,toggleDoneTodo, addTodo } }) {
    

//     function getElTodos() {
//         if (!note.info.todos) return;
//     const todos = note.info.todos.map(todo =>        
//         <li className={`clean-list ${(todo.isDone) ? 'todo-done' : ''}`}
//             key={todo.id}>
//             <i className={`far ${(todo.isDone) ?'fa-check-square' : 'fa-square'}`}
//             onClick={()=>onToggleDone((todo.id))}>
//             </i>
//             {todo.txt}
//         </li>)
//         return todos;

//     }
    
//     function onToggleDone(todoId) {
//         toggleDoneTodo(todoId, note.id)
//     }

//     function onAddTodo(ev) {
//         ev.preventDefault()
//         let value = (ev.nativeEvent === SubmitEvent) ? ev.target[0].value : ev.target.value;        
//         addTodo(value, note.id)

//     }

  
    

    
//     return (<React.Fragment>
//         <h3>{note.info.title}</h3>
//         <ul>
//             {getElTodos()}
//         </ul>

//         <form onSubmit={onAddTodo}>
//             <input
//                 className="note-todo-input"
//                 placeholder="Enter a todo..."
//                 type="text"
//                 onBlur={onAddTodo} >
//             </input>
//         </form>
 
//     </React.Fragment>)

// }













// export function NoteTodos({dataProps, dataProps: {note}}) {
//     console.log('note:', note);
    
//     const todos = note.info.todos.map(todo =>
//         <li className="clean-list"
//             key={todo.id}>
//             <i className={`far ${(note.isDone) ?'fa-check-square' : 'fa-square'}`}
//             onClick={onToggleDone}>
//             </i>
//             {todo.txt}
//         </li>)


//     function onToggleDone() {
//         toggleDone()
//     }
    
//     return (<React.Fragment>
//         <h3>{note.info.title}</h3>
//         <ul>
//             {todos}
//         </ul>

//         <input className="note-todo-input" type="text" name="" placeholder="Enter a todo..." ></input>
 
//     </React.Fragment>
        

//     )

// }