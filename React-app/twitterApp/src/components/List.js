import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

function List() {
    const [timer, setTimer] = useState(0);
    const [newItem, updateItem] = useState('');
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://nextleap.free.beeceptor.com/list')
            .then(res => res.json())
            .then(data => setItems(data));

        const timeRef = setInterval(() => {
            setTimer(timer + 1);
            console.log(timer);
        }, 1000);
        console.log('Did mount');
        return () => {
            clearInterval(timeRef);
            console.log('Will unmount');
        }
    }, []);

    useEffect(() => {
        console.log('Did update on any state/props change')
    });

    useEffect(() => {
        console.log('Did update on items change')
    }, [items]);


    const LiList = function () {
        return items.map(item => {
            return (<li>{item.title} - {item.completed ? 'Yes' : 'No'}</li>)
        })
    }

    const style = {
        color: 'blue',
        backgroundColor: 'yellow'
    }

    const handleItemChange = useCallback((e) => {
        updateItem(e.target.value);
    }, []);

    const handleFormSubmit = useCallback((e) => {
        e.preventDefault();
        const newItems = [...items];
        newItems.push({
            title: newItem,
            completed: false
        })
        setItems(newItems);
    }, [items]);

    const inCompleteTasks = useMemo(() => {
        console.log('Calculate Completed Tasks');
        return items.filter(item => !item.completed).length;
    }, [items]);

    return (
        <div>
            <h2 className="list-heading">List Component</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Enter item name" value={newItem} onChange={handleItemChange}/>
            </form>
            <h3 style={style} >Count: {items.length ?  items.length : "No item present"}</h3>
            <h4>Incomplete Tasks: {inCompleteTasks}</h4>
            <ul>
                {LiList()}
            </ul>

        </div>
    )
}

export default List;