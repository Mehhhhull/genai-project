# 🚀 Interview Ready - AI-Powered Interview Preparation Platform

> **Ace your next interview with AI-powered insights and personalized preparation plans**

## 🎯 What is Interview Ready?

Interview Ready is a cutting-edge full-stack application that leverages **Google's Generative AI (Gemini)** to transform how candidates prepare for job interviews. Upload your resume, describe your background, and provide the job description—and our AI engine will generate a comprehensive interview preparation package including:

✨ **Smart Features:**
- 📊 **Match Score Analysis** - Get instant feedback on how well your profile aligns with the job
- 🔧 **Technical Questions** - AI-generated technical questions with expert answers
- 💬 **Behavioral Questions** - Real-world scenario questions to ace behavioral interviews  
- 🛣️ **Preparation Roadmap** - Day-by-day customized study plan
- ⚠️ **Skill Gap Analysis** - Identify missing skills with severity levels
- 📄 **Tailored Resume Generator** - Auto-generate ATS-friendly resumes optimized for the job

---

## 🛠️ Tech Stack

### Frontend 🎨
```
React 19.2+        - Modern UI library
Vite 8.0+          - Lightning-fast build tool
React Router 7.13+ - Client-side routing
SCSS              - Professional styling
Axios             - HTTP client
```

### Backend ⚙️
```
Node.js/Express 5.2+  - RESTful API server
MongoDB 9.2+          - NoSQL database
Mongoose             - MongoDB ODM
JWT Auth             - Secure authentication
Multer 2.1+          - File upload handling
Puppeteer 24.42+     - PDF generation
Zod 4.3+             - Schema validation
```

### AI & Intelligence 🤖
```
Google Generative AI  - Gemini 2.5 Flash model
Structured Outputs   - Zod + JSON Schema for reliable AI responses
```

---

## 📋 Project Structure

```
genai-project/
├── client/                    # React Frontend
│   ├── src/
│   │   ├── features/
│   │   │   ├── auth/          # Authentication (Login/Register)
│   │   │   └── interview/     # Interview report pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
├── server/                    # Express Backend
│   ├── src/
│   │   ├── controllers/       # Business logic
│   │   ├── models/            # MongoDB schemas
│   │   ├── routes/            # API endpoints
│   │   ├── services/          # AI & external services
│   │   ├── middlewares/       # Auth, file upload
│   │   └── app.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18 or higher
- MongoDB (local or Atlas)
- Google Generative AI API Key ([Get one free](https://aistudio.google.com))

### Installation

**1. Clone the repository**
```bash
git clone <repository-url>
cd genai-project
```

**2. Server Setup**
```bash
cd server

# Install dependencies
npm install

# Create .env file
echo "GOOGLE_GENAI_API_KEY=your_api_key_here" > .env
echo "MONGODB_URI=mongodb://localhost:27017/interview-ready" >> .env
echo "JWT_SECRET=your_jwt_secret_here" >> .env

# Start development server
npm run dev
```

**3. Client Setup**
```bash
cd ../client

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at:
- **Frontend**: `http://localhost:5173`
- **Backend**: `http://localhost:3000`

---

## 💡 How It Works

### User Journey

```
1️⃣ Sign Up/Login
   └─ Create account with secure JWT authentication

2️⃣ Create Interview Report
   └─ Upload resume (PDF) or provide text description
   └─ Add self-description/background
   └─ Paste job description

3️⃣ AI Generation
   └─ Gemini AI analyzes all inputs
   └─ Generates comprehensive interview report with:
      • Match score between profile and job
      • 5-10 technical questions with expert answers
      • 5-10 behavioral questions with answers
      • Identified skill gaps with severity levels
      • Day-by-day 7-day prep plan

4️⃣ Review & Prepare
   └─ View interactive interview content
   └─ Download tailored resume as PDF
   └─ Follow preparation roadmap
```

### Key Endpoints

**Authentication**
```
POST   /api/auth/register         - Create new account
POST   /api/auth/login            - User login
POST   /api/auth/logout           - User logout
```

**Interview Reports**
```
POST   /api/interview              - Generate interview report (with resume file)
GET    /api/interview              - Get all user's reports
GET    /api/interview/report/:id   - Get specific report
POST   /api/interview/resume/pdf   - Download generated resume PDF
```

---

## 🎓 Feature Highlights

### 🤖 AI-Powered Analysis
Uses Google's Gemini 2.5 Flash model with structured outputs to ensure consistent, reliable AI-generated interview questions and insights.

### 📱 Responsive Design
Modern, mobile-friendly interface built with React and SCSS for seamless experience across devices.

### 🔐 Secure Authentication
JWT-based authentication with secure password hashing using bcryptjs.

### 📄 PDF Generation
Automatically generate ATS-friendly resume PDFs tailored to specific job descriptions using Puppeteer.

### 💾 MongoDB Persistence
All interview reports, user data, and token blacklists stored securely in MongoDB.

---

## 📊 Sample Output

When you generate an interview report, you get:

```json
{
  "matchScore": 82,
  "title": "Senior Full Stack Developer",
  "technicalQuestions": [
    {
      "question": "Explain the difference between monolithic and microservices architecture",
      "intention": "Assess architectural knowledge",
      "answer": "..."
    }
  ],
  "skillsGap": [
    {
      "skill": "Kubernetes",
      "severity": "high"
    }
  ],
  "preparationPlan": [
    {
      "day": 1,
      "focus": "System Design Fundamentals",
      "task": ["Learn CAP theorem", "Study distributed systems"]
    }
  ]
}
```

---

## 🔧 Environment Variables

Create a `.env` file in the server directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/interview-ready

# JWT
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRY=7d

# Google AI
GOOGLE_GENAI_API_KEY=your_google_genai_api_key

# Server
PORT=3000
NODE_ENV=development
```

---

## 🧪 Testing

### Run Frontend Tests
```bash
cd client
npm run lint
```

### API Testing
Use tools like Postman or cURL to test endpoints:

```bash
# Generate interview report
curl -X POST http://localhost:3000/api/interview \
  -H "Authorization: Bearer your_token" \
  -F "resume=@resume.pdf" \
  -F "selfDescription=I am a..." \
  -F "jobDescription=Looking for..."
```

---

## 📈 Performance Optimizations

- **Vite** for instant HMR and optimized builds
- **Lazy loading** of interview components
- **Efficient API calls** with request caching
- **Optimized MongoDB indexes** for faster queries
- **PDF generation** with Puppeteer optimization

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 🐛 Troubleshooting

**MongoDB Connection Error**
- Ensure MongoDB is running locally or update `MONGODB_URI` with your Atlas connection string

**API Key Issues**
- Verify `GOOGLE_GENAI_API_KEY` is correct and has necessary permissions
- Check API quota and billing status on Google Cloud Console

**CORS Errors**
- Ensure frontend runs on `http://localhost:5173`
- Backend CORS is configured for this origin

**Resume Upload Failing**
- Ensure PDF file is valid and not corrupted
- Check Multer middleware is properly configured

---

## 🚀 Future Enhancements

- [ ] Mock interview simulations with voice/video
- [ ] Real-time collaborative prep sessions
- [ ] Integration with LeetCode/HackerRank
- [ ] Email notifications for study reminders
- [ ] Premium tier with unlimited reports
- [ ] Interview recording and feedback analysis

---

## 📧 Support & Contact

Have questions or need help? Reach out!

**Email**: mehulkumarsingh6@gmail.com

---

**Made with ❤️ by Mehul Kumar Singh**

*Last updated: April 2026*
