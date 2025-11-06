import { Sidebar } from './Sidebar';
import { ReadingCard } from './ReadingCard';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ReadingSelectionPageProps {
  onNavigate?: (page: 'Home' | 'Reading' | 'ReadingSelection' | 'Speaking' | 'SpeakingSelection' | 'Library' | 'SettingsOverview' | 'DisplaySettings' | 'AudioSettings' | 'OCRImport') => void;
  onSignOut?: () => void;
  isSidebarCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function ReadingSelectionPage({ onNavigate, onSignOut, isSidebarCollapsed = false, onToggleCollapse }: ReadingSelectionPageProps) {
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [topicScrollIndex, setTopicScrollIndex] = useState(0);

  // Level filter options
  const levels = ['All', 'A1', 'A2', 'B1', 'B2'];

  // Topic filter options with emojis
  const topics = [
    { icon: '🐶', name: 'Động vật' },
    { icon: '🌳', name: 'Thiên nhiên' },
    { icon: '🍎', name: 'Thức ăn' },
    { icon: '👪', name: 'Gia đình' },
    { icon: '📚', name: 'Truyện' },
    { icon: '🎨', name: 'Học tập' },
    { icon: '🏖️', name: 'Phiêu lưu' },
    { icon: '⚽', name: 'Thể thao' },
  ];

  // Number of topics to show at once
  const topicsPerView = 4;
  const maxScrollIndex = Math.max(0, Math.ceil(topics.length / topicsPerView) - 1);

  // Get visible topics
  const visibleTopics = topics.slice(
    topicScrollIndex * topicsPerView,
    (topicScrollIndex + 1) * topicsPerView
  );

  // Sample reading materials
  const readings = [
    {
      id: 1,
      title: "Vườn Bướm",
      topic: "Thiên nhiên",
      level: "A1"
    },
    {
      id: 2,
      title: "Gia Đình Tôi",
      topic: "Gia đình",
      level: "A1"
    },
    {
      id: 3,
      title: "Động Vật Ở Sở Thú",
      topic: "Động vật",
      level: "A2"
    },
    {
      id: 4,
      title: "Một Ngày Ở Bãi Biển",
      topic: "Thiên nhiên",
      level: "A2"
    },
    {
      id: 5,
      title: "Chú Chó Thân Thiện",
      topic: "Động vật",
      level: "B1"
    },
    {
      id: 6,
      title: "Cuộc Phiêu Lưu Mùa Hè",
      topic: "Truyện",
      level: "B1"
    },
    {
      id: 7,
      title: "Giúp Đỡ Ở Nhà",
      topic: "Gia đình",
      level: "A1"
    },
    {
      id: 8,
      title: "Màu Sắc Xung Quanh",
      topic: "Học tập",
      level: "A1"
    },
    {
      id: 9,
      title: "Cây Thần Kỳ",
      topic: "Truyện",
      level: "B2"
    },
    {
      id: 10,
      title: "Hoa Quả Và Rau Củ",
      topic: "Thức ăn",
      level: "A1"
    },
    {
      id: 11,
      title: "Món Ăn Yêu Thích",
      topic: "Thức ăn",
      level: "A2"
    },
    {
      id: 12,
      title: "Chơi Ở Công Viên",
      topic: "Phiêu lưu",
      level: "B1"
    },
  ];

  // Filter readings based on selected level and topic
  const filteredReadings = readings.filter((reading) => {
    const levelMatch = selectedLevel === 'All' || reading.level === selectedLevel;
    const topicMatch = !selectedTopic || reading.topic === selectedTopic;
    return levelMatch && topicMatch;
  });

  const handleReadingClick = () => {
    if (onNavigate) {
      onNavigate('Reading');
    }
  };

  return (
    <div className="flex h-screen bg-[#FFF8E7]">
      {/* Sidebar */}
      <Sidebar 
        activePage="Đọc" 
        onNavigate={onNavigate}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={onToggleCollapse}
        onSignOut={onSignOut}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto p-12">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-7 h-7 text-[#666666]" />
              <input
                type="text"
                placeholder="Tìm kiếm bài đọc..."
                className="w-full bg-[#FFFCF2] border-2 border-[#E0DCCC] rounded-3xl pl-16 pr-6 py-5 text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#D4C5A9] focus:ring-0 shadow-md transition-all"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '24px',
                  letterSpacing: '0.12em',
                }}
              />
            </div>
          </div>

          {/* Level Filter */}
          <div className="mb-8">
            <div className="flex gap-4 flex-wrap">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-8 py-3 rounded-2xl border-2 transition-all shadow-sm ${
                    selectedLevel === level
                      ? 'bg-[#D4E7F5] border-[#B8D4E8] text-[#111111]'
                      : 'bg-[#FFFCF2] border-[#E0DCCC] text-[#111111] hover:bg-[#FFF4E0]'
                  }`}
                  style={{
                    fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                    fontSize: '24px',
                    letterSpacing: '0.12em',
                  }}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Topic Filter with Horizontal Scroll */}
          <div className="mb-12">
            <div 
              className="text-[#111111] mb-4"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '26px',
                letterSpacing: '0.12em',
              }}
            >
              Chủ đề:
            </div>
            <div className="flex items-center gap-4">
              {/* Left Arrow Button */}
              {topicScrollIndex > 0 && (
                <button
                  onClick={() => setTopicScrollIndex(topicScrollIndex - 1)}
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D4E7F5] border-2 border-[#B8D4E8] flex items-center justify-center hover:bg-[#C5DCF0] transition-all shadow-md"
                  aria-label="Previous topics"
                >
                  <ChevronLeft className="w-6 h-6 text-[#111111]" />
                </button>
              )}

              {/* Topic Chips Container */}
              <div className="flex-1 overflow-hidden">
                <div className="flex gap-4 transition-all duration-500 ease-in-out">
                  {visibleTopics.map((topic) => (
                    <button
                      key={topic.name}
                      onClick={() => setSelectedTopic(selectedTopic === topic.name ? null : topic.name)}
                      className={`flex-shrink-0 px-6 py-3 rounded-2xl border-2 transition-all shadow-sm ${
                        selectedTopic === topic.name
                          ? 'bg-[#FFE8CC] border-[#E8DCC8] text-[#111111]'
                          : 'bg-[#FFFCF2] border-[#E0DCCC] text-[#111111] hover:bg-[#FFF4E0]'
                      }`}
                      style={{
                        fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                        fontSize: '24px',
                        letterSpacing: '0.12em',
                      }}
                    >
                      <span className="mr-2">{topic.icon}</span>
                      {topic.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Arrow Button */}
              {topicScrollIndex < maxScrollIndex && (
                <button
                  onClick={() => setTopicScrollIndex(topicScrollIndex + 1)}
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D4E7F5] border-2 border-[#B8D4E8] flex items-center justify-center hover:bg-[#C5DCF0] transition-all shadow-md"
                  aria-label="Next topics"
                >
                  <ChevronRight className="w-6 h-6 text-[#111111]" />
                </button>
              )}
            </div>
          </div>

          {/* Reading Cards Grid - 2 columns */}
          <div className="grid grid-cols-2 gap-8">
            {filteredReadings.map((reading) => (
              <ReadingCard
                key={reading.id}
                title={reading.title}
                topic={reading.topic}
                level={`Cấp ${reading.level}`}
                onClick={handleReadingClick}
              />
            ))}
          </div>

          {/* No results message */}
          {filteredReadings.length === 0 && (
            <div 
              className="text-center text-[#666666] py-12"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '24px',
                letterSpacing: '0.12em',
              }}
            >
              No readings found. Try adjusting your filters.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}