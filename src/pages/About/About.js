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
            <p className='contents'>
            Hello! Welcome to my full-stack self-hosted blog website. My name is Robert Brockmann, and I'm a full-stack web developer living in Colorado. This space serves as a platform for me to discuss my interests in technology. You'll find blog topics covering a wide range, from web development and security to Raspberry Pi projects. Through these blogs, I aim to showcase my tech skills while assisting others in troubleshooting problems I've encountered in the past.
            <br/>
            <br/>
            This website incorporates a React.js frontend and a Node.js/Express API with a PostgreSQL database, all of which are hosted and deployed on my own hardware. Both the client and API serve content to you over HTTPS and trusted SSL certificates. There has been a lot of work that has gone into this project so far, but there is much more to come. In the future, I plan to develop more website, API, and security features while writing about it along the way.
            <br/>
            <br/>
            As of the date of deployment, the code for this frontend web client will be publicly available on my GitHub for anyone interested in forking, modifying, or contributing to it. Thank you for visiting my website. For any inquiries, please reach out to me at bbrockmann1@gmail.com. Please note that solicitations will be ignored.
            </p>
        </div>
    </>
    );
};

export default About;
