import Skill from "./skill";

const TechStack = ({
  techStack,
  className,
}: {
  techStack: string[];
  className: string;
}) => (
  <div className={className}>
    {techStack.map((skill) => (
      <Skill key={skill} skill={skill} />
    ))}
  </div>
);

export default TechStack;
