import { MdLocalMovies, MdFindInPage, MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineSearch, AiFillTag } from "react-icons/ai";
import { FaTv, FaUserFriends } from "react-icons/fa";
import { IoMdBusiness } from "react-icons/io";


let listFilter = [
    {
      id: 1,
      label: "All",
      icon : <AiOutlineSearch style={{marginRight : '6px'}} size="2.4rem" />,
      filterEndpoint: 'multi',
    },
    {
      id: 2,
      label: "Titles",
      icon : <MdLocalMovies style={{marginRight : '6px'}} size="2.4rem" />,
      filterEndpoint: 'multi',
    },
    {
      id: 3,
      label: "TV Episode",
      icon : <FaTv style={{marginRight : '6px'}} size="2.4rem" />,
      filterEndpoint : 'tv',
    },
    {
      id: 4,
      label: "Celebs",
      icon : <FaUserFriends style={{marginRight : '6px'}} size="2.4rem" />,
      filterEndpoint:'person',
    },
    {
      id: 5,
      label: "Companies",
      icon : <IoMdBusiness style={{marginRight : '6px'}} size="2.4rem" />,
      filterEndpoint:'company',
    },
    {
      id: 6,
      label: "Keywords",
      icon : <AiFillTag style={{marginRight : '6px'}} size="2.4rem" />,
      filterEndpoint:'keyword',
    },
    {
      id: 7,
      label: "Advanced Search",
      leftIcon : <MdFindInPage style={{marginRight : '6px'}} size="2.4rem" />,
      rightIcon : <MdKeyboardArrowRight style={{marginLeft : '8px'}} size="2rem" />,
      footer : true,
    },

];
export { listFilter }