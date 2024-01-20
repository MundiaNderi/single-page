import React from 'react';
import '../src/Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Contact() {
  return (
    <>
    <div className="contactForm flex flex-col md:flex-row mt-14 md:mt-32 justify-center md:justify-normal border border-red-500">
      <div className="md:w-1/2 mx-4 md:mx-40  md:mt-20 ">
        <h2 className="font-space md:text-8xl leading-88 text-center md:text-left text-4xl font-bold leading-40 tracking-tight border border-red-500 ">Contact</h2>
        <p className="text-white font-space text-base font-medium leading-7 mt-5 md:mt-8 justify-center items-center md:justify-normal">
            I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
      </div>
      <div className="flex flex-col mx-4 md:w-1/2 border border-red-500 mt-12  md:mt-20">
        <form className=''>
          <div className="mb-8">
            <input type="text" placeholder="NAME" className="text-base font-medium leading-6 tracking-tight font-space opacity-50 h-11 w-80 " />
            <hr className='md:mr-32 ' />
          </div>
          <div className="mb-8">
            <input type="text" placeholder="EMAIL" className="text-base font-medium leading-6 tracking-tight font-space opacity-50 h-11 w-80" />
            <hr className='md:mr-32'/>
          </div>
          <div className="mb-8">
            <textarea type="text" placeholder="MESSAGE" className="text-base font-medium leading-6 tracking-tight font-space opacity-50 w-80 " />
            <hr className='md:mr-32' />
          </div>
          <div className="mb-8 message justify-end items-end flex">
            <a href="/" className="border border-red-500  md:mb-3">SEND MESSAGE</a>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}
