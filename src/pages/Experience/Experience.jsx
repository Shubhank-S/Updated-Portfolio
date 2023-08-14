import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="verticle-timeline-element-education"
          date="2004 - 2009"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St Joseph Convent School Mahidpur Ujjain
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="verticle-timeline-element-education"
          date="2009 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Virgin Mary Higher Secondary School
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="verticle-timeline-element-education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Shri Vaishnav Vidhyapeth Viswavidhyalaya Indore
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
              illo reprehenderit itaque sapiente id repellendus libero eius
              consequatur natus sit porro? Illum, earum sed eveniet repellat
              dolorem assumenda, nisi voluptas doloremque quisquam molestiae
              exercitationem aperiam laboriosam tempore, placeat dignissimos.
              Suscipit.
            </p>
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="verticle-timeline-element-education"
          date="2004 - 2009"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St Joseph Convent School Mahidpur Ujjain
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
