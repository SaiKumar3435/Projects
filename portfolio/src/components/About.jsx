import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Sai Kumar, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I'm a front-end developer located in India. I love to create simple yet beautiful websites with great user experience.

I'm interested in the whole frontend stack.Like trying new things and building great projects. 

I believe everything is an Art when you put your consciousness in it. <br></br>You can connect with me via social links.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
