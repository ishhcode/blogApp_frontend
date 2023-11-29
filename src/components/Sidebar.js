import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Sidebar.css';
export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async() => {
            const res = await axios.get("/categories");
            setCats(res.data);
        }
        getCats();
    },[])
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME</span>
                <img className='sidebarimg' src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg" alt='' />
                <p>I am Ishika Aggarwal an undergraduate of Btech. in cse .This Blog Website is created by me .
                    I aspire to be a Full Stack Web Developer and create more content like this.</p>

            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                {cats.map((c) =>
                    <Link to={`/?cat=${c.name}`} className='link'>
                    <li className='sidebarListItem' >{c.name}</li>
                    </Link>
                    
                )}
                </ul>

            </div>
            <div className='sidebarItem' >
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className='sidebarSocial'>
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>

            </div>


        </div>

    )
};