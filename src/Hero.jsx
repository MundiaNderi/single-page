import "../src/Hero.css";
import Serah from '../src/assets/images/Serah NN.jpeg';
import Rings from '../src/assets/images/pattern-rings.svg';

export default function Hero() {
    return (
        <div className="flex flex-col-reverse md:flex-row">
        <div>
        <img src={Rings} alt="rings design" className="mt-8 md:mt-16" />
        <div className="hero md:ml-40 ">
            <h1 className="font-space text-8xl font-bold leading-88 md:tracking-tighter md:-mt-16  font-Space sm:text-4xl leading-10 tracking-tight text-center md:text-left md:font-bold md:text-7xl md:leading-88" >
                Nice to meet you! <br /> I'm Serah Nderi.
                </h1>
            <p className="mt-6 md:mt-11 text-base font-medium leading-7 font-space text-center md:text-left">
                Based in  Kenya, I’m a front-end developer <br />
                passionate about building accessible web apps <br /> that users love.</p>
        </div>
         <p className="contact mt-6 md:mt-12 font-space text-base font-bold leading-6 tracking-wider md:ml-40 text-center md:text-left" >CONTACT ME</p>
         </div>
         <div className="image mx-3 sm:mt-12 md:mr-40">
            <img src={Serah} alt="Developer's picture" className="" />
         </div>
         </div>
    )
}