import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../config/firebase';
import { doc, updateDoc } from 'firebase/firestore';

const questions = [
  {
    key: 'dairyFree',
    question: 'Do you avoid dairy products?',
    options: ['Yes', 'No', 'Skip'],
  },
  {
    key: 'keto',
    question: 'Do you follow a ketogenic diet?',
    options: ['Yes', 'No', 'Skip'],
  },
  {
    key: 'vegetarian',
    question: 'Do you follow a vegetarian diet?',
    options: ['Yes', 'No', 'Skip'],
  },
  {
    key: 'vegan',
    question: 'Do you follow a vegan diet?',
    options: ['Yes', 'No', 'Skip'],
  },
  {
    key: 'pescatarian',
    question: 'Do you follow a pescatarian diet?',
    options: ['Yes', 'No', 'Skip'],
  },
  {
    key: 'peanutAllergy',
    question: 'Do you have a peanut allergy?',
    options: ['Yes', 'No', 'Skip'],
  },
  {
    key: 'calorieCounting',
    question: 'Is calorie counting a primary concern for you?',
    options: ['Yes', 'No', 'Skip'],
  },
  {
    key: 'spiceLevel',
    question: 'What is your preferred spice level?',
    options: ['Mild', 'Medium', 'Spicy', "I don't know", 'Skip'],
  },
];

const FoodPreferences = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNext = async () => {
    if (!selectedOption) {
      setError('Please select an option.');
      return;
    }

    const updatedAnswers = {
      ...answers,
      [questions[currentQuestion].key]: selectedOption,
    };
    setAnswers(updatedAnswers);
    setSelectedOption('');
    setError('');

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      try {
        const user = auth.currentUser;
        if (user) {
          const docRef = doc(db, 'users', user.uid);
          await updateDoc(docRef, { foodPreferences: updatedAnswers });
          navigate('/dining');
        } else {
          setError('User not authenticated.');
        }
      } catch (err) {
        console.error('Error saving preferences:', err);
        setError('Failed to save your food preferences.');
      }
    }
  };

  const current = questions[currentQuestion];

  return (
    <div className="bg-blue-100 flex flex-col h-screen w-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-blue-600 text-5xl font-bold mb-10 text-center">
        NOM
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl text-center">
        <h2 className="text-2xl font-semibold mb-6 text-black">Food Preferences</h2>
        <p className="text-lg text-black font-medium mb-4">{current.question}</p>

        <form className="flex flex-col items-start space-y-3 mb-4">
          {current.options.map((option) => (
            <label key={option} className="flex items-center space-x-2 text-left">
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedOption === option}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <span className='text-black'>{option}</span>
            </label>
          ))}
        </form>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          onClick={handleNext}
          className="mt-2 w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FoodPreferences;
