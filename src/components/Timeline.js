import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';

const useStyles = makeStyles(theme => ({

}));

export default function Timeline() {
  const classes = useStyles();

  return (
    <div>
    	<VerticalTimeline>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="June 2019 to Present"
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				icon={<FaBriefcase />}
			>
				<h3 className="vertical-timeline-element-title">Fullstack Software Engineer @ Job Odyssey with Holberton School</h3>
				<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
				<p>
          Incorporating Job Odyssey, a web application designed within a span of two weeks, into Holberton School for use as an internal tool. Job Odyssey was created with the aim of consolidating and gamifying the job search.  
        </p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="September 2018 to June 2019"
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				icon={<FaBriefcase />}
			>
				<h3 className="vertical-timeline-element-title">Software Engineer Student @ Holberton School</h3>
				<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
				<p>
          Studied at Holberton School, a school that offers a project-based curriculum to become a software engineer. 
        </p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="July 2017 to May 2018"
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				icon={<FaBriefcase />}
			>
				<h3 className="vertical-timeline-element-title">System Integration and Test Engineer @ Lockheed Martin</h3>
				<h4 className="vertical-timeline-element-subtitle">Sunnyvale, CA</h4>
				<p>
          Organized assessment of spacecraft systems to verify if parts pass tolerances stated in GD&T drawings. 
        </p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="June 2016 to December 2016"
				iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				icon={<FaBriefcase />}
			>
				<h3 className="vertical-timeline-element-title">Mechanical Engineer Intern @ Los Angeles Department of Water & Power (LADWP) </h3>
				<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
				<p>
          Rendered 3D models and P&ID diagrams of existing and upcoming water systems in Los Angeles. 
        </p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				date="September 2013 to June 2017"
				iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
				icon={<FaBriefcase />}
			>
				<h3 className="vertical-timeline-element-title">B.S. Mechanical Engineer @ UCLA</h3>
				<h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
				<p>
				  Earned a B.S. Degree in Mechanical Engineering at UCLA, studying the fundamentals of topics such as materials, thermodynamics, and mechanics.  
        </p>
			</VerticalTimelineElement>
		</VerticalTimeline>  
    </div>
  );
}
