import { FaCss3Alt, FaHtml5, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { SiAngular, SiDjango, SiDocker, SiKotlin, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiPostgresql, SiPython, SiSolid, SiSpring } from "react-icons/si";

const TabTecnologiaDetails = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-10 gap-4 text-3xl">
        <FaNodeJs className="text-green-600" aria-label="Node.js" />
        <FaReact className="text-blue-600" aria-label="React" />
        <SiNestjs className="text-red-600" aria-label="NestJS" />
        <FaJava className="text-orange-600" aria-label="Java" />
        <SiSpring className="text-green-500" aria-label="Spring Boot" />
        <SiSolid className="text-purple-600" aria-label="SOLID Principles" />
        <SiKotlin className="text-blue-400" aria-label="Kotlin" />
        <SiPython className="text-blue-500" aria-label="Python" />
        <SiDjango className="text-green-700" aria-label="Django" />
        <FaHtml5 className="text-red-600" aria-label="HTML" />
        <FaCss3Alt className="text-blue-500" aria-label="CSS" />
        <SiNextdotjs className="text-gray-900" aria-label="Next.js" />
        <SiAngular className="text-red-600" aria-label="Angular" />
        <SiMysql className="text-blue-500" aria-label="MySQL" />
        <SiPostgresql className="text-blue-600" aria-label="PostgreSQL" />
        <SiMongodb className="text-green-600" aria-label="MongoDB" />
        <SiDocker className="text-blue-400" aria-label="Docker" />
      </div>
    </div>
  );
}

export default TabTecnologiaDetails;
