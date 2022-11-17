import { Portfolio } from '../portfolio.interface';
export { Portfolio } from '../portfolio.interface';

export const PortfolioData: Portfolio = {
    firstName: 'Christopher',
    lastName: 'Lubin',
    subHeading: 'Front-End Software Engineer',
    socialMedia: [
    {
        icon: 'fa fa-linkedin fa-2x',
        link: 'https://www.linkedin.com/in/chris-lubin',
        color: '#007785'
    },
    {
        icon: 'fa fa-github fa-2x',
        link: 'https://github.com/ChrisLubin',
        color: '#6E5494'
    },
    {
        icon: 'fa fa-file fa-2x',
        link: 'https://drive.google.com/file/d/1Fvrr2lZE5xB6czt6GdgpbvSkaIXf0v4c/view?usp=share_link',
        color: '#4F90CD'
    }
    ],
    changeLog: [
    {
      color: '#24D05A',
      month: 'October',
      year: 2021,
      highlight: "Took On the Biggest Project That I Was Ever Tasked With",
      details: "I was tasked with rearchitecting the keyboard shortcuts system on the main web application that my team serviced. It included writing up pages of documentation, communicating with product managers and designers on requirements that needed specificity, and about 2 months of coding to implement the features with tests.",
      showDetails: false
    },
    {
      color: '#10A2F5',
      month: 'January',
      year: 2021,
      highlight: "Moved On to Become a Front-End Engineer",
      details: "RingCentral played a crucial part in advancing my career by having high standards and surrounding me with so many talented engineers.",
      showDetails: false
    },
    {
        color: '#EB4888',
        month: 'January',
        year: 2020,
        highlight: "Became a Full Stack Software Developer",
        details: "The first role in my career!",
        showDetails: false
    },
    {
        color: '#24D05A',
        month: 'December',
        year: 2019,
        highlight: "Graduated from Florida Atlantic University",
        details: "I graduated magna cum laude with a B.S. in Computer Science.",
        showDetails: false
    },
    {
        color: '#10A2F5',
        month: 'April',
        year: 2019,
        highlight: "Enhanced Unify's Circuit Google Assistant",
        details: "This was a big accomplishment for me because I was given the opportunity to enhance Unify's Google Assistant application using Node.js, essentially working as a feature engineer even though I was on the automation team.",
        showDetails: false
    },
    {
        color: '#EB4888',
        month: 'August',
        year: 2018,
        highlight: 'Internship at Unify',
        details: "For this role, I was on the automation team that tested the company's flagship product, Circuit. We mainly used Groovy as our programming language of choice.",
        showDetails: false
    },
    {
        color: '#24D05A',
        month: 'February',
        year: 2018,
        highlight: 'Attended the MangoHacks Hackathon',
        details: "At the time, I didn't have much knowledge about web development so I didn't develop anything. The experience was still enjoyable by interacting with other students/developers and learning a little along the way.",
        showDetails: false
    },
    {
        color: '#EB4888',
        month: 'June',
        year: 2016,
        highlight: 'Graduated High School',
        details: 'I graduated with a weighted 4.25 and cumulative 3.47 GPA. I was in the 15th percentile for my graduating class (79 out of 535).',
        showDetails: false
    },
    {
        color: '#10A2F5',
        month: 'November',
        year: 2014,
        highlight: 'Intership at the Museum of Discovery and Science',
        details: 'This internship was a two year experience where I got to learn more about the museum and helped build an Android mobile application.',
        showDetails: false
    }
    ],
    projects: [
    {
        title: 'FAU Course-Checker',
        description: 'This application will constantly check for an opening in a course you\'re waiting to join then text or email you about it. (Not a web app so it has no picture)',
        color: '#E4E4E4',
        month: 'December',
        year: 2019,
        githubLink: 'https://github.com/ChrisLubin/FAU-Course-Checker'
    },
    {
        title: 'Kahoot-Like App',
        description: 'This application is inspired by Kahoot, an application mainly used by teachers to quiz their students all at once in realtime.',
        color: '#9EA8FF',
        month: 'August',
        year: 2019,
        link: 'https://kahoot-like-app-frontend.onrender.com',
        imgSrc: 'https://github.com/ChrisLubin/Kahoot-Like-App/blob/master/images/screenshot2.png?raw=true',
        githubLink: 'https://github.com/ChrisLubin/Kahoot-Like-App'
    },
    {
        title: 'Car Comparison Application',
        description: 'This tool allows anyone to compare the specifications of up to three different cars at the same time.',
        color: '#D6CABD',
        month: 'May',
        year: 2019,
        link: 'http://lamp.cse.fau.edu/~clubin2015/compareCar',
        imgSrc: 'https://github.com/ChrisLubin/Car-Comparison-Application/blob/master/IMG/Demo/screenshot.PNG?raw=true',
        githubLink: 'https://github.com/ChrisLubin/Car-Comparison-Application'
    },
    {
        title: 'Medication & Appointment Tracker',
        description: 'This application is targeted towards the elderly so they can easily keep track of their doctor\'s appointments and medication.',
        color: '#B7D3EB',
        month: 'April',
        year: 2019,
        link: 'http://lamp.cse.fau.edu/~clubin2015/medication',
        imgSrc: 'https://github.com/ChrisLubin/Medication-Tracker-Web-App/blob/master/App/images/Demo/screenshot9.png?raw=true',
        githubLink: 'https://github.com/ChrisLubin/Medication-Tracker-Web-App'
    },
    {
        title: 'Chat App',
        description: 'This is a chat application that people can use to communicate with friends, family, or strangers!',
        color: '#A2F8F5',
        month: 'January',
        year: 2019,
        link: 'http://lamp.cse.fau.edu/~clubin2015/chat',
        imgSrc: 'https://github.com/ChrisLubin/Chat-App/blob/master/IMG/Demo/screenshot1.png?raw=true',
        githubLink: 'https://github.com/ChrisLubin/Chat-App'
    },
    {
        title: 'To-Do List',
        description: 'This web application can be used so users can keep track of tasks that they have to complete.',
        color: '#279EAA',
        month: 'July',
        year: 2018,
        link: 'https://to-do-list-q847.onrender.com',
        imgSrc: 'https://github.com/ChrisLubin/To-Do-List/blob/master/IMG/Demo/screenshot1.PNG?raw=true',
        githubLink: 'https://github.com/ChrisLubin/To-Do-List'
    },
    {
        title: 'Math Game',
        description: 'This is a math game that a user can play for fun to brush up on their multiplication skills.',
        color: '#E4E4E4',
        month: 'May',
        year: 2018,
        link: 'https://math-game.onrender.com',
        imgSrc: 'https://github.com/ChrisLubin/Math-Game/blob/master/IMG/Demo/screenshot1.png?raw=true',
        githubLink: 'https://github.com/ChrisLubin/Math-Game'
    }
    ],
    speakerBio: 'Chris is currently a front-end software engineer working at RingCentral. He currently has 3 years of experience in the web development industry. He graduated from Florida Atlantic University magna cum laude with a B.S. in Computer Science in December of 2019. He is a self-motivated individual who is striving to become the best engineer that he can be. One of his major goals is to become a senior engineer within seven years into his career as a software engineer. Chris hopes to achieve this goal by continuously learning throughout his career on the job and on his own time.'
}
