const timeline = [
    {
        title: "As far back As I can Remember",
        time: "Sometime, 1993",
        description: "In the beginning, I was just a curious kid who was fascinated with computers. I still remember the excitement of my dad bringing home our first computer ever - an IBM - in 1993. I spent hours a day tinkering with it, playing games, and exploring the different programs. I was hooked."
    },
    {
        title: "Introduction to HTML",
        time: "1994 - 1995",
        description: "The year 1995 marks the birth of the World Wide Web (WWW), which forever changed the way we communicate and share information. I was first introduced to HTML by my father's friend, who happened to be a student at La Sorbonne University in Paris. His passion for technology and software development was contagious, and he played a significant role in sparking my interest in the field. As I began to learn HTML, I became fascinated with the power of code to create and shape the digital world, setting me on the path to becoming a software developer."
    },
    {
        title: "Discovering the Power of CSS",
        time: "Sometime, 1996",
        description: "Before CSS, I wrote inline styles in HTML, leading to cluttered code. Learning CSS allowed me to separate presentation from content, resulting in cleaner, more organized code. This newfound control over website appearance improved my designs and simplified maintenance, elevating my web development skills."
    },
    // {
    //     title: "The Rise of Search Engines",
    //     time: "1997",
    //     description: "The Rise of Search Engines: This year, search engines like AltaVista and Yahoo! gained popularity, making it easier to find information on the internet."
    // },
    // {
    //     title: "The Birth of Google",
    //     time: "1998",
    //     description: "Google was founded in September of this year, and it quickly became one of the most popular search engines on the internet."
    // },
    // {
    //     title: "The Dot-Com Boom",
    //     time: "1999",
    //     description: "This year marked the height of the dot-com boom, as investors poured billions of dollars into internet startups."
    // },
    // {
    //     title: "The Dot-Com Bust",
    //     time: "2000",
    //     description: "The dot-com bubble burst, leading to a recession in the tech industry that lasted for several years."
    // },
    // {
    //     title: "The Launch of Wikipedia",
    //     time: "2001",
    //     description: "Wikipedia was launched this year, forever changing the way we access and share information on the internet."
    // },
    {
        title: "Exploring JavaScript",
        time: "2002",
        description: "I began learning JavaScript, opening up new possibilities for creating interactive and dynamic web experiences. It was also the year where Blogging gained popularity, with many individuals and businesses using blogs as a way to share their thoughts and ideas online."
    },
    // {
    //     title: "The Birth of WordPress",
    //     time: "2003",
    //     description: "WordPress was launched this year, becoming one of the most popular content management systems on the internet."
    // },
    // {
    //     title: "The Rise of Social Media",
    //     time: "2004",
    //     description: "Facebook was founded this year, and it quickly became one of the most popular social media platforms on the internet."
    // },
    // {
    //     title: "The Birth of YouTube",
    //     time: "2005",
    //     description: "YouTube was launched this year, forever changing the way we share and consume video content online."
    // },
    {
        title: "The Emergence of Web 2.0",
        time: "2006",
        description: "Web 2.0 technologies revolutionized the internet, enabling more dynamic and interactive websites. As a developer, I embraced these technologies, learning Ajax, JavaScript libraries like jQuery, and server-side languages like PHP to create feature-rich web applications. The transition to Web 2.0 increased user expectations and required developers like me to adapt and enhance our skillsets."
    },
    {
        title: "The Launch of the first iPhone",
        time: "2007",
        description: "The iPhone was launched this year, forever changing the way we use mobile devices and access the internet."
    },
    // {
    //     title: "The Birth of Airbnb & P2P Marketplaces",
    //     time: "2008",
    //     description: "Airbnb was founded this year, forever changing the way we travel and book accommodations."
    // },
    // {
    //     title: "The Birth of Bitcoin",
    //     time: "2009",
    //     description: "Bitcoin was invented this year, introducing the world to the concept of decentralized digital currency."
    // },
    {
        title: "The Rise of Mobile Apps",
        time: "2010",
        description: "The launch of the first iPad and the rise of the App Store marked the beginning of the mobile app era. I quickly recognized the importance of mobile-first development, learning concepts of Objective-C and Java to build native iOS and Android apps. The idea of Mobile apps expanded my imagination and allowed me to create engaging, accessible experiences for users on various devices."
    },
    {
        title: "I launched Limitlesslane",
        time: "Dec 25, 2011",
        description: "I co-founded Limitlesslane, an online web-based password manager, and gained over 300,000 users. Running a tech startup taught me valuable lessons in building scalable software, ensuring high-quality code, and efficiently managing resources. I learned to monitor and optimize application performance, maintain security, and manage databases to provide seamless experiences for our users. Additionally, I discovered the importance of clear communication and collaboration within a development team to successfully deliver projects on time and within scope."
    },
    {
        title: "Adopting Responsive Web Design",
        time: "2012",
        description: "Responsive web design became essential for developers to ensure websites were accessible on different devices and screen sizes. By incorporating responsive techniques, like fluid grids, flexible images, and CSS media queries, I was able to create adaptive layouts that provided an optimal viewing experience for users, regardless of their device."
    },
    // {
    //     title: "The Rise of React",
    //     time: "2013",
    //     description: "React was released as an open-source library in May 2013 and quickly gained popularity."
    // },
    // {
    //     title: "The Emergence of AngularJS",
    //     time: "2014",
    //     description: "AngularJS gained popularity this year as a popular front-end development framework."
    // },
    // {
    //     title: "The Stabilization of React",
    //     time: "2015",
    //     description: "React became stable with the release of version 1.0.0 in March 2015."
    // },
    {
        title: "Expanding My Front-end Skillset: React and Vue.js",
        time: "2016",
        description: "I learned React and Vue.js, two popular JavaScript libraries that revolutionized how I built front-end applications and user interfaces."
    },
    // {
    //     title: "The Emergence of Artificial Intelligence",
    //     time: "2017",
    //     description: " Artificial intelligence gained popularity this year, with the rise of AI-powered assistants like Siri and Alexa."
    // },
    {
        title: "The Rise of Progressive Web Apps (PWA)",
        time: "2018",
        description: "As a React developer, I've learned about the rise of Progressive Web Apps (PWA), which provide more dynamic and interactive web experiences. PWAs offer features such as offline functionality, push notifications, and fast loading times. I've also discovered how to use PWA technologies such as service workers and app manifests to create reliable and engaging web applications that offer a native-like experience for users."
    },
    {
        title: "Adopting GraphQL for Better API Design",
        time: "2019",
        description: "I learned GraphQL, an innovative API technology that allows for more efficient and flexible data querying, greatly improving the performance of my web applications."
    },
    {
        title: "Embracing the JAMstack",
        time: "2020",
        description: "I adopted the JAMstack architecture, leveraging static site generators and serverless functions to create high-performance, secure, and scalable mobile & web applications."
    },
    {
        title: "Diving into Web 3 and blockchain tech",
        time: "2021",
        description: "Web3 technologies gained popularity this year, including the rise of blockchain, NFTs, and decentralized finance (DeFi) applications."
    },
    {
        title: "Exploring Metaverse Technologies",
        time: "April 5, 2022",
        description: "My experience with blockchain, NFTs, and DeFi apps has equipped me to build immersive dApps, while exploring virtual and augmented reality integration in web and mobile apps for exciting new possibilities."
    },
    {
        title: "Paying It Forward",
        time: "Ongoing, 2023",
        description: "I am currently developing cross-platform tools and applications to assist others in creating universal apps efficiently. I am committed to sharing my knowledge and continuously learning to make the future of cross-platform software development a reality."
    }
];

export default timeline