import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ahastyles2.css';
const Ahacards2 = () => {
    const images = [
        {
            id: 1,
            src: "https://images.ottplay.com/photo/show/Nenu_Super_Women_2023_web_series_photo_1_198.jpeg",
            name:"Nenu super woman episode1",
        },
        {
            id: 2,
            src: "https://scontent.fhyd1-4.fna.fbcdn.net/v/t39.30808-6/366682680_607386744891311_5230730044134205484_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=109&ccb=1-7&_nc_sid=3fb9c2&_nc_ohc=QZ7KlTSmw3cAX_A-Jfc&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfCI2LiTIlFVPOzPevKqx9TCb04XBPRY5Dpx6WpCAoQC0g&oe=650579A3",
            name:"Nenu super woman episode2",

        },
        {
            id:3,
            src:"https://i.ytimg.com/vi_webp/gV4vv5yTIQ0/hqdefault.webp",
            name:"Nenu super woman episode3"
        },
        {
            id:4,
            src:"https://image-resizer-cloud-api.akamaized.net/image/47E3281F-1E9C-43AB-B9BF-994A2E840788/0-16x9.jpg?width=1920",
            name:"Nenu super woman episode4"
        },
        {
            id:5,
            src:"https://image-resizer-cloud-api.akamaized.net/image/82709CE3-1E41-4250-B16C-6E34A808EA97/0-16x9.jpg?width=620",
            name:"Nenu super woman episode5"
        },
        {
            id:6,
            src:"https://i.ytimg.com/vi_webp/Jkude1noq28/hqdefault.webp",
            name:"Nenu super woman episode6"
        },
        {
            id:7,
            src:"https://image-resizer-cloud-api.akamaized.net/image/FBB7E93A-6C96-4728-9654-7BB1EE7CD882/0-16x9.jpg?width=620",
            name:"Nenu super woman episode7"
        },
        {
            id:8,
            src:"https://i.ytimg.com/vi_webp/Jkude1noq28/hqdefault.webp",
            name:"Nenu super woman episode8"
        },
        {
            id:9,
            src:"https://images.ottplay.com/photo/show/Nenu_Super_Women_2023_web_series_photo_1_198.jpeg",
            name:"Nenu super woman episode9"
        },
        {
            id:10,
            src:"https://image-resizer-cloud-api.akamaized.net/image/47E3281F-1E9C-43AB-B9BF-994A2E840788/0-16x9.jpg?width=1920",
            name:"Nenu super woman episode10"
        }


    ];
    return (
        <div className='d-flex'>
            {
                images.map((u) => {
                    return (
                        <div>
                        <Card  className="cardd2">
                            <Card.Img variant="top" src={u.src} className='carddimg2' />
                            {/* <Card.Body style={{width:"13rem"}}>
                                <Card.Text style={{marginTop:"-50px",marginLeft:"-10px",color:"white"}}>
                                    {u.name}
                                </Card.Text>
                            </Card.Body> */}
                        </Card>
                        <p className='paraa2'>{u.name.slice(0,15)}...</p>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default Ahacards2