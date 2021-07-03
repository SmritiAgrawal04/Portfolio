/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Smriti Agrawal",
  logo_name: "SmritiAgrawal",
  nickname: "umbreil",
  subTitle:
    "A passionate person who often succeeds in working on end-to-end products to produce effect by creating sustainable and functional social and technological structures.",
  resumeLink:
    "https://drive.google.com/file/d/1ea8YdO3cWQ5y8KIN7pciTpW6mgYQSpOX/view?usp=sharing",
  portfolio_repository: "https://github.com/SmritiAgrawal04",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/SmritiAgrawal04",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/smriti-agrawal/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:smritiagrawal.0403@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/smritiagrawal.0403",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/__umbriel__/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating application backend in Python, C++",
        "⚡ Hosting and maintaining secure web applications using popular web frameworks",
        "⚡ Setting up streaming messages from DB to Server or vice-versa on Apache Kafka",
        "⚡ Developing mobile applications using MS PowerApps"
      ],
      softwareSkills: [
        {
        skillName: "Apache Kafka",
            fontAwesomeClassname: "logos:kafka-icon",
            style: {
              color: "#E34F26"
            },
        },
        {
        skillName: "Django",
            fontAwesomeClassname: "logos:django",
            style: {
              color: "#CC6699"
            }, 
        },
        {
        skillName: "Flask",
            fontAwesomeClassname: "cib:flask",
            style: {
              color: "#663399"
            }, 
        },
        {
            skillName: "Jenkins",
            fontAwesomeClassname: "cib:jenkins",
            style: {
              color: "#D00000",
            },
        },
        {
        skillName: "BASH",
            fontAwesomeClassname: "logos:bash",
            style: {
              color: "#E34F26"
            }, 
        },
        {
        skillName: "MS PowerApps",
            fontAwesomeClassname: "bx:bxl-microsoft",
            style: {
              color: "#61DAFB"
            }, 
        },
        {
        skillName: "Overleaf LaTeX",
            fontAwesomeClassname: "cib:overleaf",
            style: {
              color: "#F7DF1E"
            }, 
        },
        {
        skillName: "C++",
            fontAwesomeClassname: "logos:c-plusplus",
            style: {
              color: "#1572B6"
            }, 
        },
      
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Using OS-level virtualization to deliver software in containers",
        "⚡ Experience working with Adobe Document Cloud suite of services",
        "⚡ Deploying Database Engine for storage application software",
        "⚡ Setting up HTTP web server environments"
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Tomcat",
          fontAwesomeClassname: "logos:tomcat",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "logos:sqlite",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Adobe Signature",
            fontAwesomeClassname: "bx:bxl-adobe",
            style: {
              color: "#47A248",
          },
        },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and ML projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis"
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://leetcode.com/Smriti_Agrawal/",
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/smriti_agrawal",
    },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "International Institute of Information Technology, Hyderabad",
      subtitle: "M.Tech. in Computer Science & Engineering - 8.38cgpa",
      logo_path: "iiith.png",
      alt_name: "IIIT Hyderabad",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ I have studied advanced software engineering subjects like Advanced Problem Solving, Internals of Application Servers, Advanced OS, Statistical Methods in AI, Information Retrieval & Extraction, Data Analytics etc.",
        "⚡ Apart from this, I have worked on tools like Apache Kafka, Docker Products, Django, Flask, MS PowerApps etc.",
        "⚡ I was selected for Merit in the PGEE exam conducted by the Institute."
      ],
      website_link: "https://www.iiit.ac.in/"
    },
    {
      title: "University Institute of Technology, Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      subtitle: "B.E. in Computer Science & Engineering - 8.04cgpa",
      logo_path: "uit.png",
      alt_name: "UIT RGPV",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, Computer Networks etc.",
        "⚡ Apart from this, I have been a volunteered for and attended various workshops organised by Mozilla, e-cell,RGPV etc.",
      ],
      website_link: "http://www.uitrgpv.ac.in/"
    },
    {
      title: "St. Joseph's CO-ED School, Bhopal",
      subtitle: "Higher Secondary School - 93%",
      logo_path: "sjcs.png",
      alt_name: "SJCS",
      duration: "2014 - 2015",
      descriptions: [
        "⚡ I have studied fundamental subjects like Maths and Science etc.",
        "⚡ Apart from this, I have participated in Science and Maths Exhibitions and annual functions of the school and won prizes in the same.",
      ],
      website_link: "http://stjosephcoed.org/"
    },
    {
      title: "St. Joseph's CO-ED School, Bhopal",
      subtitle: "Secondary School - 95%",
      logo_path: "sjcs.png",
      alt_name: "SJCS",
      duration: "2012 - 2013",
      descriptions: [
        "⚡ I have studied fundamental subjects like Maths, Science and Social Studies etc.",
        "⚡ Apart from this, I have been an active sports player and a leader of my School House.",
      ],
      website_link: "http://stjosephcoed.org/"
    },
  ],
};

const certifications = {
  certifications: [
  	{
      title: "Google Kickstart 2020",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1PF8Ta6NRHCQFxWqPlZ7YMkhRJG9j9VCl/view?usp=sharing",
      alt_name: "GK2020",
      color_code: "white"
    },
    {
      title: "Training in Networks",
      subtitle: "- BHEL",
      logo_path: "bhel.png",
      certificate_link:
        "https://drive.google.com/file/d/1S5YLrWPVFp0xR331HFlY_7RnrUObSuhl/view?usp=sharing",
      alt_name: "Bharat Heavy Electricals Limited",
      color_code: "#8C151599"
    },
    {
      title: "Applied CS with Android",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1IsxrvGfDP5ZWy-RbO5lBkr7dZ2vrT3E2/view?usp=sharing",
      alt_name: "Google",
      color_code: "#1F70C199"
    },	
    {
      title: "Assembly of PC",
      subtitle: "- AISECT",
      logo_path: "aisect.png",
      certificate_link:
        "https://drive.google.com/file/d/1E6neVwb3O2APy23LoumcQBNwbVKmM_w9/view?usp=sharing",
      alt_name: "aisect",
      color_code: "#0C9D5899"
    },
    {
      title: "IOT using Arduino",
      subtitle: "- RoboTech Pvt. Ltd.",
      logo_path: "robotech.png",
      certificate_link:
        "https://drive.google.com/file/d/1soKWPPNlTwgNFl9gU2qNrOnjjHzsZBs7/view?usp=sharing",
      alt_name: "RoboTech",
      color_code: "white"
    },
    {
      title: "Hardware Networking",
      subtitle: "- AISECT",
      logo_path: "aisect.png",
      certificate_link:
        "https://drive.google.com/file/d/1DPt-q-14frjpPWJKkqfVZyhcmYciyt-1/view?usp=sharing",
      alt_name: "aisect",
      color_code: "#D83B0199"
    },
    {
      title: "JAVA",
      subtitle: "- UDEMY",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1doPgFHOcmUhuTjv_BbmPdEArJsN4yDZs/view?usp=sharing",
      alt_name: "JAVA",
      color_code: "	#D2B48C"
    },
    {
      title: "CSS",
      subtitle: "- UDEMY",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1TgnK3pfKJAGqq8w5dK3hSlkW9qZdP87e/view?usp=sharing",
      alt_name: "CSS",
      color_code: "#00FF7F"
    },
    {
      title: "MongoDB",
      subtitle: "- UDEMY",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1MYKVvvdnFIEsBrnLQcBIhDXiuua-Rt_D/view?usp=sharing",
      alt_name: "Mongo",
      color_code: "#D3D3D3"
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "The amazing things we can accomplish using computer knowledge always baffle me. I love organising events and working for a cause, that is why I have been involved with many opensource communities as a representative. As a fresher, I look forward to my coming years in the corporate world as a huge learning curve. I want to absorb much of the industry knowledge and also to sharpen my technical abilities. ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Upcoming Member of Technical Staff",
          company: "Oracle",
          company_url: "https://www.vedantu.com/",
          logo_path: "oracle.png",
          duration: "July 2021",
          location: "Bengaluru, Karnataka",
          description:
            "",
          color: "#0879bf",
        },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Summer Intern",
          company: "Silicon Labs",
          company_url: "https://www.silabs.com/",
          logo_path: "silabs.png",
          duration: "April 2021 - July 2021",
          location: "Work From Home",
          description:
            "(1) Emode Project aimed to develop sample application using the UC framework to reduce code complexities and reduce user effort to allow automated run on latest IDE version. \
             (2) Docker Implementation & CI/CD pipeline setup using Jenkins for Bootloader Tests to isolate the test environment and automate testing and deploying by 100%",
          color: "#fc1f20",
        },
        {
          title: "Open Source Contributor",
          company: "GirlScript Summer of Code",
          company_url: "https://gssoc.girlscript.tech/",
          logo_path: "gssoc.png",
          duration: "March 2021 - May 2021",
          location: "Work From Home",
          description:
            "Rotten Scripts contain amazing scripts in various languages. Wrote scripts to encrypt/decrypt files using RSA, find all environment variables in codebase and built a Python Camscanner that convert images into scanned images. Find the github repo and my contribution on- https://github.com/HarshCasper/Rotten-Scripts",
          color: "#fc1f20",
        },
        {
          title: "Teaching Assistant",
          company: "IIIT Hyderabad",
          company_url: "https://www.iiit.ac.in/",
          logo_path: "iiith.png",
          duration: "Aug 2020",
          location: "Work From Home",
          description:
            "Hosted and maintained a production‐ready OpenEdX instance on University server. Microsoft Azure, Tutor and EduneXt were some other environment installation options that were worked upon. Setting up courses, conducting tutorial sessions, evaluating assignments, diagnosing and fixing failures in the same were other duties.",
          color: "#0071C5",
        },
        {
          title: "Software Engineer Intern",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "May 2020 - July 2020",
          location: "Work From Home",
          description:
            "I have worked on project called 'Digital Signature with Adobe', the objective of which was to build an application that allows an event organizer to organize events and a student to register for organized events through MS PowerApps as per the role chosen while registering to the app. A student receives an MS Teams invitation which he can join through the app or the link in the invitation to attend the course and an approved certificate is sent to the registered student using Adobe e-sign by that event organizer if the student qualifies the requirements of the event test after course completion.",
          color: "#ee3c26",
        },
        
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "City Manager & Dream Camp Lead",
          company: "Make A Difference",
          company_url: "https://makeadiff.in/",
          logo_path: "mad.webp",
          duration: "June 2017 - Feb 2018",
          location: "Bhopal, Madhya Pradesh",
          description:
            "(1)As a city manager, my major role was to operate as a bridge between Shelter Authorities and MAD organisations to ensure the comfort of our children to its best. The fundamental role was to manage city level tasks of MAD like- conduct interviews and recruit more volunteers who could serve our children, raise funds for ensuring financial security and sustainability for the future of children, encourage and keep the volunteers motivated through presentations, enlightenment or any fun activities etc. I acquired leadership, negotiation, teamwork, resource handling and fundraising skills, developed self-confidence. \
            (2)Dream Camps are outbound experiential camps that help children dream about their future goals and understand what it takes to achieve those dreams. This understanding is facilitated through personal discovery, exploring new talents by challenging themselves and taking responsibility for their actions for the duration of the camp. Organizing a Dream Camp incurs management and great cost in terms of travel, accomodation, food, session material and other logistics for its 3-4 day operations, all of which was led by me for Bhopal, M.P. as the Dream Camp Lead.",
          color: "#4285F4",
        },
        {
          title: "Propel Wingman",
          company: "Make A Difference",
          company_url: "https://makeadiff.in/",
          logo_path: "mad.webp",
          duration: "June 2016 - May 2017",
          location: "Bhopal, Madhya Pradesh",
          description:
            "Under this role I tried to enable better academic outcomes by curating an unforgettable classroom experience for children. Also, enabled shelter-leaving youth gear up for and thrive in the real world. Help them develop foundational skills like functional numeracy, literacy, self-confidence and exposure!",
          color: "#D83B01",
        },
        {
          title: "Intershala Student Partner",
          company: "Intershala",
          company_url: "https://internshala.com/",
          logo_path: "Internshala_company_logo.png",
          duration: "March 2017 - March 2018",
          location: "Remote",
          description:
            "My responsibility was to be the face of Internshala from the comfort of my home at my University campus. It included promoting Internshala among my peers, help them learn new skills via Internshala Trainings and assist them to get an Internship. I also got many exciting rewards and earned a handsome amount of cash incentives. This program helped me to grow my leadership and interpersonal skills.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create projects around Systems and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "smriti_2.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "136- Ansal Pradhan Enclave, Near Dana Pani Restaurant, E-8 Bawadia Kalan, Dist.-Bhopal, Madhya Pradesh - 462039",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/QteE3ArgTNDraGA67",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8989648989",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
