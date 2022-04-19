
function Todo({todo, title, handleDelete}) {
    const deleteTodo = (id) => {
        handleDelete(id);
    }
    
    return (
        <>
        <span>{title}</span>
        <ul >
           {
               todo.map( item => <li key={item.id}>#{item.id} - {item.title}  
               <button onClick={() => deleteTodo(item.id)}>xoa</button>
               </li>)
           }
        </ul>
        <hr/>
        </>

    )
}

export default Todo;