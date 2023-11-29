

import Sidebar from './Sidebar'
import SinglePost from './SinglePost'
export default function Single(){
    return(
        <div className='single'>
            {/*post*/}
            <SinglePost />
            <Sidebar />
        </div>
    )
}