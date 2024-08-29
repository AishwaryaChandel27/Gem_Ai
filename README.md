##Gem_Ai

# gem_ai

![Gemini AI Project](https://github.com/AishwaryaChandel27/gem_ai/blob/main/Screenshot%202024-08-12%20203843.png) <!-- Update this path to your actual image file -->

## Overview

`gem_ai` is a React-based AI chatbot project that leverages the Gemini API to provide interactive, AI-driven conversations. The chatbot is capable of generating both text and image responses based on user input, making it a versatile tool for various applications, including customer support, virtual assistants, and creative content generation.

### Key Features

- **Dynamic Text Responses**: The chatbot can understand and respond to user queries with relevant and contextually accurate text.
- **AI-Generated Images**: Users can request image content by providing prompts, and the AI will generate visuals accordingly.
- **Interactive UI**: A smooth and responsive user interface built with React, ensuring a seamless user experience.
- **Customizable**: Easily extend the chatbot's capabilities to include additional AI-powered features or modify its behavior.



## Features

- **TextMode**: Users can interact with AI to generate and receive text-based responses.
- **ImageMode**: Users can input prompts and receive AI-generated images.
- **User-Friendly Interface**: Clean and responsive UI built with React.
- **Customizable**: Easily extend the project to include additional AI capabilities or modify the existing ones.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm (or yarn)
- React
- A Gemini API key (You can obtain this from the Gemini API provider)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/AishwaryaChandel27/gem_ai
    cd gem_ai
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root of your project and add your Gemini API key:

    ```plaintext
    REACT_APP_GEMINI_API_KEY=your-gemini-api-key
    ```

4. Start the development server:

    ```bash
    npm start
    ```

    Your application will run on `http://localhost:3000`.

## Usage

- **TextMode**: Type your text prompt into the input field and submit it to receive a text response from the AI.
- **ImageMode**: Switch to ImageMode, enter a prompt, and submit it to receive an AI-generated image.

## Project Structure

```plaintext
gem_ai/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md

