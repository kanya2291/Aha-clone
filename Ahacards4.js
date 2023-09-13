import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ahastyles4.css';
const Ahacards4 = () => {
    const images = [
        {
            id: 1,
            src: "https://yuppstatic.akamaized.net/yupptv/tv9/TV9Telugu_1200x628.jpg",
            name:"TV9 telugu live news",
        },
        {
            id: 2,
            src: "https://i.ytimg.com/vi/byG7EGw9NPs/maxresdefault.jpg",
            name:"10 Tv news Telugu",

        },
        {
            id:3,
            src:"https://www.aapp.in/wp-content/uploads/2022/03/maxresdefault-13.jpg",
            name:"V6 news Telugu"
        },
        {
            id:4,
            src:"https://upload.wikimedia.org/wikipedia/en/0/03/HMTV_Channel_Logo.png",
            name:"hmtv news"
        },
        {
            id:5,
            src:"https://d229kpbsb5jevy.cloudfront.net/st-ak/yupptv/og_image/T-sat.jpg",
            name:"T-SAT Nipuna "
        },
        {
            id:6,
            src:"https://d229kpbsb5jevy.cloudfront.net/st-ak/yupptv/og_image/T-sat-Vidya.jpg",
            name:"T-SAT Vidhya"
        },
        // {
        //     id:7,
        //     src:"https://image-resizer-cloud-api.akamaized.net/image/FBB7E93A-6C96-4728-9654-7BB1EE7CD882/0-16x9.jpg?width=620",
        //     name:"Nenu super woman episode7"
        // },
        // {
        //     id:8,
        //     src:"https://i.ytimg.com/vi_webp/Jkude1noq28/hqdefault.webp",
        //     name:"Nenu super woman episode8"
        // },
        // {
        //     id:9,
        //     src:"https://images.ottplay.com/photo/show/Nenu_Super_Women_2023_web_series_photo_1_198.jpeg",
        //     name:"Nenu super woman episode9"
        // },
        // {
        //     id:10,
        //     src:"https://image-resizer-cloud-api.akamaized.net/image/47E3281F-1E9C-43AB-B9BF-994A2E840788/0-16x9.jpg?width=1920",
        //     name:"Nenu super woman episode10"
        // }


    ];
    return (
        <div className='d-flex'>
            {
                images.map((u) => {
                    return (
                        <div>
                        <Card  className="cardd3">
                            <Card.Img variant="top" src={u.src} className='carddimg3' />
                            {/* <Card.Body style={{width:"13rem"}}>
                                <Card.Text style={{marginTop:"-50px",marginLeft:"-10px",color:"white"}}>
                                    {u.name}
                                </Card.Text>
                            </Card.Body> */}
                        </Card>
                        <p className='paraa3'>{u.name.slice(0,15)}...</p>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default Ahacards4