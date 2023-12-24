import React, { useState } from "react";
import TitleScreen from "../../components/TitleScreen/TitleScreen";
import background from "../../assets/backgrounds/timelineBg.png";
import workIcon from "../../assets/timeline/work.png";
import educationIcon from "../../assets/timeline/education.png";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";

export default function Timeline() {
  const [section, setSection] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setSection(id);
    }
  };

  const handleClick = (event, id) => {
    event.preventDefault();
    scrollToSection(id);
  };

  let workIconStyles = {
    background:
      "linear-gradient(304deg, rgba(19,149,150,1) 0%, rgba(89,203,68,1) 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  let educationIconStyles = {
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,147,1) 0%, rgba(0,171,205,1) 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div
      id="Timeline"
      className="bg-cover bg-center w-[100vw]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <TitleScreen title="TIMELINE" />
      <p class="text-white px-4 sm:px-8 mt-14 text-center sm:text-lg md:text-2xl xl:pt-8 xl:text-3xl 2xl:pt-0">
        Este es un resumen de mi trayectoria profesional y educacional.
      </p>
      <VerticalTimeline className=" mt-16">
        {timelineElements
          .slice()
          .reverse()
          .map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : educationIconStyles}
                icon={
                  isWorkIcon ? (
                    <img
                      src={workIcon}
                      className=" w-[20px] lgMiddle:w-[30px]"
                      alt="workIcon"
                    />
                  ) : (
                    <img
                      src={educationIcon}
                      className=" w-[30px] lgMiddle:w-[40px]"
                      alt="educationIcon"
                    />
                  )
                }
              >
                <h3 className="vertical-timeline-element-title pt-1">
                  <b>{element.title}</b>
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description" className=" text-justify">
                  {element.description}
                </p>
                {showButton && (
                  <div className="containerButton" >
                    <a
                      className={`buttonTimeLine ${
                        isWorkIcon ? "workButton" : "educationButton"
                      } text-sm md:text-base`}
                      href={element.href}
                      target={element.target}
                      onClick={(e) =>
                        element.href === "#Proyectos"
                          ? handleClick(e, "Proyectos")
                          : null
                      }
                    >
                      {element.buttonText}
                    </a>
                  </div>
                )}
              </VerticalTimelineElement>
            );
          })}
      </VerticalTimeline>
    </div>
  );
}
