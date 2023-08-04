/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { home1, home2, home3, home4, home5 } from "../../assets/index";
import Button from "../../components/button";
import LogoSection from "../../components/logoSection";

const HomePage = () => {
  return (
    <div className="min-h-[80vh] -mt-14 md:mt-4 -z-99">
      <div className="h-985px shadow-2xl">
        <div className="relative">
          <img
            src={home1}
            alt="Background"
            className="w-full h-[60vh] md:h-[90vh] object-cover"
          />
          <div className="absolute -top-0 -left-3 w-full h-full flex flex-col items-center justify-center">
            <h1 className="font-nunito-sans text-4xl sm:text-5xl lg:text-6xl text-blue-900 mb-4 font-bold capitalize ml-4 sm:ml-14">
              the face of advertising
            </h1>
            <h2 className="font-montserrat text-base sm:text-md lg:text-lg 2xl:max-w-[500px] text-blue-900 -mr-2 sm:-mr-10 mb-4 max-w-[420px] sm:max-w-[320px]">
              Using the power of creativity to build better futures for our
              people, planet, clients, and communities
            </h2>
            <button className="font-montserrat bg-blue-900 text-white font-semibold text-md md:text-xl py-3 px-8 md:py-3 md:px-8 mb-3 rounded-full">
              Know more
            </button>
          </div>
        </div>
      </div>

      {/* <div className="h-[350px] bg-gray-100 flex z-10 flex-col justify-center items-center">
        <div className="relative bottom-14 w-[65vw] max-w-[600px] rounded-3xl bg-stone-100 text-left px-4 md:px-8 py-16 mb-10 capitalize shadow-2xl">
          <h1 className="text-blue-900 text-4xl mb-4 font-bold">who we are</h1>
          <p className="text-blue-900 text-md font-normal">
            Sparkle is an innovative advertisement and print concept development
            company. We create unique design concepts for Small Medium
            Enterprises & corporates, specializing in ad design, print media
            production, exhibit production, and interactive services. Our goal
            is to provide cost-effective solutions and help clients reach their
            marketing objectives with fresh and creative approaches.
          </p>
        </div>
      </div> */}

      <div className="flex flex-col justify-center items-center bg-gray-100 w-full p-6 ">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 pr-0 md:pr-4">
            <div className="h-full flex items-start">
              <img
                src={home2}
                alt="Image"
                className="w-[530px] h-auto mt-14 md:ml-0"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-4">
            <h1 className="text-gray-700 text-4xl md:text-6xl font-bold mb-4 text-left">
              Experience Exceptional Printing Services
            </h1>
            <ol className="text-slate-800 text-lg ml-4 md:text-2xl list-decimal pl-6 pt-4 pb-6 text-left ">
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
              className="px-4 border-gray-700 text-gray-700 self-start "
              style={{ marginLeft: "0" }}
              onClick={() => {
                // Handle button click
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-b bg-[10%] from-slate-100 to-amber-100">
        <div className="min-w-[880px] lg:w-1/2 p-40 ml-20">
          <h1 className="text-6xl lg:text-5xl font-bold mb-4 text-blue-900 text-left">
            Listening, Creativity,
            <br /> and Strategy
          </h1>
          <p className="text-xl mb-4 text-blue-900 text-left">
            Our team assists with corporate identity design issues by
            understanding the importance of the right brand image and
            comprehending the complex world of today's business. We listen
            attentively to our customers' needs, providing maximum attention to
            both them and their projects. This includes a well-defined brand
            strategy and creativity, forming the right combination for brand
            success. We follow each project with discipline, including
            flexibility, adaptability, and rapidity, from the initial sketches
            to the handover to the client, ensuring design consistency.
          </p>
          <Button
            text="Team insight"
            className="px-4 border-blue-900 text-blue-900 self-start"
            style={{ marginLeft: "0" }}
            onClick={() => {
              // Handle button click
            }}
          />
        </div>
        <div className="lg:w-1/2">
          <img src={home3} alt="Your Image" className="w-[390px] h-auto" />
        </div>
      </div>

      <div className="flex flex-col h-[600px] lg:flex-row items-center justify-between px-4 lg:px-12 xl:px-32">
        <div className="ml-40">
          <img
            src={home4}
            alt="Your Image"
            className="w-full h-[300px] lg:w-full lg:h-[400px] object-cover"
          />
        </div>
        <div className="mt-6 lg:mt-0 lg:w-1/2 lg:min-w-[320px] p-4 lg:p-10 xl:p-20">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 text-gray-700 text-left">
            Design On Demand
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-4 w-[544px] sm:mb-6 lg:mb-8 text-gray-700 text-left">
            At Sparkle, we have managed to design on demand, catering to all
            your creative needs. Whether it's logos, graphics, or websites, our
            online service delivers stunning results. With a team of experts, we
            are here to help you shine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-start mt-4 sm:mt-6 lg:mt-8">
            <Button
              text="Start a chat"
              className="border-gray-700 text-gray-700 px-4 py-2 sm:mr-4 mb-4 sm:mb-0"
              onClick={() => {
                // Handle button click
              }}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 flex flex-col lg:flex-row items-center justify-between lg:-ml-20 px-4 lg:px-0">
        <div className="mt-6 lg:mt-0 lg:min-w-[880px] lg:w-1/2 p-4 lg:p-40">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 ml-40 text-gray-700 text-left w-[600px]">
            Chosen by Leading International Brands
          </h1>
          <p className="text-lg lg:text-2xl mb-4 ml-40 text-gray-700 text-left lg:w-[600px]">
            we take great pride in being the chosen partner of leading
            international brands across diverse industries. Our commitment to
            delivering exceptional services and solutions has earned us the
            trust and loyalty of our clients, who rely on us to help drive their
            business success. Join the ranks of our satisfied clients and
            experience the [company name] difference today.
          </p>
        </div>
        <div className="mr-40">
          <img
            src={home5}
            alt="Your Image"
            className="w-[100%] lg:w-[550px] h-[400px]"
          />
        </div>
      </div>

      <LogoSection />
    </div>
  );
};

export default HomePage;
