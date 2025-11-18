// // src/Screen/Drawer.jsx
// import React, { useState } from "react";
// import {
//   Drawer,
//   List,
//   ListItemButton,
//   ListItemText,
//   Collapse,
//   IconButton,
//   AppBar,
//   Toolbar,
//   Typography,
//   ListItemIcon,
//   Divider,
//   Box,
//   Button,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import LogoutIcon from "@mui/icons-material/Logout";

// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { logoutUser } from "../Store/Slice/authSlice";

// // Icons
// import SchoolIcon from "@mui/icons-material/School";
// import PersonIcon from "@mui/icons-material/Person";
// import PeopleIcon from "@mui/icons-material/People";
// import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
// import ClassIcon from "@mui/icons-material/Class";
// import BookIcon from "@mui/icons-material/Book";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import DescriptionIcon from "@mui/icons-material/Description";
// import PaidIcon from "@mui/icons-material/Paid";
// import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
// import HowToRegIcon from "@mui/icons-material/HowToReg";
// import EventNoteIcon from "@mui/icons-material/EventNote";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

// const CustomDrawer = () => {
//   const [openDrawer, setOpenDrawer] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState({});
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const toggleDropdown = (menu) => {
//     setDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
//   };

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     toast.info("Logged out successfully 👋");
//     navigate("/login");
//     setOpenDrawer(false);
//   };

//   const menuItems = [
//     {
//       title: "Students",
//       icon: SchoolIcon,
//       subtitles: [
//         { text: "Add Student", icon: PersonIcon,path:"/std/add" },
//         { text: "List Students", icon: PeopleIcon, path:"/std/list" },
      

//       ],
//     },
//     {
//       title: "Teachers",
//       icon: TransferWithinAStationIcon,
//       subtitles: [
//         { text: "Add Teacher", icon: PersonIcon ,path:"/teacher/add" },
//         { text: "List Teachers", icon: PeopleIcon ,path:"/teacher/list"},
//       ],
//     },
//     {
//       title: "Classes",
//       icon: ClassIcon,
//       subtitles: [
//         { text: "Add Class", icon: ClassIcon,path:"/class/add" },
//         { text: "List Classes", icon: ClassIcon,path:"/class/list" },
//       ],
//     },
//     {
//       title: "Subjects",
//       icon: BookIcon,
//       subtitles: [
//         { text: "Add Subject", icon: BookIcon,path:"/sub/add" },
//         { text: "List Subjects", icon: BookIcon,path:"/sub/list" },
//       ],
//     },
//     {
//       title: "Syllabus",
//       icon: AssignmentIcon,
//       subtitles: [
//         { text: "Add Syllabus", icon: AssignmentIcon,path:"/syllabus/add" },
//         { text: "List Syllabus", icon: AssignmentIcon,path:"/syllabus/list" },
//       ],
//     },
//     {
//       title: "Result",
//       icon: DescriptionIcon,
//       subtitles: [
//         { text: "Schedule Exam", icon: EventNoteIcon ,path:"/examschedule" },
//         { text: "Exam Detailed", icon: EventNoteIcon ,path:"/exam/detail" },
//         { text: "Results Add", icon: EmojiEventsIcon,path:"/result/add" },
//         { text: "Results List", icon: EmojiEventsIcon, path:"/result/list" },

//       ],
//     },
//     {
//       title: "Fees",
//       icon: PaidIcon,
//       subtitles: [
//         { text: "Fee Structure", icon: ReceiptLongIcon ,path:"/fee/stru" },
//         { text: "Fee Voucher", icon: ReceiptLongIcon, path:"/fee/voucher"},
//         { text: "Fee Submission", icon: ReceiptLongIcon, path:"/fee/submission"},
//       ],
//     },
//     {
//       title: "Attendance",
//       icon: HowToRegIcon,
//       subtitles: [
//         { text: "Mark Attendance", icon: EventNoteIcon,path:"/attendence/form" },
//         { text: "Attendance Report", icon: DescriptionIcon,path:"/attendence/list" },
//       ],
//     },
//   ];

//   return (
//     <>
//       {/* AppBar with Dashboard + Logout on right */}
//       <AppBar position="static" sx={{ backgroundColor: "#2a9b42" }}>
//         <Toolbar>
//           {/* Drawer toggle button */}
//           <IconButton
//             color="inherit"
//             edge="start"
//             onClick={() => setOpenDrawer(true)}
//           >
//             <MenuIcon />
//           </IconButton>

//           {/* Dashboard title */}
//           <Typography variant="h5" sx={{ flexGrow: 1, marginLeft: "20px" }}>
//             Dashboard
//           </Typography>

//           {/* Logout button on right side */}
//           <Button
//             color="inherit"
//             startIcon={<LogoutIcon />}
//             onClick={handleLogout}
//           >
//             Logout
//           </Button>
//         </Toolbar>
//       </AppBar>

//       {/* Drawer content */}
//       <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
//         <Box sx={{ width: 270 }}>
//           <List>
//             {menuItems.map((menu, index) => (
//               <React.Fragment key={index}>
//                 <ListItemButton onClick={() => toggleDropdown(menu.title)}>
//                   <ListItemIcon>{<menu.icon />}</ListItemIcon>
//                   <ListItemText primary={menu.title} />
//                   {dropdownOpen[menu.title] ? <ExpandLess /> : <ExpandMore />}
//                 </ListItemButton>
//                 <Collapse in={dropdownOpen[menu.title]} timeout="auto" unmountOnExit>
//                   <List component="div" disablePadding>
//                     {menu.subtitles.map((subtitle, subIndex) => (
//                       <ListItemButton key={subIndex} component={Link} to={subtitle.path} sx={{ pl: 6 }}>
//                         <ListItemIcon>{<subtitle.icon />}</ListItemIcon>
//                         <ListItemText primary={subtitle.text} />
//                       </ListItemButton>
//                     ))}
//                   </List>
//                 </Collapse>
//               </React.Fragment>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default CustomDrawer;






























// // src/Screen/Sidebar.jsx
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { logoutUser } from "../Store/Slice/authSlice";

// // Heroicons from react-icons (Flowbite uses Heroicons)





// import {
//   UserGroupIcon,
//   UserIcon,
//   AcademicCapIcon,
//   ClipboardListIcon,
//   BookOpenIcon,
//   DocumentTextIcon,
//   CurrencyDollarIcon,
//   CalendarIcon,
//   MenuIcon,
//   LogoutIcon,
//   ClipboardCheckIcon
// } from "@heroicons/react/24/outline";


// const Drawer = () => {
//   const [openMenus, setOpenMenus] = useState({});
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const toggleMenu = (menu) => {
//     setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
//   };

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     toast.info("Logged out successfully 👋");
//     navigate("/login");
//     setSidebarOpen(false);
//   };

//   const menuItems = [
//     {
//       title: "Students",
//       icon: HiOutlineUserGroup,
//       submenus: [
//         { text: "Add Student", path: "/std/add", icon: HiOutlineUser },
//         { text: "List Students", path: "/std/list", icon: HiOutlineUserGroup },
//       ],
//     },
//     {
//       title: "Teachers",
//       icon: HiOutlineAcademicCap,
//       submenus: [
//         { text: "Add Teacher", path: "/teacher/add", icon: HiOutlineUser },
//         { text: "List Teachers", path: "/teacher/list", icon: HiOutlineUserGroup },
//       ],
//     },
//     {
//       title: "Classes",
//       icon: HiOutlineClipboardList,
//       submenus: [
//         { text: "Add Class", path: "/class/add", icon: HiOutlineClipboardList },
//         { text: "List Classes", path: "/class/list", icon: HiOutlineClipboardList },
//       ],
//     },
//     {
//       title: "Subjects",
//       icon: HiOutlineBookOpen,
//       submenus: [
//         { text: "Add Subject", path: "/sub/add", icon: HiOutlineBookOpen },
//         { text: "List Subjects", path: "/sub/list", icon: HiOutlineBookOpen },
//       ],
//     },
//     {
//       title: "Syllabus",
//       icon: HiOutlineClipboardCheck,
//       submenus: [
//         { text: "Add Syllabus", path: "/syllabus/add", icon: HiOutlineClipboardCheck },
//         { text: "List Syllabus", path: "/syllabus/list", icon: HiOutlineClipboardCheck },
//       ],
//     },
//     {
//       title: "Result",
//       icon: HiOutlineDocumentText,
//       submenus: [
//         { text: "Schedule Exam", path: "/examschedule", icon: HiOutlineCalendar },
//         { text: "Exam Detailed", path: "/exam/detail", icon: HiOutlineCalendar },
//         { text: "Results Add", path: "/result/add", icon: HiOutlineDocumentText },
//         { text: "Results List", path: "/result/list", icon: HiOutlineDocumentText },
//       ],
//     },
//     {
//       title: "Fees",
//       icon: HiOutlineCurrencyDollar,
//       submenus: [
//         { text: "Fee Structure", path: "/fee/stru", icon: HiOutlineDocumentText },
//         { text: "Fee Voucher", path: "/fee/voucher", icon: HiOutlineDocumentText },
//         { text: "Fee Submission", path: "/fee/submission", icon: HiOutlineCurrencyDollar },
//       ],
//     },
//     {
//       title: "Attendance",
//       icon: HiOutlineCalendar,
//       submenus: [
//         { text: "Mark Attendance", path: "/attendence/form", icon: HiOutlineCalendar },
//         { text: "Attendance Report", path: "/attendence/list", icon: HiOutlineClipboardList },
//       ],
//     },
//   ];

//   return (
//     <>
//       {/* Top Navbar for Desktop */}
//       <nav className="hidden sm:flex items-center justify-between bg-green-600 text-white p-3 fixed w-full z-50">
//         <h1 className="text-lg font-bold">Dashboard</h1>
//         <button
//           className="flex items-center bg-green-700 hover:bg-green-800 px-3 py-1 rounded"
//           onClick={handleLogout}
//         >
//           <HiOutlineLogout className="me-2" /> Logout
//         </button>
//       </nav>

//       {/* Mobile Navbar */}
//       <div className="sm:hidden flex items-center justify-between bg-green-600 text-white p-3">
//         <h1 className="text-lg font-bold">Dashboard</h1>
//         <button onClick={() => setSidebarOpen(!sidebarOpen)}>
//           <HiOutlineMenu className="w-6 h-6" />
//         </button>
//       </div>

//       {/* Sidebar */}
//       <aside
//         className={`fixed top-0 left-0 z-40 w-64 h-screen bg-gray-50 dark:bg-gray-800 overflow-y-auto transition-transform transform ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } sm:translate-x-0 sm:top-0`}
//       >
//         <div className="pt-16 sm:pt-20 px-3">
//           <ul className="space-y-2 font-medium">
//             {menuItems.map((menu, index) => (
//               <li key={index}>
//                 <button
//                   onClick={() => toggleMenu(menu.title)}
//                   className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//                 >
//                   <menu.icon className="w-5 h-5 me-3" />
//                   <span className="flex-1 text-left">{menu.title}</span>
//                   <span>{openMenus[menu.title] ? "▲" : "▼"}</span>
//                 </button>
//                 {openMenus[menu.title] && (
//                   <ul className="pl-6 mt-1 space-y-1">
//                     {menu.submenus.map((sub, subIndex) => (
//                       <li key={subIndex}>
//                         <Link
//                           to={sub.path}
//                           onClick={() => setSidebarOpen(false)}
//                           className="flex items-center p-2 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
//                         >
//                           <sub.icon className="w-4 h-4 me-2" />
//                           {sub.text}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}

//             {/* Logout for Mobile Sidebar */}
//             <li>
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mt-2 sm:hidden"
//               >
//                 <HiOutlineLogout className="w-5 h-5 me-3" />
//                 <span className="flex-1 text-left">Logout</span>
//               </button>
//             </li>
//           </ul>
//         </div>
//       </aside>

//       {/* Main content */}
//       <div className="pt-16 sm:pt-20 p-4 sm:ml-64">
//         <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
//           <p>Dashboard Content Goes Here</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Drawer;



























// // src/Screen/Drawer.jsx
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { logoutUser } from "../Store/Slice/authSlice";

// // React-icons (Flowbite compatible Heroicons)
// import {
//   HiOutlineUserGroup,
//   HiOutlineUser,
//   HiOutlineAcademicCap,
//   HiOutlineClipboardList,
//   HiOutlineBookOpen,
//   HiOutlineDocumentText,
//   HiOutlineCurrencyDollar,
//   HiOutlineCalendar,
//   HiOutlineMenu,
//   HiOutlineLogout,
//   HiOutlineClipboardCheck,
// } from "react-icons/hi";

// const Drawer = () => {
//   const [openMenus, setOpenMenus] = useState({});
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const toggleMenu = (menu) => {
//     setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
//   };

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     toast.info("Logged out successfully 👋");
//     navigate("/login");
//     setSidebarOpen(false);
//   };

//   const menuItems = [
//     {
//       title: "Students",
//       icon: HiOutlineUserGroup,
//       submenus: [
//         { text: "Add Student", path: "/std/add", icon: HiOutlineUser },
//         { text: "List Students", path: "/std/list", icon: HiOutlineUserGroup },
//       ],
//     },
//     {
//       title: "Teachers",
//       icon: HiOutlineAcademicCap,
//       submenus: [
//         { text: "Add Teacher", path: "/teacher/add", icon: HiOutlineUser },
//         { text: "List Teachers", path: "/teacher/list", icon: HiOutlineUserGroup },
//       ],
//     },
//     {
//       title: "Classes",
//       icon: HiOutlineClipboardList,
//       submenus: [
//         { text: "Add Class", path: "/class/add", icon: HiOutlineClipboardList },
//         { text: "List Classes", path: "/class/list", icon: HiOutlineClipboardList },
//       ],
//     },
//     {
//       title: "Subjects",
//       icon: HiOutlineBookOpen,
//       submenus: [
//         { text: "Add Subject", path: "/sub/add", icon: HiOutlineBookOpen },
//         { text: "List Subjects", path: "/sub/list", icon: HiOutlineBookOpen },
//       ],
//     },
//     {
//       title: "Syllabus",
//       icon: HiOutlineClipboardCheck,
//       submenus: [
//         { text: "Add Syllabus", path: "/syllabus/add", icon: HiOutlineClipboardCheck },
//         { text: "List Syllabus", path: "/syllabus/list", icon: HiOutlineClipboardCheck },
//       ],
//     },
//     {
//       title: "Result",
//       icon: HiOutlineDocumentText,
//       submenus: [
//         { text: "Schedule Exam", path: "/examschedule", icon: HiOutlineCalendar },
//         { text: "Exam Detailed", path: "/exam/detail", icon: HiOutlineCalendar },
//         { text: "Results Add", path: "/result/add", icon: HiOutlineDocumentText },
//         { text: "Results List", path: "/result/list", icon: HiOutlineDocumentText },
//       ],
//     },
//     {
//       title: "Fees",
//       icon: HiOutlineCurrencyDollar,
//       submenus: [
//         { text: "Fee Structure", path: "/fee/stru", icon: HiOutlineDocumentText },
//         { text: "Fee Voucher", path: "/fee/voucher", icon: HiOutlineDocumentText },
//         { text: "Fee Submission", path: "/fee/submission", icon: HiOutlineCurrencyDollar },
//       ],
//     },
//     {
//       title: "Attendance",
//       icon: HiOutlineCalendar,
//       submenus: [
//         { text: "Mark Attendance", path: "/attendence/form", icon: HiOutlineCalendar },
//         { text: "Attendance Report", path: "/attendence/list", icon: HiOutlineClipboardList },
//       ],
//     },
//   ];

//   return (
//     <>
//       {/* Top Navbar for Desktop */}
//       <nav className="hidden sm:flex items-center justify-between bg-green-600 text-white p-3 fixed w-full z-50">
//         <h1 className="text-lg font-bold">Dashboard</h1>
//         <button
//           className="flex items-center bg-green-700 hover:bg-green-800 px-3 py-1 rounded"
//           onClick={handleLogout}
//         >
//           <HiOutlineLogout className="me-2" /> Logout
//         </button>
//       </nav>

//       {/* Mobile Navbar */}
//       <div className="sm:hidden flex items-center justify-between bg-green-600 text-white p-3">
//         <h1 className="text-lg font-bold">Dashboard</h1>
//         <button onClick={() => setSidebarOpen(!sidebarOpen)}>
//           <HiOutlineMenu className="w-6 h-6" />
//         </button>
//       </div>

//       {/* Sidebar */}
//       <aside
//         className={`fixed top-0 left-0 z-40 w-64 h-screen bg-gray-50 dark:bg-gray-800 overflow-y-auto transition-transform transform ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } sm:translate-x-0 sm:top-0`}
//       >
//         <div className="pt-16 sm:pt-20 px-3">
//           <ul className="space-y-2 font-medium">
//             {menuItems.map((menu, index) => (
//               <li key={index}>
//                 <button
//                   onClick={() => toggleMenu(menu.title)}
//                   className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//                 >
//                   <menu.icon className="w-5 h-5 me-3" />
//                   <span className="flex-1 text-left">{menu.title}</span>
//                   <span>{openMenus[menu.title] ? "▲" : "▼"}</span>
//                 </button>
//                 {openMenus[menu.title] && (
//                   <ul className="pl-6 mt-1 space-y-1">
//                     {menu.submenus.map((sub, subIndex) => (
//                       <li key={subIndex}>
//                         <Link
//                           to={sub.path}
//                           onClick={() => setSidebarOpen(false)}
//                           className="flex items-center p-2 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
//                         >
//                           <sub.icon className="w-4 h-4 me-2" />
//                           {sub.text}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}

//             {/* Logout for Mobile Sidebar */}
//             <li>
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mt-2 sm:hidden"
//               >
//                 <HiOutlineLogout className="w-5 h-5 me-3" />
//                 <span className="flex-1 text-left">Logout</span>
//               </button>
//             </li>
//           </ul>
//         </div>
//       </aside>

//       Main content
//       <div className="pt-16 sm:pt-20 p-4 sm:ml-64">
//         <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
//           {/* <p>Dashboard Content Goes Here</p> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Drawer;
































// // src/Screen/Drawer.jsx
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import { logoutUser } from "../Store/Slice/authSlice";
// import {
//   HiOutlineUserGroup,
//   HiOutlineUser,
//   HiOutlineAcademicCap,
//   HiOutlineClipboardList,
//   HiOutlineBookOpen,
//   HiOutlineDocumentText,
//   HiOutlineCurrencyDollar,
//   HiOutlineCalendar,
//   HiOutlineMenu,
//   HiOutlineLogout,
//   HiOutlineClipboardCheck,
// } from "react-icons/hi";

// const Drawer = () => {
//   const [openMenus, setOpenMenus] = useState({});
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const toggleMenu = (menu) => {
//     setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
//   };

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     toast.info("Logged out successfully 👋");
//     navigate("/login");
//     setSidebarOpen(false);
//   };

//   const menuItems = [
//     {
//       title: "Students",
//       icon: HiOutlineUserGroup,
//       submenus: [
//         { text: "Add Student", path: "/std/add", icon: HiOutlineUser },
//         { text: "List Students", path: "/std/list", icon: HiOutlineUserGroup },
//       ],
//     },
//     {
//       title: "Teachers",
//       icon: HiOutlineAcademicCap,
//       submenus: [
//         { text: "Add Teacher", path: "/teacher/add", icon: HiOutlineUser },
//         { text: "List Teachers", path: "/teacher/list", icon: HiOutlineUserGroup },
//       ],
//     },
//     {
//       title: "Classes",
//       icon: HiOutlineClipboardList,
//       submenus: [
//         { text: "Add Class", path: "/class/add", icon: HiOutlineClipboardList },
//         { text: "List Classes", path: "/class/list", icon: HiOutlineClipboardList },
//       ],
//     },
//     {
//       title: "Subjects",
//       icon: HiOutlineBookOpen,
//       submenus: [
//         { text: "Add Subject", path: "/sub/add", icon: HiOutlineBookOpen },
//         { text: "List Subjects", path: "/sub/list", icon: HiOutlineBookOpen },
//       ],
//     },
//     {
//       title: "Syllabus",
//       icon: HiOutlineClipboardCheck,
//       submenus: [
//         { text: "Add Syllabus", path: "/syllabus/add", icon: HiOutlineClipboardCheck },
//         { text: "List Syllabus", path: "/syllabus/list", icon: HiOutlineClipboardCheck },
//       ],
//     },
//     {
//       title: "Result",
//       icon: HiOutlineDocumentText,
//       submenus: [
//         { text: "Schedule Exam", path: "/examschedule", icon: HiOutlineCalendar },
//         { text: "Exam Detailed", path: "/exam/detail", icon: HiOutlineCalendar },
//         { text: "Results Add", path: "/result/add", icon: HiOutlineDocumentText },
//         { text: "Results List", path: "/result/list", icon: HiOutlineDocumentText },
//       ],
//     },
//     {
//       title: "Fees",
//       icon: HiOutlineCurrencyDollar,
//       submenus: [
//         { text: "Fee Structure", path: "/fee/stru", icon: HiOutlineDocumentText },
//         { text: "Fee Voucher", path: "/fee/voucher", icon: HiOutlineDocumentText },
//         { text: "Fee Submission", path: "/fee/submission", icon: HiOutlineCurrencyDollar },
//       ],
//     },
//     {
//       title: "Attendance",
//       icon: HiOutlineCalendar,
//       submenus: [
//         { text: "Mark Attendance", path: "/attendence/form", icon: HiOutlineCalendar },
//         { text: "Attendance Report", path: "/attendence/list", icon: HiOutlineClipboardList },
//       ],
//     },
//   ];

//   return (
//     <>
//       {/* Mobile Navbar */}
//       <div className="sm:hidden flex items-center justify-between bg-green-600 text-white p-3">
//         <h1 className="text-lg font-bold">Dashboard</h1>
//         <button onClick={() => setSidebarOpen(!sidebarOpen)}>
//           <HiOutlineMenu className="w-6 h-6" />
//         </button>
//       </div>

//       {/* Sidebar */}
//       <aside
//         className={`fixed top-0 left-0 z-40 w-64 h-screen bg-gray-50 dark:bg-gray-800 overflow-y-auto transition-transform transform ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } sm:translate-x-0 sm:top-0`}
//       >
//         <div className="pt-16 px-3">
//           <ul className="space-y-2 font-medium">
//             {menuItems.map((menu, index) => (
//               <li key={index}>
//                 <button
//                   onClick={() => toggleMenu(menu.title)}
//                   className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//                 >
//                   <menu.icon className="w-5 h-5 me-3" />
//                   <span className="flex-1 text-left">{menu.title}</span>
//                   <span>{openMenus[menu.title] ? "▲" : "▼"}</span>
//                 </button>
//                 {openMenus[menu.title] && (
//                   <ul className="pl-6 mt-1 space-y-1">
//                     {menu.submenus.map((sub, subIndex) => (
//                       <li key={subIndex}>
//                         <Link
//                           to={sub.path}
//                           onClick={() => setSidebarOpen(false)}
//                           className="flex items-center p-2 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
//                         >
//                           <sub.icon className="w-4 h-4 me-2" />
//                           {sub.text}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}

//             {/* Logout inside Sidebar for Mobile */}
//             <li className="sm:hidden">
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mt-2"
//               >
//                 <HiOutlineLogout className="w-5 h-5 me-3" />
//                 <span className="flex-1 text-left">Logout</span>
//               </button>
//             </li>
//           </ul>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Drawer;






















// // src/Screen/Drawer.jsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   HiOutlineUserGroup,
//   HiOutlineUser,
//   HiOutlineAcademicCap,
//   HiOutlineClipboardList,
//   HiOutlineBookOpen,
//   HiOutlineDocumentText,
//   HiOutlineCurrencyDollar,
//   HiOutlineCalendar,
//   HiOutlineClipboardCheck,
// } from "react-icons/hi";

// const Drawer = () => {
//   const [openMenus, setOpenMenus] = useState({});

//   const toggleMenu = (menu) => {
//     setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
//   };

//   const menuItems = [
//     {
//       title: "Students",
//       icon: HiOutlineUserGroup,
//       submenus: [
//         { text: "Add Student", path: "/std/add", icon: HiOutlineUser },
//         { text: "List Students", path: "/std/list", icon: HiOutlineUserGroup },
//       ],
//     },
//     {
//       title: "Teachers",
//       icon: HiOutlineAcademicCap,
//       submenus: [
//         { text: "Add Teacher", path: "/teacher/add", icon: HiOutlineUser },
//         { text: "List Teachers", path: "/teacher/list", icon: HiOutlineUserGroup },
//       ],
//     },
//     {
//       title: "Classes",
//       icon: HiOutlineClipboardList,
//       submenus: [
//         { text: "Add Class", path: "/class/add", icon: HiOutlineClipboardList },
//         { text: "List Classes", path: "/class/list", icon: HiOutlineClipboardList },
//       ],
//     },
//     {
//       title: "Subjects",
//       icon: HiOutlineBookOpen,
//       submenus: [
//         { text: "Add Subject", path: "/sub/add", icon: HiOutlineBookOpen },
//         { text: "List Subjects", path: "/sub/list", icon: HiOutlineBookOpen },
//       ],
//     },
//     {
//       title: "Syllabus",
//       icon: HiOutlineClipboardCheck,
//       submenus: [
//         { text: "Add Syllabus", path: "/syllabus/add", icon: HiOutlineClipboardCheck },
//         { text: "List Syllabus", path: "/syllabus/list", icon: HiOutlineClipboardCheck },
//       ],
//     },
//     {
//       title: "Result",
//       icon: HiOutlineDocumentText,
//       submenus: [
//         { text: "Schedule Exam", path: "/examschedule", icon: HiOutlineCalendar },
//         { text: "Exam Detailed", path: "/exam/detail", icon: HiOutlineCalendar },
//         { text: "Results Add", path: "/result/add", icon: HiOutlineDocumentText },
//         { text: "Results List", path: "/result/list", icon: HiOutlineDocumentText },
//       ],
//     },
//     {
//       title: "Fees",
//       icon: HiOutlineCurrencyDollar,
//       submenus: [
//         { text: "Fee Structure", path: "/fee/stru", icon: HiOutlineDocumentText },
//         { text: "Fee Voucher", path: "/fee/voucher", icon: HiOutlineDocumentText },
//         { text: "Fee Submission", path: "/fee/submission", icon: HiOutlineCurrencyDollar },
//       ],
//     },
//     {
//       title: "Attendance",
//       icon: HiOutlineCalendar,
//       submenus: [
//         { text: "Mark Attendance", path: "/attendence/form", icon: HiOutlineCalendar },
//         { text: "Attendance Report", path: "/attendence/list", icon: HiOutlineClipboardList },
//       ],
//     },
//   ];

//   return (
//     <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-gray-50 dark:bg-gray-800 overflow-y-auto shadow-lg">
//       <div className="pt-16 px-3">
//         <ul className="space-y-2 font-medium">
//           {menuItems.map((menu, index) => (
//             <li key={index}>
//               <button
//                 onClick={() => toggleMenu(menu.title)}
//                 className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 <menu.icon className="w-5 h-5 me-3" />
//                 <span className="flex-1 text-left">{menu.title}</span>
//                 <span>{openMenus[menu.title] ? "▲" : "▼"}</span>
//               </button>
//               {openMenus[menu.title] && (
//                 <ul className="pl-6 mt-1 space-y-1">
//                   {menu.submenus.map((sub, subIndex) => (
//                     <li key={subIndex}>
//                       <Link
//                         to={sub.path}
//                         className="flex items-center p-2 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
//                       >
//                         <sub.icon className="w-4 h-4 me-2" />
//                         {sub.text}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </aside>
//   );
// };

// export default Drawer;





















// // src/Screen/Drawer.jsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   HiOutlineUserGroup,
//   HiOutlineUser,
//   HiOutlineAcademicCap,
//   HiOutlineClipboardList,
//   HiOutlineBookOpen,
//   HiOutlineDocumentText,
//   HiOutlineCurrencyDollar,
//   HiOutlineCalendar,
//   HiOutlineClipboardCheck,
// } from "react-icons/hi";

// const Drawer = ({ onClose }) => {
//   const [openMenus, setOpenMenus] = useState({});

//   const toggleMenu = (menu) => {
//     setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
//   };

//   const menuItems = [
//     {
//       title: "Students",
//       icon: HiOutlineUserGroup,
//       submenus: [
//         { text: "Add Student", path: "/std/add", icon: HiOutlineUser },
//         { text: "List Students", path: "/std/list", icon: HiOutlineUserGroup },
//       ],
//     },
//     {
//       title: "Teachers",
//       icon: HiOutlineAcademicCap,
//       submenus: [
//         { text: "Add Teacher", path: "/teacher/add", icon: HiOutlineUser },
//         { text: "List Teachers", path: "/teacher/list", icon: HiOutlineUserGroup },
//       ],
//     },
//     {
//       title: "Classes",
//       icon: HiOutlineClipboardList,
//       submenus: [
//         { text: "Add Class", path: "/class/add", icon: HiOutlineClipboardList },
//         { text: "List Classes", path: "/class/list", icon: HiOutlineClipboardList },
//       ],
//     },
//     {
//       title: "Subjects",
//       icon: HiOutlineBookOpen,
//       submenus: [
//         { text: "Add Subject", path: "/sub/add", icon: HiOutlineBookOpen },
//         { text: "List Subjects", path: "/sub/list", icon: HiOutlineBookOpen },
//       ],
//     },
//     {
//       title: "Syllabus",
//       icon: HiOutlineClipboardCheck,
//       submenus: [
//         { text: "Add Syllabus", path: "/syllabus/add", icon: HiOutlineClipboardCheck },
//         { text: "List Syllabus", path: "/syllabus/list", icon: HiOutlineClipboardCheck },
//       ],
//     },
//     {
//       title: "Result",
//       icon: HiOutlineDocumentText,
//       submenus: [
//         { text: "Schedule Exam", path: "/examschedule", icon: HiOutlineCalendar },
//         { text: "Exam Detailed", path: "/exam/detail", icon: HiOutlineCalendar },
//         { text: "Results Add", path: "/result/add", icon: HiOutlineDocumentText },
//         { text: "Results List", path: "/result/list", icon: HiOutlineDocumentText },
//       ],
//     },
//     {
//       title: "Fees",
//       icon: HiOutlineCurrencyDollar,
//       submenus: [
//         { text: "Fee Structure", path: "/fee/stru", icon: HiOutlineDocumentText },
//         { text: "Fee Voucher", path: "/fee/voucher", icon: HiOutlineDocumentText },
//         { text: "Fee Submission", path: "/fee/submission", icon: HiOutlineCurrencyDollar },
//       ],
//     },
//     {
//       title: "Attendance",
//       icon: HiOutlineCalendar,
//       submenus: [
//         { text: "Mark Attendance", path: "/attendence/form", icon: HiOutlineCalendar },
//         { text: "Attendance Report", path: "/attendence/list", icon: HiOutlineClipboardList },
//       ],
//     },
//   ];

//   return (
//     <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-gray-50 dark:bg-gray-800 overflow-y-auto shadow-lg">
//       <div className="pt-16 px-3">
//         <ul className="space-y-2 font-medium">
//           {menuItems.map((menu, index) => (
//             <li key={index}>
//               <button
//                 onClick={() => toggleMenu(menu.title)}
//                 className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//               >
//                 <menu.icon className="w-5 h-5 me-3" />
//                 <span className="flex-1 text-left">{menu.title}</span>
//                 <span>{openMenus[menu.title] ? "▲" : "▼"}</span>
//               </button>
//               {openMenus[menu.title] && (
//                 <ul className="pl-6 mt-1 space-y-1">
//                   {menu.submenus.map((sub, subIndex) => (
//                     <li key={subIndex}>
//                       <Link
//                         to={sub.path}
//                         onClick={onClose} // ✅ Drawer band ho jayega
//                         className="flex items-center p-2 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
//                       >
//                         <sub.icon className="w-4 h-4 me-2" />
//                         {sub.text}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </aside>
//   );
// };

// export default Drawer;





















import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUserGroup,
  HiOutlineUser,
  HiOutlineAcademicCap,
  HiOutlineClipboardList,
  HiOutlineBookOpen,
  HiOutlineDocumentText,
  HiOutlineCurrencyDollar,
  HiOutlineCalendar,
  HiOutlineClipboardCheck,
} from "react-icons/hi";

const Drawer = ({ onClose }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const menuItems = [
    {
      title: "Students",
      icon: HiOutlineUserGroup,
      submenus: [
        { text: "Add Student", path: "/std/add", icon: HiOutlineUser },
        { text: "List Students", path: "/std/list", icon: HiOutlineUserGroup },
      ],
    },
    {
      title: "Teachers",
      icon: HiOutlineAcademicCap,
      submenus: [
        { text: "Add Teacher", path: "/teacher/add", icon: HiOutlineUser },
        { text: "List Teachers", path: "/teacher/list", icon: HiOutlineUserGroup },
      ],
    },
    {
      title: "Classes",
      icon: HiOutlineClipboardList,
      submenus: [
        { text: "Add Class", path: "/class/add", icon: HiOutlineClipboardList },
        { text: "List Classes", path: "/class/list", icon: HiOutlineClipboardList },
      ],
    },
    {
      title: "Subjects",
      icon: HiOutlineBookOpen,
      submenus: [
        { text: "Add Subject", path: "/sub/add", icon: HiOutlineBookOpen },
        { text: "List Subjects", path: "/sub/list", icon: HiOutlineBookOpen },
      ],
    },
    {
      title: "Syllabus",
      icon: HiOutlineClipboardCheck,
      submenus: [
        { text: "Add Syllabus", path: "/syllabus/add", icon: HiOutlineClipboardCheck },
        { text: "List Syllabus", path: "/syllabus/list", icon: HiOutlineClipboardCheck },
      ],
    },
    {
      title: "Result",
      icon: HiOutlineDocumentText,
      submenus: [
        { text: "Schedule Exam", path: "/examschedule", icon: HiOutlineCalendar },
        { text: "Exam Detailed", path: "/exam/detail", icon: HiOutlineCalendar },
        { text: "Results Add", path: "/result/add", icon: HiOutlineDocumentText },
        { text: "Results List", path: "/result/list", icon: HiOutlineDocumentText },
      ],
    },
    {
      title: "Fees",
      icon: HiOutlineCurrencyDollar,
      submenus: [
        { text: "Fee Structure", path: "/fee/stru", icon: HiOutlineDocumentText },
        { text: "Fee Voucher", path: "/fee/voucher", icon: HiOutlineDocumentText },
        { text: "Fee Submission", path: "/fee/submission", icon: HiOutlineCurrencyDollar },
      ],
    },
    {
      title: "Attendance",
      icon: HiOutlineCalendar,
      submenus: [
        { text: "Mark Attendance", path: "/attendence/form", icon: HiOutlineCalendar },
        { text: "Attendance Report", path: "/attendence/list", icon: HiOutlineClipboardList },
      ],
    },
  ];

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-gray-50 dark:bg-gray-800 overflow-y-auto shadow-lg transition-transform">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500"
      >
        ✕
      </button>

      <div className="pt-16 px-3">
        <ul className="space-y-2 font-medium">
          {menuItems.map((menu, index) => (
            <li key={index}>
              <button
                onClick={() => toggleMenu(menu.title)}
                className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <menu.icon className="w-5 h-5 me-3" />
                <span className="flex-1 text-left">{menu.title}</span>
                <span>{openMenus[menu.title] ? "▲" : "▼"}</span>
              </button>
              {openMenus[menu.title] && (
                <ul className="pl-6 mt-1 space-y-1">
                  {menu.submenus.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={sub.path}
                        onClick={onClose} // ✅ Link click -> Drawer close
                        className="flex items-center p-2 text-gray-700 rounded-lg dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        <sub.icon className="w-4 h-4 me-2" />
                        {sub.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Drawer;
