import { useState } from 'react';
import "./about.css";

const About = () => {
    const  [visible, setVisible] = useState(false);

    const changeVisibility = () => {
        setVisible(!visible);
    return (
        <div>
            <h1>About Me</h1>
            <h3>Kacy Clark</h3>

            
        </div>
    );
};
};

export default About;
