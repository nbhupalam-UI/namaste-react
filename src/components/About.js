import { useContext } from 'react';
import User from './User';
import {UserDataContext} from '../utils/UserDataContext';

const About = () => {
    const { loggedInUser } = useContext(UserDataContext);
    return (
        <div className="about-container">
            <h1 className='font-bold text-2xl'>This is about page</h1>
            <h2 className='font-medium text-lg'>{loggedInUser}</h2>
            <User name="Pradeep" location="Hyderabad" />
        </div>
    );
}

export default About;