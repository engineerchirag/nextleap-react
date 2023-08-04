
import './App.css';
import Text from './components/Text';
import Default from './components/Default';
import List from './components/List';
import Counter from './components/Counter';
import LoginForm from './components/LoginForm';
import Register from './components/Register';
import { useEffect, useState } from 'react';
import Main from './components/Page2';
import LoginFormUsingRef from './components/LoginFormUsingRef';
import WidthHighlighter from './components/WidthResize';
import Example1 from './components/UnderTheHood/example1';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';

const router = createBrowserRouter([
  { path: '/login', Component: LoginForm },
  { path: '/register', Component: Register },
  { path: '/default', Component: Default },
  { path: "*", Component: Root },
]);

// 4️⃣ RouterProvider added
function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  const [showList, toggleList] = useState(true);
  const navigate = useNavigate();
  const handleSwitchToDefault = () => {
    navigate('/default');
  }

  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);


  return (
    
      <div > 
        <Header />
        <div className='section-wrapper'>
          <div className='left-section'>
            Left Section
            <button onClick={handleSwitchToDefault}>Switch to Default</button>
          </div>
          <div className='right-section'>
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/list' element={<List />} />
                <Route path='/example/:exampleId' element={<Example1 />} />
                <Route path='/counter' element={<Counter title="Counter" prefix="Yasir" /> }/>
              </Routes>
          </div>
        </div>    
        {/* Toggle List: <input type='checkbox' onChange={() => {toggleList(!showList)}} />
        { showList ? <List /> : null } */}
        {/* <Register />
        <LoginForm /> */}
        {/* <Counter title='Counter' prefix="Leela's" /> */}
        {/*
        <Text />
        <Default /> */}
        {/* <Main /> */}
        {/* <Main /> */}
        {/* <LoginFormUsingRef /> */}
        {/* <List /> */}
        {/* <WidthHighlighter /> */}
        {/* <Example1 /> */}
        {/* <ShadowDOM /> */}
      </div>
  );
}

// class MyButton extends HTMLElement {
//   constructor() {
//     super();
//     const shadow = this.attachShadow({ mode: 'open' });
//     const button = document.createElement('button');
//     button.textContent = this.getAttribute('label');
//     const styles = document.createElement('style');

//     styles.textContent = `
//       button {
//         background-color: #007bff;
//         color: #fff;
//         padding: 10px;
//         border-radius: 5px;
//         cursor: pointer;
//       }
//     `;

//     shadow.appendChild(styles);
//     shadow.appendChild(button);

//   }

// }
// if (!customElements.get('my-button')) {
//   customElements.define('my-button', MyButton);
// }
// function ShadowDOM() {
//    return (<my-button label="Click me"></my-button>);
// }

export default App;


