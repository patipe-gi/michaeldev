const SocialButton =({href,icon,label})=>{
return<>
 <a href={href} aria-label={label} rel="noopener noreferrer" className="socialBtn shadow" target="_blank"> {icon}</a>
</>
}
export default SocialButton;