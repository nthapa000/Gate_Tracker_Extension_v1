# GATE Tracker - Simple Topic Tracker

A simple and clean web application for tracking your progress through GATE DA (Data Science and AI) and GATE CS (Computer Science) examination topics.

## Features

### 🎯 **Simple Topic Tracking**
- **Two Separate Trackers** - One for GATE DA and one for GATE CS
- **Topic Completion** - Mark topics as completed with a simple click
- **Progress Visualization** - See completion percentage for each subject and overall
- **Clean Interface** - Minimal, focused design for easy tracking

### 📚 **Comprehensive Topic Coverage**

**GATE DA (Data Science & AI) - 69 Topics:**
- **Mathematics** (12 topics) - Linear Algebra, Calculus, Probability, Statistics
- **Programming & Data Structures** (15 topics) - C Programming, Data Structures, Algorithms
- **Database Management System** (10 topics) - ER Model, SQL, Normalization, Transactions
- **Machine Learning** (18 topics) - Supervised/Unsupervised Learning, Neural Networks, Deep Learning
- **Data Science** (14 topics) - Data Preprocessing, Visualization, Big Data, Data Mining

**GATE CS (Computer Science) - 117 Topics:**
- **Engineering Mathematics** (15 topics) - Discrete Math, Linear Algebra, Calculus, Probability
- **Data Structures & Algorithms** (20 topics) - Arrays, Trees, Graphs, Sorting, Searching
- **Programming & OOP** (12 topics) - C/C++, Java, Python, Object-Oriented Programming
- **Database Management System** (10 topics) - ER Model, SQL, Normalization, Transactions
- **Operating System** (16 topics) - Process Management, Memory Management, File Systems
- **Computer Networks** (14 topics) - OSI Model, TCP/IP, Routing, Security
- **Compiler Design** (12 topics) - Lexical Analysis, Parsing, Code Generation
- **Computer Organization & Architecture** (18 topics) - Processor Design, Memory Hierarchy, Digital Logic

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Storage**: Local Storage (no account required)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Gate_Tracker_Extension
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Usage

### Getting Started

1. **Select Exam**: Choose between GATE DA or GATE CS using the exam selector
2. **View Subjects**: See all subjects for the selected exam with progress indicators
3. **Track Topics**: Click on any topic to mark it as completed
4. **Monitor Progress**: Watch your completion percentage increase as you study

### Key Features

#### Exam Selection
- Switch between GATE DA and GATE CS trackers
- See overall progress for each exam
- Track completion counts

#### Subject Overview
- View all subjects for the selected exam
- See progress percentage for each subject
- Track completed vs total topics

#### Topic Management
- **Search Topics**: Find specific topics quickly
- **Filter by Subject**: Focus on specific subjects
- **Toggle Completion**: Mark topics as completed with a single click
- **Show/Hide Completed**: Toggle visibility of completed topics
- **Completion Dates**: See when topics were completed

### Data Storage

- All data is stored locally in your browser
- No account registration required
- Data persists between sessions
- Switch between exams seamlessly

## Project Structure

```
Gate_Tracker_Extension/
├── src/
│   ├── components/     # React components
│   │   ├── Header.tsx
│   │   ├── ExamSelector.tsx
│   │   ├── SubjectList.tsx
│   │   └── TopicList.tsx
│   ├── data/          # GATE topic data
│   │   └── gateTopics.ts
│   ├── types/         # TypeScript definitions
│   │   └── index.ts
│   ├── utils/         # Helper functions
│   │   └── storage.ts
│   ├── App.tsx        # Main application
│   └── main.tsx       # Entry point
├── package.json
└── README.md
```

## Features Overview

### ✅ **What's Included**
- Separate trackers for GATE DA and GATE CS
- Complete topic lists based on official syllabi
- Simple topic completion tracking
- Progress visualization
- Search and filter functionality
- Local data storage
- Responsive design

### ❌ **What's Not Included** (Simplified)
- Study session timers
- Goal setting
- Analytics dashboard
- Practice tests
- User profiles
- Complex features

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository.

---

**Simple. Clean. Effective. 🎓**

Track your GATE preparation progress with this minimal, focused topic tracker.