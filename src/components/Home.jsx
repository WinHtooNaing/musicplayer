import './home.css';
import music from '../image/music12.png';

const Home = () => {
    return (
        <>
        <div className='container'>
        <div className='sar'>
            <div className='font'>
            <h1 className='listen'>Listen</h1>
            <h1 className='to'> to</h1>
            </div>
            
            <h1 className='new'>new music.</h1>
            <p className='ptext'>Our main goal is to make our website users<br/>
             happy, so please give our website a try.</p>
             <div className='button'>
                <button className='btn1'>DOWNLOAD NOW</button>
                <button className='btn2' ><a href="/musicplayer">START FREE TRIAL</a></button>
             </div>
             <div className='alone'>
                <div className='alone1'></div>
                <div className="alone2"></div>
             </div>

        </div>
            <div className="img">
                <img src={music} alt="img" />
            </div>
        </div>
            
        </>
    )
}



export default Home;