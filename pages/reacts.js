import {useState, useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons'
import Link from "next/link"
const Reacts = () => {
    const [title, setTitle] = useState('tanveer123')
    const [picture, setPicture] = useState('tanv@gmail.com')
    const [desc, setDesc] = useState('description ps ths ')
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetchData();
    }
    async function fetchData(){
        try{
            setLoading(true)
            const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API}/reacts`)
            console.log('Register response', data);
            toast.success('Registration successful. Please Login')
            setLoading(false)
        } catch(err){
            toast.error(err.response.data)
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    return (
        <>
            <h1 className="jumbotron text-center bg-primary square">React Page</h1>
            
        </>
    );
};

export default Reacts;