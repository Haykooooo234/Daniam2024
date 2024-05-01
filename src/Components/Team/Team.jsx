import img1 from './img/Elchyan.svg';
import img2 from './img/Tigran.svg';
import img3 from './img/Ruslan.svg';
import img4 from './img/Aram.svg';
import img5 from './img/Shavo.svg';
import img6 from './img/Onik.svg';
import img7 from './img/Gor.svg';
import img8 from './img/Alisa.svg';
import img9 from './img/Daniil.svg';
import img10 from './img/Grisha.svg';
import img11 from './img/hayk.svg';
import img12 from './img/Roman.svg';
import img13 from './img/Harutyun.svg';
import img14 from './img/Arman2.svg';
import img15 from './img/Haykkka.jpg'
import img16 from './img/Anzela.svg';
import img17 from './img/Elvira.svg';
import img18 from './img/Melanya.svg';
import img19 from './img/Nelii.svg';
import img20 from './img/ArturPol.svg';
import img21 from './img/Vard.svg';
import img22 from './img/Ruzanna.svg';
import img23 from './img/Gor1.svg';
import img24 from './img/Norayr.svg';
import img25 from './img/Tatev.svg';
import img26 from './img/Andranik.svg';
import img27 from './img/Alina.svg';
import img28 from './img/Arman.svg';
import img29 from './img/Artur.svg'
import { useEffect } from 'react';
import './Team.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Team = () => {

    useEffect(() => {
        Aos.init({duration: 9000})
      })

    return(
        <div>
            <h1 className='Ttext'>CORE TEAM</h1>
            <div>
                <div id='DIRECTOR'>
                    <div className='Armen'>
                        <img src={img1} alt=""  />
                        <p>
                            Armen Elchiyan
                        </p>
                    </div>
                    <div className='DIRECTOR'>
                        <p>
                            EXECUTIVE DIRECTOR 
                            <br /> <br />
                            Welcome to Daniam!
                            <br /> <br />
                            I am happy that you have decided to get to know us! Thus, I cordially share with you who we are and what we stand for. Our passion for technology led us to create Daniam, while our belief in the transformative power of technology has driven our commitment to every project we undertake since day one. Following what Daniam has become, we are proud to see that we have remained true to our original values and commitment.
                        </p>
                    </div>
                </div>
            </div>
            <div id='Mob'>
                <div className='AllcardsA'>
                    <img src={img1} alt=""  />
                    <div className='seA'>
                        <p className='PinfoA'>
                            Armen Elchiyan
                        </p>
                        <p className='Partners_infoA'>
                            EXECUTIVE DIRECTOR 
                            <br />
                            Welcome to Daniam!
                            <br />
                            I am happy that you have decided to get to know us! Thus, I cordially share with you who we are and what we stand for. Our passion for technology led us to create Daniam, while our belief in the transformative power of technology has driven our commitment to every project we undertake since day one. Following what Daniam has become, we are proud to see that we have remained true to our original values and commitment.
                        </p>
                    </div>
                </div>
            </div>

            <h1 className='Ttext'>PROJECT MANAGERS</h1>

            <div className='flex'>
                <div className='Allcards'>
                    <img src={img2} alt=""  />
                    <div className='se'>
                        <p className='Pinfo'>
                            Tigran
                        </p>
                        <p className='Partners_info'>
                            Project Manager                        
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img3} alt=""  />
                    <div className='se'>
                        <p className='Pinfo'>
                            Ruslan
                        </p>
                        <p className='Partners_info'>
                            Project Manager                        
                        </p>
                    </div>
                </div>   
                <div className='Allcards'>
                    <img src={img28} alt=""  />
                    <div className='se'>
                        <p className='Pinfo'>
                            Arman
                        </p>
                        <p className='Partners_info'>
                            Project Manager                        
                        </p>
                    </div>
                </div>
            </div>

            <h1 className='Ttext'>BUSINESS ANALYSTS</h1>

            <div className='flex'>
                <div className='Allcards'>
                    <img src={img4} alt="" data-aos="zoom-in-down" />
                    <div className='se'>
                        <p className='Pinfo'>
                            Aram
                        </p>
                        <p className='Partners_info'>
                            Lead Business Analyst                        
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img5} alt=""  data-aos="zoom-in-down"/>
                    <div className='se'>
                        <p className='Pinfo'>
                            Shavarsh
                        </p>
                        <p className='Partners_info'>
                            Business Analyst                        
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img6} alt=""  data-aos="zoom-in-down"/>
                    <div className='se'>
                        <p className='Pinfo'>
                            Onik
                        </p>
                        <p className='Partners_info'>
                            Business Analyst                        
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img7} alt="" data-aos="zoom-in-down" />
                    <div className='se'>
                        <p className='Pinfo'>
                            Gor
                        </p>
                        <p className='Partners_info'>
                            Business Analyst                        
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img8} alt=""  data-aos="zoom-in-down"/>
                    <div className='se'>
                        <p className='Pinfo'>
                            Alisa
                        </p>
                        <p className='Partners_info'>
                            Business Analyst                        
                        </p>
                    </div>
                </div>
            </div>

            <h1 className='Ttext'>SOFTWARE DEVELOPERS</h1>

            <div className='flex'>
                <div className='Allcards'>
                    <img src={img9} alt="" data-aos="zoom-in-down" />
                    <div className='se'>
                        <p className='Pinfo'>
                            Daniil
                        </p>
                        <p className='Partners_info'>
                            Lead Software Developer                        
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img10} alt=""  data-aos="zoom-in-down"/>
                    <div className='se'>
                        <p className='Pinfo'>
                            Grisha
                        </p>
                        <p className='Partners_info'>
                            Senior Software Developer                       
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img11} alt=""  data-aos="zoom-in-down"/>
                    <div className='se'>
                        <p className='Pinfo'>
                            Hayk
                        </p>
                        <p className='Partners_info'>
                            Software Developer                       
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img29} alt="" data-aos="zoom-in-down" />
                    <div className='se'>
                        <p className='Pinfo'>
                            Artur
                        </p>
                        <p className='Partners_info'>
                            Software Developer                       
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img12} alt=""  data-aos="zoom-in-down"/>
                    <div className='se'>
                        <p className='Pinfo'>
                            Roman
                        </p>
                        <p className='Partners_info'>
                            Software Developer                       
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img15} alt="" data-aos="zoom-in-down" />
                    <div className='se'>
                        <p className='Pinfo'>
                            Hayk
                        </p>
                        <p className='Partners_info'>
                            Software Developer                       
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img13} alt="" data-aos="zoom-in-down" />
                    <div className='se'>
                        <p className='Pinfo'>
                            Harutyun
                        </p>
                        <p className='Partners_info'>
                            Data Scientist                      
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img14} alt="" data-aos="zoom-in-down"/>
                    <div className='se'>
                        <p className='Pinfo'>
                            Arman
                        </p>
                        <p className='Partners_info'>
                            Machine Learning Engineer                    
                        </p>
                    </div>
                </div> 
            </div>

            <h1 className='Ttext'>QUALITY ASSURANCE</h1>

            <div className='flex'>
                <div className='Allcards'>
                    <img src={img16} alt="" data-aos="zoom-in-down" />
                    <div className='se'>
                        <p className='Pinfo'>
                            Anzhela
                        </p>
                        <p className='Partners_info'>
                            Lead Quality Assurance Engineer
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img17} alt="" data-aos="zoom-in-down" />
                    <div className='se'>
                        <p className='Pinfo'>
                            Elvira
                        </p>
                        <p className='Partners_info'>
                            Quality Assurance Engineer
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img18} alt=""  data-aos="zoom-in-down"/>
                    <div className='se'>
                        <p className='Pinfo'>
                            Melanya
                        </p>
                        <p className='Partners_info'>
                            Quality Assurance Engineer
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img19} alt="" data-aos="zoom-in-down" />
                    <div className='se'>
                        <p className='Pinfo'>
                            Nelli
                        </p>
                        <p className='Partners_info'>
                            Quality Assurance Engineer
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img22} alt="" data-aos="zoom-in-down" />
                    <div className='se'>
                        <p className='Pinfo'>
                            Ruzanna
                        </p>
                        <p className='Partners_info'>
                            Quality Assurance Engineer
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img21} alt="" data-aos="zoom-in-down"/>
                    <div className='se'>
                        <p className='Pinfo'>
                            Vard
                        </p>
                        <p className='Partners_info'>
                            Quality Assurance Engineer
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img20} alt="" data-aos="zoom-in-down"/>
                    <div className='se'>
                        <p className='Pinfo'>
                            Artur
                        </p>
                        <p className='Partners_info'>
                            Quality Assurance Engineer
                        </p>
                    </div>
                </div>
            </div>

            <h1 className='Ttext'>DEVELOPMENT OPERATIONS</h1>

            <div className='flex'>
                <div className='Allcards'>
                    <img src={img23} alt=""data-aos="zoom-in-down"/>
                    <div className='se'>
                        <p className='Pinfo'>
                            Gor
                        </p>
                        <p className='Partners_info'>
                            Data Base Administrator
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img24} alt=""data-aos="zoom-in-down"/>
                    <div className='se'>
                        <p className='Pinfo'>
                            Norayr
                        </p>
                        <p className='Partners_info'>
                            Development Operations Engineer
                        </p>
                    </div>
                </div>
            </div>

            <h1 className='Ttext'>ADMINISTRATIVE PERSONNEL</h1>

            <div className='flex'>
                <div className='Allcards'>
                    <img src={img25} alt=""data-aos="zoom-in-down"/>
                    <div className='se'>
                        <p className='Pinfo'>
                            Tatevik
                        </p>
                        <p className='Partners_info'>
                            Chef Accountant
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img26} alt=""data-aos="zoom-in-down"/>
                    <div className='se'>
                        <p className='Pinfo'>
                            Andranik
                        </p>
                        <p className='Partners_info'>
                            Program Manager
                        </p>
                    </div>
                </div>
                <div className='Allcards'>
                    <img src={img27} alt="" data-aos="zoom-in-down"/>
                    <div className='se'>
                        <p className='Pinfo'>
                            Alina
                        </p>
                        <p className='Partners_info'>
                            Cleaning Manager
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Team