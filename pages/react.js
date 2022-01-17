import {useState, useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons'
import Link from "next/link"
const React = () => {
    const [title, setTitle] = useState('tanveer123')
    const [picture, setPicture] = useState('tanvsdfsrc sdi')
    const [desc, setDesc] = useState('description ps ths ')
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetchData();
    }
    async function fetchData(){
        try{
            setLoading(true)
            const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API}/react`, { title, picture, desc })
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
            <h1 className="jumbotron text-center bg-primary square">React Page</h1>
            <div className="container col-md-4 offset-md-4 pb-5">
                {title}
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control mb-4 p-4" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Name" required />

                    <input type="text" className="form-control mb-4 p-4" value={picture} onChange={(e)=>setPicture(e.target.value)} placeholder="Enter Picture" required />

                    <input type="text" className="form-control mb-4 p-4" value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Enter Desciption" required />
                    
                    <button className="btn btn-block btn-primary" type='submit' disabled={!title || !picture || loading}>{loading ? <SyncOutlined spin/>: "Submit"}</button>

                </form>
                <p className="text-center p-3">Already registered?{' '} <Link href="/login"><a>Login</a></Link></p>
            </div>
        </>
    );
};

export default React;