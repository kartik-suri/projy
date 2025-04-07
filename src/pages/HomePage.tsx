import { ArrowRight, Brain, LineChart, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Ace Your Next HR Interview with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Practice with AI-powered mock interviews and get real-time feedback on your persona. Perfect your interview skills with our cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
                Try for Free
              </button>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition">
                See Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Practice</h3>
              <p className="text-gray-600">Engage in realistic HR interviews with our AI interviewer</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reflect</h3>
              <p className="text-gray-600">Get instant feedback on your persona and communication style</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LineChart className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Improve</h3>
              <p className="text-gray-600">Track your progress and enhance your interview skills</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Highlight */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Real-Time Persona Mirror</h2>
              <p className="text-gray-600 mb-8">
                See yourself through the interviewer's eyes. Our AI analyzes your facial expressions, tone of voice, and body language to provide instant feedback on how you're perceived.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-indigo-600 mr-2" />
                  <span>Confidence Analysis</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-indigo-600 mr-2" />
                  <span>Communication Clarity Score</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-indigo-600 mr-2" />
                  <span>Professional Presence Rating</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=2080"
                alt="Professional using InterviewAI"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-semibold text-gray-900">Confidence Score</div>
                <div className="text-2xl font-bold text-indigo-600">85%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Interview Skills?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful candidates who landed their dream jobs with InterviewAI
          </p>
          <Link
            to="/features"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
}