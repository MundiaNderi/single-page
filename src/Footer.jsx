import '../src/Footer.css'
import Github from "/src/assets/images/icon-github.svg"
import Twitter from "/src/assets/images/icon-twitter.svg"
import LinkedIn from "/src/assets/images/icon-linkedin.svg"
import FrontendMentor from "/src/assets/images/icon-frontend-mentor.svg"

export default function Footer(){
     return (
        <>
        <div className="footer flex flex-col ">
            <div>
                <hr className='mb-20 md:mb-24 md:mx-40 mt-20 md:24' />
            </div>
            <div className='flex flex-col md:flex-row md:mb-24 items-center md:mx-40 justify-between' >
                <h2 className="text-4xl font-bold leading-8 tracking-tighter">serahnderi</h2>
                <div className='flex flex-row gap-8 items-center sm:mt-5 sm:mb-14 ' >
                    <a href='https://github.com/MundiaNderi' target="_blank" rel="noopener noreferrer">
                        <img src={Github} alt='github' />
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
        </div>
        </>
    );
}