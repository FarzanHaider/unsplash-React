import React, { useEffect, useState } from 'react'


function Unsplash() {
    const api = 'https://api.unsplash.com/photos?client_id=jXbFVy-sikjqdlZVNgJPk0lERimxGjJL8WOmjEltteQ'
    const [image, setImage] = useState([])
    const [search, setSearch] = useState("")
    useEffect(() => {
        async function splash() {
            const res = await fetch(api);
            const image = await res.json();
            console.log(image);
            setImage(image)
        }
        splash()
    }, [])
    const handleClick = async () => {
        const api1 = `https://api.unsplash.com/search/photos?&query=${search}&client_id=jXbFVy-sikjqdlZVNgJPk0lERimxGjJL8WOmjEltteQ`
        const res1 = await fetch(api1);
        const image1 = await res1.json();
        console.log(image1);
        setImage(image1.results);
    }
    return (
        <>
            <nav>
                <h1>unSplash</h1>
                <ul>
                    <li>Explore</li>
                    <li>advertise</li>
                    <li>unsplash+</li>
                    <li>Login</li>
                </ul>
                <div>
                    <input onChange={(e) => {
                        setSearch(e.target.value)
                    }} type="text" placeholder='Search High-Resolution images' />
                    <span>
                        <button onClick={handleClick}>Search</button>
                    </span>
                </div>
            </nav>

            <div className='grid'>

                
                {image?.map((pack) => {
                    const { id, urls, likes, alt_description } = pack;
                    return (
                        <>
                            <div className='outer-div'>
                                <div key={id}>
                                    <img src={urls.small} alt="" />
                                    <h3><b>Title:</b>{alt_description}</h3>
                                    <h4><b>Likes:</b>{likes}</h4>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default Unsplash

