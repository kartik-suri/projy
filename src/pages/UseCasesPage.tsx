import { Quote } from 'lucide-react';

export default function UseCasesPage() {
  const personas = [
    {
      title: "Fresh Graduates",
      description: "Perfect for campus placement preparation",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1470",
      quote: "The mock interviews helped me understand what recruiters are really looking for. I landed my dream job at a top tech company!",
      author: "Sarah Chen, Computer Science Graduate"
    },
    {
      title: "Career Switchers",
      description: "Tailored practice for industry transition",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1470",
      quote: "I was nervous about switching from finance to tech, but the Persona Mirror showed me exactly what I needed to improve.",
      author: "Michael Roberts, Former Financial Analyst"
    },
    {
      title: "Tier-2/3 College Students",
      description: "Bridging the guidance gap",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1471",
      quote: "Without campus recruiters visiting our college, InterviewAI was my mentor. It helped me compete with top college graduates.",
      author: "Priya Patel, Engineering Student"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Success Stories from Real Users
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            See how InterviewAI helps different candidates achieve their career goals
          </p>
        </div>
      </div>

      {/* Personas Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={persona.image}
                alt={persona.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{persona.title}</h3>
                <p className="text-gray-600 mb-4">{persona.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Quote className="w-8 h-8 text-indigo-600 mb-2" />
                  <p className="text-gray-700 italic mb-2">{persona.quote}</p>
                  <p className="text-sm text-gray-600">- {persona.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="text-indigo-100">Success Rate</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-indigo-100">Users Trained</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <div className="text-indigo-100">Companies Covered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}