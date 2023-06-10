import './about.css';
import music1 from '../image/music.png'
const About = () => {
    return (
        <>
            <div className='container2'>
                <h1>About My Page</h1>
                <div className='container1'>
                    <p>
                        
I started creating my website in June 2022.<br/>
The purpose of creating it is that I myself enjoy listening to music,<br/>
 and I thought it would be beneficial for people like me.<br/>And I hope you enjoy using my website.
                    </p>
                    <img src={music1} alt="music1" />
                </div>
            </div>
        </>
    )
}


export default About;