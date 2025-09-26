import React, { useState } from 'react';
import { PenTool, FileText, CreditCard, TrendingUp, Play, Book, History, Settings, Plus, Lightbulb, Calendar, BarChart3, Sparkles, Clock, CreditCard as Edit3, Zap, Trophy, ArrowRight, ChevronRight } from 'lucide-react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('');

  const stats = [
    { 
      title: 'Essays Written', 
      value: '12', 
      trend: '+3 this week', 
      icon: FileText, 
      color: 'text-blue-400',
      bgGradient: 'from-blue-500/10 to-blue-600/5'
    },
    { 
      title: 'Words Written', 
      value: '8,450', 
      trend: '+1,200 this week', 
      icon: PenTool, 
      color: 'text-purple-400',
      bgGradient: 'from-purple-500/10 to-purple-600/5'
    },
    { 
      title: 'Credits Used', 
      value: '7', 
      trend: '5 remaining', 
      icon: CreditCard, 
      color: 'text-green-400',
      bgGradient: 'from-green-500/10 to-green-600/5'
    },
    { 
      title: 'Avg Essay Length', 
      value: '704 words', 
      trend: 'Quality: 95%', 
      icon: BarChart3, 
      color: 'text-orange-400',
      bgGradient: 'from-orange-500/10 to-orange-600/5'
    }
  ];

  const quickTopics = [
    'Climate Change', 
    'Technology Impact', 
    'Education Reform', 
    'Social Media', 
    'Healthcare',
    'Artificial Intelligence',
    'Space Exploration',
    'Renewable Energy'
  ];
  
  const recentEssays = [
    { title: 'The Future of Renewable Energy', words: 856, date: '2 hours ago', status: 'Complete', progress: 100 },
    { title: 'Social Media and Mental Health', words: 723, date: '1 day ago', status: 'Draft', progress: 85 },
    { title: 'AI Ethics in Modern Society', words: 945, date: '3 days ago', status: 'Complete', progress: 100 },
    { title: 'Climate Change Solutions', words: 634, date: '5 days ago', status: 'Complete', progress: 100 },
    { title: 'Digital Privacy Rights', words: 512, date: '1 week ago', status: 'Draft', progress: 60 }
  ];

  const newsItems = [
    { 
      title: 'New AI Models Available', 
      description: 'GPT-4 Turbo now available for faster essay generation with improved accuracy', 
      time: '2 hours ago',
      type: 'feature'
    },
    { 
      title: 'Essay Templates Updated', 
      description: 'Added 15 new academic templates for various subjects including STEM fields', 
      time: '1 day ago',
      type: 'update'
    },
    { 
      title: 'Performance Improvements', 
      description: 'Essay generation is now 40% faster with enhanced quality checks', 
      time: '3 days ago',
      type: 'improvement'
    }
  ];

  const quickActions = [
    { icon: Plus, label: 'New Essay', color: 'text-green-400', bg: 'hover:bg-green-400/10' },
    { icon: Book, label: 'Browse Templates', color: 'text-blue-400', bg: 'hover:bg-blue-400/10' },
    { icon: History, label: 'View History', color: 'text-purple-400', bg: 'hover:bg-purple-400/10' },
    { icon: Trophy, label: 'Achievements', color: 'text-yellow-400', bg: 'hover:bg-yellow-400/10' }
  ];

  return (
    <div className="min-h-screen bg-[#212121] text-white">
      {/* Enhanced Header */}
      <header className="border-b border-[#2f2f2f] bg-[#171717]/80 backdrop-blur-xl sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-xl flex items-center justify-center shadow-lg shadow-[#667eea]/20">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                  SlohGPT
                </h1>
                <p className="text-[#8e8ea0] text-sm">AI Essay Assistant</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 px-3 py-2 bg-[#212121] rounded-lg border border-[#2f2f2f]">
                <Zap className="w-4 h-4 text-[#667eea]" />
                <span className="text-sm font-medium">5 Credits</span>
              </div>
              <button className="p-2 hover:bg-[#2f2f2f] rounded-lg transition-all duration-200 hover:scale-105">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Enhanced Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div key={index} className={`bg-gradient-to-br ${stat.bgGradient} border border-[#2f2f2f] rounded-2xl p-6 hover:border-[#667eea]/40 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#667eea]/10`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-[#212121] border border-[#2f2f2f]`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <TrendingUp className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-[#8e8ea0] text-sm font-medium">{stat.title}</p>
                <p className="text-green-400 text-xs font-medium">{stat.trend}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enhanced Main Action Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#171717] border border-[#2f2f2f] rounded-2xl p-8 relative overflow-hidden">
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#667eea]/5 to-[#764ba2]/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <Edit3 className="w-6 h-6 text-[#667eea]" />
                  <h2 className="text-2xl font-bold">Ready to Write Your Next Essay?</h2>
                </div>
                
                <div className="mb-8">
                  <button className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white py-5 px-8 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-[#667eea]/25 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3 group">
                    <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span>Start Writing Essays</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Lightbulb className="w-5 h-5 text-[#667eea]" />
                    <p className="text-[#8e8ea0] font-medium">Quick topic suggestions:</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {quickTopics.map((topic, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                          selectedTopic === topic
                            ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-lg'
                            : 'bg-[#2f2f2f] text-[#8e8ea0] hover:bg-[#667eea]/20 hover:text-white hover:scale-105'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Enhanced Recent Essay Preview */}
                <div className="bg-[#212121] border border-[#2f2f2f] rounded-xl p-6 hover:border-[#667eea]/30 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-[#667eea]" />
                      <h3 className="font-semibold">Continue Your Last Essay</h3>
                    </div>
                    <span className="text-xs text-[#8e8ea0] bg-[#2f2f2f] px-3 py-1 rounded-full">2 hours ago</span>
                  </div>
                  <h4 className="font-medium mb-3 text-white">The Future of Renewable Energy</h4>
                  <p className="text-[#8e8ea0] text-sm leading-relaxed mb-4">
                    "The transition to renewable energy represents one of the most significant challenges and opportunities of our time. As nations grapple with climate change and environmental sustainability, the shift towards clean energy sources..."
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-[#8e8ea0]">
                      <span>856 words</span>
                      <span>•</span>
                      <span>95% complete</span>
                    </div>
                    <button className="text-[#667eea] hover:text-[#764ba2] font-medium text-sm transition-colors group-hover:translate-x-1 flex items-center space-x-1">
                      <span>Continue editing</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Recent Activity */}
            <div className="bg-[#171717] border border-[#2f2f2f] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <History className="w-6 h-6 text-[#667eea]" />
                  <h3 className="text-xl font-semibold">Recent Activity</h3>
                </div>
                <button className="text-[#667eea] hover:text-[#764ba2] text-sm font-medium transition-colors">
                  View all
                </button>
              </div>
              <div className="space-y-3">
                {recentEssays.map((essay, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-[#212121] border border-[#2f2f2f] rounded-xl hover:border-[#667eea]/40 transition-all duration-200 group cursor-pointer hover:transform hover:scale-[1.02]">
                    <div className="flex-1">
                      <h4 className="font-medium group-hover:text-[#667eea] transition-colors mb-2">{essay.title}</h4>
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="text-[#8e8ea0] text-sm">{essay.words} words</span>
                        <span className="text-[#8e8ea0] text-sm">•</span>
                        <span className="text-[#8e8ea0] text-sm">{essay.date}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                          essay.status === 'Complete' 
                            ? 'bg-green-400/20 text-green-400' 
                            : 'bg-orange-400/20 text-orange-400'
                        }`}>
                          {essay.status}
                        </span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-1 bg-[#2f2f2f] rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-[#667eea] to-[#764ba2] transition-all duration-300"
                              style={{ width: `${essay.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-[#8e8ea0]">{essay.progress}%</span>
                        </div>
                      </div>
                    </div>
                    <FileText className="w-5 h-5 text-[#8e8ea0] group-hover:text-[#667eea] transition-colors ml-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            {/* Enhanced Credits Section */}
            <div className="bg-[#171717] border border-[#2f2f2f] rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#667eea]/5 to-[#764ba2]/5 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#212121] rounded-lg border border-[#2f2f2f]">
                    <CreditCard className="w-5 h-5 text-[#667eea]" />
                  </div>
                  <h3 className="text-lg font-semibold">Credits</h3>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-2">5</div>
                  <div className="text-[#8e8ea0] text-sm font-medium">Credits Available</div>
                </div>
                
                <div className="bg-[#212121] border border-[#2f2f2f] rounded-xl p-4 mb-6">
                  <div className="text-sm text-[#8e8ea0] font-medium mb-3">Usage Breakdown:</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Each essay</span>
                      <span className="text-[#667eea] font-medium">1 credit</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Template access</span>
                      <span className="text-green-400 font-medium">Included</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Unlimited revisions</span>
                      <span className="text-green-400 font-medium">Included</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white py-4 px-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#667eea]/25 transition-all duration-300 hover:scale-105">
                  Buy More Credits
                </button>
              </div>
            </div>

            {/* Enhanced Quick Actions */}
            <div className="bg-[#171717] border border-[#2f2f2f] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-6 flex items-center space-x-3">
                <Zap className="w-5 h-5 text-[#667eea]" />
                <span>Quick Actions</span>
              </h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <button key={index} className={`w-full flex items-center justify-between p-4 bg-[#212121] border border-[#2f2f2f] rounded-xl hover:border-[#667eea]/50 ${action.bg} transition-all duration-200 group hover:scale-105`}>
                    <div className="flex items-center space-x-3">
                      <action.icon className={`w-5 h-5 ${action.color}`} />
                      <span className="group-hover:text-white transition-colors font-medium">{action.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#8e8ea0] group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced News/Updates */}
            <div className="bg-[#171717] border border-[#2f2f2f] rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-[#212121] rounded-lg border border-[#2f2f2f]">
                  <Lightbulb className="w-5 h-5 text-[#667eea]" />
                </div>
                <h3 className="text-lg font-semibold">Latest Updates</h3>
              </div>
              <div className="space-y-4">
                {newsItems.map((item, index) => (
                  <div key={index} className="border border-[#2f2f2f] rounded-xl p-4 hover:border-[#667eea]/30 transition-all duration-200 group cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm group-hover:text-[#667eea] transition-colors">{item.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.type === 'feature' ? 'bg-green-400/20 text-green-400' :
                        item.type === 'update' ? 'bg-blue-400/20 text-blue-400' :
                        'bg-purple-400/20 text-purple-400'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                    <p className="text-[#8e8ea0] text-xs leading-relaxed mb-3">{item.description}</p>
                    <div className="flex items-center space-x-2 text-[#8e8ea0]">
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;