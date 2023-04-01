import { FaAws,FaReact } from 'react-icons/fa';
import { GrGatsbyjs } from 'react-icons/gr';
import { SiNextdotjs,SiTypescript,SiJavascript } from 'react-icons/si';
import { GiBackwardTime } from 'react-icons/gi';

export const personalData = {
	name: "Moona Mansoor",
	role: "Software Engineer",
	education: [
		"Bachelor of Science in Computer Science, London Metropolitan University ",
		"International Diploma in Computer Science-NCC(UK)",
		"International Higher Diploma in Computer Science-NCC(UK)",
	],
	contactLinks: [
		"mailto:emailto:moonamansoor06@gmail.com",
		"https://twitter.com/MMansoor06",
		"https://linkedin.com/in/moona-mansoor/",
		
	],
};

export const aboutMe = {
	title: "About Me",
	body: [
		"As a highly motivated and driven individual with a passion for making a positive impact,  I am able to tackle complex problems with ease,  able to face challenges.",
		
	],
};

export const skills = {
	soft: [
		{ icon: "listening.png", text: "Active Listening" },
		{ icon: "comm.png", text: "Effective Communication" },
		{ icon: "col.png", text: "Collaboration" },
		{ icon: "team.png", text: "Teamwork" },
		{ icon: "ps.png", text: "Creative Problem Solving" },
		{ icon: "time.png", text: "Time management" },
	],
	hard: [
		{ icon: "js.png", text: "Javascript" },
		{ icon: "ts.png ", text: "TypeScript" },
		{ icon: "react.png", text: "React" },
		{ icon: "gatsby.png", text: "Gatsby" },
		{ icon: "next.png", text: "Nextjs" },
		{ icon: "aws.png", text: "AWS" },
	],
};

export const professionalData = {
	title: "Professional Experience",
	experiences: [
		{
			role: "Data Scientist, Acme Inc. (2021-Present)",
			description:
				"Design and implement machine learning models to analyze large datasets and drive business decisions. Collaborate with cross-functional teams to develop and launch new products and features. Provide technical guidance and mentorship to junior data scientists. Conduct regular presentations to stakeholders on the findings and insights generated from data analysis.",
			current: true,
		},

		{
			role: "Machine Learning Engineer, XYZ Corp. (2019-2021)",
			description:
				"Designed and implemented advanced machine learning algorithms to improve predictive accuracy and performance. Built and maintained scalable machine learning infrastructure using cloud computing platforms. Conducted data exploratory analysis to identify potential use cases and opportunities. Participated in regular code reviews to maintain high quality standards.",
			current: false,
		},
		{
			role: "Machine Learning Engineer, ABX Corp. (2020-2021)",
			description:
				"Designed and implemented advanced machine learning algorithms to improve predictive accuracy and performance. Built and maintained scalable machine learning infrastructure using cloud computing platforms. Conducted data exploratory analysis to identify potential use cases and opportunities. Participated in regular code reviews to maintain high quality standards.",
			current: false,
		},
	],
};
export const priorExperience={
projects:[ 
	{id:1,
	name:"MyMart",
	tool:"React",
	image:"mymart.jpg",
	github:"https://my-mart9a.netlify.app",
	live:"https://my-mart9a.netlify.app",
},
	{id:2,
	name:"KaafAssociates",
	tool:"Gatsby",
	image:"kaaf.jpg",
	github:"https://kaafassociates.netlify.app",
	live:"https://kaafassociates.netlify.app",
},
	{
		id:3,
	name:"EcommProject",
	tool:"Gatsby",
	image:"ecomm.jpg",
	github:"https://ecomm-project-03.netlify.app",
	live:"https://ecomm-project-03.netlify.app",
},
{
	id:4,
name:"Panaverse",
tool:"Nexjs",
image:"panaverse.jpg",
github:"https://panaverse-blue.vercel.app/",
live:"https://panaverse-blue.vercel.app/",
},
{
	id:5,
name:"Quiz",
tool:"Typescript",
image:"typescript.jpg",
github:"https://my-typescript-quiz.netlify.app",
live:"https://my-typescript-quiz.netlify.app",
},

	]
}