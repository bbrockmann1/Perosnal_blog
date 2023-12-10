import './about.css';
import { Link } from 'react-router-dom';

function About() {
    return (
    <>
        <Link className='about-goBack' to='/'>
            <span> &#8592;</span> <span>Go Back</span>
        </Link>
        <div className='about-container'>
            <div className='pic-container'>
                <img src='/assets/images/me.png' alt='Robert Brockmann' className='img'/>
            </div>
            <div className='about-me'>
                About me
            </div>
        </div>
        <div className='text-container'>
            <p>
                Hello! Welcome to my self-hosted blog website. My name is Robert Brockmann, 
                and I'm a full-stack web developer living in Colorado. This space serves as 
                a platform for me to discuss my interests in technology. You'll find blog 
                topics covering a wide range, from web development and security to 
                Raspberry Pi projects. Through these blogs, I aim to showcase my tech 
                skills while assisting others in troubleshooting problems I've encountered 
                in the past.
                <br/>
                <br/>
                For now, you're browsing this website as a static React.js web client. However, 
                I have extensive plans for its' future development, including integrating a 
                backend web server to manage all my blog posts. This will eventually require an 
                upgrade in the hardware hosting this website and implementing robust security 
                practices to safeguard my network, database, and API. More than likely, showcasing failures
                along the way.
                <br/>
                <br/>
                As of the date of deployment, the code for this frontend web client will be publicly 
                available on my github for anyone interested in forking, modifying, or contributing to 
                it. Thank you for visiting my website. For any inquiries, please reach out to me at bbrockmann1@gmail.com. 
                Please note that solicitations will be ignored.
            </p>
        </div>
    </>
    );
};

export default About;
