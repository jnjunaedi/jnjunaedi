function SkillSection() {
  return (
    <section id="skills" className="mt-16 mx-3">
      <h1 className="text-lg font-semibold">My Skills</h1>
      <ul className="flex flex-col mt-5 gap-5">
        <li>
          <p>Programming Languages</p>
          <div className=" flex flex-wrap gap-2 mt-2">
            <p className="bg-gray-200 w-fit p-1.5">Golang</p>
            <p className="bg-gray-200 w-fit p-1.5">TypeScript</p>
          </div>
        </li>
        <li>
          <p>Backend Development</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <p className="bg-gray-200 w-fit p-1.5">Golang</p>
            <p className="bg-gray-200 w-fit p-1.5">gRPC</p>
            <p className="bg-gray-200 w-fit p-1.5">RESTful API</p>
          </div>
        </li>
        <li>
          <p>Databases & Architecture </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <p className="bg-gray-200 w-fit p-1.5">MySQL</p>
            <p className="bg-gray-200 w-fit p-1.5">Clean Architecture</p>
            <p className="bg-gray-200 w-fit p-1.5">Microservices</p>
          </div>
        </li>
        <li>
          <p>Frontend</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <p className="bg-gray-200 w-fit p-1.5">React</p>
            <p className="bg-gray-200 w-fit p-1.5">Tailwind CSS</p>
            <p className="bg-gray-200 w-fit p-1.5">Bootstrap</p>
            <p className="bg-gray-200 w-fit p-1.5">HTML/CSS</p>
          </div>
        </li>
        <li>
          <p>Tools & DevOps</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <p className="bg-gray-200 w-fit p-1.5">Git</p>
            <p className="bg-gray-200 w-fit p-1.5">Github</p>
            <p className="bg-gray-200 w-fit p-1.5">Docker</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default SkillSection;
