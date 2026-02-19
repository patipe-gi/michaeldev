import Header from "../components/Layout/Header"
import profImage from "../../public/image/Snapchat-1035627273 (1).png"
import SocialButton from "../components/SocialButton"
import { socialData } from "../data/socialData"

function Home(){
   

    return(
        <div
        className="cont">
           

            <div  className="container1">
 <div className="left-clipped">
                <div className="presentation">
                    <h2>Hi, I am</h2>
                    <h1 style={{marginBottom:"0.5rem"}}> Patipe Michael</h1>
                    <p className="intro-description">Front-end / Backend Developer</p>
                    <div className="social"> 
                    {
                        socialData.map(link=><SocialButton href={link.url} icon={link.icon} label={link.ariaLabel} />)
                    }
                         </div>
                </div>
            </div>
            <div className="section2">
                <img src={profImage} alt="michael patipe" className="img" />
            </div>
                
           
            </div>
            <Header homeclass="home-class"></Header>
        </div>
    )
}
export default Home