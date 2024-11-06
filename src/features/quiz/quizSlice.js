import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      question: 'What is the purpose of React?',
      options: ['Build mobile applications', 'Build UI components', 'Manage databases', 'Handle server requests'],
      correctAnswer: 'Build UI components',
      selectedAnswer: null,
    },
    {
      id: 2,
      question: 'What is a component in React?',
      options: ['A function or class', 'An element in HTML', 'A file in JavaScript', 'A CSS style'],
      correctAnswer: 'A function or class',
      selectedAnswer: null,
    },
    {
      id: 3,
      question: 'What is JSX?',
      options: ['JavaScript XML', 'Java Syntax Extension', 'JavaScript Extension', 'Java Source XML'],
      correctAnswer: 'JavaScript XML',
      selectedAnswer: null,
    },
    {
      id: 4,
      question: 'What hook is used to manage state in functional components?',
      options: ['useState', 'useContext', 'useEffect', 'useRef'],
      correctAnswer: 'useState',
      selectedAnswer: null,
    },
    {
      id: 5,
      question: 'What does useEffect do in React?',
      options: ['Fetches data from server', 'Applies CSS styles', 'Manages side effects', 'Handles state updates'],
      correctAnswer: 'Manages side effects',
      selectedAnswer: null,
    },
    {
        id: 6,
        question: 'What is Node.js?',
        options: ['A JavaScript runtime', 'A CSS framework', 'A database', 'An HTML parser'],
        correctAnswer: 'A JavaScript runtime',
        selectedAnswer: null,
      },
      {
        id: 7,
        question: 'Which module in Node.js allows working with file systems?',
        options: ['path', 'http', 'fs', 'buffer'],
        correctAnswer: 'fs',
        selectedAnswer: null,
      },
      {
        id: 8,
        question: 'What is the virtual DOM in React?',
        options: [
          'A copy of the real DOM',
          'A separate JavaScript library',
          'The database layer in React',
          'A CSS library',
        ],
        correctAnswer: 'A copy of the real DOM',
        selectedAnswer: null,
      },
      {
        id: 9,
        question: 'What command is used to create a new React app?',
        options: ['npx create-react-app', 'npm install react', 'node create react-app', 'yarn create app'],
        correctAnswer: 'npx create-react-app',
        selectedAnswer: null,
      },
      {
        id: 10,
        question: 'What is a middleware in Node.js?',
        options: [
          'A function that handles HTTP requests',
          'A function that has access to request, response, and next',
          'A component in React',
          'A database query in Node.js',
        ],
        correctAnswer: 'A function that has access to request, response, and next',
        selectedAnswer: null,
      },
      {
        id: 11,
        question: 'What is the use of the useReducer hook in React?',
        options: [
          'To handle state transitions for complex state logic',
          'To manage side effects',
          'To handle lifecycle events',
          'To create a ref',
        ],
        correctAnswer: 'To handle state transitions for complex state logic',
        selectedAnswer: null,
      },
      {
        id: 12,
        question: 'What does npm stand for?',
        options: [
          'Node Package Manager',
          'Node Project Module',
          'New Project Manager',
          'New Package Manager',
        ],
        correctAnswer: 'Node Package Manager',
        selectedAnswer: null,
      },
      {
        id: 13,
        question: 'What is an Express.js in Node.js?',
        options: [
          'A server-side framework',
          'A database',
          'A package for styling',
          'A frontend library',
        ],
        correctAnswer: 'A server-side framework',
        selectedAnswer: null,
      },
      {
        id: 14,
        question: 'Which of the following is used to create routes in Node.js?',
        options: ['Express Router', 'React Router', 'Angular Router', 'Vue Router'],
        correctAnswer: 'Express Router',
        selectedAnswer: null,
      },
      {
        id: 15,
        question: 'What is the use of useRef in React?',
        options: [
          'To directly manipulate the DOM',
          'To manage side effects',
          'To handle HTTP requests',
          'To create a stateful component',
        ],
        correctAnswer: 'To directly manipulate the DOM',
        selectedAnswer: null,
      },
      {
        id: 16,
        question: 'How do you start a Node.js server?',
        options: ['node server.js', 'npm start server', 'react start', 'start server'],
        correctAnswer: 'node server.js',
        selectedAnswer: null,
      },
      {
        id: 17,
        question: 'What is the command to install a package in Node.js?',
        options: ['npm install <package-name>', 'node install', 'npm create <package-name>', 'npm run <package-name>'],
        correctAnswer: 'npm install <package-name>',
        selectedAnswer: null,
      },
      {
        id: 18,
        question: 'What is the purpose of the "return" statement in a React functional component?',
        options: [
          'To return the component’s JSX markup',
          'To handle HTTP requests',
          'To manage state',
          'To bind event handlers',
        ],
        correctAnswer: 'To return the component’s JSX markup',
        selectedAnswer: null,
      },
      {
        id: 19,
        question: 'What does "res.send()" do in Express.js?',
        options: [
          'Sends a response to the client',
          'Sends a request to the server',
          'Renders a template',
          'Serves static files',
        ],
        correctAnswer: 'Sends a response to the client',
        selectedAnswer: null,
      },
      {
        id: 20,
        question: 'Which hook should be used for data fetching in React?',
        options: ['useEffect', 'useState', 'useRef', 'useContext'],
        correctAnswer: 'useEffect',
        selectedAnswer: null,
      },  ],
      showResults: false,
      score: 0,
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
      selectAnswer: (state, action) => {
        const { questionId, answer } = action.payload;
        const question = state.questions.find(q => q.id === questionId);
        if (question) {
          question.selectedAnswer = answer;
        }
      },
      checkAnswers: (state) => {
        let correctAnswers = 0;
        state.questions.forEach(q => {
          if (q.selectedAnswer === q.correctAnswer) {
            correctAnswers += 1;
          }
        });
        state.score = correctAnswers;
        state.showResults = true;
      },
      resetQuiz: (state) => {
        state.questions.forEach(q => {
          q.selectedAnswer = null;
        });
        state.showResults = false;
        state.score = 0;
      },
    },
  });
  
  export const { selectAnswer, checkAnswers, resetQuiz } = quizSlice.actions;
  export default quizSlice.reducer;