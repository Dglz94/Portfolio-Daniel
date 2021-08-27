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
  FaUserCheck,
  FaComments,
  FaUserFriends,
  FaWrench,
  FaChild,
  FaStream,
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
    etic: <FaUserCheck className="skill-icon"></FaUserCheck>,
    team: <FaUserFriends className="skill-icon"></FaUserFriends>,
    communication: <FaComments className="skill-icon"></FaComments>,
    problem: <FaWrench className="skill-icon"></FaWrench>,
    lider: <FaChild className="skill-icon"></FaChild>,
  },
  profile: {
    location: <FaLocationArrow className="location-icon" />,
    pdf: <FaFilePdf className="location-icon" />,
    view: <FaRegEye className="pdf-icon-view" />,
    download: <FaDownload className="pdf-icon-download" />,
  },
  arcade: {
    list: <FaStream className="game-img" />,
  },
};

export default icons;
