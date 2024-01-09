import { Link } from 'react-router-dom';
import './projects.css';

function Projects() {

    return(
        <>
            <Link className='about-goBack' to='/'>
                <span> &#8592;</span> <span>Go Back</span>
            </Link>
            <header className='home-header'>
            <h2>Robert Brockmann</h2>
            <h1>
                <span>Tech and Web Dev</span>
            </h1>
            <p>
                A place for my interests in tech. <br /> Web development, security, IT, and programming.
            </p>
            </header>
            <div className='header'>
                <header>
                    Other Projects
                </header>
            </div>
            <a href='https://bbrockmann1.github.io/identity-generator/' target="_blank" rel="noopener noreferrer" className='project1'>
                <div className='image-container'>
                    <img src='/assets/images/IG.png' alt='Identity Generator' className='image' />
                </div>
            <div className='text-container'>
                <h2>Identity Generator -  <a className='a' href='https://github.com/bbrockmann1/identity-generator' target="_blank" rel="noopener noreferrer">Github</a></h2>
                <p>A Vanilla JavaScript Project</p>
                <ul className='hi'>
                    <li>An identity generator app that allows you to get a temporary identity for websites.</li>
                    <li>Queries the randomuser.me API to get random identities.</li>
                    <li>Seeds to generate previously generated identities.</li>
                    <li>Hover over a field to edit.</li>
                </ul>
            </div>
            </a>
        </>
    );
};

export default Projects;