import './Home.css';
const Home = () => {

    return(
        <div id='Home'>

            <div id='Welcome'>
                <h1 className='Welcome1'>
                    WELCOME TO <span> DANIAM </span>
                </h1>
                <h1 className='Welcome2'>
                    Empowering Organizations through Innovative Software Solutions.
                </h1>
            </div>

            <h1 id='about'>
                ABOUT DANIAM
            </h1>

            <div id='Hometext'>
                <p className='textW'>
                    Welcome to Daniam, a leader in the Armenian market, dedicated to delivering exceptional software development services.
                </p>
                <p className='text2'>
                    Specializing in the creation of intricate ERP and information systems, we have positioned ourselves as a cornerstone in providing cutting-edge solutions for governmental organizations.
                </p>
                <p className='text3'>
                    Our Expertise: With a proven track record, Daniam has successfully undertaken diverse projects, spanning governmental institutions, tax and customs authorities, private infrastructure companies, airports, logistics, and retail. Our commitment extends beyond mere software development; we engage in big data and machine learning integration, as well as geographic information systems. This multifaceted approach ensures that our clients receive comprehensive solutions that meet the evolving demands of their industries.
                </p>
                <p className='text4'>
                    Client-Centric Solutions: Our software solutions developed by our seasoned team of business analysts are not one-size-fits-all; they are meticulously tailored to meet the unique needs of each client. This approach allows organizations to enhance efficiency, boost productivity, and drive profitability. We take pride in being a trusted partner, empowering our clients with the tools they need to thrive in a dynamic business environment.
                </p>
            </div>

        </div>
    )
}

export default Home;