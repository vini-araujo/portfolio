import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { about, baseURL, person } from "@/resources";

const research = {
  path: "/research",
  title: "Research",
  description: `Research projects by ${person.name}`,
};

const projects = [
  {
    title: "Undergraduate Research Assistant",
    timeframe: "Dec 2025 - Present",
    org: "UW-Eau Claire, Eau Claire, WI, USA",
    bullets: [
      "Developing a real-time object detection and segmentation pipeline for dashcam footage using a custom U-Net CNN, enabling on-road identification of vehicles, pedestrians, and roadway features.",
      "Implementing a continuous retraining workflow that adapts the model as new footage is collected, improving performance over time and supporting transportation safety and accident analysis.",
    ],
  },
  {
    title: "MARS (Mapping and Analyzing Research Software)",
    timeframe: "October 2025 - Present",
    org: "",
    bullets: [
      "Led the back-end and database architecture of a web app called MARS (Mapping and Analyzing Research Software).",
      "Utilized domain-driven design concepts and hex architecture to structure functionality and scalability.",
      "Led planning and early stages of the app by assigning tasks, defining KPIs, defining the MVP, and selecting the tech stack (Next.js, Tailwind CSS, Python, FastAPI, PostgreSQL).",
    ],
  },
  {
    title: "Credit Card Fraud Detection Undergraduate Research Assistant",
    timeframe: "09/2023 - 05/2024",
    org: "UW-Eau Claire, Eau Claire, WI, USA",
    bullets: [
      "Programmed in Python and used machine learning models to detect fraudulent card transactions.",
      "Applied SMOTE and random undersampling techniques to address severe class imbalance.",
      "Implemented XGBoost and Random Forest models with 5-fold cross-validation.",
      "Evaluated results with AUROC, AUPRC, F1, Precision, Recall, Accuracy, and G-Mean, achieving over 90% accuracy on a dataset with over 500,000 transactions.",
    ],
  },
];

export async function generateMetadata() {
  return Meta.generate({
    title: research.title,
    description: research.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(research.title)}`,
    path: research.path,
  });
}

export default function Research() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={research.path}
        title={research.title}
        description={research.description}
        image={`/api/og/generate?title=${encodeURIComponent(research.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        {research.title}
      </Heading>
      <Column fillWidth gap="xl" paddingX="24" paddingBottom="40">
        {projects.map((project) => (
          <Column key={project.title} fillWidth gap="12">
            <Heading as="h2" variant="heading-strong-l">
              {project.title}
            </Heading>
            {(project.timeframe || project.org) && (
              <Text variant="body-default-s" onBackground="neutral-weak">
                {[project.timeframe, project.org].filter(Boolean).join(" • ")}
              </Text>
            )}
            <Column as="ul" gap="8">
              {project.bullets.map((bullet, index) => (
                <Text as="li" variant="body-default-m" key={`${project.title}-${index}`}>
                  {bullet}
                </Text>
              ))}
            </Column>
          </Column>
        ))}
      </Column>
    </Column>
  );
}
