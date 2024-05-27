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
        type: 'DESIGN', 
        startDate: '2022-03-01', 
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
        description: 'A research project where my team and I delved into existing home-related technologies. Our end-product is a mobile app that assists users in tracking repetitive chores, guides for cleaning their household, and the main feature, locating a cleaner to hire. The main feature is essentially an Uber app specifically for cleaners, where cleaners can set up profiles, customers can hire them by radius, and also leave reviews after the job is done.',
        tags: ['Figma', 'User Research', 'Prototyping', 'Wireframing']
    }
]

export default projects