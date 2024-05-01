import  './Services.css';
import img1 from './img/frame_source.svg';
import img2 from './img/partner_exchange.svg';
import img3 from './img/support_agent.svg';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Services = () => {

    useEffect(() => {
        Aos.init({duration: 9000})
      })

    return(
        <>
            <h1 className="Stext">SERVICES</h1>
            <div className='flex' >
                <div className='card'>
                    <img src={img1} className='anime' alt="" data-aos="zoom-x-out" data-aos-delay="50"/>
                    <div className='ser'>
                        <p className='p'>
                        Software Development
                        </p>
                        <p className='p1'>
                            At Daniam, we use the latest and most advanced technologies to provide efficient, scalable, and user-friendly software solutions. We dive into each project with professionalism and dedication, making sure we fully understand our client's objectives before development. Our goal is to provide software that is specifically tailored to each customer's unique needs, and we do our utmost to ensure that.                    
                        </p>
                    </div>
                </div>

                <div className='card'>
                    <img src={img2} className='anime' alt=""  data-aos="zoom-x-out" data-aos-delay="50"/>
                    <div className='ser'>
                        <p className='p'>
                            Consulting
                        </p>
                        <p className='p1'>
                            Our team of experts will develop a technical mission statement specific to your project's needs and goals. From designing technical tasks to building, testing and deploying software, our consulting services cover all aspects of software development. We are committed to helping our customers turn their ideas into successful initiatives.                        </p>
                    </div>
                </div>

                <div className='card'>
                    <img src={img3} className='anime' alt="" data-aos="zoom-x-out" data-aos-delay="50"/>
                    <div className='ser'>
                        <p className='p'>
                            Support                        
                        </p>
                        <p className='p1'>
                            In the world of constantly evolving technologies, we acknowledge that our commitment should not end with the delivery of software. We will assist you in identifying and resolving technical issues that may arise while using the software,  as well as perform regular updates to the software to fix bugs and improve functionality. You will always have us there to answer any questions or concerns related to your software, including providing tips on how to use the software more effectively.                        
                        </p>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Services