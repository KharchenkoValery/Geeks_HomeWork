import { Todo } from "../../components/todo/Todo";


const todoses = ["todo 1", "todo 2", "todo 3"];

 function TodosPage () {

    const todo = todoses.map((element, index) => <h2 key={index}><Todo somedo={element}/></h2>)

    return (

        <>
            {
                todo
            }
        </>
    )
}
export default TodosPage;