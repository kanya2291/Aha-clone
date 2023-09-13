import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Ahacards.css';
const Ahacards = () => {
    const images = [
        {
            id: 1,
            src: "https://www.filmiclub.com/resource/img/photo/movie/m405885809758468d9d.jpg",
            name:"Jalsa",
        },
        {
            id: 2,
            src: "https://m.media-amazon.com/images/M/MV5BZTc4YWY5MzAtOTc4Zi00NDVmLThlMGItYjliOGNkYmM3NDBmXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
            name:"Thupaki",

        },
        {
            id:3,
            src:"https://pbs.twimg.com/media/F1clpELXwAAwudF.jpg",
            name:"Hidimba"
        },
        {
            id:4,
            src:"https://m.media-amazon.com/images/M/MV5BZmRlZDM5OTMtZmUwNS00MTY4LWFmYzItYjRiZGY0MmM0MmJkXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
            name:"Samajavaragamana"
        },
        {
            id:5,
            src:"https://m.media-amazon.com/images/M/MV5BNThmOTIzOGMtOGRlYi00OWZkLWI3Y2EtY2FhZmY5MThmNjBmXkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_FMjpg_UX1000_.jpg",
            name:"Baby"
        },
        {
            id:6,
            src:"https://m.media-amazon.com/images/M/MV5BNjlkNWI1OGUtMzU0YS00M2Y4LTg2YTYtOTVhNDA4N2IzZGVmXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg",
            name:"Fidaa"
        },
        {
            id:7,
            src:"https://cdn.123telugu.com/content/wp-content/uploads/2023/05/malli-1.jpg",
            name:"Malli pelli"
        },
        // {
        //     id:8,
        //     src:"https://cdn.cinematerial.com/p/297x/nxlgxosd/sardar-french-movie-poster-md.jpg?v=1665217640",
        //     name:"Sardar"
        // },
        // {
        //     id:9,
        //     src:"https://timesofindia.indiatimes.com/photo/93519447.cms",
        //     name:"Rahasya"
        // },
        // {
        //     id:10,
        //     src:"https://m.media-amazon.com/images/M/MV5BNThmMGU1MWEtNjEwNC00MTljLWFlZjctNDQ4MzE2MTU5ZTM3XkEyXkFqcGdeQXVyMTQ2MDczMzM0._V1_.jpg",
        //     name:"Intinti Ramayanam"
        // }


    ];
    return (
        <div className='d-flex'>
            {
                images.map((u) => {
                    return (
                        <div>
                        <Card  className="cardd">
                            <Card.Img variant="top" src={u.src} className='carddimg' />
                            {/* <Card.Body style={{width:"13rem"}}>
                                <Card.Text style={{marginTop:"-50px",marginLeft:"-10px",color:"white"}}>
                                    {u.name}
                                </Card.Text>
                            </Card.Body> */}
                        </Card>
                        <p className='paraa'>{u.name}</p>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default Ahacards