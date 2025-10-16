<div align="center">

# 🚀 Lê Trần Đăng Khoa | Developer Portfolio

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=24&duration=3000&pause=1000&color=92A344&center=true&vCenter=true&width=600&lines=Full+Stack+Developer;Mobile+%7C+Web+Development;Flutter+%7C+React+%7C+ASP.NET+Core;Always+Learning+%7C+Always+Building" alt="Typing SVG" />

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-View_Portfolio-92A344?style=for-the-badge&logoColor=white)](https://khoale-portfolio.vercel.app/)
[![GitHub Repo](https://img.shields.io/github/stars/khoale-dev-code/portfolio?style=for-the-badge&logo=github&color=677A1C&label=Star%20Repo)](https://github.com/khoale-dev-code/portfolio)
[![GitHub followers](https://img.shields.io/github/followers/khoale-dev-code?style=for-the-badge&logo=github&color=4F6016&label=Follow)](https://github.com/khoale-dev-code)

<img src="https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind"/>
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>

---

### 💫 **Sinh viên năm cuối | Mobile & Web Developer | Tech Enthusiast**

*Passionate about building beautiful, functional, and scalable applications*

[🌐 Visit Portfolio](https://khoale-portfolio.vercel.app/) • [📧 Email Me](mailto:Lekhoale30092003@gmail.com) • [💼 GitHub](https://github.com/khoale-dev-code)

</div>

---

## 📖 About This Project

Welcome to my personal portfolio repository! This project showcases my journey as a developer, featuring my skills, experiences, and notable projects including **Hotel Booking Systems**, **Cinema Applications**, and more.

Built with modern technologies and best practices, this portfolio demonstrates my commitment to creating high-quality, performant web applications.

### 🎯 Key Highlights

```
✨ Modern Tech Stack        → Next.js 14 + TypeScript + Tailwind CSS
🚀 Blazing Fast Performance → Server-Side Rendering & Optimizations
📱 Fully Responsive Design  → Seamless experience across all devices
🌙 Dark/Light Mode Toggle   → User preference support
📬 Real-time Notifications  → Discord Webhook integration
🎨 Beautiful UI/UX          → Gradient animations & smooth transitions
♿ Accessible               → WCAG compliant components
```

---

## 🛠️ Tech Stack

<table>
<tr>
<td>

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion

</td>
<td>

### Backend & API
- **API Routes:** Next.js API
- **Webhooks:** Discord Integration
- **Validation:** Zod
- **Deployment:** Vercel

</td>
</tr>
</table>

### 📦 Dependencies

```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.0.0",
  "lucide-react": "latest"
}
```

---

## ✨ Features

<details open>
<summary><b>🎨 Interactive UI Components</b></summary>

- Smooth scroll animations
- Hover effects and micro-interactions
- Dynamic gradient backgrounds
- Responsive navigation menu

</details>

<details open>
<summary><b>📱 Responsive Design</b></summary>

- Mobile-first approach
- Tablet & desktop optimizations
- Flexible grid layouts
- Touch-friendly interactions

</details>

<details open>
<summary><b>📬 Contact System</b></summary>

- Real-time form validation
- Discord webhook notifications
- Success/error feedback
- Spam protection

</details>

<details open>
<summary><b>⚡ Performance Optimized</b></summary>

- Server-side rendering (SSR)
- Image optimization
- Code splitting
- Lazy loading components

</details>

---

## 🏗️ Project Structure

```
portfolio/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   │
│   ├── 📁 components/
│   │   ├── Contact.tsx         # Contact form with Discord integration
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Services.tsx        # Services showcase
│   │   ├── Projects.tsx        # Project portfolio
│   │   └── ...                 # Other reusable components
│   │
│   └── 📁 pages/
│       └── 📁 api/
│           └── contact-webhook.ts  # Discord webhook handler
│
├── 📁 public/
│   ├── images/                 # Static images
│   └── icons/                  # Favicons & app icons
│
├── .env.local                  # Environment variables
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/khoale-dev-code/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Discord Webhook (Optional - for contact form)
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

---

## 🌐 Deployment

This portfolio is deployed on **Vercel** with automatic CI/CD.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/khoale-dev-code/portfolio)

### Manual Deployment Steps

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 🎨 Customization Guide

### Colors

Edit `tailwind.config.js` to change the color scheme:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#677a1c',    // Change these values
        secondary: '#92a344',
        accent: '#a5b95b',
      }
    }
  }
}
```

### Content

Update the following files to personalize:

- `src/components/Hero.tsx` - Main introduction
- `src/components/About.tsx` - About section
- `src/components/Services.tsx` - Your services
- `src/components/Projects.tsx` - Your projects
- `src/components/Contact.tsx` - Contact information

---

## 📊 Performance Metrics

<div align="center">

| Metric | Score |
|:---:|:---:|
| 🚀 Performance | 98/100 |
| ♿ Accessibility | 100/100 |
| ✅ Best Practices | 100/100 |
| 🔍 SEO | 100/100 |

*Tested with Lighthouse*

</div>

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

You are free to:
- ✅ Use this portfolio as a template
- ✅ Modify it for your needs
- ✅ Deploy your own version

**Please give credit by:**
- ⭐ Starring this repository
- 🔗 Linking back to the original repo

---

## 📬 Contact & Connect

<div align="center">

### Let's build something amazing together! 🚀

[![Email](https://img.shields.io/badge/Email-Lekhoale30092003%40gmail.com-92A344?style=for-the-badge&logo=gmail&logoColor=white)](mailto:Lekhoale30092003@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-khoale--dev--code-677A1C?style=for-the-badge&logo=github&logoColor=white)](https://github.com/khoale-dev-code)
[![Portfolio](https://img.shields.io/badge/Portfolio-View_Live-4F6016?style=for-the-badge&logo=google-chrome&logoColor=white)](https://khoale-portfolio.vercel.app/)

---

### 💼 Open to Opportunities

- 🎓 **Final Year Student** at IT University
- 💻 **Specializing in:** Flutter, React.js, ASP.NET Core
- 🌟 **Passionate about:** Mobile/Web Development, Clean Code, UI/UX
- 📍 **Location:** Gò Vấp, Ho Chi Minh City, Vietnam
- 📞 **Phone:** +84 383196830

</div>

---

<div align="center">

### ⭐ If you find this portfolio helpful, please consider giving it a star!

**Built with ❤️ by [Lê Trần Đăng Khoa](https://github.com/khoale-dev-code)**

*Last Updated: October 2025*
