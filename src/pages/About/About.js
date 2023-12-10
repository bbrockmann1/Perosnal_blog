import './about.css';
import { Link } from 'react-router-dom';

function About() {
    return (
    <>
        <Link className='about-goBack' to='/'>
            <span> &#8592;</span> <span>Go Back</span>
        </Link>
    </>
    );
};

export default About;