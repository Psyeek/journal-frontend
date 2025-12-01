import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', formData);
        // Add authentication logic here
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/5">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-300">Sign in to continue your journey</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center text-gray-300 cursor-pointer">
                            <input type="checkbox" className="mr-2 rounded bg-gray-800 border-gray-700 text-indigo-500 focus:ring-indigo-500" />
                            Remember me
                        </label>
                        <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-[1.02] transition-all duration-200"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-8 text-center text-gray-400 text-sm">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                        Create account
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
