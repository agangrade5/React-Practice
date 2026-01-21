import React from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {

    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/contact');
    }

    return (
        <div>
            <div>About</div>
            <button onClick={goToContact}>Go to Contact</button>
        </div>

    )
}

export default About