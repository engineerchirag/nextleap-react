import { useRef, useState } from "react";

const LoginFormUsingRef: React.FC = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const formRef =  useRef<HTMLInputElement | null>(null);

  const handleLoginClick = () => {
    console.log({
        username: usernameRef.current?.value,
        password: passwordRef.current?.value
    });

    usernameRef.current?.focus();
  }

  const scrollToTop = () => {
    usernameRef.current?.scrollIntoView();
    const ref = formRef.current;
    if (ref) {
        ref.style.backgroundColor = 'pink';
    }
  }

  return (
    <div >
        <div style={{ height: '5000px', backgroundColor: '#ccc' }} ref={formRef}>
            <div>
                <label>Username</label>
                <input type="text" ref={usernameRef} placeholder="Enter Username" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" ref={passwordRef} placeholder="Enter password" />
            </div>
            <div>
                <button onClick={handleLoginClick}>Login</button>
            </div>
        </div>
        <div>
            <button onClick={scrollToTop}>Scroll to top</button>
        </div>
    </div>
  );
}

export default LoginFormUsingRef;
