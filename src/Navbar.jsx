import "../src/Navbar.css";
import Github from "/src/assets/images/icon-github.svg"
import Twitter from "/src/assets/images/icon-twitter.svg"
import LinkedIn from "/src/assets/images/icon-linkedin.svg"
import FrontendMentor from "/src/assets/images/icon-frontend-mentor.svg"

export default function Navbar() {
    return (
        <div className="navbar flex flex-col md:flex-row items-center justify-between md:mx-40 mt-5">
            <div>
                <h2 className="text-4xl font-bold leading-8 tracking-tighter md:mr-96 ">serahnderi</h2>
            </div>
                 <div className='flex flex-row gap-8 items-center mt-5 md:mt-0  sm:pb-15 ' >
                    <a href='https://github.com/MundiaNderi' target="_blank" rel="noopener noreferrer">
                        <img src={Github} alt='github' className="" />
                    </a>
                     <a href='https://www.frontendmentor.io/profile/MundiaNderi' target="_blank" rel="noopener noreferrer">
                        <img src={FrontendMentor} alt='github' />
                    </a>
                     <a href='https://www.linkedin.com/in/serah-nderi/' target="_blank" rel="noopener noreferrer">
                        <img src={LinkedIn} alt='linkedin' />
                    </a>
                     <a href='https://twitter.com/nderisarah' target="_blank" rel="noopener noreferrer">
                        <img src={Twitter} alt='twitter' />
                    </a>
                </div> 
        </div>
    );
}
