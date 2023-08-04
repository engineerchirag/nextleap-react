import { useEffect, useState } from "react";
import Counter from "../NewCounter"
import { useParams } from "react-router-dom";

const Example1_1 = () => {
    const [isAVisible, toggleA] = useState(true);
    const [isBVisible, toggleB] = useState(true);

    const handleAChange = () => {
        toggleA((prevState => !prevState));
    }

    const handleBChange = () => {
        toggleB((prevState => !prevState));
    }
    return (
    <div>
        <div>
            {isAVisible && <Counter className="green" />}
            {isBVisible && <Counter className="red"/>}
        </div>
        <div>
            A: <input type="checkbox" onChange={handleAChange}/>
            B: <input type="checkbox" onChange={handleBChange}/>
        </div>
    </div>
)}

const Example1_2 = () => {
    const [isAVisible, toggleA] = useState(true);

    const handleAChange = () => {
        toggleA((prevState => !prevState));
    }

    return (
    <div>
        <div>
            {/* {isAVisible ? <section><Counter className="green" /></section> : <div><Counter className="red"/></div>} */}
            {isAVisible ? <Counter key="1" className="green" /> : <Counter key="2" className="red"/>}
        </div>
        <div>
            A: <input type="checkbox" onChange={handleAChange}/>
        </div>
    </div>
)}


const Example1_3 = () => {
    const [list, setList] = useState([1,2,3,4]);
    useEffect(() => {
        setInterval(() => {
            setList((preValue) => [Math.random(), ...preValue])
        }, 3000);
    }, []);
    return (
        <ul>
            {
                list.map((item, idx) => (
                    <li key={item}>{item}</li>
                ))
            }
        </ul>
    )
}

const Example1 = () => {
    const params = useParams();
    const exampleId: number = Number(params.exampleId);
    switch(exampleId) {
        case 1: {
            return <Example1_1 />;
        }
        case 2: {
            return <Example1_2 />
        }
        case 3: {
            return <Example1_3 />
        }
        default: {
            return <span>Example not found!</span>
        }
    }
}

export default Example1;