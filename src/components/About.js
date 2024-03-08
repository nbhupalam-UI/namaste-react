import User from './User';

const About = () => {
    return (
        <div className="about-container">
            <h1>This is about page</h1>
            <User name="Pradeep" location="Hyderabad" />
        </div>
    );
}

export default About;