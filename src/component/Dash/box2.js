import React from 'react'
import Labeldt from '../backpage/label'
// import axios from 'axios'


function Box2() {
    // const baseURL = 'https://jsonplaceholder.typicode.com/users'
    // const [post, setpost] =  React.useState(null)

    // React.useEffect(() => {
    //     axios.get(baseURL).then ((data) => {
    //         console.log(data);
    //         setpost(data?.data)
    //     })
        
    // }, [])

    // if(!post) return null

    const title = () => {
        return ("Produk Terlaris")
      }
    return(
        <>
            <div className='flex'></div>
                <div className='bg-blue-100 shadow-md p-2 rounded-md w-full '>
                    <Labeldt title = {title} />

                    <div className='bg-slate-50 p-1 rounded-md mt-2 h-40'>
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
            </div>
        </>
    )
}

export default Box2