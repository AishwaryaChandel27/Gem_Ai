'use client';

import React, { useState, useRef, useEffect } from 'react';
import '../styles/globals.css';
import Spline from '@splinetool/react-spline';
import { PlaceholdersAndVanishInput } from '../components/UI/placeholders-and-vanish-input';
import axios from 'axios';

const TextMode: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [messages, setMessages] = useState<{ isAi: boolean; value: string; id: string; type?: 'code' | 'explanation' }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis hiding?",
    "Write a JavaScript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const API_KEY = 'YOUR_GEMINI_API_KEY'; // <-- Replace this with your Gemini API Key
  const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [
      ...prev,
      { isAi: false, value: inputValue, id: new Date().toISOString() }
    ]);

    await handleChatSubmission(inputValue);
    setInputValue("");
  };

  // Handle chat submission (direct Gemini API call)
  const handleChatSubmission = async (prompt: string) => {
    try {
      setLoading(true);

      const response = await axios.post(GEMINI_API_URL, {
        contents: [{ parts: [{ text: prompt }] }]
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const aiMessage = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, no response.";

      // Split AI response into sections
      const sections = aiMessage.split('\n\n').map((section: string) => section.trim()).filter((section: any) => section);

      const formattedMessages = sections.map((section: string) => ({
        isAi: true,
        value: section.startsWith('```') 
          ? section.replace(/^```[a-z]*\n|```$/g, '')
          : section,
        id: new Date().toISOString(),
        type: section.startsWith('```') ? 'code' : 'explanation'
      }));

      setMessages(prev => [...prev, ...formattedMessages]);

    } catch (error) {
      console.error('Error submitting chat:', error);
      setMessages(prev => [
        ...prev,
        { isAi: true, value: 'Something went wrong. Try again later.', id: new Date().toISOString() }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Spline Animation */}
      <div className="absolute top-0 left-0 h-full w-1/3 z-0">
        <Spline
          scene="https://prod.spline.design/8VwW0PoCrtPXSi4r/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Chat Section */}
      <div id="app" className="absolute top-0 right-0 h-full w-2/3 p-4 z-20 flex flex-col justify-end">
        <div className="flex flex-col space-y-4 overflow-y-auto h-full">
          {messages.map((message, index) => (
            <div key={index} className={`wrapper ${message.isAi ? '' : 'user'}`}>
              <div className={`message ${message.type}`}>
                {loading && message.isAi && !message.value ? "..." : message.value}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form className="flex flex-col items-end justify-end space-y-2 w-full" onSubmit={handleSubmit}>
          <div className="w-full">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              value={inputValue}
              onChange={handleChange}
              className="w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TextMode;
