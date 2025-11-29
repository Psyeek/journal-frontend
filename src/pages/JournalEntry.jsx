import { useState } from 'react';

const JournalEntry = () => {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [selectedHour, setSelectedHour] = useState(null);
    const [entryText, setEntryText] = useState('');

    const hours = Array.from({ length: 24 }, (_, i) => i);

    const handleSave = () => {
        console.log({
            date,
            hour_block: selectedHour,
            entry_text: entryText,
            user_id: 'current-user-id' // Placeholder
        });
        alert('Entry saved (mock)!');
    };

    return (
        <div className="min-h-screen bg-neutral-900 text-white p-6 md:p-12 flex justify-center">
            <div className="w-full max-w-4xl space-y-8 animate-fade-in">

                {/* Header */}
                <div className="text-center space-y-2">
                    <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        Journal Entry
                    </h1>
                    <p className="text-neutral-400">Capture your thoughts, one hour at a time.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Left Column: Date & Time */}
                    <div className="md:col-span-1 space-y-6">

                        {/* Date Picker */}
                        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl">
                            <label className="block text-sm font-medium text-neutral-300 mb-2">Select Date</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        {/* Hour Blocks */}
                        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl">
                            <label className="block text-sm font-medium text-neutral-300 mb-4">Select Hour Block</label>
                            <div className="grid grid-cols-4 gap-2">
                                {hours.map((hour) => (
                                    <button
                                        key={hour}
                                        onClick={() => setSelectedHour(hour)}
                                        className={`
                                            aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200
                                            ${selectedHour === hour
                                                ? 'bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg scale-105'
                                                : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'}
                                        `}
                                    >
                                        {hour}:00
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Entry Text */}
                    <div className="md:col-span-2 flex flex-col gap-6">
                        <div className="flex-1 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl flex flex-col">
                            <label className="block text-sm font-medium text-neutral-300 mb-2">Your Thoughts</label>
                            <textarea
                                value={entryText}
                                onChange={(e) => setEntryText(e.target.value)}
                                placeholder="What happened during this hour?"
                                className="flex-1 w-full bg-neutral-800/50 border border-neutral-700/50 rounded-xl p-4 text-white placeholder-neutral-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none transition-all text-lg leading-relaxed"
                            />
                        </div>

                        <button
                            onClick={handleSave}
                            disabled={selectedHour === null || !entryText.trim()}
                            className={`
                                w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300
                                ${selectedHour !== null && entryText.trim()
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:shadow-purple-500/25 hover:scale-[1.02] cursor-pointer'
                                    : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'}
                            `}
                        >
                            Save Entry
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JournalEntry;
