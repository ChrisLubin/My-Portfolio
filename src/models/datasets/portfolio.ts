import { Portfolio } from '../portfolio.interface';
export { Portfolio } from '../portfolio.interface';

export const PortfolioData: Portfolio = {
    firstName: 'Christopher',
    lastName: 'Lubin',
    subHeading: 'Software Engineer Intern',
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
        link: 'https://drive.google.com/open?id=12ri7V_81rEzX26JRonNXOktlRbG-oX8V',
        color: '#4F90CD'
    }
    ],
    introduction: "Hi, I'm Christoppher Lubin, and I am a software engineer intern who currently attends Florida Atlantic University.",
    changeLog: [
    {
        color: '#10A2F5',
        month: 'April',
        year: 2019,
        highlight: "Enhanced Unify's Circuit Google Assistant",
        details: "This is a big accomplishment for me because I was given the opportunity to enhance Unify's Google Assistant application using Node.js even though I am on the automation team.",
        showDetails: false
    },
    {
        color: '#EB4888',
        month: 'August',
        year: 2018,
        highlight: 'Internship at Unify',
        details: "For this role I am on the automation team that tests the company's flagship product, Circuit. We mainly use Groovy as our programming language.",
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
        details: 'This internship was a two year experience where I got to learn more about the museum and helped build a mobile application.',
        showDetails: false
    }
    ],
    projects: [
    {
        title: 'Kahoot-Like App',
        description: 'This application is inspired by Kahoot, an application mainly used by teachers to quiz their students all at once in realtime.',
        color: '#9EA8FF',
        month: 'August',
        year: 2019,
        link: 'http://lamp.cse.fau.edu/~clubin2015/kahoot',
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
        link: 'http://lamp.cse.fau.edu/~clubin2015/todo',
        imgSrc: 'https://github.com/ChrisLubin/To-Do-List/blob/master/IMG/Demo/screenshot1.PNG?raw=true',
        githubLink: 'https://github.com/ChrisLubin/To-Do-List'
    },
    {
        title: 'Math Game',
        description: 'This is a math game that a user can play for fun to brush up on their multiplication skills.',
        color: '#E4E4E4',
        month: 'May',
        year: 2018,
        link: 'http://lamp.cse.fau.edu/~clubin2015/math',
        imgSrc: 'https://github.com/ChrisLubin/Math-Game/blob/master/IMG/Demo/screenshot1.png?raw=true',
        githubLink: 'https://github.com/ChrisLubin/Math-Game'
    }
    ],
    speakerBio: 'Chris is currently a senior at Florida Atlantic University who is going to graduate with a BS in Computer Science in December of 2019. He is a self-motivated individual who is striving to become the best web developer that he can be. One of his major goals is to become a senior full stack developer within five years into his career as a web developer. Chris hopes to achieve this goal by continuously learning throughout his career on his own time.'
}