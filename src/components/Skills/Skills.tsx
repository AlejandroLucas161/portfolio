import { FunctionComponent } from "react";
import { SkillsTechnologies } from "./config";

const Skills: FunctionComponent = () => {
  return (
    <section className="py-16" id="skills">
      <div className="flex flex-col items-center gap-12 mx-auto max-w-[800px]">
        <h2 className="font-bold text-3xl">SKILLS</h2>

        <div className="flex flex-wrap justify-center items-end gap-8">
          {SkillsTechnologies.map(({ name, icon }, idx) => (
            <div key={name + idx} className="flex flex-col gap-2 items-center">
              <div className="w-8">{icon}</div>
              <span className="text-xl">{name}</span>
            </div>
          ))}
        </div>

        <p className="text-lg text-justify">
          In addition to my technical skills, I understand ES6 JavaScript and
          BEM CSS methodology well. I use React Hooks and Zustand to manage
          states efficiently, aiming for smooth development workflows. With good
          problem-solving skills, I troubleshoot effectively. I also focus on
          responsive web design and developing single-page applications to
          provide great user experiences on different devices.
        </p>
      </div>
    </section>
  );
};

export default Skills;
