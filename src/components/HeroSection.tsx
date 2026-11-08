import Navbar from './Navbar';
import myImage2 from '../assets/me-2.jpeg';

function HeroSection() {
  return (
    <section>
      <Navbar />
      <div className="mt-10 px-3">
        <img src={myImage2} alt="my-image" className="w-52" />
        <div className="mt-5">
          <p className="text-lg">Go Backend Engineer</p>
          <p className="italic text-sm">"Clean Architecture & Native Go Enthusiast"</p>
        </div>
        <ul className="flex flex-col gap-3 mt-5 ms-5 list-disc">
          <li>Indonesia</li>
          <li>He/him</li>
          <li>jujunjunaedijn@gmail.com</li>
          <li>
            <a href="" className="underline text-blue-800">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HeroSection;
