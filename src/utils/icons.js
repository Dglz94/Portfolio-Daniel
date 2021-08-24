import {
  FaPortrait,
  FaAngleDown,
  FaAngleUp,
  FaLinkedin,
  FaGithub,
  FaAngellist,
  FaLocationArrow,
  FaFilePdf,
  FaBook,
  FaBrain,
  FaEnvelope,
  FaFolderOpen,
  FaDownload,
  FaRegEye,
} from "react-icons/fa";

const icons = {
  nav: {
    down: <FaAngleDown className="nav-resp " />,
    up: <FaAngleUp className="nav-resp " />,
    profile: <FaPortrait className="nav-icon blue" />,
    contact: <FaEnvelope className="nav-icon red" />,
    experience: <FaBrain className="nav-icon yellow" />,
    repositories: <FaFolderOpen className="nav-icon green" />,
  },
  footer: {
    linkedIn: <FaLinkedin />,
    gitHub: <FaGithub />,
    chill: <FaAngellist />,
  },
  skills: {
    autodidact: <FaBook className="skill-icon"></FaBook>,
  },
  profile: {
    location: <FaLocationArrow className="location-icon" />,
    pdf: <FaFilePdf className="location-icon" />,
    view: <FaRegEye className="pdf-icon-view" />,
    download: <FaDownload className="pdf-icon-download" />,
  },
};

export default icons;
