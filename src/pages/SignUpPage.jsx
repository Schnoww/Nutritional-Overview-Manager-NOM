import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// toast
import { toast } from 'react-toastify';

// Firebase
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [birthYear, setBirthYear] = useState('');

    // genders
    const [gender, setGender] = useState('');
    const [customGenderText, setCustomGenderText] = useState('');
    const [pronoun, setPronoun] = useState('');
    const pronouns = ["She/her", "He/him", "They/them"];

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const toastId = toast.loading("Signing you up...");

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const userDoc = {
                email: email,
                birthMonth: birthMonth,
                birthDay: birthDay,
                birthYear: birthYear,
                gender: gender === "Custom" ? customGenderText : gender,
                pronoun: pronoun,
            };

            await setDoc(doc(db, "users", user.uid), userDoc);

            toast.update(toastId, {
                render: "🎉 You're signed up!",
                type: "success",
                isLoading: false,
                autoClose: 3000,
            });

            navigate("/food-preferences");

        } catch (error) {
            toast.update(toastId, {
                render: `Signup failed: ${error.message}`,
                type: "error",
                isLoading: false,
                autoClose: 3000,
            });
        }
    };

    return (
        <div className="bg-blue-100 flex flex-col h-screen w-screen items-center justify-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-blue-600 text-5xl font-bold mb-10 text-center">
                NOM
            </h1>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
                <div className="text-2xl font-semibold mb-4 text-black text-center">Create New Account</div>
                <div className="mb-4 text-center text-gray-500">It's quick and easy.</div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex gap-4">
                        <label htmlFor="firstName" className="text-black block mb-2 flex-1">
                            <input
                                type="text"
                                id="firstName"
                                placeholder="First name"
                                className="mt-1 block border border-gray-300 rounded-md p-3 placeholder-gray-500 w-full"
                                required
                            />
                        </label>
                        <label htmlFor="lastName" className="text-black block mb-2 flex-1">
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Last name"
                                className="mt-1 block border border-gray-300 rounded-md p-3 placeholder-gray-500 w-full"
                                required
                            />
                        </label>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="birthday" className="text-black block mb-2">
                            Birthday
                        </label>
                        <div className="flex gap-2">
                            <select
                                id="birthMonth"
                                className="bg-white mt-1 block border border-gray-300 rounded-md p-3 w-1/3 text-black"
                                value={birthMonth}
                                onChange={(e) => setBirthMonth(e.target.value)}
                            >
                                <option value="" disabled>Month</option>
                                {months.map((month) => (
                                    <option key={month} value={month}>{month}</option>
                                ))}
                            </select>
                            <select
                                id="birthDay"
                                className="bg-white mt-1 block border border-gray-300 rounded-md p-3 w-1/3 text-black"
                                value={birthDay}
                                onChange={(e) => setBirthDay(e.target.value)}
                            >
                                <option value="" disabled>Day</option>
                                {days.map((day) => (
                                    <option key={day} value={day}>{day}</option>
                                ))}
                            </select>
                            <select
                                id="birthYear"
                                className="bg-white mt-1 block border border-gray-300 rounded-md p-3 w-1/3 text-black"
                                value={birthYear}
                                onChange={(e) => setBirthYear(e.target.value)}
                            >
                                <option value="" disabled>Year</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="text-black block mb-2">
                            Gender
                        </label>
                        <div className="flex gap-4">
                            <label className="inline-flex items-center text-black">
                                <input
                                    type="radio"
                                    className="form-radio h-5 w-5 text-blue-600"
                                    name="gender"
                                    value="female"
                                    checked={gender === "female"}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <span className="ml-2">Female</span>
                            </label>
                            <label className="inline-flex items-center text-black">
                                <input
                                    type="radio"
                                    className="form-radio h-5 w-5 text-blue-600"
                                    name="gender"
                                    value="male"
                                    checked={gender === "male"}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <span className="ml-2">Male</span>
                            </label>
                            <label className="inline-flex items-center text-black">
                                <input
                                    type="radio"
                                    className="form-radio h-5 w-5 text-blue-600"
                                    name="gender"
                                    value="custom"
                                    checked={gender === "custom"}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <span className="ml-2">Custom</span>
                            </label>
                            {gender === "custom" && (
                                <input
                                    type="text"
                                    placeholder="Your gender"
                                    className="mt-1 block border border-gray-300 text-black rounded-md p-3 placeholder-gray-500 flex-grow mx-auto w-1/2"
                                    onChange={(e) => setCustomGenderText(e.target.value)}
                                />
                            )}
                        </div>
                    </div>

                    <label htmlFor="email" className="text-black block mb-2">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-3 placeholder-gray-500"
                            required
                        />
                    </label>

                    <label htmlFor="password" className="text-black block mb-2">
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-3 placeholder-gray-500"
                            required
                        />
                    </label>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-1/3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition duration-200">
                            Sign Up
                        </button>
                    </div>

                    <div className="text-center">
                        <Link to="/auth/login" className="text-blue-500 text-sm hover:underline">
                            Already have an account?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
