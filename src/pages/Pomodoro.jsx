import { useState, useEffect } from 'react';

const Pomodoro = () => {
    const [mode, setMode] = useState('focus'); // 'focus', 'short', 'long'
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);

    const modes = {
        focus: { label: 'Focus', time: 25 * 60, color: 'text-rose-600 dark:text-rose-400', bg: 'from-rose-100 to-orange-50 dark:from-rose-950 dark:to-gray-900', button: 'bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600' },
        short: { label: 'Short Break', time: 5 * 60, color: 'text-teal-600 dark:text-teal-400', bg: 'from-teal-100 to-emerald-50 dark:from-teal-950 dark:to-gray-900', button: 'bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600' },
        long: { label: 'Long Break', time: 15 * 60, color: 'text-blue-600 dark:text-blue-400', bg: 'from-blue-100 to-indigo-50 dark:from-blue-950 dark:to-gray-900', button: 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600' },
    };

    useEffect(() => {
        let interval = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            // Only update if currently active to avoid unnecessary renders/loops
            if (isActive) {
                setIsActive(false);
                // Optional: Play sound or notification here
            }
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

    console.log("Pomodoro component rendering");
    return (
        <div className={`w-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-4 transition-all duration-700 ease-in-out bg-gradient-to-br ${currentMode.bg} dark:bg-gray-900`}>
            {/* Glassmorphism Container */}
            <div className="relative bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md text-center transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">

                {/* Mode Switcher */}
                <div className="flex justify-center gap-2 mb-10 bg-black/5 dark:bg-white/5 p-1.5 rounded-full backdrop-blur-sm">
                    {Object.keys(modes).map((m) => (
                        <button
                            key={m}
                            onClick={() => switchMode(m)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${mode === m
                                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md scale-105'
                                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10'
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
                        className={`px-10 py-4 rounded-2xl text-white font-bold text-xl shadow-lg shadow-current/30 transform transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl ${currentMode.button}`}
                    >
                        {isActive ? 'Pause' : 'Start'}
                    </button>
                    <button
                        onClick={resetTimer}
                        className="px-10 py-4 rounded-2xl bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 font-bold text-xl shadow-lg backdrop-blur-md border border-white/20 dark:border-gray-600/30 transform transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-white/80 dark:hover:bg-gray-600/80"
                    >
                        Reset
                    </button>
                </div>

                {/* Status Text */}
                <div className="mt-10 text-gray-600 dark:text-gray-300 text-base font-medium tracking-wide opacity-80">
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
