import img1 from './img/arajiny.svg';
import img2 from './img/erord.svg';
import img3 from './img/tras.svg';
import img4 from './img/chorord.svg';
import img5 from './img/hingerord.svg';
import img7 from './img/yoterord.svg';
import img8 from './img/risk.svg'; 
import img6 from './img/arrow.svg';
import Request from './PopupRequest';
import './Projects.css';
import './Popup.css';
import './PopupRequest.css'

const Projects = () => {

    return(
        <>
           <h1 className="Protext">PROJECTS</h1> 
           <div>
                <div id='UNIFIED'>
                    <img src={img1} alt="" />
                    <div className='UNIFIED'>
                        <p>
                            <h1>Unified Trade Portal </h1>
                            <br /> <br />
                            <br /> <br />
                            Customs Declarations Portal, meticulously designed as a seamless platform cateringto customs declarations. The portal integrates with diverse state electronic systems,ensuring a streamlined and efficient experience for users. Notably, it goes beyond borders by establishing integration with the electronic systems of Eurasian Economic Union (EAEU) member states, facilitating the smooth exchange of data.
                        </p>
                    </div>
                </div>
           </div>

           <div id='MOB'>
                <div className='AllcardsP'>
                    <img src={img1} alt=""  />
                    <div className='seP'>
                        <p className='PinfoP'>
                            Unified Trade Portal 
                        </p>
                        <p className='Partners_infoP'>
                            Customs Declarations Portal, meticulously designed as a seamless platform cateringto customs declarations. The portal integrates with diverse state electronic systems,ensuring a streamlined and efficient experience for users. Notably, it goes beyond borders by establishing integration with the electronic systems of Eurasian Economic Union (EAEU) member states, facilitating the smooth exchange of data.
                        </p>
                    </div>
                </div>
           </div>

           <h1 className='Ttext'>Customs Projects</h1>

            <div className='flex'> 

            
                <div className='Allcard' style={{ backgroundColor: '#0F1221' }}>
                    <img src={img4} alt="" />
                    <div className='pr'>
                        <p className='Pinfo'>
                            Border Crossing
                        </p>
                        <p className='Partners_info'>
                            The control over the movement of vehicles carrying outinternational cargo transportation in customs control areas" system hasbeen introduced in the SRC of RA. The system records the entry or exit of avehicle into the customs control areas and in areas equipped with cameras. Thearea of entry and exit traffic control is carried out using the automaticrec...  
                        </p>
                    </div>
                    <div id='Index'>
                        <a className='read' href="#popup"> 
                            <div id='Index5'>
                                <a className='read5' class="button-78" href="#popup5"> Request Demo</a>
                                <img src={img6} alt="" /> 
                            </div>
                        </a>
                    </div>
                    <div id='popup'>
                        <div>
                            <a className='pop' href="#index">X</a>
                            <h2 className='text1'>Border Crossing</h2>
                            <p>  
                                <img src={img4} alt="" /> 
                                <br /> 
                                The system allows for the control over the movement of vehicles conducting international cargo transportation in customs control areas. This solution digitalizes the monitoring of vehicles in customs control zones and camera-equipped areas through the application of automatic license plate recognition technology. It ensures a seamless and efficient recording of the entry and exit of vehicles, with interoperability designed to facilitate a two-way exchange of data with relevant subsystems of the unified automated information system of customs. The system offers comprehensive functionalities, including real-time automated control over international cargo transportation at border crossing points, meticulous data collection at these points, optimized workforce distribution for daily shifts based on defined control functions, remote employee monitoring capabilities, and seamless integration with automatic ticket gates for enhanced border crossing point and Foreign Economic Activity service center management.                  
                            </p>
                        </div>
                    </div>

                    <div id='popup5'>
                        <Request />
                    </div>
                </div>

                <div className='Allcard' style={{ backgroundColor: '#101123' }}>
                    <img src={img2} alt="" />
                    <div className='pr'>
                        <p className='Pinfo'>
                            Customs Offences Database
                        </p>
                        <p className='Partners_info'>
                            CustomsOffences Database TheCustoms Offences Database (COD) is an intranet software tool of the StateRevenue Committee (SRC) of the Republic of Armenia (RA). It is integrated withall other subsystems of the unified information system of the customs service, whilealso functioning as a separate subsystem. The electronic documents...
                        </p>
                    </div>
                    <div id='Index1'>
                        <a className='read1' href="#popup1">
                            <div id='Index5'>
                                <a className='read5' class="button-78" href="#popup5"> Request Demo</a>
                                <img src={img6} alt="" />
                            </div>  
                        </a>
                    </div>
                    <div id='popup1'>
                        <div>
                            <a className='pop1' href="#index1">X</a>
                            <h2 className='text1'>Customs Offences Database</h2>
                            <p>  
                                <img src={img2} alt="" /> 
                                <br /> 
                                COD The Customs Offences Database (COD) stands as a pivotal intranet software tool within the State Revenue Committee (SRC) of the Republic of Armenia (RA). The system seamlessly integrates with all subsystems of the unified information system of the customs service, concurrently operating as a standalone subsystem. The electronic documents generated within the COD, encompassing electronic forms of diverse registers, adjustments, and associated documents, embody specific statuses and rules in alignment with procedural requirements. Essential to the SRC's coordinated efforts in detecting customs offenses, the COD facilitates the subsequent handling of identified violations. It serves as a centralized repository for the collection, processing, and analysis of relevant information, allowing authorized officials within SRC structural units access based on appropriate permissions. The system ensures seamless interoperability with the Customs Unified Automated Information System, enhancing data exchange efficiency. Historically, information on violations and inconsistencies in customs regulations was dispersed across electronic files or paper documents, hindering effective communication and coordination between research and inspection units. The COD addresses this challenge by amalgamating data from various sources, including the RA National Single Window for Foreign Trade Portal, Taxpayer 3 System, State Register Agency of Legal Entities, Passport and Visa Department of the RA Police, and databases from third parties. To further enhance service quality, a risk management toolkit has been integrated into the COD, directing targeted customs analyses and inspections. The system automates document preparation for detecting customs offenses, filling forms automatically with entered data. It offers regular insights into analysis results, studies, and checks on customs offenses, providing thematic, monetary, and summary information on the involved parties. The COD not only grants access to currently recorded offenses but also to historical records and investigations. It furnishes information on violations within administrative or criminal proceedings, detailing the subsequent fulfillment of obligations, including examination results in the RA SRC appeals commission and court. The Customs Offences Database, developed by our software team, serves as a comprehensive management and monitoring tool for customs offenses. It empowers the RA SRC with efficient collection, processing, and analysis of customs-related information, fostering enhanced coordination in detecting offenses and automating associated functions. It is not just a system; it is a commitment to facilitating effective                            </p>
                        </div>
                    </div>
                    
                    <div id='popup5'>
                       <Request />
                    </div>
                </div>

                <div className='Allcard' style={{ backgroundColor: '#01000E' }}>
                    <img src={img3} alt="" />
                    <div className='pr'>
                        <p className='Pinfo'>
                            Transport Means Declaration System
                        </p>
                        <p className='Partners_info'>
                            The Transport MeansDeclaration System is a declaration system for cargo and passenger vehicles.The system is based around the declaration, which records information aboutvehicles entering and leaving the RA. The system also forms respective taxesand duties.                        
                        </p>
                    </div>
                    <div id='Index2'>
                        <a className='read2' href="#popup2">
                            <div id='Index5'>
                                <a className='read5' class="button-78" href="#popup5"> Request Demo</a>
                                <img src={img6} alt="" />
                            </div>
                        </a>
                    </div>
                    <div id='popup2'>
                        <div>
                            <a className='pop2' href="#index2">X</a>
                            <h2 className='text1'>Transport Means Declaration System</h2>
                            <p>  
                                <img src={img3} alt="" /> 
                                <br /> 
                                The Transport Means Declaration System (TRMCD) is specifically designed for vehicles entering and leaving the Republic of Armenia (RA), TRMCD stands as a cornerstone in the efficient management of transportation declarations. Beyond its foundational role of recording comprehensive vehicle information, TRMCD automates the calculation of corresponding taxes and duties, ensuring financial transparency and regulatory compliance. This system not only streamlines the declaration process but also establishes a reliable repository for accurate record- keeping, encompassing essential details such as vehicle type, origin, destination, and other pertinent data. Developed in adherence to RA regulations, TRMCD facilitates seamless integration with relevant subsystems and databases, promoting interoperability for a more connected and efficient transportation and customs ecosystem. As a pivotal component of the customs and transportation infrastructure, TRMCD contributes to the overall efficiency of cargo and passenger vehicle movements, enhancing compliance and transparency                        
                            </p>
                        </div>
                    </div>

                    <div id='popup5'>
                       <Request />
                    </div>
                </div>

                <div className='Allcard' style={{ backgroundColor: '#0F0F2B' }}>
                    <img src={img8} alt="" />
                    <div className='pr'>
                        <p className='Pinfo'>
                            Risk Management System
                        </p>
                        <p className='Partners_info'>
                            The Tax Risk Management system (the System) is an integrated computer-based system that operates within the Taxpayer 3 System of the State Revenue Committee (data-SRC) of the Republic of Armenia (RA). The Taxpayer 3...
                        </p>
                    </div>
                    <div id='Index3'>
                        <a className='read3' href="#popup3">
                        <div id='Index5'>
                            <a className='read5' class="button-78" href="#popup5"> Request Demo</a>
                            <img src={img6} alt="" />
                        </div>
                        </a>
                    </div>
                    <div id='popup3'>
                        <div>
                            <a className='pop3' href="#index3">X</a>
                            <h2 className='text1'>Risk Management System</h2>
                            <p>  
                                <img src={img8} alt="" /> 
                                <br /> 
                                The Tax Risk Management System is an integrated complex designed for the effective management and analysis of tax data. The main components of this system are Neo4j and Elastic Stack, which provide powerful data structuring and processing capabilities. The system automatically collects and organizes both structured and unstructured data from various tax-related sources. This includes information from financial statements, returns, accounting documents and other relevant sources. The system operates through a graph database using Neo4j which allows for the efficient modelling and analysis of relationships between different data elements. A key advantage of the system is its ability to automatically generate algorithms when updating data. This ensures that the information is up-to-date and allows for a quick response to changes in tax legislation or the financial situation. Each taxpayer in the system a personal card, where necessary information is stored. The creation of individual cards enables quick access to needed information, and the calculation of individual data based on related documents. This significantly improves the efficiency and accuracy of the tax analysis process. Elastic Stack, in turn, provides powerful tools for searching, visualizing and monitoring data, which makes streamlines working with information. The system provides a high degree of data security and confidentiality, and is easily scalable to adapting to changing requirements and volumes of information.                            
                            </p>
                        </div>
                    </div>

                    <div id='popup5'>
                        <Request />
                    </div>
                </div>
            </div>

            <h1 className='Ttext'>Tax Projects</h1>

            <div className='flex'>
                <div className='Allcar' style={{ backgroundColor: '#150E1E' }}>
                    <img src={img5} alt="" />
                    <div className='pr'>
                        <p className='Pinfo'>
                            Electronic System for Audit Management
                        </p>
                        <p className='Partners_info'>
                            1.Electronic System for AuditManagement. Enables SRC employees to process...
                            <br />
                            2.“Audits, studies, committeedecisions” subsection of the...
                            <br />
                            3.SRC Appeals CommissionDecisions. The system ensures the prompt delivery of...
                        </p>
                    </div>

                    <div id='Index4'>
                        <a className='read4'  href="#popup4">
                            <div id='Index5'>
                                    <a className='read5' class="button-78" href="#popup5"> Request Demo </a>
                                    <img src={img6} alt="" />
                            </div>
                        </a>
                    </div>
                    <div id='popup4'>
                        <div>
                            <a className='pop4' href="#index4">X</a>
                            <h2 className='text1'>Electronic System of Audit Management</h2>
                            <p>  
                                <img src={img5} alt="" /> 
                                <br /> 
                                1. Electronic System for Audit Management. Enables SRC employees to process and organize the tax audits for taxpayers. 2. “Audits, studies, committee decisions” subsection of the Electronic Reporting System. Enables SRC employees to issue audit notices, document requirements, and enables feedback. 3. Risk Registration System. Already on the website 4. SRC Appeals Commission Decisions. The system ensures the prompt delivery of digitalized decisions to taxpayers, enhancing transparency and expediting communication                                
                            </p>
                        </div>
                    </div>

                    <div id='popup5'>
                       <Request />
                    </div>
                </div>
            </div>

            <div>
                <div id='UNIFIED1'>
                    <img src={img7} alt="" />
                    <div className='UNIFIED1'>
                        <p>
                            <h1>Tax Risks Management System </h1>                           
                            <br /> <br />
                            <br /> <br />
                            The Tax Risk Management System is an integrated complex designed for the effective management and analysis of tax data. The main components of this system are Neo4j and Elastic Stack, which provide powerful data structuring and processing capabilities.  
                        </p>
                    </div>
                </div>
           </div>

           <div id='MOB1'>
                <div className='AllcardsP'>
                    <img src={img7} alt="" />
                    <div className='seP'>
                        <p className='PinfoP'>
                            Tax Risks Management <br /> <br /> System                        
                        </p>
                        <p className='Partners_infoP'>
                            The Tax Risk Management System is an integrated complex designed for the effective management and analysis of tax data. The main components of this system are Neo4j and Elastic Stack, which provide powerful data structuring and processing capabilities.  
                        </p>
                    </div>
                </div>
           </div>

        </>
    )
}

export default Projects