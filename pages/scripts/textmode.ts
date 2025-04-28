import axios from 'axios';

export const handleChatSubmission = async (inputValue: string, setMessages: React.Dispatch<React.SetStateAction<{ isAi: boolean, value: string, id: string }[]>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    setLoading(true);
    const response = await axios.post('http://localhost:5000/', { prompt: inputValue });
    const message = response.data.bot;
    setMessages(prevMessages => [...prevMessages, { isAi: true, value: message, id: new Date().toISOString() }]);
  } catch (error) {
    console.error('Error submitting chat:', error);
  } finally {
    setLoading(false);
  }
};
