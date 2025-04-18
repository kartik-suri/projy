import { useState, useEffect } from 'react';
import { Search, Eye, ChevronDown, ChevronUp, Code, Users, FileText } from 'lucide-react';

const majorCompanies = [
  { 
    name: 'Facebook', 
    category: 'Social Media',
    icon: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/facebook.svg',
    color: '#1877F2'
  },
  { 
    name: 'Amazon', 
    category: 'E-Commerce',
    icon: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/amazon.svg',
    color: '#FF9900'
  },
  { 
    name: 'Apple', 
    category: 'Hardware & Software',
    icon: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/apple.svg',
    color: '#A2AAAD'
  },
  { 
    name: 'Netflix', 
    category: 'Streaming',
    icon: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/netflix.svg',
    color: '#E50914'
  },
  { 
    name: 'Google', 
    category: 'Search & Advertising',
    icon: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/google.svg',
    color: '#4285F4'
  },
  { 
    name: 'Microsoft', 
    category: 'Software & Cloud',
    icon: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/microsoft.svg',
    color: '#00A4EF'
  },
  { 
    name: 'Adobe', 
    category: 'Creative Software',
    icon: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/adobe.svg',
    color: '#FF0000'
  },
  { 
    name: 'Salesforce', 
    category: 'CRM & Cloud',
    icon: 'https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.12.0/salesforce.svg',
    color: '#00A1E0'
  },
];

export default function Companies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [visitorCount, setVisitorCount] = useState(0);
  const [expandedCompany, setExpandedCompany] = useState(null);
  const [carouselPosition, setCarouselPosition] = useState(0);



  useEffect(() => {
    fetch('http://localhost:5000/api/companies')
      .then(res => res.json())
      .then(data => setCompanies(data))
      .catch(err => console.error(err));
  }, []);
  

  // Generate a random visitor count between 5,000 and 15,000
  useEffect(() => {
    setVisitorCount(Math.floor(Math.random() * 10000) + 5000);
  }, []);

  // Carousel animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselPosition((prev) => (prev + 1) % (majorCompanies.length - 4));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const categories = ['All', ...new Set(majorCompanies.map(company => company.category))];
  
  const filteredCompanies = majorCompanies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || company.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  

  const toggleCompanyDetails = (e: React.SyntheticEvent) => {
    if (expandedCompany === e) {
      setExpandedCompany(null);
    } else {
      setExpandedCompany(e);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header with visitor counter */}
      <div className="max-w-6xl mx-auto mb-6 mt-10 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Explore Top Tech Companies</h1>
        <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
          <Eye size={30} className="text-indigo-600 mr-2" />
          <span className="text-gray-600 font-medium text-lg">{visitorCount.toLocaleString()} Users</span>
        </div>
      </div>

      {/* Animated Company Carousel */}
      <div className="mt-16 mb-8 max-w-6xl mx-auto overflow-hidden">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Featured Companies</h2>
        <div className="relative">
          <div 
            className="flex transition-transform duration-1000 ease-in-out" 
            style={{ transform: `translateX(-${carouselPosition * 20}%)` }}
          >
            {majorCompanies.map((company, index) => (
              <div 
                key={`carousel-${company.name}`} 
                className="w-1/5 flex-shrink-0 px-4"
              >
                <div 
                  className="rounded-lg p-6 h-36 flex flex-col justify-between"
                  style={{ 
                    background: `linear-gradient(45deg, ${company.color}15, ${company.color}30)`,
                    borderLeft: `4px solid ${company.color}`
                  }}
                >
                  <div className="flex items-center">
                    <img 
                      src={company.icon} 
                      alt={`${company.name}`}
                      className="w-8 h-8 mr-3"
                      style={{ filter: company.name === 'Apple' ? 'brightness(0.7)' : 'none' }}
                    />
                    <h3 className="font-medium">{company.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {index % 3 === 0 ? "Top rated for work-life balance" : 
                     index % 3 === 1 ? "Highly competitive compensation" : 
                     "Great career advancement opportunities"}
                  </p>
                </div>
              </div>
            ))} 
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {majorCompanies.map((_, index) => (
            <button
              key={`dot-${index}`}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === carouselPosition ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
              onClick={() => setCarouselPosition(index)}
            />
          ))}
        </div>
      </div>
      
      {/* Category Pills */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === category 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>


      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search companies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Company Cards */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <div
              key={company.name}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group relative"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${company.color}15` }}
                  >
                    <img 
                      src={company.icon} 
                      alt={`${company.name} logo`} 
                      className="w-6 h-6"
                      style={{ filter: company.name === 'Apple' ? 'brightness(0.7)' : 'none' }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{company.name}</h3>
                    <p className="text-sm text-gray-500">{company.category}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs font-medium bg-indigo-50 text-indigo-600 px-2 py-1 rounded">
                    {Math.floor(Math.random() * 50) + 10} Questions
                  </span>
                  <button 
                    className="text-indigo-600 font-medium text-sm hover:text-indigo-700 flex items-center"
                    onClick={() => toggleCompanyDetails(company.name)}
                  >
                    View Details
                    {expandedCompany === company.name ? 
                      <ChevronUp size={16} className="ml-1" /> : 
                      <ChevronDown size={16} className="ml-1" />
                    }
                  </button>
                </div>
              </div>
              
              {/* Dropdown menu with absolute positioning */}
              {expandedCompany === company.name && (
                <div className="absolute left-0 right-0 bg-white border-t border-gray-100 rounded-b-lg shadow-lg z-10 animate-fadeIn">
                  <div className="p-4">
                    <button className="flex items-center text-gray-700 hover:text-indigo-600 mb-3 w-full transition-colors">
                      <Code size={16} className="mr-2" />
                      <span>Coding Problems</span>
                    </button>
                    <button className="flex items-center text-gray-700 hover:text-indigo-600 mb-3 w-full transition-colors">
                      <Users size={16} className="mr-2" />
                      <span>HR Problems</span>
                    </button>
                    <button className="flex items-center text-gray-700 hover:text-indigo-600 w-full transition-colors">
                      <FileText size={16} className="mr-2" />
                      <span>Procedure Guide</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        

        {/* Empty State */}
        {filteredCompanies.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">No companies match your search criteria</p>
            <button 
              onClick={() => {setSearchTerm(''); setActiveCategory('All');}}
              className="text-indigo-600 font-medium hover:text-indigo-800"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      

      {/* Add animation keyframes
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style> */}
    </div>
  );
}