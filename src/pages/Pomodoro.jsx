import { useState, useEffect } from 'react';

const Pomodoro = () => {
    const [mode, setMode] = useState('focus'); // 'focus', 'short', 'long'
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);

    const modes = {
        focus: { label: 'Focus', time: 25 * 60, color: 'text-rose-400', bg: 'from-rose-950 to-gray-900', button: 'bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600' },
        short: { label: 'Short Break', time: 5 * 60, color: 'text-teal-400', bg: 'from-teal-950 to-gray-900', button: 'bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600' },
        long: { label: 'Long Break', time: 15 * 60, color: 'text-blue-400', bg: 'from-blue-950 to-gray-900', button: 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600' },
    };

    useEffect(() => {
        let interval = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);



    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(modes[mode].time);
    };

    const switchMode = (newMode) => {
        setMode(newMode);
        setIsActive(false);
        setTimeLeft(modes[newMode].time);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const currentMode = modes[mode];

    if (timeLeft === 0 && isActive) {
        setIsActive(false);
        // Optional: Play sound or notification here
    }

    return (
        <div className={`w-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-4 transition-all duration-700 ease-in-out bg-gradient-to-br ${currentMode.bg}`}>
            {/* Glassmorphism Container */}
            <div className="relative bg-gray-800/30 backdrop-blur-xl border border-gray-700/30 p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md text-center transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">

                {/* Mode Switcher */}
                <div className="flex justify-center gap-2 mb-10 bg-white/5 p-1.5 rounded-full backdrop-blur-sm w-fit mx-auto">
                    {Object.keys(modes).map((m) => (
                        <button
                            key={m}
                            onClick={() => switchMode(m)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent ${mode === m
                                ? 'bg-gray-700 text-white shadow-md ring-1 ring-white/10'
                                : 'text-gray-200 hover:text-white hover:bg-white/10 focus:ring-gray-400'
                                }`}
                        >
                            {modes[m].label}
                        </button>
                    ))}
                </div>

                {/* Timer Display */}
                <div className={`text-9xl font-bold mb-10 font-mono tracking-tighter tabular-nums drop-shadow-sm ${currentMode.color} transition-colors duration-500 select-none`}>
                    {formatTime(timeLeft)}
                </div>

                {/* Controls */}
                <div className="flex justify-center gap-6">
                    <button
                        onClick={toggleTimer}
                        className={`px-10 py-4 rounded-2xl text-white font-bold text-xl shadow-lg shadow-current/30 transform transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-offset-transparent ${currentMode.button}`}
                    >
                        {isActive ? 'Pause' : 'Start'}
                    </button>
                    <button
                        onClick={resetTimer}
                        className="px-10 py-4 rounded-2xl bg-gray-700/80 text-white font-bold text-xl shadow-lg backdrop-blur-md border border-gray-600/30 transform transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-offset-4 focus:ring-offset-transparent"
                    >
                        Reset
                    </button>
                </div>

                {/* Status Text */}
                <div className="mt-10 text-gray-300 text-base font-medium tracking-wide opacity-80">
                    {isActive ? (
                        <span className="animate-pulse">Running... Stay focused!</span>
                    ) : (
                        <span>Ready to start?</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Pomodoro;
