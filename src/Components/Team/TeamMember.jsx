import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function TeamMember({ title, capsole, image }) {
  return (
    <div className="text text-center hover:scale-110 duration-300">
      <div>
        <img
          src={image}
          alt=""
          className="w-48 h-48 rounded-full object-cover mx-auto"
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{capsole}</p>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-xl hover:text-yellow-500 duration-300" />
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-xl hover:text-yellow-500 duration-300" />
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl hover:text-yellow-500 duration-300" />
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-xl hover:text-yellow-500 duration-300" />
        </a>
      </div>
    </div>
  );
}
