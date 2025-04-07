import { Brain, LineChart, MessageSquare, Star, Target, Users } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-indigo-600" />,
      title: "AI-Powered Mock Interviews",
      description: "Experience realistic interviews with our advanced AI that adapts to your responses and industry",
    },
    {
      icon: <Users className="w-12 h-12 text-indigo-600" />,
      title: "Persona Feedback",
      description: "Get detailed insights on your confidence, clarity, and first impression from our AI analysis",
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-indigo-600" />,
      title: "HR Interview Question Bank",
      description: "Access thousands of company-specific questions and recommended answers",
    },
    {
      icon: <LineChart className="w-12 h-12 text-indigo-600" />,
      title: "Progress Tracker",
      description: "Monitor your improvement over time with detailed analytics and performance metrics",
    },
    {
      icon: <Target className="w-12 h-12 text-indigo-600" />,
      title: "Weekly Growth Challenges",
      description: "Stay motivated with personalized challenges designed to improve specific aspects of your interview skills",
    },
    {
      icon: <Star className="w-12 h-12 text-indigo-600" />,
      title: "Expert Tips & Resources",
      description: "Access curated content from HR professionals and industry experts",
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Powerful Features to Transform Your Interview Skills
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of tools and features is designed to give you the edge in your next HR interview.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Demo Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">See Our Features in Action</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch how our AI-powered platform helps candidates improve their interview performance
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Feature Demo Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}