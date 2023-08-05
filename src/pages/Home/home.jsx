/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { home1, home2, home3, home4, home5 } from "../../assets/index";
import Button from "../../components/button";
import LogoSection from "../../components/logoSection";

const HomePage = () => {
  return (
    <div className="min-h-[80vh] -mt-14 md:mt-4 -z-99">
      <div className="h-985px shadow-2xl">
        <div className="relative w-full">
          <img
            src={home1}
            alt="Background"
            className="w-full h-[60vh] md:h-[90vh] object-cover"
          />
          <div className="absolute -top-0 w-full h-full flex flex-col items-center justify-center">
            <h1 className="font-montserrat text-3xl md:text-6xl text-[#143F90] mb-4 font-bold capitalize ml-4 sm:ml-14">
              the face of advertising
            </h1>
            <h2 className="font-nunito-sans text-base sm:text-md lg:text-lg md:max-w-[638px] text-[#143F90] px-4 md:px-0 -mr-2 sm:-mr-10 mb-4">
              Using the power of creativity to build better futures for our
              people, planet, clients, and communities
            </h2>
            <button className="font-montserrat bg-[#143F90] text-white font-semibold text-md md:text-xl py-3 px-8 md:py-3 md:px-8 mb-3 rounded-full">
              Know more
            </button>
          </div>
        </div>
      </div>

      <div className="h-[350px] bg-[#F8F6F3] flex z-10 flex-col justify-center items-center">
        <div className="relative bottom-14 w-full md:w-[65vw] max-w-[600px] rounded-none md:rounded-3xl bg-[#F8F6F3] text-left px-6 md:px-8 py-16 mb-10 capitalize shadow-2xl">
          <h1 className="font-montserrat text-[#143F90] text-2xl md:text-4xl mb-4 font-semibold md:font-bold">
            who we are
          </h1>
          <p className="font-nunito-sans text-[#143F90] text-md font-normal">
            Sparkle is an innovative advertisement and print concept development
            company. We create unique design concepts for Small Medium
            Enterprises & corporates, specializing in ad design, print media
            production, exhibit production, and interactive services. Our goal
            is to provide cost-effective solutions and help clients reach their
            marketing objectives with fresh and creative approaches.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-10 bg-[#FCFCFC] flex flex-col md:flex-row md:justify-between">
        <img
          src={home2}
          alt="Image"
          className="w-[530px] h-auto mt-14 md:ml-0"
        />
        <div className="w-full md:w-1/2 pl-0 md:pl-4 mt-14 md:mt-0">
          <h1 className="font-montserrat text-[#3F3D56] text-4xl md:text-6xl font-bold mb-4 text-left">
            Experience Exceptional Printing Services
          </h1>
          <ol className="font-nunito-sans text-[#3F3D56] text-lg ml-4 md:text-2xl list-decimal pl-6 pt-4 pb-6 text-left ">
            <li>Striking Wall Graphics</li>
            <li>Eye-Catching Signs and Displays</li>
            <li>Portable Advertising Solutions</li>
            <li>Dynamic Roll Up Banners</li>
            <li>Engaging Exhibition Booths</li>
            <li>Elegant Display Stands</li>
            <li>Premium Podiums for Impressive Presentations</li>
            <li>Captivating Gondolas for Effective Branding</li>
            <li>Professional Brochures and Booklets</li>
            <li>Custom Packaging Solutions for a Lasting Impression</li>
          </ol>
          <Button
            text="See all services"
            className="px-4 border-[#3F3D56] text-[#3F3D56] self-start "
            style={{ marginLeft: "0" }}
            onClick={() => {
              // Handle button click
            }}
          />
        </div>
      </div>
      <div className="bg-gradient-to-b bg-[10%] from-[#FCFCFC] to-[#F99B1C] ">
        <div className="container mx-auto py-10 flex flex-col-reverse md:flex-row md:justify-between">
          <div className="w-full md:w-1/2 pl-0 md:pl-4 mt-14 md:mt-0">
            <h1 className="font-montserrat text-[#143F90] text-4xl md:text-6xl font-bold mb-4 text-left">
              Listening, Creativity,
              <br /> and Strategy
            </h1>
            <p className="font-nunito-sans text-xl mb-4 text-[#143F90] text-left">
              Our team assists with corporate identity design issues by
              understanding the importance of the right brand image and
              comprehending the complex world of today's business. We listen
              attentively to our customers' needs, providing maximum attention
              to both them and their projects. This includes a well-defined
              brand strategy and creativity, forming the right combination for
              brand success. We follow each project with discipline, including
              flexibility, adaptability, and rapidity, from the initial sketches
              to the handover to the client, ensuring design consistency.
            </p>
            <Button
              text="Team insight"
              className="px-4 border-[#143F90] text-[#143F90] self-start"
              style={{ marginLeft: "0" }}
              onClick={() => {
                // Handle button click
              }}
            />
          </div>
          <img
            src={home3}
            alt="Image"
            className="w-[530px] h-auto mt-14 md:ml-0"
          />
        </div>
      </div>

      <div className="container mx-auto py-10 bg-[#FFFFFF] flex flex-col md:flex-row md:justify-between">
        <img
          src={home4}
          alt="Image"
          className="w-[530px] h-auto mt-14 md:ml-0"
        />
        <div className="w-full md:w-1/2 pl-0 md:pl-4 mt-14 md:mt-20">
          <h1 className="font-montserrat text-[#3F3D56] text-4xl md:text-6xl font-bold mb-4 text-left">
            Design On Demand
          </h1>
          <p className="font-nunito-sans text-xl mb-4 text-[#3F3D56] text-left">
            At Sparkle, we have managed to design on demand, catering to all
            your creative needs. Whether it's logos, graphics, or websites, our
            online service delivers stunning results. With a team of experts, we
            are here to help you shine.
          </p>
          <Button
            text="Start a chat"
            className="border-[#3F3D56] text-[#3F3D56] px-4 py-2 sm:mr-4 mb-4 sm:mb-0"
            onClick={() => {
              // Handle button click
            }}
          />
        </div>
      </div>

      <div className="container mx-auto py-10 flex flex-col-reverse md:flex-row md:justify-between bg-[#F4F9FC]">
        <div className="w-full md:w-1/2 pl-0 md:pl-4 mt-14 md:mt-0">
          <h1 className="font-montserrat text-[#32302F] text-4xl md:text-6xl font-bold mb-4 text-left">
            Chosen by Leading International Brands
          </h1>
          <p className="font-nunito-sans text-xl mb-4 text-[#32302F] text-left">
            we take great pride in being the chosen partner of leading
            international brands across diverse industries. Our commitment to
            delivering exceptional services and solutions has earned us the
            trust and loyalty of our clients, who rely on us to help drive their
            business success. Join the ranks of our satisfied clients and
            experience the [company name] difference today.
          </p>
        </div>
        <img
          src={home5}
          alt="Image"
          className="w-[530px] h-auto mt-14 md:ml-0"
        />
      </div>

      <LogoSection />
    </div>
  );
};

export default HomePage;
