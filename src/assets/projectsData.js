// images
import pawchamp from '../../public/images/pawchampImage.jpeg'
import locateACleaner from '../../public/images/locateACleaner.png'

const projects = [
    { 
        key: 1,
        name: 'Clutch-It', 
        type: 'WEB DEVELOPMENT', 
        startDate: '2022-02-01', 
        description: 'A website that displays tips and tricks for an first-person shooter game, Valorant. Focused on UI/UX designing and front-end development.',
        tags: ['React', 'HTML/CSS', 'JavaScript', 'Figma', 'Bootstrap', 'Wireframing'],

    },
    { 
        key: 2,
        name: 'Paw-champ', 
        type: 'WEB DEVELOPMENT', 
        startDate: '2022-01-01', 
        image: pawchamp,
        description: 'A website that promotes pet adoption in shelters, by having a fun feature that displays random cat and/or dog facts. Users are able to search through a database of adoption shelters on our website. They can also enhance the search results by filtering shelters by their state or zip code.',
        tags: ['HTML/CSS', 'JavaScript', 'Python', 'Flask', 'Twilio API'],

    },
    {
        key: 3,
        name: 'Locate-A-Cleaner', 
        type: 'DESIGN', 
        image: locateACleaner,
        startDate: '2022-01-01', 
        description: 'A research project where my team and I delved into existing home-related technologies. Our end-product is a mobile app that assists users in tracking repetitive chores, guides for cleaning their household, and the main feature, locating a cleaner to hire. \n\nThe main feature is essentially an Uber app specifically for cleaners, where cleaners can set up profiles, customers can hire them by radius, and also leave reviews after the job is done.',
        tags: ['Figma', 'User Research', 'Prototyping', 'Wireframing'],
        figma: ''

    },
    {
        key: 4,
        name: 'Student Resiliency Tool',
        type: 'WEB DEVELOPMENT',
        startDate: '2022-09-01',
        description: 'A web application created in collaboration with the the Forsyth County Schools in Georgia. The application is used to increase the efficiency of data collection and documentation for their newly developed scholastic gaming course, which would help them analyze their data and possibly pitch it to the Georgia Board of Education in the future.',
        tags: ['React', 'HTML/CSS', 'JavaScript', 'Express.js', 'MySQL'],
        figma: 'https://www.figma.com/file/dz5O1uThJeIpi0dDMtdxQA/Mockups-Fall-2023?type=design&node-id=0-1&mode=design&t=sJWEUDrKXBwedvdG-0'
    },
    {
        key: 5,
        name: 'Student Discovery Services',
        type: 'WEB DEVELOPMENT',
        startDate: '2022-09-01',
        description: 'A comprehensive website serving as a centralized platform for on-campus events, catering to a diverse audience encompassing students, staff, alumni, and external guests.',
        tags: ['React', 'HTML/CSS', 'TypeScript', 'Next.js', 'Java', 'Figma'],
        figma: 'https://www.figma.com/file/Z3hz2JgYW8fD75GRAlEIHM/Campus-Discovery?type=design&node-id=0-1&mode=design&t=tXT2VZNDVN9ecgPt-0', 
    },
    {
        key: 6,
        name: 'Roam: Travel App',
        type: 'WEB DEVELOPMENT',
        startDate: '2023-09-01',
        description: "a user-centric website dedicated to logging users' travel wishlists and travel history.",
        tags: ['React', 'HTML/CSS', 'JavaScript', 'MongoDB', 'Google Maps API'],
        figma: 'https://www.figma.com/file/DuVtVOqCbWOcyxDEdFvN2X/Roam-App-Design?type=design&node-id=270-1218&mode=design&t=mMNIlqbRma6KkB8n-0',
        github: 'https://github.com/michelle692/roam'
    },
    {
        key: 7,
        name: 'Carnival Escape',
        type: 'VIDEO GAME',
        startDate: '2024-02-01',
        description: 'A 3D horror-themed maze game set in an abandoned carnival. The player must escape the carnival by finding the key to the exit door while avoiding the ghosts and solving puzzles.\n\nI developed the memory game portion from the ground up, implementing logic and data structures for win/lose conditions as well as original assets. I also worked on the game\'s checkpoint system and the UI for hints and guides.',
        tags: ['Unity', 'C#'],
        github: 'https://github.com/chlo-ng/carnival-escape'
    },
    {
        key: 8,
        name: 'Habit Tracker',
        type: 'MOBILE DEVELOPMENT',
        startDate: '2024-04-01',
        description: "This was my capstone project for CodePath's IOS101 Course in Spring 2024. I picked a habit tracker because it is something that I've wanted in digital form, since I used to bullet journal in a physical notebook before college.\n\nI planned for this app to allow the user to track their daily habits. Each habit will be represented as a progress bar. Logging a completed habit would increase a user's streak, leading to possible achievements. The user can make reminders for themselves if they are important.\n\nSo far, the application is in its early stages, but I plan to continue working on it in the future.",
        tags: ['Swift', 'Project Management', 'UI/UX Design'],
        github: 'https://github.com/chlo-ng/habit-tracker'
    },
    {
        key: 9,
        name: 'Mix n Munch',
        type: 'WEB DEVELOPMENT',
        startDate: '2024-01-01',
        description: "This is a project that I did for the course CS 8803-CDP: Creative Design Practices that I took in Georgia Tech. \n\nThe idea was to create a tool that generates concepts utilizing the 'art of chance'. This means that randomization and letting the generated results be out of both the developer and user's control is highly recommended. \n\nTo do that, we were assigned to develop a webpage that loads words or phrases from three categories into a phrase or sentence that expresses a novel idea... within 10 days.",
        tags: ['HTML/CSS', 'JavaScript', 'EdamamAPI'],
        github: 'https://github.com/chlo-ng/mixnmunch'
    }
]

export default projects