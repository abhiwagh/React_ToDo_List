import React, {useState} from 'react';


const Todo = () => {
    const [todo, setTodo] = useState("");
    const [allTodo, setAllTodo] = useState([]);
    
    const dayInNo = new Date().getDay();
    var day = "";
    switch(dayInNo){
        case 0 : day = "Sunday";
        break;
        case 1 : day = "Monday";
        break;
        case 2 : day = "Tuesday";
        break;
        case 3 : day = "Wednesday";
        break;
        case 4 : day = "Thursday";
        break;
        case 5 : day = "Friday";
        break;
        case 6 : day = "Saturday";
        break;
        
    }

    
    const addToDo = (e) => {
        e.preventDefault();
        if(!todo){
            alert("✏️Please insert something in list")
        }
        else{
            const newTodo = {id:new Date().getTime().toString(), todo};

            setAllTodo([...allTodo, newTodo]);
            setTodo('');
        }
    }
    const remove = (id) => {
        const newTodo = allTodo.filter((items)=>{
            return items.id !== id;
        })
        setAllTodo(newTodo);
    }
    const clearAll = () => {
        setAllTodo([]);
    }
    return (
      <div >
        <div className='App-header'>
            <div>
            <h4>Enjoy Your {day}🥳</h4>
            <div className='input-1'>
                <form action="">
                    <input className="border-1 input-2" type="text" placeholder='✏️Add Items' value={todo} onChange={(e)=> setTodo(e.target.value)} />
                </form>
                <button className="border-1" onClick={addToDo} >➕</button>
            </div>
            </div>
        </div>
        <div className='data'>
            {
                allTodo.map((items)=>{
                    return(
                        <div className='input-3' key={items.id}>
                            <p>📝 {items.todo}</p>
                            <div>
                            {/* <button className="border-1 cont" onClick={()=>cut(items.id)}>✅</button>    */}
                            <button className="border-1 cont" onClick={()=>remove(items.id)}>⛔ </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className='btn-div'>
            {
                allTodo.length > 0 ? <button onClick={clearAll} className='btn'>Clear All</button>:<></>
            }
        </div>
      </div>
    );
}

export default Todo;