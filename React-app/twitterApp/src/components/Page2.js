import { useContext, useState } from "react"
import ThemeProvider, { ThemeContext } from "../context/ThemeContext"

const Main = () => {
    return (
        <ThemeProvider>
            <Header />
            <Container />
        </ThemeProvider>
    )
}

const Header = () => {
    return (
        <div style={{ width: '100%', height: '60px', border: '1px solid #ccc' }}>
            <ThemeWidget />
            <div>Header Component</div>
        </div>
    )
}

const ThemeWidget = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            Toggle Theme: <input type="checkbox" onChange={() => {
                toggleTheme((prevState) => !prevState)
            }} />
        </div>
    )
}


const Container = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <div style={{ width: '100%', height: '200px', border: '1px solid #ccc' }}>
            Container Details {themeContext.darkTheme ? 'Dark' : 'Light'}
        </div>
    )
}

export default Main;