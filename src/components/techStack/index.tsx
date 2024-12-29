import { skills } from "./definitions";
import Skill from "./skill";

const TechStack = () => (
  <div className="flex flex-wrap gap-8 justify-center">
    {skills.map((skill) => (
      <Skill key={skill} skill={skill} />
    ))}
  </div>
);

export default TechStack;
