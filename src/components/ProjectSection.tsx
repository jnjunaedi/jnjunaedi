function ProjectSection() {
  return (
    <section id="projects" className="mt-16 mx-3">
      <h1 className="text-xl font-semibold">My Projects</h1>
      <div className="mt-5 ms-2">
        <div className="relative">
          <div className="w-0.5 h-full bg-gray-700 absolute top-8"></div>
          <span className="absolute -left-1">o</span>
          <div className="ms-5 bg-gray-50 p-2">
            <h2 className="text-lg"> E-Commerce</h2>
            <span className="text-sm">October - 2026</span>
            <div className="mt-2 ms-3">
              <p>
                I have developed an e-commerce application that implements a microservices architecture, with a clean architecture applied to each service. This design ensures the application is easy to test, improves code readability,
                simplifies maintenance, and facilitates future technology transitions. For inter service communication, I utilize gRPC to maximize performance. Additionally, I have implemented the outbox and retry patterns to prevent data
                inconsistency or synchronization issues that could arise from network failures or server downtime. Throughout the development process, I have minimized reliance on external frameworks or ORMs; this approach allows me to
                better understand the core characteristics of the Go language by leveraging its native features, ultimately ensuring optimal and seamless application performance.
              </p>
              <p className="my-2 font-semibold text-sm">Golang - MySQL - Microservices - Clean Architecture - gRPC - net/http - database/sql - go-sql-driver - testify </p>
              <a href="https://github.com/jnjunaedi/e-commerce" className="block py-1 px-3 bg-gray-300 text-center mt-5">
                Visit
              </a>
            </div>
          </div>
          <span className="absolute -left-1 -bottom-16">o</span>
        </div>
        <div className="mt-10 relative">
          <div className="w-0.5 h-full bg-gray-700 absolute top-8"></div>
          <span className="absolute -left-1">o</span>
          <div className="ms-5 bg-gray-50 p-2">
            <h2 className="text-lg"> Mini Bank</h2>
            <span className="text-sm">September - 2026</span>
            <div className="mt-2 ms-3">
              <p>
                A simple mini-banking application that implements the Clean Architecture pattern to facilitate testing, simplify maintenance, and enhance code readability through clear layer separation. The system is designed to handle
                basic banking transactions securely and consistently, with comprehensive test coverage. I chose to build this using native Go (Golang) because it offers full control over the codebase and ensures complete transparency free
                from any magic abstractions—which keeps application performance optimal. Furthermore, I have minimized the use of pointers to ensure data safety and consistency, striving to keep data on the stack rather than the heap. This
                reduces the workload on the Garbage Collector (GC), preventing significant stop-the-world pauses.
              </p>
              <p className="my-2 font-semibold text-sm">Golang - MySQL - Clean Architecture - gRPC - net/http - database/sql - go-sql-driver - testify </p>
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
              <a href="https://jnfrontend.vercel.app" className="block py-1 px-3 bg-gray-300 text-center mt-5">
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
