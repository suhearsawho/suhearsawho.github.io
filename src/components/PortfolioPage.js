import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      margin: '3rem',
    },
    margin: '1rem',
    paddingTop: '2rem',
  },
  one: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    padding: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  two: {
    backgroundColor: theme.palette.third,
    color: 'white',
    padding: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  three: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    padding: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  four: {
    backgroundColor: theme.palette.fourth,
    color: 'white',
    padding: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  white: {
    color: 'white',
    textDecoration: 'underline',
  },
	button: {
		color: 'white',
		marginTop: '1rem',
		borderColor: 'white',
	},
}));

function ButtonSection(props) {
	const classes = useStyles();
	const { numLink, first, second, github } = props;
	let size = 6;

	if (numLink === 2)
		size = 4
	return (
		<Grid
			container
			spacing={3}
			justify="center"
		>
			{ first && (
			<Grid item xs={size}>
				{first}
			</Grid>
			)}
			{ second && (
				<Grid item xs={size}>
					{second}
				</Grid>
			)}
			<Grid item xs={size}>
				<a href={github} target="_blank" rel="noopener noreferrer">
					<Button variant="outlined" fullWidth className={classes.button}>
						Github Link
					</Button>
				</a>
			</Grid>
		</Grid>
	)
}
export default function PortfolioPage() {
  return (
    <Fade in={true}>
      <MyComponent />
    </Fade>
  );
}

function MyComponent(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} {...props}>
      <Grid container spacing={3}>
        <Grid item xs={12} id="jobHolberton">
          <Paper
            classes={{
              root: classes.one,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Job Odyssey
            </Typography>
            <Typography variant="body1" gutterBottom>
              Job Odyssey is a web application that gamifies and optimizes the job search
							through a reward system where users earn points through applying to jobs and
							tracking job applications. Job searches can seem like an endless grind, and Job
							Odyssey aims to keep users going!
							<br/><br/>
							Holberton School of Software Engineering saw the potential in this product
							and asked to incorporate Job Odyssey for use as an official, internal tool
							for their students to use. Now, it is available for current and future students
							to use in their job search!
							<br/><br/>
							I wore many hats in this two-person project.
							Some of my roles are as follows:
							<ul>
								<li>
									Designed and structured frontend to achieve a responsive, mobile-friendly
									site
								</li>
								<li>
									Implemented Python classes and functions to support and save
									user transactions with site.
								</li>
								<li>
									Pair-programmed backend components involving task-scheduling
									with Christopher Choe, my teammate.
								</li>
								<li>
									Created a RESTful API backend that is responds to frontend calls
									and produces subsequent changes in MySQL database.
								</li>
							</ul>
            </Typography>
            <Typography variant="body2" gutterBottom>
              <b>Languages</b>: Python, Javascript, HTML, CSS
            </Typography>
            <Typography variant="body2" gutterBottom>
              <b>Tech Stack</b>: Flask, React, Material UI, SQLAlchemy, AWS, cron
            </Typography>
						<ButtonSection
							github="https://github.com/suhearsawho/jobodyssey"
							first={(
								<a href="https://jobodyssey.com" target="_blank" rel="noopener noreferrer">
									<Button variant="outlined" fullWidth className={classes.button}>
										Original Version
									</Button>
								</a>
							)}
							second={(
								<a href="https://jobodyssey.hbtn.io" target="_blank" rel="noopener noreferrer">
									<Button variant="outlined" fullWidth className={classes.button}>
										Holberton Version
									</Button>
								</a>
							)}
							numLink={2}
						/>
          </Paper>
        </Grid>
        <Grid item xs={12} id="foodventures">
          <Paper
            classes={{
              root: classes.two,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Foodventures
            </Typography>
            <Typography variant="body1" gutterBottom>
							Ever wanted a travel plan that revolved around a must-try restaurant in
							the new area you're visiting? Look no further - Foodventures is the web
							application that generates travel itineraries around food! 
							<br/><br/>
							Foodventures was inspired from the dominant "foodie" culture in SF
							and the never-ending list of things to explore in the Bay Area.
							<br/><br/>
							This project is still ongoing. Tasks included:
            </Typography>
            <ul>
              <li>
								Programming backend that utilizes Google Distance Matrix API to
								calculate most efficient routes for travel itineraries.
							</li>
							<li>
								Reducing time spent on travel-related algorithms through Asynchronous
								Calls in Python.
							</li>
							<li>
								Creating a responsive frontend site with Google's Javascript Maps API
								to visualize travel itineraries for users.
							</li>
            </ul>
            <Typography variant="body2" gutterBottom>
              <b>Languages</b>: Python, Javascript, HTML, CSS
            </Typography>
            <Typography variant="body2" gutterBottom>
              <b>Tech Stack</b>: Flask, React, Material UI, jQuery, SQLAlchemy, Yelp Fusion API, Google Maps Javascript API, Google Distance Matrix API
            </Typography>
						<ButtonSection
							github="https://github.com/suhearsawho/foodventures"
						/>
          </Paper>
        </Grid>
        <Grid item xs={12} id="airbnb">
          <Paper
            classes={{
              root: classes.three,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Air-Bnb Clone
            </Typography>
            <Typography variant="body1" gutterBottom>
              The Air-Bnb Clone was a series of multiple projects at Holberton school where students
              switched partners for each portion of the project.
							Some of the major lessons learned from this project are as follows:
							<ul>
								<li>
									Developed a web application that uses serialization/deserialization
									to store and use data.
								</li>
								<li>
									Created a command line console to simplify troubleshooting and development
									process.
								</li>
								<li>
									Developed a frontend powered by Javascript, jQuery, CSS, and HTML.
								</li>
							</ul>
						</Typography>
            <Typography variant="body2" gutterBottom>
              Languages: Python, Javascript, HTML, CSS
            </Typography>
            <Typography variant="body2" gutterBottom>
              Tech Stack: Flask, jQuery, SQLAlchemy, Nginx
            </Typography>
						<ButtonSection
							github="https://github.com/suhearsawho/AirBnB_clone_v4"
						/>
          </Paper>
        </Grid>
        <Grid item xs={12} id="timer">
          <Paper
            classes={{
              root: classes.four,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Challenge Timer
            </Typography>
            <Typography variant="body1" gutterBottom>
              The Challenge Timer takes a twist on the traditional Pomodoro timer.
							Instead of 25 minute intervals, users set time-based tasks for themselves
							with the goal of achieving it before the alarm rings.
							<br/><br/>
							This application was created as a result of the personal methods that I use
							to motivate myself when working and the lack of existing applications that
							support this method.
							<br/><br/>
							Important features of the project are as follows:
							<ul>
								<li>
									Implemented and interacted with MySQL database with raw MySQL queries.
								</li>
								<li>
									Designed a dashboard that allows users to monitor and track their
									productivity
								</li>
							</ul>
						</Typography>
            <Typography variant="body2" gutterBottom>
              Languages: Python, Javascript, HTML, CSS, SQL
            </Typography>
            <Typography variant="body2" gutterBottom>
              Tech Stack: Flask, jQuery, MySQL
            </Typography>
						<ButtonSection
							github="https://github.com/suhearsawho/challenge_timer_web_app"
						/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
