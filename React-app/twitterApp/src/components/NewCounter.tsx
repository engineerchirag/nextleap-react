import { useCallback, useState } from "react"

const Counter = ({ className }: any) => {
    const [count, setCount] = useState(0);

    const handleDecButton = useCallback(() => {
        setCount((preValue) => preValue-1);
        // setCount((preValue) => preValue-1);
        // setCount((preValue) => preValue-1);
        // setCount((preValue) => preValue-1);
        // setCount((preValue) => preValue-1);
    }, []);

    const handleIncButton = useCallback(() => {
        setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
    }, [count]);

    return (
        <div className={className}>
            <button onClick={handleDecButton}>-</button>
            {count}
            <button onClick={handleIncButton}>+</button>
        </div>
    )
}

export default Counter;