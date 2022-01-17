import {useState, useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons'
import Link from "next/link"
const Register = () => {
    const [name, setName] = useState('tanveer123')
    const [email, setEmail] = useState('tanv@gmail.com')
    const [password, setPassword] = useState('tanve12345')
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetchData();
    }
    async function fetchData(){
        try{
            setLoading(true)
            const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API}/register`, { name, email, password })
            console.log('Register response', data);
            toast.success('Registration successful. Please Login')
            setLoading(false)
        } catch(err){
            toast.error(err.response.data)
            setLoading(false)
        }
    }
    useEffect(()=>{
        
    },[])
    return (
        <>
            <h1 className="jumbotron text-center bg-primary square">Register Page</h1>
            <div className="container col-md-4 offset-md-4 pb-5">
                {name}
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control mb-4 p-4" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" required />

                    <input type="email" className="form-control mb-4 p-4" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" required />

                    <input type="password" className="form-control mb-4 p-4" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" required />
                    
                    <button className="btn btn-block btn-primary" type='submit' disabled={!name || !email || !password || loading}>{loading ? <SyncOutlined spin/>: "Submit"}</button>

                </form>
                <p className="text-center p-3">Already registered?{' '} <Link href="/login"><a>Login</a></Link></p>
            </div>
        </>
    );
};

export default Register;