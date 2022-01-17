import {useState, useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons'
import Link from "next/link"
const Login = () => {
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
            const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API}/login`, { email, password })
            console.log('Login response', data);
            
            //setLoading(false)
        } catch(err){
            toast.error(err.response.data)
            setLoading(false)
        }
    }
    useEffect(()=>{
        
    },[])
    return (
        <>
            <h1 className="jumbotron text-center bg-primary square">Login Page</h1>
            <div className="container col-md-4 offset-md-4 pb-5">
                
                <form onSubmit={handleSubmit}>
                    
                    <input type="email" className="form-control mb-4 p-4" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" required />

                    <input type="password" className="form-control mb-4 p-4" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" required />
                    
                    <button className="btn btn-block btn-primary" type='submit' disabled={ !email || !password || loading}>{loading ? <SyncOutlined spin/>: "Submit"}</button>

                </form>
                <p className="text-center p-3">Not yet registered?{' '} <Link href="/register"><a>register</a></Link></p>
            </div>
        </>
    );
};

export default Login;