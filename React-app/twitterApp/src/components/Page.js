import { useState } from "react"

const Main = () => {
    const [darkTheme, toggleTheme] = useState(false);
    return (
        <div>
            <Header onToggleTheme={toggleTheme} />
            <Container darkTheme={darkTheme} />
        </div>
    )
}

const Header = ({ onToggleTheme }) => {
    return (
        <div style={{ width: '100%', height: '60px', border: '1px solid #ccc' }}>
            <ThemeWidget onToggleTheme={onToggleTheme}/>
            <div>Header Component</div>
        </div>
    )
}

const ThemeWidget = ({ onToggleTheme }) => {
    return (
        <div>
            Toggle Theme: <input type="checkbox" onChange={() => {
                onToggleTheme((preState) => {
                    return !preState;
                })
            }} />
        </div>
    )
}


const Container = ({ darkTheme }) => {
    return (
        <div style={{ width: '100%', height: '200px', border: '1px solid #ccc' }}>
            Container Details {darkTheme ? 'Dark' : 'Light'}
        </div>
    )
}

export default Main;