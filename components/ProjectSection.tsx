import React from "react";
import SlideUp from "./SlideUp";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Weather - Data Pipeline",
    description: `A data pipeline orchestrated by Airflow to get data from Open Weather Map then transform it and finally load cleaned data into S3 Bucket.
    
    Details:
    * Tasks are set to run daily through DAGs.
    * Airflow is running on EC2 instance.
    * ETL process is done in Python.
    * Cleaned data will be saved in csv file and load into S3 Bucket. 
    `,
    image: "/ETL.png",
    github: "https://github.com/dtrongkhoa/DataPipelineAWS",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects{" "}
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 ">
                  <div className=" md:w-1/2">
                    {/* <Link href={project.link}> */}
                    <Image
                      src={project.image}
                      alt=""
                      width={1200}
                      height={1200}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400 whitespace-pre-line">
                      {project.description}
                    </p>

                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
