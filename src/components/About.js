import React from "react";

const About = () => {
   return (
      <div
         name="about"
         className="w-full   bg-gradient-to-b from-gray-800 to-black text-white  md:py-[10rem] py-[10rem]">
         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
               <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                  About
               </p>
            </div>
            <p className="text-xl mt-20">
               Hello, and welcome to my portfolio! My name is Akash, and I am a
               Junior Web developer. I will complete my bachelor degree in 2024 and I
               am excited to continue to develop my skills in this field. As a
               junior full stack developer, I am proficient in
               C, C++, Html 5, CSS 3, Tailwind CSS, Javascript, ReactJS, NodeJS, 
               Express, MongoDB, Mongoose, Git. I am eager to learn more and 
               expand my knowledge, and I am always seeking out new challenges 
               to grow as a developer.
            </p>
            <br />
            <p className="text-xl">
               In my work, I will make sure to prioritize your work ethics and I am dedicated to
               write clean and efficient code. I have experience in working on both Front-End and 
               Back-End Projects and I am comfortable collaborating with other developers, designers,
               and clients to deliver high-quality products. Thank you for taking the time to visit my 
               portfolio, and please feel free to reach out to me with any questions or opportunities!
            </p>
         </div>
      </div>
   );
};

export default About;
