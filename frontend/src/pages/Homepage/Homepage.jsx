/* eslint-disable no-unused-vars */
import Navbar from '../../components/Navbar/Navbar';
import './Homepage.css'
import Footer from '../../components/Footer/Footer.jsx';
import { useState } from 'react';
import Display from '../../components/Display/displays.jsx';
import ImageSlider from '../../components/ImageSlider/ImageSlider.jsx';

const Homepage = () => {
    const [data, setData] = useState([
        {
            "src":"https://picsum.photos/seed/img1/600/400",
            "alt":"image 1 for featured image"
        },
        {
            "src":"https://picsum.photos/seed/p2/600/400",
            "alt":"image 2 for featured image"
        },
        {
            "src":"https://picsum.photos/seed/p3/600/400",
            "alt":"image 3 for featured image"
        }
    ]);
    
    return (
        <div>
            <Navbar />
            {/* <Display data={data}/> */}
            <div >
                <ImageSlider images={data}/>
            </div>
            <div className='about-us-text'>
                {/* <h1> About Us</h1> */}
                <p className='intro-text'>
                    Founded in 1994, Vox Sportswear is a fully student-owned and operated business at Dartmouth,
                    driven by the mission to make custom gear affordable. 
                    We're committed to helping promote organizations and events without the burden of high costs.
                    By fostering close relationships with local wholesalers and printers, we not only ensure lower prices and quicker turnarounds but also support our community's local artists.
                    Whether it's through our custom screen-printed or embroidered gear, we're dedicated to turning your vision into a reality, every step of the way.
                </p>
                <button>
                    Shop Now
                </button>
            </div>



            <Footer/>
        </div>
    )
}

export default Homepage;