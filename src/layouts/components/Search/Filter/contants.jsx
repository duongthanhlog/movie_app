import { MdFindInPage, MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineSearch, AiFillTag } from "react-icons/ai";
import { FaTv, FaUserFriends } from "react-icons/fa";
import { IoMdBusiness } from "react-icons/io";


export const listFilter = [
    {
      label: "All",
      icon : <AiOutlineSearch style={{marginRight : '6px'}} size="2.4rem" />,
      filterSlug: 'multi',
    },
    {
      label: "TV Episode",
      icon : <FaTv style={{marginRight : '6px'}} size="2.4rem" />,
      filterSlug : 'tv',
    },
    {
      label: "Celebs",
      icon : <FaUserFriends style={{marginRight : '6px'}} size="2.4rem" />,
      filterSlug:'person',
    },
    {
      label: "Companies",
      icon : <IoMdBusiness style={{marginRight : '6px'}} size="2.4rem" />,
      filterSlug:'company',
    },
    {
      label: "Keywords",
      icon : <AiFillTag style={{marginRight : '6px'}} size="2.4rem" />,
      filterSlug:'keyword',
    },
    {
      label: "Advanced Search",
      leftIcon : <MdFindInPage style={{marginRight : '6px'}} size="2.4rem" />,
      rightIcon : <MdKeyboardArrowRight style={{marginLeft : '8px'}} size="2rem" />,
      footer : true,
    },

];