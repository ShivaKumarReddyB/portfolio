export default function WorkExperience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "LTC - Northwest Missouri State University, MO",
      duration: "August 2023 - April 2024",
      description: `Designed and developed scalable applications using Next.js, following business logic and UX guidelines.
      Integrated dynamic forms with React Hook Form and Zod for robust validation and data integrity. Enhanced deployment pipelines with AWS, Docker, and Git, supporting real-time updates.`,
    },
    {
      title: "Programming Analyst",
      company: "Cognizant (Client: HomeSever) | Hyderabad, India",
      duration: "September 2021 - April 2023",
      description: `Led migration of a traditional WordPress website to a single-page application using Gatsby, improving SEO and user traffic.
      Integrated a headless CMS and reusable UI components with React and Bootstrap, optimizing responsiveness. Implemented CI/CD pipelines using Gerrit, Git, and Azure.`,
    },
    {
      title: "Software Engineer",
      company: "Innovapath | Hyderabad, India",
      duration: "August 2019 - August 2021",
      description: `Managed the design and implementation of a SPA using MERN stack, enhancing scalability and performance.
      Developed reusable React components with Redux, optimized data handling, and leveraged AWS Lambda for serverless backend logic execution.`,
    },
  ];

  return (
    <div className="p-4 bg-neutral-200 dark:bg-neutral-800 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
        Work Experience
      </h2>
      <ul className="space-y-4">
        {experiences.map((exp, index) => (
          <li
            key={index}
            className="border-b pb-2 border-neutral-300 dark:border-neutral-700"
          >
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
              {exp.title} - <span className="italic">{exp.company}</span>
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {exp.duration}
            </p>
            <p className="text-neutral-700 dark:text-neutral-300">
              {exp.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
