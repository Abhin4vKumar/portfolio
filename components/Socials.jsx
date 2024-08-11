import Link from "next/link"
import {FaGithub , FaLinkedinIn , FaYoutube , FaTwitter} from 'react-icons/fa'

const socials = [
    {icon:<FaGithub />,path:'https://github.com/Abhin4vKumar'},
    {icon:<FaLinkedinIn />,path:'https://www.linkedin.com/in/abhinav-kumar-111614232/'},
    // {icon:<FaYoutube />,path:'https://www.youtube.com/@levi_val'},
    {icon:<FaTwitter />,path:'https://x.com/AbhinavKum4r'},
]


const Socials = ({containerStyles , iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
            );
        })}
    </div>
  )
}

export default Socials