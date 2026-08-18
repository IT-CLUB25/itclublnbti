export type Note = {
  id: string
  name: string
  description: string
  dateAdded: string
  fileSize: string
}

export type Module = {
  id: string
  name: string
  notes: Note[]
}

export type Semester = {
  id: string
  name: string
  modules: Module[]
}

export type Course = {
  id: string
  name: string
  semesters: Semester[]
}

export const coursesData: Course[] = [
  {
    id: "se",
    name: "Software Engineering",
    semesters: [
      {
        id: "se-sem1",
        name: "Semester 1",
        modules: [
          {
            id: "se-sem1-prog",
            name: "Programming",
            notes: [
              {
                id: "note1",
                name: "Introduction to Java.pdf",
                description: "Fundamentals of Java programming language and syntax",
                dateAdded: "2025-01-15",
                fileSize: "2.4 MB",
              },
              {
                id: "note2",
                name: "Object-Oriented Programming.pdf",
                description: "Core concepts of OOP: inheritance, polymorphism, encapsulation",
                dateAdded: "2025-01-22",
                fileSize: "3.1 MB",
              },
              {
                id: "note3",
                name: "Java Collections Framework.pdf",
                description: "Lists, Sets, Maps and other collection types in Java",
                dateAdded: "2025-02-05",
                fileSize: "1.8 MB",
              },
            ],
          },
          {
            id: "se-sem1-db",
            name: "Databases",
            notes: [
              {
                id: "note4",
                name: "SQL Basics.pdf",
                description: "Introduction to SQL queries and database concepts",
                dateAdded: "2025-02-10",
                fileSize: "2.2 MB",
              },
              {
                id: "note5",
                name: "Database Design.pdf",
                description: "Normalization, ER diagrams, and schema design",
                dateAdded: "2025-02-17",
                fileSize: "4.5 MB",
              },
              {
                id: "note6",
                name: "NoSQL Databases.pdf",
                description: "Introduction to document, key-value, and graph databases",
                dateAdded: "2025-02-28",
                fileSize: "3.0 MB",
              },
            ],
          },
        ],
      },
      {
        id: "se-sem2",
        name: "Semester 2",
        modules: [
          {
            id: "se-sem2-web",
            name: "Web Development",
            notes: [
              {
                id: "note7",
                name: "HTML & CSS Fundamentals.pdf",
                description: "Core concepts of web markup and styling",
                dateAdded: "2025-03-10",
                fileSize: "2.8 MB",
              },
              {
                id: "note8",
                name: "JavaScript Essentials.pdf",
                description: "JavaScript syntax, DOM manipulation, and events",
                dateAdded: "2025-03-17",
                fileSize: "3.2 MB",
              },
              {
                id: "note9",
                name: "React Framework.pdf",
                description: "Component-based UI development with React",
                dateAdded: "2025-03-24",
                fileSize: "4.1 MB",
              },
            ],
          },
          {
            id: "se-sem2-algo",
            name: "Algorithms",
            notes: [
              {
                id: "note10",
                name: "Sorting Algorithms.pdf",
                description: "Bubble, merge, quick, and heap sort implementations",
                dateAdded: "2025-04-05",
                fileSize: "1.9 MB",
              },
              {
                id: "note11",
                name: "Graph Algorithms.pdf",
                description: "BFS, DFS, Dijkstra's, and minimum spanning trees",
                dateAdded: "2025-04-12",
                fileSize: "2.7 MB",
              },
              {
                id: "note12",
                name: "Dynamic Programming.pdf",
                description: "Solving complex problems with dynamic programming",
                dateAdded: "2025-04-19",
                fileSize: "3.3 MB",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "uog",
    name: "University of Greenwich",
    semesters: [
      {
        id: "uog-sem1",
        name: "Semester 1",
        modules: [
          {
            id: "uog-sem1-prog",
            name: "Programming",
            notes: [
              {
                id: "note13",
                name: "Python Basics.pdf",
                description: "Introduction to Python syntax and programming concepts",
                dateAdded: "2025-01-10",
                fileSize: "2.1 MB",
              },
              {
                id: "note14",
                name: "Data Structures in Python.pdf",
                description: "Lists, dictionaries, sets, and custom data structures",
                dateAdded: "2025-01-20",
                fileSize: "2.6 MB",
              },
              {
                id: "note15",
                name: "Python Libraries.pdf",
                description: "Overview of NumPy, Pandas, and Matplotlib",
                dateAdded: "2025-02-01",
                fileSize: "3.5 MB",
              },
            ],
          },
          {
            id: "uog-sem1-ai",
            name: "Artificial Intelligence",
            notes: [
              {
                id: "note16",
                name: "Machine Learning Fundamentals.pdf",
                description: "Supervised and unsupervised learning algorithms",
                dateAdded: "2025-02-15",
                fileSize: "4.2 MB",
              },
              {
                id: "note17",
                name: "Neural Networks.pdf",
                description: "Perceptrons, backpropagation, and deep learning",
                dateAdded: "2025-02-25",
                fileSize: "5.0 MB",
              },
            ],
          },
        ],
      },
      {
        id: "uog-sem2",
        name: "Semester 2",
        modules: [
          {
            id: "uog-sem2-web",
            name: "Web Development",
            notes: [
              {
                id: "note18",
                name: "React Fundamentals.pdf",
                description: "Component lifecycle, hooks, and state management",
                dateAdded: "2025-03-05",
                fileSize: "3.7 MB",
              },
              {
                id: "note19",
                name: "Node.js Introduction.pdf",
                description: "Server-side JavaScript with Node.js and Express",
                dateAdded: "2025-03-15",
                fileSize: "2.9 MB",
              },
              {
                id: "note20",
                name: "Full Stack Development.pdf",
                description: "Connecting frontend and backend technologies",
                dateAdded: "2025-03-25",
                fileSize: "4.8 MB",
              },
            ],
          },
          {
            id: "uog-sem2-security",
            name: "Cybersecurity",
            notes: [
              {
                id: "note21",
                name: "Web Security.pdf",
                description: "XSS, CSRF, SQL injection, and security best practices",
                dateAdded: "2025-04-10",
                fileSize: "3.4 MB",
              },
              {
                id: "note22",
                name: "Cryptography.pdf",
                description: "Encryption algorithms, hashing, and digital signatures",
                dateAdded: "2025-04-20",
                fileSize: "2.5 MB",
              },
            ],
          },
        ],
      },
    ],
  },
]
