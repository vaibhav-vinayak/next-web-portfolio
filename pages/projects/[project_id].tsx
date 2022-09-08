interface ProjectTypes {
  id: number;
  name: string;
  description: string;
  skills: string[];
  code: string;
  preview: string;
}

const Project = ({}: ProjectTypes) => <div>Project</div>;

export default Project;
