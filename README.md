# WebApp for a LLM Study

A full stack web app platform for studying user interactions with large language models (LLMs) and generative AI, focusing on user experience, authorship perception, and cognitive load.

## 🌟 Overview

This platform provides a comprehensive environment for conducting human-computer interaction research with generative AI systems. It supports both text and image generation tasks, collects survey data, and measures various aspects of user experience including perceived authorship, cognitive load, and user preferences.

## 🛠️ Technology Stack

- **Frontend**: React, TypeScript, Framer Motion, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: AWS DynamoDB, AWS S3
- **API Integrations**: OpenAI (for text generation), DALL-E (for image generation)

## 📂 Project Structure
llm-study/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── displayFrame.tsx # Displays AI responses with animations
│   │   ├── inputPrompt.tsx  # User input interface for prompts
│   │   └── questionFrame.tsx # Question display component
│   ├── routes/              # Application pages
│   │   ├── homePage.tsx     # Entry point with Prolific ID collection
│   │   ├── instructionsPage.tsx # Study instructions
│   │   ├── questionPage.tsx # Main interaction page for prompt/response
│   │   ├── surveyPage.tsx   # Survey collection after each task
│   │   └── endPage.tsx      # Study completion page
│   ├── hooks/               # Custom React hooks
│   │   ├── preventNavigation.ts # Prevents accidental navigation
│   │   └── sendStudyData.ts # Handles data submission to backend
│   └── App.tsx              # Main application component with routing
|
├── server/                  # Backend server code
│   ├── routes/              # API routes
│   │   └── start.js         # Handles study session initialization
|   |   └── questions.js     # Setup question order and content
|   |   └── dalle.js         # Handles image generation and S3 bucket puts
|   |   └── db.js            # Writes to DynamoDB
|   |   └── text.js          # Handles text generation
│   ├── util/                # Utility functions
│   |   └── jwt.js           # Authentication utilities
│   ├── middleware/          # Helper functions
│   |   └── auth.js          # Authentication helpers
│   └── server.js            # Main server base  
|
└── public/                  # Static assets
