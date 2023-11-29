
import { useEffect,useState } from "react";

import Header from "./Header"
import Posts from './Posts'
import Sidebar from './Sidebar';
import axios from 'axios';
import { useLocation } from "react-router-dom";

export default function Home(){
    const [posts,setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(() => {
        const fetchPosts = async()=>{
        const res = await axios.get("/posts" + search);
        setPosts(res.data)
        }
        fetchPosts()
    },[search])
    return(
        <>
            <Header />
            <div className="home">
            <Posts posts={posts} />
            <Sidebar />

            </div>
        </>
    )
};