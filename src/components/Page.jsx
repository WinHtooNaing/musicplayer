import './page.css';
import music3 from '../image/music3.png'
import user from '../image/user (1).png';
import subscribe from '../image/user (2).png';
import facebook from '../image/facebook.png';
import youtube from '../image/youtube.png';
import instagram from '../image/instagram.png';
const Page = () => {
    return (
        <>
            <div className="pages">
                <div className="header">
                    <h1>My Pages</h1>
                    <p>The pages of our website are listed below</p>
                </div>
                <img src={music3} alt="music3" className="img3" />
            </div>
            <div className='pages1'>
                <img src={user} alt="" className='user'/>
                <p>user-(1-million)</p>
                <img src={subscribe} alt="" className='subscribe'/>
                <p>900K-subscriber</p>
            </div>
            <div className='footer'>
                <h1>Our Platforms</h1>
                <div className="footerContainer">
                    <div className="facebook">
                        <div className='img1'>
                            <img src={facebook} alt="" />
                            <p className='p11'>Facebook</p>
                        </div>
                        <div className="p1">
                        <h4 style={{marginLeft: "10px"}}>Facebook : A Complete User's <br/> <br/>Guide to My music</h4>
                        <div style={{display : "flex" , flexDirection : "row"}}>
                            <img src={facebook} alt="" style={{width : "30px" , height : "30px" , borderRadius: "50%" , marginTop : "40px" , marginLeft : "15px"}} />
                            <p style={{marginLeft: "10px" , marginTop: "42px"}}>Win Player Music</p>
                        </div>
                        </div>
                    </div>
                    <div className="youtube">
                    <div className='img1'>
                            <img src={youtube} alt="" />
                            <p className='p22'>Youtube</p>
                            
                        </div>
                        <div className="p1">
                        <h4 style={{marginLeft: "10px"}}>Youtube : Watch with video <br/> <br/> to My music</h4>
                        <div style={{display : "flex" , flexDirection : "row"}}>
                            <img src={youtube} alt="" style={{width : "30px" , height : "30px" , borderRadius: "50%" , marginTop : "40px" , marginLeft : "15px"}} />
                            <p style={{marginLeft: "10px" , marginTop: "42px"}}>Win Player Music</p>
                        </div>
                        </div>
                    </div>
                    <div className="instagram">
                    <div className='img1'>
                            <img src={instagram} alt="" />
                            <p className='p33'>Instagram</p>
                            
                        </div>
                        <div className="p1">
                        <h4 style={{marginLeft: "10px"}}>Instagram : Information  <br/> <br/> for My music</h4>
                        <div style={{display : "flex" , flexDirection : "row"}}>
                            <img src={instagram} alt="" style={{width : "30px" , height : "30px" , borderRadius: "50%" , marginTop : "40px" , marginLeft : "15px"}} />
                            <p style={{marginLeft: "10px" , marginTop: "42px"}}>Win Player Music</p>
                        </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div style={{margin: "20px 0 20px 600px", display: "flex" , }}>
                <div style={{width: "20px" , height: "20px" , borderRadius:"50%" , background: "#FBBC05"}}></div>
                <div style={{width: "20px" , height: "20px" , borderRadius:"50%" , background: "#34A853" , marginLeft:"10px"}}></div>
                <div style={{width: "20px" , height: "20px" , borderRadius:"50%" , background: "#DA4335" , marginLeft:"10px"}}></div>
            </div>
        </>
    )
}



export default Page;