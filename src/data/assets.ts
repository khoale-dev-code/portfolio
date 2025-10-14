import user_image from '../public/assets/user-image.png';
import code_icon from '../public/assets/code-icon.png';
import code_icon_dark from '../public/assets/code-icon-dark.png';
import edu_icon from '../public/assets/edu-icon.png';
import edu_icon_dark from '../public/assets/edu-icon-dark.png';
import project_icon from '../public/assets/project-icon.png';
import project_icon_dark from '../public/assets/project-icon-dark.png';
import vscode from '../public/assets/vscode.png';
import firebase from '../public/assets/firebase.png';
import figma from '../public/assets/figma.png';
import git from '../public/assets/git.png';
import mongodb from '../public/assets/mongodb.png';
import right_arrow_white from '../public/assets/right-arrow-white.png';
import logo from '../public/assets/logo.png';
import logo_dark from '../public/assets/logo_dark.png';
import mail_icon from '../public/assets/mail_icon.png';
import mail_icon_dark from '../public/assets/mail_icon_dark.png';
import profile_img from '../public/assets/profile-img.png';
import download_icon from '../public/assets/download-icon.png';
import hand_icon from '../public/assets/hand-icon.png';
import header_bg_color from '../public/assets/header-bg-color.png';
import moon_icon from '../public/assets/moon_icon.png';
import sun_icon from '../public/assets/sun_icon.png';
import arrow_icon from '../public/assets/arrow-icon.png';
import arrow_icon_dark from '../public/assets/arrow-icon-dark.png';
import menu_black from '../public/assets/menu-black.png';
import menu_white from '../public/assets/menu-white.png';
import close_black from '../public/assets/close-black.png';
import close_white from '../public/assets/close-white.png';
import mobile_icon from '../public/assets/mobile-icon.png';
import ui_icon from '../public/assets/ui-icon.png';
import graphics_icon from '../public/assets/graphics-icon.png';
import right_arrow from '../public/assets/right-arrow.png';
import send_icon from '../public/assets/send-icon.png';
import right_arrow_bold from '../public/assets/right-arrow-bold.png';
import right_arrow_bold_dark from '../public/assets/right-arrow-bold-dark.png';
import { Icon } from 'lucide-react';
import web_icon from "../public/assets/web-icon.png"
import work1 from '../public/images/work-1.png';
import work2 from '../public/images/work-2.png';
import work3 from '../public/images/work-3.png';
import work4 from '../public/images/work-4.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const initialWorkData = [
  {
    title: 'Frontend project',
    description: 'Web Design',
    bgImage: work1,
  },
  {
    title: 'Geo based app',
    description: 'Mobile App',
    bgImage: work2,
  },
  {
    title: 'Photography site',
    description: 'Web Design',
    bgImage: work3,
  },
  {
    title: 'UI/UX designing',
    description: 'UI/UX Design',
    bgImage: work4,
  },
];

 
// Services Data - Dựa trên kỹ năng trong CV
export const serviceData = [
    { 
        icon: assets.web_icon, 
        title: 'Web Development', 
        description: 'Full-stack web development with React.js, ASP.NET Core, and modern frameworks. Specializing in responsive design and RESTful APIs.', 
        link: '' 
    },
    { 
        icon: assets.mobile_icon, 
        title: 'Mobile App Development', 
        description: 'Cross-platform mobile applications using Flutter/Dart. Expertise in state management, UI/UX design, and Firebase integration.', 
        link: '' 
    },
    { 
        icon: assets.ui_icon, 
        title: 'UI/UX Design', 
        description: 'Creating seamless user experiences with responsive interfaces, smooth animations, and user-centered design principles.', 
        link: '' 
    },
    { 
        icon: assets.graphics_icon, 
        title: 'Backend Development', 
        description: 'Building secure and scalable backend systems with ASP.NET Core, Node.js, SQL Server, MongoDB, and JWT authentication.', 
        link: '' 
    },
];

// Info List - Thông tin cá nhân từ CV
export const infoList = [
    { 
        icon: assets.code_icon, 
        iconDark: assets.code_icon_dark, 
        title: 'Languages', 
        description: 'Flutter/Dart, React.js, ASP.NET Core, JavaScript, C#, Java, HTML5/CSS3' 
    },
    { 
        icon: assets.edu_icon, 
        iconDark: assets.edu_icon_dark, 
        title: 'Education', 
        description: 'Software Engineering - HUFLIT University (GPA: 3.0/4.0, 2021-2025)' 
    },
    { 
        icon: assets.project_icon, 
        iconDark: assets.project_icon_dark, 
        title: 'Projects', 
        description: 'Built 6+ full-stack projects including hotel booking, cinema ticketing, and mobile apps' 
    }
];

// Tools Data - Công cụ sử dụng
export const toolsData = [
    assets.vscode,
    assets.firebase,
    assets.mongodb,
    assets.figma,
    assets.git
];

// Work/Project Data - Dự án từ CV
export const workData = [
    {
        title: 'Hotel Booking System',
        description: 'Full-Stack Web Application',
        bgImage: work1,
        tech: ['Flutter Web', 'ASP.NET Core', 'SQL Server', 'JWT'],
        link: 'https://github.com/khoale-dev-code/Hotel-Booking-Frontend',
        date: '2025',
        highlights: [
            'Clean Architecture implementation',
            'Multi-role authentication (Customer, Staff, Admin)',
            'Support 500+ simulated users',
            '30% scalability improvement'
        ]
    },
    {
        title: 'Cinema Ticket Booking',
        description: 'Web Application',
        bgImage: work2,
        tech: ['React.js', 'Tailwind CSS', 'YouTube API', 'Framer Motion'],
        link: 'https://cinema-jade-xi.vercel.app',
        date: '06/2025 - 08/2025',
        highlights: [
            'Responsive seat selection system',
            'YouTube trailer integration',
            'Secure payment processing',
            'Support 100+ simulated users'
        ]
    },
    {
        title: 'SHAKE-Cafe App',
        description: 'Mobile Application',
            bgImage: work3,
        tech: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
        link: 'https://github.com/khoale-dev-code/App-coffe-demo',
        date: '06/05/2024 - 20/07/2024',
        highlights: [
            'Cross-platform coffee ordering app',
            'Offline/online data synchronization',
            'Smooth UX with animations',
            'Support 100+ test orders'
        ]
    },
    {
        title: 'Moc Khang Sales App',
        description: 'Mobile Application',
        bgImage: work4,
        tech: ['Flutter', 'Dart', 'Firebase'],
        link: 'https://github.com/khoale-dev-code/MocKhang_App',
        date: '01/03/2024 - 01/04/2024',
        highlights: [
            'Real-time sales management',
            'Clean architecture implementation',
            'Support 50+ products',
            'Firebase authentication'
        ]
    },
    {
        title: 'Daily Planner App',
        description: 'Mobile Application',
        bgImage: work1,
        tech: ['Flutter', 'Dart', 'Bloc Pattern'],
        link: 'https://github.com/khoale-dev-code/daily_planner',
        date: '2024 - In Development',
        highlights: [
            'Daily planning with reminders',
            'Data synchronization',
            'Unit testing implementation',
            'Bloc pattern for state management'
        ]
    },
    {
        title: 'API with Roles',
        description: 'Backend API',
        bgImage: '/work-6.png',
        tech: ['ASP.NET Core', 'C#', 'JWT', 'Identity Framework'],
        link: 'https://github.com/khoale-dev-code/ApiWithRoles',
        date: '2024',
        highlights: [
            'Role-based authorization',
            'JWT authentication',
            'Multi-user security',
            'RESTful API design'
        ]
    }
];

// Skills Data - Kỹ năng chuyên môn
export const skillsData = {
    mobile: [
        { name: 'Flutter/Dart', level: 90 },
        { name: 'State Management', level: 85 },
        { name: 'Java (Android)', level: 70 },
        { name: 'UI/UX Design', level: 85 }
    ],
    web: [
        { name: 'React.js', level: 85 },
        { name: 'ASP.NET Core', level: 80 },
        { name: 'HTML5/CSS3/JavaScript', level: 90 },
        { name: 'Node.js/Express', level: 75 }
    ],
    backend: [
        { name: 'RESTful API', level: 85 },
        { name: 'SQL/MySQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Firebase', level: 85 },
        { name: 'Spring Boot', level: 70 }
    ],
    tools: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Unit Testing', level: 75 },
        { name: 'OOP/SOLID', level: 85 },
        { name: 'UML Diagrams', level: 80 }
    ]
};

// Personal Info - Thông tin liên hệ
export const personalInfo = {
    name: 'Lê Trần Đăng Khoa',
    title: 'Full-Stack Developer',
    subtitle: 'Mobile & Web Development Specialist',
    location: 'Gò Vấp, TP.Hồ Chí Minh',
    email: 'Lekhoale30092003@gmail.com',
    phone: '+84 383196830',
    github: 'https://github.com/khoale-dev-code',
    bio: 'Sinh viên năm cuối chuyên ngành Công nghệ Phần mềm tại Đại học Ngoại Ngữ - Tin Học TP.HCM (HUFLIT), đam mê phát triển ứng dụng di động và web với Flutter/Dart, ASP.NET và React.js. Có kinh nghiệm xây dựng UI/UX responsive, tích hợp API, và quản lý state trong các dự án cá nhân.',
    experience: '0.5+ years',
    projects: '6+',
    gpa: '3.0/4.0',
    graduation: '2025',
    languages: ['Tiếng Việt (Native)', 'English (TOEIC 450)']
};

// Soft Skills
export const softSkills = [
    'Tự giác và làm việc nhóm tốt',
    'Tuân thủ deadline',
    'Ham học hỏi công nghệ mới',
    'Quản lý thời gian hiệu quả',
    'Giao tiếp tốt',
    'Tư duy phân tích'
];

// Career Goals
export const careerGoals = [
    'Phát triển full-stack với focus vào Flutter cho mobile/web',
    'Đóng góp vào các dự án sáng tạo và hiệu quả',
    'Áp dụng kiến thức OOP, SOLID vào môi trường chuyên nghiệp',
    'Tạo ra sản phẩm chất lượng cao với trải nghiệm người dùng tốt'
];

export default {
    serviceData,
    infoList,
    toolsData,
    workData,
    skillsData,
    personalInfo,
    softSkills,
    careerGoals,
    assets
};

 