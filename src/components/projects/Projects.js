import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive, projectSix, projectSeven, projectEight, projectNine, projectTen, projectElevan,projectTuwlve } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-center justify-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-14">
        <ProjectsCard
          title="TruEvent Horizons"
          des="Our project developed a web-based Event Planning Management System, simplifying reservations for customers, empowering service providers, and facilitating report generation and feedback collection."
          src={projectOne}
          git = "https://github.com/saneru-akarawita/TruEvent_Horizons.git"
        />
        <ProjectsCard
          title="Stylioo"
          des="The Stylioo, an innovative salon management and reservation system, available on both web and mobile platforms. It streamlines online bookings, reduces wait times, and provides detailed service information."
          src={projectTwo}
          git = "https://github.com/Stylioo"
        />
         <ProjectsCard
          title= "EHubVista"
          des="Intuitive platform with a robust admin panel for streamlined product and order management, and implemented secure authentication using NextAuth for both administrators and customers"
          src={projectThree}
          git = "https://github.com/chirasi99/EhubVista"
        />
        <ProjectsCard
          title="NexDevice"
          des="A comprehensive full-stack web application to manage device data effectively with a scalable, maintainable architecture that combines robust backend business logic."
          src={projectFour}
          git = "https://github.com/chirasi99/NexDevice"
        />
        <ProjectsCard
          title="webmindsgallery"
          des="A portfolio website built with Next.js, Tailwind CSS, and Framer Motion, showcasing the creative endeavors of talented individuals with a seamless and visually appealing browsing experience.."
          src={projectFive}
          git = "https://github.com/chirasi99/WebMinds-Gallery"
        />
        <ProjectsCard
          title="studenthub"
          des="MERN stack online student management system with seamless CRUD operations and secure, authenticated user signup and sign-in for enhanced administration and data privacy."
          src={projectSix}
          git = "https://github.com/chirasi99/Mern_Stack_Group_Assignment"
        />
         <ProjectsCard
          title="talenttide"
          des="Full-stack application using Spring Boot, Spring Security, React JS, and PostgreSQL to manage employee data with a scalable and user-friendly interface."
          src={projectSeven}
          git = "https://github.com/chirasi99/TalentTide"
        />
         <ProjectsCard
          title="food-factory"
          des="Building a responsive user interface with Angular components and modules, implementing JWT-based authentication and authorization, consuming backend RESTful APIs for CRUD operations, and enhancing user experience with Angular services, forms, and routing"
          src={projectEight}
          git = "https://github.com/chirasi99/Food-Factory"
        />
         <ProjectsCard
          title="artaichemy"
          des="ArtAIchemy leverages cutting-edge AI technologies, specifically OpenAI,to provide users with the capability to generate a diverse range of content."
          src={projectNine}
          git = "https://github.com/chirasi99/ArtAIchemy"
        />
         <ProjectsCard
          title="crudsnap"
          des="Elevate data management experience with comprehensive CRUD operations and streamlined image handling features."
          src={projectTen}
          git = "https://github.com/chirasi99/CrudSnap"
        />
         <ProjectsCard
          title="Bootstrap Breeze"
          des="A simple, responsive home page built with Bootstrap 5, featuring a navigation bar, hero section, and content areas designed to showcase features and services effectively."
          src={projectElevan}
          git = "https://github.com/chirasi99/Bootstrap-Dashboard"
        />
         <ProjectsCard
          title="ReactChatBot"
          des="ReactChatBot is an interactive chatbot built with JavaScript and React, designed to provide seamless conversational experiences and enhance user engagement on web applications."
          src={projectTuwlve}
          git = "https://github.com/chirasi99/Chatbot"
        />
      </div>
    </section>
  );
}

export default Projects