import '../src/Skills.css';

export default function Skills() {
    return (
        <div className="skills md:mx-44 flex flex-col mt-16 mb-20 md:mb-32">
            <hr className='' />
            <div className="experience flex flex-col gap-6 md:mt-16 md:flex-row justify-between ">
                <div className='md:mr-8'>
                    <h2 className="text-white font-space md:text-3xl md:leading-14 tracking-tight text-center md:text-left font-SpaceGrotesk font-bold text-2xl leading-10 " >HTML</h2>
                    <p className="font-medium  font-space text-base leading-7 text-center md:text-left" >1 Year Experience</p>
                 </div>
                 <div className='md:mr-8'>
                    <h2 className="text-white font-space md:text-3xl md:leading-14 tracking-tight text-center md:text-left font-SpaceGrotesk font-bold text-2xl leading-10" >CSS</h2>
                    <p className="font-medium  font-space text-base leading-7 text-center md:text-left" >1 Year Experience</p>
                </div>
                <div className='md:mr-8'>
                    <h2 className="text-white font-space md:text-3xl md:leading-14 tracking-tight text-center md:text-left font-SpaceGrotesk font-bold text-2xl leading-10" >JavaScript</h2>
                    <p className="font-medium  font-space text-base leading-7 text-center md:text-left" >1 Year Experience</p>
                </div>
            </div>
            <div className="access flex flex-col gap-6 justify-between md:mt-14 md:flex-row" >
                <div>
                    <h2 className="text-white font-space md:text-3xl md:leading-14 tracking-tight text-center md:text-left font-SpaceGrotesk font-bold text-2xl leading-10 mt-6 md:mt-0" >Tailwind</h2>
                    <p className="font-medium  font-space text-base leading-7 text-center md:text-left" >1 Year Experience</p>
                 </div>
                 <div>
                    <h2 className="text-white font-space md:text-3xl md:leading-14 tracking-tight text-center md:text-left font-SpaceGrotesk font-bold text-2xl leading-10" >React</h2>
                    <p className="font-medium  font-space text-base leading-7 text-center md:text-left" >1 Year Experience</p>
                </div>
                <div className='access' >
                    <h2 className="text-white font-space md:text-3xl md:leading-14 tracking-tight text-center md:text-left font-SpaceGrotesk font-bold text-2xl leading-10" >Accessibility</h2>
                    <p className="font-medium  font-space text-base leading-7 text-center md:text-left" >1 Year Experience</p>
                </div>
            </div>
        </div>
    )
}