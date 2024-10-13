import { FaGithub, FaLinkedin } from 'react-icons/fa';

const TabContatoDetails = () => {
  return (
    <div className="flex flex-col items-start p-4">
      <div className="p-0 space-y-4 justify-start w-full text-2xl"> {/* Alterado para text-2xl */}
        <div className='w-full flex items-center'>
          <a
            href="https://github.com/Mtmozart?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-black transition-colors duration-300 w-full"
            aria-label="GitHub profile"
          >
            <FaGithub size={35} className="mr-2" />
            <span>mtmozart</span>
          </a>
        </div>
        <div className='w-full flex items-center'>
          <a
            href="https://www.linkedin.com/in/matheus-mozart-borges"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-blue-600 transition-colors duration-300 w-full"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin size={35} className="mr-2" />
            <span>Matheus Borges</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TabContatoDetails;
