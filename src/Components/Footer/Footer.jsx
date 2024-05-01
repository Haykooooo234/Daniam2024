import img1 from './img/addres.svg';
import img2 from './img/phone.svg';
import img3 from './img/support.svg';
import img4 from './img/logo1.svg';
import img5 from './img/logo2.png';
import img6 from './img/logo3.png'
import './Footer.css';
const Footer = () => {

    return(
        <footer class="footer">
            <div class="waves">
                <div class="wave" id="wave1"></div>
                <div class="wave" id="wave2"></div>
                <div class="wave" id="wave3"></div>
                <div class="wave" id="wave4"></div>
            </div>
            <div id='info'>
                <div id='DIRECTORR'>
                    <div className='Armen'>
                        <div className='location'>
                            <img src={img1} alt="" />
                            <a href='https://www.google.com/maps/place/8+M.+Baghramian+2nd+d%2Fst,+Yerevan+0019/data=!4m2!3m1!1s0x406abd13f922e7d3:0xe98cbce13512f1c?sa=X&ved=1t:242&ictx=111' target='_blank'>
                                <span>Armenia, Yerevan, 8 M. Baghramian 2nd d/st</span>
                            </a>
                        </div>
                       <div className='location'>
                            <img src={img2} alt="" />
                            <a href="tel:+374 10 300911">
                                <span>+374 10 300911</span>
                            </a>
                        </div>                       
                        <div className='location'>
                            <img src={img3} alt="" />
                            <a href='mailto:hsargsyan887@gmail.com'>
                                <span>support@daniam.am</span>
                            </a>
                        </div>
                    </div>
                    <div className='DIRECTORR'>
                        <div className='img1'><img src={img4} alt="" /></div>
                        <div className='img1'><img src={img5} alt="" /></div>
                        <div className='img1'><img src={img6} alt="" /></div>
                    </div>
                </div>
            </div>
            <p className='copyright'>&copy;Copyright © 2023 Daniam. All rights reserved.</p>
        </footer>
    )
}

export default Footer;