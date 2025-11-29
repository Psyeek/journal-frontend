import { Link } from "react-router-dom";

const Dashboard = () => {
    const stats = [
        { label: "Focus Time", value: "4h 30m", color: "text-rose-400" },
        { label: "Entries", value: "12", color: "text-purple-400" },
        { label: "Streak", value: "5 Days", color: "text-teal-400" },
    ];

    const quickActions = [
        { title: "New Entry", path: "/journal", desc: "Log your thoughts", gradient: "from-purple-500 to-pink-600" },
        { title: "Start Focus", path: "/pomodoro", desc: "Begin a session", gradient: "from-rose-500 to-orange-500" },
        { title: "View Activity", path: "/activity", desc: "Check progress", gradient: "from-blue-500 to-indigo-500" },
    ];

    return (
        <div className="min-h-screen bg-neutral-900 text-white p-6 md:p-12 pt-24">
            <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">

                {/* Hero Section */}
                <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent tracking-tight">
                        Welcome Back
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        Ready to seize the day? Track your progress, log your journey, and stay focused.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl hover:bg-white/10 transition-all duration-300 group">
                            <p className="text-neutral-400 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                            <p className={`text-4xl font-bold mt-2 ${stat.color} drop-shadow-sm group-hover:scale-105 transition-transform origin-left`}>
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Quick Actions */}
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-neutral-200">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {quickActions.map((action, index) => (
                            <Link
                                key={index}
                                to={action.path}
                                className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                                <div className="absolute inset-0 border border-white/10 rounded-2xl" />

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{action.title}</h3>
                                    <p className="text-neutral-400 group-hover:text-neutral-200 transition-colors">{action.desc}</p>
                                </div>

                                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${action.gradient} opacity-20 blur-3xl rounded-full group-hover:opacity-40 transition-opacity`} />
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
