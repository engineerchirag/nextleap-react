import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Counter(props) {
    let [searchParams, setSearchParams] = useSearchParams();
    const [count, updateCount] = useState(Number(searchParams.get('intialValue') || 0));
    let value = 0;

    const decreaseCount = () => {
        updateCount(count - 1);
        setSearchParams({ intialValue: count - 1 });

        value--;
        console.log('decreaseCount > ', value);
    }

    const increaseCount = () => {
        updateCount(count + 1);
        setSearchParams({ intialValue: count + 1 });
        value++;
        console.log('increaseCount > ', value);
    }

    console.log('Outer value> ', value);
    console.log('Outer Count >', count);

    return (
        <div>
            <h1>{props.prefix} {props.title}</h1>
            <div>
                <button onClick={decreaseCount}>-</button>
                {count}
                <button onClick={increaseCount}>+</button>
            </div>
        </div>
    )
}

export default Counter;