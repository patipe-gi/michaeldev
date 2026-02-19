
import SocialButton from "../SocialButton"
import { socialData } from "../../data/socialData"

function Footer(){
   
    return(
 <div className="footer">

    <div>
        <span></span>
        <p>Back to top</p>
    </div>
      <div className="footer-icon"> 
                    {
                        socialData.map((link,index)=><SocialButton href={link.url} icon={link.icon} label={link.ariaLabel} key={index} />)
                    }
                         </div>
 </div>
    )
}
export default Footer