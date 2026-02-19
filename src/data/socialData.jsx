import { FaAt, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

 export  const socialData=[
            {
                platform:'email',
                url:'mailto:patipem56@gmail.com?subject=Portfolio%20Contact&body=Hello%20Patrick,%0A%0AI%20found%20your%20portfolio%20and%20I%20would%20like%20to%20work%20with%20you.%0A%0AName:%20%0AProject:%20%0ADetails:%20',
                icon:<FaAt className="icon"/>,
                ariaLabel:'Envoyer un email'
    
            },
               {
                platform:'whatsapp',
                url:'https://wa.me/237675183502?text=Bonjour',
                icon:<FaWhatsapp className="icon"/>,
                ariaLabel:'Envoyer un message'
    
            },
               {
                platform:'Linkedin',
                url:'https://www.linkedin.com/in/michael-patipe-071ba735b/',
                icon:<FaLinkedin className="icon"/>,
                ariaLabel:'voir mon profile '
    
            }, 
            {
                platform:'Github',
                url:'https://github.com/patipe-gi/my-porfolio',
                icon:<FaGithub className="icon"/>,
                ariaLabel:'voir mon profile '
    
            },
        ]