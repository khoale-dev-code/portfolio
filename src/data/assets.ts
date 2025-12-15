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
import web_icon from "../public/assets/web-icon.png";
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

// Services Data - Dựa trên kỹ năng trong CV mới nhất
export const serviceData = [
    { 
        icon: assets.web_icon, 
        title: 'Web Development', 
        description: 'Full-stack web development với React 18, ASP.NET Core, Tailwind CSS. Chuyên về responsive design, RESTful APIs và performance optimization (Lighthouse 95+).', 
        link: '' 
    },
    { 
        icon: assets.mobile_icon, 
        title: 'Mobile App Development', 
        description: 'Phát triển ứng dụng cross-platform với Flutter/Dart. Có kinh nghiệm với Firebase, state management, và UI/UX design tối ưu.', 
        link: '' 
    },
    { 
        icon: assets.ui_icon, 
        title: 'UI/UX Design', 
        description: 'Thiết kế giao diện người dùng thân thiện với Figma, tập trung vào accessibility và user experience. Responsive design cho mọi thiết bị.', 
        link: '' 
    },
    { 
        icon: assets.graphics_icon, 
        title: 'Backend & Cloud', 
        description: 'Xây dựng backend scalable với ASP.NET Core, Firebase, SQL Server. JWT authentication, role-based access control và cloud deployment với Vercel.', 
        link: '' 
    },
];

// Info List - Thông tin cá nhân từ CV mới nhất
export const infoList = [
    { 
        icon: assets.code_icon, 
        iconDark: assets.code_icon_dark, 
        title: 'Tech Stack', 
        description: 'React 18, Flutter, ASP.NET Core, Firebase, Tailwind CSS, SQL Server, JavaScript (ES6+), C#, TypeScript' 
    },
    { 
        icon: assets.edu_icon, 
        iconDark: assets.edu_icon_dark, 
        title: 'Education', 
        description: 'Công nghệ Phần mềm - Đại học HUFLIT (GPA: 3.0/4.0, 2021-2025)' 
    },
    { 
        icon: assets.project_icon, 
        iconDark: assets.project_icon_dark, 
        title: 'Experience', 
        description: '5+ dự án full-stack | 700+ users trên HUFLIT Test Practice | Thực tập tại GIS Việt' 
    }
];

// Tools Data - Công cụ và công nghệ sử dụng
export const toolsData = [
    assets.vscode,
    assets.firebase,
    assets.mongodb,
    assets.figma,
    assets.git
];

// Work/Project Data - DỰ ÁN CẬP NHẬT TỪ CV MỚI
export const workData = [
    {
        title: 'HUFLIT Test Practice',
        description: 'Nền tảng luyện thi Chuẩn Đầu Ra',
        bgImage: work1,
        tech: ['React 18', 'Firebase', 'Clerk Auth', 'Tailwind CSS', 'Vite'],
        liveLink: 'https://huflit-test.vercel.app',
        githubLink: 'https://github.com/khoale-dev-code/huflit-test',
        date: '10/2024 - 12/2024',
        status: 'Live',
        highlights: [
            '700+ người dùng hoạt động',
            'Text-to-Speech API với giọng nam/nữ (0.5x-2.0x speed)',
            'Auto-save & realtime sync với Firebase Firestore',
            'Multi-auth: Google OAuth + Email (Clerk)',
            'Lighthouse Score 95+, Load time <1.5s',
            'Responsive hoàn hảo trên mọi thiết bị'
        ]
    },
    {
        title: 'Hotel Booking System',
        description: 'Full-Stack Web Application',
        bgImage: work2,
        tech: ['Flutter Web', 'ASP.NET Core 8.0', 'SQL Server', 'JWT', 'Entity Framework'],
        githubLink: 'https://github.com/khoale-dev-code/Hotel-Booking-Frontend',
        backendLink: 'https://github.com/khoale-dev-code/HotelBooking-Backend',
        date: '2025 - In Development',
        status: 'In Progress',
        highlights: [
            'Frontend responsive với Flutter Web + Dart + Provider',
            'Backend API an toàn với ASP.NET Core 8.0',
            'Authentication & multi-role (Customer, Staff, Admin)',
            'Quản lý phòng, đặt phòng, voucher',
            'Admin dashboard cho quản lý toàn diện'
        ]
    },
    {
        title: 'Cinema Ticket Booking',
        description: 'Hệ Thống Đặt Vé Xem Phim',
        bgImage: work3,
        tech: ['React.js', 'Tailwind CSS', 'Vite', 'React Query', 'YouTube API v3'],
        liveLink: 'https://cinemakhoale.vercel.app',
        githubLink: 'https://github.com/khoale-dev-code/Cinema',
        date: '06/2025 - 08/2025',
        status: 'Live',
        highlights: [
            'Giao diện responsive đẹp mắt',
            'YouTube API integration cho trailer',
            'Hệ thống chọn ghế interactive',
            'Thanh toán an toàn',
            'Cá nhân hóa: danh sách yêu thích, lịch sử đặt vé'
        ]
    },
    {
        title: 'SHAKE-Cafe App',
        description: 'Coffee Ordering Mobile App',
        bgImage: work4,
        tech: ['Flutter', 'Dart', 'Firebase'],
        githubLink: 'https://github.com/khoale-dev-code/App-coffe-demo',
        youtubeLink: 'https://github.com/khoale-dev-code/App-coffe-demo',
        date: '06/05/2024 - 20/07/2024',
        status: 'Completed',
        highlights: [
            'Cross-platform coffee ordering app',
            'Lưu trữ dữ liệu cục bộ và đám mây',
            'Hỗ trợ offline/online mode',
            'Trải nghiệm người dùng mượt mà',
            'Firebase Backend integration'
        ]
    },
    {
        title: 'Moc Khang Management App',
        description: 'Sales Management Mobile App',
        bgImage: work1,
        tech: ['Flutter', 'Dart', 'Firebase'],
        githubLink: 'https://github.com/khoale-dev-code/MocKhang_App',
        youtubeLink: 'https://www.youtube.com/watch?v=NrEKbp99000&t',
        date: '01/03/2024 - 01/04/2024',
        status: 'Completed',
        highlights: [
            'Ứng dụng quản lý bán hàng realtime',
            'Kết nối backend realtime',
            'Authentication tích hợp',
            'Lưu trữ dữ liệu đa dạng sản phẩm',
            'Firebase Database sync'
        ]
    },
    {
        title: 'Grid Stylish E-Commerce',
        description: 'Internship Project - GIS Việt',
        bgImage: work2,
        tech: ['Flutter', 'ASP.NET Core', 'SQL Server', 'Firebase', 'Figma'],
        date: '09/2024 - 11/2024',
        status: 'Production',
        highlights: [
            'Thực tập tại Công ty TNHH GIS Việt',
            'Frontend: Flutter (UI responsive, cart, checkout)',
            'Backend: ASP.NET Core APIs (auth, products, orders)',
            'JWT auth & role-based access control',
            'Firebase real-time features & cloud storage',
            'Agile workflow, 100% tasks completed on time'
        ]
    }
];

// Skills Data - Kỹ năng chuyên môn CẬP NHẬT
export const skillsData = {
    frontend: [
        { name: 'React 18', level: 90, icon: '⚛️' },
        { name: 'Flutter/Dart', level: 85, icon: '📱' },
        { name: 'Tailwind CSS', level: 90, icon: '🎨' },
        { name: 'HTML5/CSS3', level: 95, icon: '🌐' },
        { name: 'JavaScript (ES6+)', level: 90, icon: '💛' },
        { name: 'TypeScript', level: 80, icon: '🔷' }
    ],
    backend: [
        { name: 'ASP.NET Core', level: 85, icon: '🔵' },
        { name: 'Firebase', level: 90, icon: '🔥' },
        { name: 'SQL Server', level: 80, icon: '🗄️' },
        { name: 'MongoDB', level: 75, icon: '🍃' },
        { name: 'REST APIs', level: 85, icon: '🔌' },
        { name: 'C#', level: 85, icon: '♯' }
    ],
    tools: [
        { name: 'Git/GitHub', level: 90, icon: '🔀' },
        { name: 'Vite', level: 85, icon: '⚡' },
        { name: 'Figma', level: 80, icon: '🎨' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Vercel', level: 85, icon: '▲' },
        { name: 'ESLint/Prettier', level: 85, icon: '✨' }
    ],
    other: [
        { name: 'Responsive Design', level: 95, icon: '📱' },
        { name: 'Performance Optimization', level: 90, icon: '🚀' },
        { name: 'CI/CD', level: 80, icon: '🔄' },
        { name: 'Agile', level: 85, icon: '🏃' },
        { name: 'Testing (Vitest, Playwright)', level: 80, icon: '🧪' },
        { name: 'Web Speech API', level: 85, icon: '🎤' }
    ]
};

// Personal Info - Thông tin cá nhân CẬP NHẬT
export const personalInfo = {
    name: 'Lê Trần Đăng Khoa',
    title: 'Thực Tập Sinh Development',
    subtitle: 'Full-Stack Developer | Mobile & Web Development',
    location: '546 Lê Văn Thọ, Gò Vấp, TP.HCM',
    email: 'lekhoale30092003@gmail.com',
    phone: '+84 383 968 30',
    portfolio: 'https://khoale-portfolio.vercel.app',
    github: 'https://github.com/khoale-dev-code',
    linkedin: 'https://linkedin.com/in/khoale-dev',
    bio: 'Sinh viên năm 4 ngành Công nghệ Phần mềm tại HUFLIT, đam mê phát triển ứng dụng web và mobile. Có kinh nghiệm với React 18, Flutter, ASP.NET Core, Firebase. Đã xây dựng HUFLIT Test Practice phục vụ 700+ người dùng. Thực tập tại GIS Việt, hoàn thành 100% tasks đúng deadline.',
    experience: '1 year',
    projects: '6+',
    users: '700+',
    gpa: '3.0/4.0',
    graduation: '2025',
    languages: ['Tiếng Việt (Native)', 'English (Intermediate)']
};

// Soft Skills - KỸ NĂNG MỀM CẬP NHẬT TỪ CV
export const softSkills = [
    {
        skill: 'Tự chủ & Quản lý thời gian',
        description: 'Hoàn thành dự án full-stack độc lập từ A-Z',
        icon: '⏰'
    },
    {
        skill: 'Làm việc nhóm',
        description: 'Git collaboration, code review, tiếp nhận feedback tích cực',
        icon: '👥'
    },
    {
        skill: 'Problem Solving',
        description: 'Debug phức tạp, tối ưu performance (Lighthouse 95+)',
        icon: '🧩'
    },
    {
        skill: 'Communication',
        description: 'Documentation rõ ràng, giải thích technical cho non-tech users',
        icon: '💬'
    },
    {
        skill: 'Sáng tạo & UX Design',
        description: 'Thiết kế UI/UX thân thiện, accessibility-focused',
        icon: '🎨'
    },
    {
        skill: 'Phân tích & Quyết định',
        description: 'Data-driven approach, cân nhắc trade-offs',
        icon: '📊'
    },
    {
        skill: 'Học hỏi nhanh',
        description: 'Tự học Firebase, Clerk, Web APIs trong thời gian ngắn',
        icon: '🚀'
    },
    {
        skill: 'Chú ý chi tiết',
        description: 'Code quality cao, testing kỹ lưỡng, follow best practices',
        icon: '🔍'
    }
];

// Experience Timeline - KINH NGHIỆM THỰC TẬP
export const experienceData = [
    {
        company: 'Công ty TNHH GIS Việt',
        position: 'Thực Tập Sinh Development',
        duration: '09/2024 - 11/2024',
        location: 'TP. Hồ Chí Minh',
        type: 'Internship',
        project: 'Ứng Dụng E-Commerce "Grid Stylish"',
        responsibilities: [
            'Phát triển frontend với Flutter (UI responsive, product listing, cart, checkout)',
            'Xây dựng backend APIs với ASP.NET Core (authentication, product management, orders)',
            'Thiết kế database SQL Server, implement JWT auth và role-based access',
            'Tích hợp Firebase cho real-time features và cloud storage',
            'Làm việc theo Agile, Git collaboration, hoàn thành 100% tasks đúng deadline'
        ],
        technologies: ['Flutter', 'ASP.NET Core', 'SQL Server', 'Firebase', 'Figma', 'Git'],
        achievements: [
            'Hoàn thành 100% công việc được giao đúng deadline',
            'Code được review và merge vào production',
            'Học được quy trình Agile và Git workflow chuyên nghiệp'
        ]
    }
];

// Education Data - HỌC VẤN
export const educationData = {
    university: 'Đại học Ngoại Ngữ - Tin Học TP.HCM (HUFLIT)',
    major: 'Công nghệ Phần mềm',
    degree: 'Cử nhân Kỹ thuật',
    duration: '2021 - 2025 (Dự kiến tốt nghiệp)',
    gpa: '3.0/4.0',
    notableCourses: [
        'Lập trình di động (Flutter)',
        'Phát triển website ASP.NET Core',
        'Cơ sở dữ liệu (SQL Server/MongoDB)',
        'Web/App ReactJS',
        'Figma UI/UX Design'
    ]
};

// Career Goals - MỤC TIÊU NGHỀ NGHIỆP
export const careerGoals = [
    {
        goal: 'Trở thành Full-Stack Developer giỏi',
        description: 'Thành thạo cả Frontend (React, Flutter) và Backend (ASP.NET Core, Node.js)',
        icon: '🎯'
    },
    {
        goal: 'Đóng góp vào dự án có impact',
        description: 'Xây dựng sản phẩm phục vụ hàng ngàn người dùng như HUFLIT Test Practice',
        icon: '🚀'
    },
    {
        goal: 'Học hỏi công nghệ mới',
        description: 'Luôn cập nhật và áp dụng best practices, modern frameworks',
        icon: '📚'
    },
    {
        goal: 'Làm việc trong môi trường chuyên nghiệp',
        description: 'Áp dụng Agile, code review, CI/CD trong quy trình phát triển',
        icon: '💼'
    }
];

// // Testimonials - ĐÁNH GIÁ (nếu có)
// export const testimonials = [
//     {
//         name: 'Th.S Nguyễn Thị Xuân Thu',
//         position: 'Giảng viên hướng dẫn',
//         company: 'HUFLIT',
//         feedback: 'Khoa là sinh viên chăm chỉ, có tinh thần học hỏi cao. Các dự án của em thể hiện khả năng tư duy logic và kỹ năng lập trình tốt.',
//         rating: 5
//     },
//     {
//         name: 'Technical Lead',
//         position: 'Người hướng dẫn',
//         company: 'GIS Việt',
//         feedback: 'Khoa hoàn thành tốt các công việc được giao, có khả năng học hỏi nhanh và làm việc nhóm hiệu quả.',
//         rating: 5
//     }
// ];

// Achievements - THÀNH TÍCH
export const achievements = [
    {
        title: '700+ Active Users',
        description: 'HUFLIT Test Practice phục vụ 700+ sinh viên',
        icon: '👥',
        date: '2024'
    },
    {
        title: 'Lighthouse Score 95+',
        description: 'Performance optimization trên HUFLIT Test Practice',
        icon: '⚡',
        date: '2024'
    },
    {
        title: '6+ Projects Completed',
        description: 'Full-stack projects with modern tech stack',
        icon: '🎯',
        date: '2023-2024'
    },
    {
        title: '100% Tasks On Time',
        description: 'Hoàn thành đúng deadline tại GIS Việt',
        icon: '✅',
        date: '2024'
    }
];

// Contact Info - THÔNG TIN LIÊN HỆ CHI TIẾT
export const contactInfo = {
    email: 'lekhoale30092003@gmail.com',
    phone: '+84 383 968 30',
    location: '546 Lê Văn Thọ, Gò Vấp, TP.HCM',
    portfolio: 'https://khoale-portfolio.vercel.app',
    github: 'https://github.com/khoale-dev-code',
    linkedin: 'https://linkedin.com/in/khoale-dev',
    availability: 'Available for full-time from 06/2025',
    preferredRoles: ['Full-Stack Developer', 'Frontend Developer', 'Mobile Developer'],
    workType: ['Full-time', 'Remote', 'Hybrid']
};

// Stats - THỐNG KÊ
export const stats = {
    experience: '1+',
    projects: '6+',
    technologies: '15+',
    users: '700+',
    commits: '500+',
    hoursOfCoding: '1000+'
};

export default {
    assets,
    serviceData,
    infoList,
    toolsData,
    workData,
    skillsData,
    personalInfo,
    softSkills,
    experienceData,
    educationData,
    careerGoals,
    //testimonials,
    achievements,
    contactInfo,
    stats
};