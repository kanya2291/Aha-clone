import React from 'react'
import './ahastyles.css'
import 'primeicons/primeicons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-bootstrap/Carousel';
import Ahacards from './Ahacards';
import Ahacards2 from './Ahacards2';
import Ahacards3 from './Ahacards3';
import Ahacards4 from './Ahacards4';

const Aha = () => {
    return (
        <div className='main'>
            <div className='navbar'>
                <nav className='nav'>
                        <div className='imgdiv'>
                            <a><img src='https://static.businessworld.in/article/article_extra_large_image/1676380057_KtPTGs_aha.jpg' alt='aha image' /></a>
                            <ul>
                                <li>Home</li>
                                <li>Movies</li>
                                <li>Shows</li>
                                <li>Watch for free</li>
                                <li>My aha</li>
                            </ul>
                        </div>
                        <div className='rightnav'>
                            <ul>
                                <li><i class="pi pi-search"></i></li>
                                <li><FontAwesomeIcon icon={faLanguage} /></li>
                                <li><button className='btn'>Subscribe Now</button></li>
                                <div className='imgg'>
                                    <li><img src='https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=' /></li>
                                    <li>Sign In</li></div>
                            </ul>
                        </div>
                </nav>
                <div className='corousel'>
                        <Carousel>

                            <Carousel.Item>
                                <img
                                    className="d-block "
                                    src="https://files.prokerala.com/movies/pics/800/nagaram-movie-poster-67097.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src="https://www.filmibeat.com/wimg/mobi/2012/12/135590005519328.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src="https://m.media-amazon.com/images/M/MV5BMGNjNGMwYzEtZTJkZi00NGJiLThlMjctZDJlMTExODk3MjI5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjY1MjkzMjE@._V1_.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src="https://pbs.twimg.com/media/Do0-EmvXsAAcyuH.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src="https://www.coca-colacompany.com/content/dam/journey/au/en/private/2015/11/sprite-to-the-rescue-campaign-article-lead-full-939-456-ffefdcfc.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src="https://www.cinejosh.com/gallereys/movies/normal/fidaa_movie_posters_and_stills_1007171239/fidaa_movie_posters_and_stills_1007171239_004.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
            </div>
            <div className='actors'>
                <h3>Actors(A-Z)</h3>
                <img src='https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/201808/Nagarjuna_IT_1535533429737.jpg?VersionId=BC9628eqg2zOnljzq7zdTGLk_NMWoK.7&size=686:*' alt='Nagarjuna' />
                <img src='https://filmfare.wwmindia.com/thumb/content/2022/aug/nagachaitanya91660714518.jpg?width=1200&height=900' alt='Naga Chaitanya' />
                <img src='https://www.instantstories.com/uploads/stories/akhil-akkineni/akhil-akkineni-latest-hd-images-vve4-lg.jpg?v=1569664266' alt='Akhil' />
                <img src='https://m.media-amazon.com/images/M/MV5BZDY5YmE3ZDMtNGY2NS00NGYwLWEzNDctZTk1Yjk1MGQ3ZDJiXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_.jpg' alt='Prabhas' />
                <img src='https://wikibio.in/wp-content/uploads/2018/03/Anushka-Shetty.jpg' alt='Anushka Shetty' />
                <img src='https://www.filmibeat.com/img/2019/12/chiranjeevi-1575286539.jpg' alt='Chiru ' />
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Nani_at_an_interview_for_film_companion_%28cropped%29.png" alt='Nani ' />
                <img src='https://static.toiimg.com/thumb/61472067.cms?width=170&height=240&imgsize=26865' alt='Vijay' />
                <img src='https://www.telugu360.com/wp-content/uploads/2022/06/Mahesh-babu-1200x800.jpg' alt='Mahesh' />
                <img src='https://i.pinimg.com/736x/7c/a0/d8/7ca0d8ddfb0d54537eff6c5451d72395.jpg' alt='surya' />
                <img src='https://i.pinimg.com/564x/06/68/b5/0668b57eb0e8794b224f1462a8712679.jpg' alt='Vijay' />
                <img src='https://www.cinejosh.com/newsimg/newsmainimg/ram-charan-may-be-person-of-the-year-as-a-hero-and-producer_b_3012160648.jpg' alt='RamCharan' />
                <img src='https://www.filmibeat.com/img/1200x80x675/popcorn/movie_lists/top-10-best-movies-of-action-hero-vishal-20170829150044-3765.jpg' alt='Vishal ' />
                {/* <img src='https://i.pinimg.com/1200x/24/dc/92/24dc925eff8b1eaee17bef1cdfe71536.jpg' alt='Ram ' /> */}
            </div>
            <div className='top10'>
                <div style={{display:"flex",justifyContent:"space-between"}}> 
                <h3>Top 10 this week</h3>
                <h3 style={{float:"right"}}>See All</h3></div>
                <Ahacards />
            </div>
            <div className='nsw'>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <h3>Nenu Super woman</h3>
                <h3>See All</h3></div>
                <Ahacards2 />
            </div>
            <div className='upcoming'>
                <div>
                    <h3>Upcoming On aha</h3>
                    <Ahacards3 />
                </div>
            </div>
            <div className='livenews'>
                <div>
                    <h3>Live News</h3>
                    <Ahacards4 />
                </div>
            </div>
        </div>
    )
}

export default Aha