import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Vinicius",
  lastName: "Araujo",
  name: "Vini Araujo",
  role: "Software Engineer",
  avatar: "/images/portfolio-pfp.jpg",
  email: "araujovd1522@uwec.edu",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Portuguese", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/vini-araujo",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vini-araujo13",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Systems design and engineering</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Vini, a Computer Science Major at <Text as="span" size="xl" weight="strong">University of Wisconsin - Eau Claire</Text>, where I lead Full-Stack software projects <br /> and undergraduate research.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hey I'm Vini, Brazilian software engineer based in Wisconsin with a passion for transforming software ideas into 
        deployable and scalable applications. With and emphasis on system design and architecture, thinking about
        trade-offs and business logic.

      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "University of Wisconsin - Eau Claire",
        timeframe: "2025 - Present",
        role: "Web Developer/IT Intern",
        achievements: [
          <>
            "Maintained and improved the Recreation websites and pages for uwec. Updated the information
            and pictures whenever needed to ensure it was up to date."
          </>,
          <>
            "Worked with the marketing and design teams to deliver the features they planned for the clients
            on the website."
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/web-developer-screenshots/sports-rec-1.png",
            alt: "Sports Rec Page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/web-developer-screenshots/sports-rec-2.png",
            alt: "Sports Rec Page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/web-developer-screenshots/sports-rec-3.png",
            alt: "Sports Rec Page",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "University of Wisconsin - Eau Claire",
        timeframe: "2023 - 2024",
        role: "Java Teaching Assistant (TA)",
        achievements: [
          <>
            Assisted professor and 25 students in Intro to Programming in Java class
          </>,
          <>
            Conducted lab sessions, graded assignments, and provided one-on-one coding support during office hours
          </>,
           <>
            Improved student debugging efficiency by 40% through hands-on guidance and tailored explanations.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Wisconsin - Eau Claire",
        description: <>Studied Computer Science.</>,
      },
      {
        name: "Udemy 365 Instructors: The Data Science Course: Complete Data Science Bootcamp 2024 ",
        description: <>Studied Data Science, Python, Machine Learning and Deep Learning.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "System Design and architecture",
        description: (
          <>Able to plan and design Full-Stack scalable systems.
            I understand business logic and trade-offs that come with software applications.</>
        ),
        tags: [
          {
            name: "System Design",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/system-design.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + (Python + FastAPI || Java + Spring Boot) + (Supabase/PostgreSQL).</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/full-stack.jpeg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
