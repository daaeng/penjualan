import React from 'react'
// import axios from 'axios'
// import {baseURL} from '../config/api/axios'

function Box2() {
    // const baseURL = 'https://dummyjson.com'
    // const URL = '/users'
    // const [post, setpost] =  React.useState(null)

    // React.useEffect(() => {
    //     axios.get(baseURL+URL).then ((data) => {
    //         console.log(data);
    //         setpost(data?.data)
    //     })
        
    // }, [])

    // if(!post) return null

    

    return(
        <>
            <div className='flex'>

                    <div className='bg-slate-50 p-1 rounded-md mt-2 h-40 w-full'>
                        isi konten, barang paling laris di atas

                        {/* <div>
                            Nama User
                            {post.map((user, i) => {
                                return (
                                <div key={i}>
                                    {user?.name} : 
                                    {user?.username}
                                    
                                </div>
                                );
                            })}
                        </div> */}
                        
                    </div>
                </div>
            
        </>
    )
}

export default Box2