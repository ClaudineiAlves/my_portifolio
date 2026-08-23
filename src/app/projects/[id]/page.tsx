import { projectsData } from "@/../utils/Data/projects-data";
import ProjectDetails from "@/components/sections/projects/project-details";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

// Server Component: resolve os dados e delega a renderização ao client
// component, que é quem tem acesso ao contexto de idioma.
const ProjectDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
};

export default ProjectDetailsPage;
