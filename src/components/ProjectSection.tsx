function ProjectSection() {
  return (
    <section id="projects" className="mt-16 mx-3">
      <h1 className="text-xl font-semibold">My Projects</h1>
      <div className="mt-5 ms-2">
        <div className="relative">
          <div className="w-0.5 h-full bg-gray-700 absolute top-8"></div>
          <span className="absolute -left-1">o</span>
          <div className="ms-5 bg-gray-50 p-2">
            <h2 className="text-lg"> Mini Bank</h2>
            <span className="text-sm">September - 2026</span>
            <div className="mt-2 ms-3">
              <p>
                A simple banking application built using Go, featuring native performance and an implementation of *Clean Architecture*. The application employs a minimalist design with minimal third-party dependencies, and its modular
                structure facilitates unit testing, enhances code readability, and provides technological flexibility for the future.
              </p>
              <p className="my-2 font-semibold text-sm">Golang - MySQL - Microservices - Clean Architecture - gRPC - net/http - database/sql - go-sql-driver - testify </p>
              <a href="https://github.com/jnjunaedi/mini-bank" className="block py-1 px-3 bg-gray-300 text-center mt-5">
                Visit
              </a>
            </div>
          </div>
          <span className="absolute -left-1 -bottom-16">o</span>
        </div>
        <div className=" mt-10 relative">
          <div className="w-0.5 h-full bg-gray-700 absolute top-10"></div>
          <div className=" ms-5 bg-gray-50 p-2">
            <h2 className="text-lg">E Mading</h2>
            <span className="text-sm">March - 2026</span>
            <div className="mt-2 ms-3">
              <p>
                E-Mading is a digital application designed as an information board, specifically for school environments. It implements the Clean Architecture pattern (comprising domain, infrastructure, and interface-adapter layers) to
                separate responsibilities with each layer handling its own specific tasks thereby resulting in code that is easy to test, facilitates technology migration, and improves readability.
              </p>
              <p className="my-2 font-semibold text-sm">TypeScript - React - Node.js - Express.js - MongoDB - Mongoose ODM - Bootstrap - Clean Architecture </p>
              <a href="https://github.com/jnjunaedi/e-mading" className="block py-1 px-3 bg-gray-300 text-center mt-5">
                Visit
              </a>
            </div>
          </div>
        </div>
        <div className=" mt-10 relative">
          <span className="absolute -left-1 top-1">o</span>
          <div className="w-0.5 h-full bg-gray-700 absolute top-10"></div>
          <div className=" ms-5 bg-gray-50 p-2">
            <h2 className="text-lg">Frontend Dev</h2>
            <span className="text-sm">December 2024 - Present</span>
            <div className="mt-2 ms-3">
              <p>Creating interface layouts (landing pages, multi-page sites) and ensuring visual consistency across specific screen sizes.</p>
              <p className="my-2 font-semibold text-sm">TypeScript - React - TailwindCSS - Bootstrap - HTML/CSS</p>
              <a href="" className="block py-1 px-3 bg-gray-300 text-center mt-5">
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
