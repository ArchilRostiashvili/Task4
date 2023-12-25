import { useState } from "react";
import { useRegister } from "../hooks/useRegister";

const Register = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const {signup, error, isLoading} = useRegister();

    const handleLoginSubmit = async (i) =>{
        i.preventDefault();
        await signup(email, password, position);
    }

    return ( 
        <div>
            <form className="login-form" onSubmit={handleLoginSubmit}>
                <h2>Sign-Up</h2>
                <label>Enter Your Email</label>
                <input 
                type="email" onChange={(e)=>setEmail(e.target.value)} value={email} 
                />
                <label>Enter Your Password</label>
                <input 
                type="password" onChange={(e)=>setPassword(e.target.value)} value={password} 
                />
                <label>Your Position</label>
                <select className="select" 
                onChange={(e)=>setPosition(e.target.value)} value={position} >
                    <option value="-">-</option>
                    <option value="CIO">CIO</option>
                    <option value="CEO">CEO</option>
                    <option value="Captain">Captain</option>
                    <option value="Office Manager">Office Managaer</option>
                </select>
                <button>Sign-Up</button>
            </form>
        </div>
    );
}
export default Register;