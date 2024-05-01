import img1 from './img/Aragin.svg';
import img2 from './img/Erkrord.svg';
import img3 from './img/Errord.svg';
import img4 from './img/Chorord.svg';
import img5 from './img/Hingerord.svg';
import img6 from './img/Vecerord.svg';
import img7 from './img/Yoter0rd.svg';
import img8 from './img/Uterord.svg';
import img9 from './img/Innerord.svg';
import img10 from './img/Taserord.svg';
import './Partners.css';
const Partners = () => {

    return(
        <div>
            <h1 className="Ptext">HONORABLE PARTNERS</h1>
            <div className="flex">

                <div className='cards'>
                    <img src={img1} alt="" />
                    <div className='serr'>
                        <p className='Pinfo'>
                            Kamurj
                        </p>
                        <p className='Partners_info'>
                            Best Micro Finance Organization in Armenia 2022                        
                        </p>
                    </div>
                </div>
                <div className='cards'>
                    <img src={img2} alt="" />
                    <div className='serr'>
                        <p className='Pinfo'>
                            Cadastre Committee
                        </p>
                        <p className='Partners_info'>
                            The State Committee of the Real Property Cadastre of Armenia                        
                        </p>
                    </div>
                </div>
                <div className='cards'>
                    <img src={img3} alt="" />
                    <div className='serr'>
                        <p className='Pinfo'>
                            RA State Revenue Committee
                        </p>
                        <p className='Partners_info'>
                            The State Revenue Committee is the tax and customs authority of Armenia                        
                        </p>
                    </div>
                </div>
                <div className='cards'>
                    <img src={img4} alt="" />
                    <div className='serr'>
                        <p className='Pinfo'>
                            Masshtab Consultancy
                        </p>
                        <p className='Partners_info'>
                            Consulting company focused on project management, business intelligence, and business analytics for both public and private sectors                        
                        </p>
                    </div>
                </div>
                <div className='cards'>
                    <img src={img5} alt="" />
                    <div className='serr'>
                        <p className='Pinfo'>
                            Mindwise
                        </p>
                        <p className='Partners_info'>
                            Consulting company that specialized on Artificial Intelligence, Machine Learning, and Big Data analysis                      
                        </p>
                    </div>
                </div>
                <div className='cards'>
                    <img src={img6} alt="" />
                    <div className='serr'>
                        <p className='Pinfo'>
                            Gazprom Armenia
                        </p>
                        <p className='Partners_info'>
                            Gazprom Armenia is the main supplier of natural gas in Armenia                        
                        </p>
                    </div>
                </div>
                <div className='cards'>
                    <img src={img7} alt="" />
                    <div className='serr'>
                        <p className='Pinfo'>
                            Zvartnots                        
                        </p>
                        <p className='Partners_info'>
                            Armenia International Airports
                        </p>
                    </div>
                </div>
                <div className='cards'>
                    <img src={img8} alt="" />
                    <div className='serr'>
                        <p className='Pinfo'>
                            QuesTrade
                        </p>
                        <p className='Partners_info'>
                            Canadian Financial Institution that focuses on providing investors with alternative investment options
                        </p>
                    </div>
                </div>
                <div className='cards'>
                    <img src={img9} alt="" />
                    <div className='serr'>
                        <p className='Pinfo'>
                            Uni Speech
                        </p>
                        <p className='Partners_info'>
                            Uni Speech focused on delivering universal, standards-based, and highly efficient solutions tailored to the customer’s needs.
                        </p>
                    </div>
                </div>
                <div className='cards'>
                    <img src={img10} alt="" />
                    <div className='serr'>
                        <p className='Pinfo'>
                            Volo
                        </p>
                        <p className='Partners_info'>
                            Project Management Consulting Company for the IT sector
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Partners;