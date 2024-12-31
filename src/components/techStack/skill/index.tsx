const Skill = ({ skill }: { skill: string }) => (
  <div className="rounded-full bg-gradient-to-r from-dark-purple-500 to-dark-purple-400 p-1 hover:animate-skill">
    <div className="bg-dark-purple-200 rounded-full px-8 py-4">
      <p className="hover:animate-bg-rotate font-dmSans text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-light-green to-light-orange">
        {skill}
      </p>
    </div>
  </div>
);

export default Skill;
