import { Sidebar } from './Sidebar';
import { useState, useEffect, useRef } from 'react';
import { Upload, Search, Filter, Edit2, Trash2, Check, X } from 'lucide-react';
import { Input } from './ui/input';

interface OCRImportPageProps {
  onNavigate?: (page: 'Home' | 'Reading' | 'ReadingSelection' | 'Speaking' | 'SpeakingSelection' | 'Library' | 'SettingsOverview' | 'DisplaySettings' | 'AudioSettings' | 'OCRImport') => void;
  isSidebarCollapsed?: boolean;
  onToggleCollapse?: () => void;
  onSignOut?: () => void;
}

interface ReadingFile {
  id: string;
  name: string;
  dateAdded: string;
}

export function OCRImportPage({ onNavigate, isSidebarCollapsed = false, onToggleCollapse, onSignOut }: OCRImportPageProps) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [editingFileId, setEditingFileId] = useState<string | null>(null);
  const [editedFileName, setEditedFileName] = useState('');
  const popupRef = useRef<HTMLDivElement>(null);
  
  // Sample reading files data
  const [readingFiles, setReadingFiles] = useState<ReadingFile[]>([
    { id: '1', name: 'Con bướm và bông hoa', dateAdded: '2024-10-28' },
    { id: '2', name: 'Câu chuyện về rừng xanh', dateAdded: '2024-10-25' },
    { id: '3', name: 'Những ngôi sao trên trời', dateAdded: '2024-10-20' },
    { id: '4', name: 'Bài học về động vật', dateAdded: '2024-10-15' },
  ]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleConfirm = () => {
    if (uploadedFile) {
      // Add the file to the reading list
      const newReading: ReadingFile = {
        id: Date.now().toString(),
        name: uploadedFile.name.replace(/\.[^/.]+$/, ''),
        dateAdded: new Date().toISOString().split('T')[0],
      };
      setReadingFiles([newReading, ...readingFiles]);
      setUploadedFile(null);
      console.log('File confirmed and added:', uploadedFile.name);
    }
  };

  const handleDelete = () => {
    setUploadedFile(null);
  };

  const handleEditReading = (id: string) => {
    const file = readingFiles.find(f => f.id === id);
    if (file) {
      setEditingFileId(id);
      setEditedFileName(file.name);
      setIsEditPopupOpen(true);
    }
  };

  const handleConfirmEdit = () => {
    if (editingFileId && editedFileName.trim()) {
      setReadingFiles(readingFiles.map(file =>
        file.id === editingFileId
          ? { ...file, name: editedFileName.trim() }
          : file
      ));
      handleCancelEdit();
    }
  };

  const handleCancelEdit = () => {
    setIsEditPopupOpen(false);
    setEditingFileId(null);
    setEditedFileName('');
  };

  const handleDeleteReading = (id: string) => {
    setReadingFiles(readingFiles.filter(file => file.id !== id));
  };

  const filteredReadings = readingFiles.filter(file =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close popup when clicking outside or pressing Escape
  useEffect(() => {
    if (isEditPopupOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
          handleCancelEdit();
        }
      };

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          handleCancelEdit();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isEditPopupOpen]);

  return (
    <div className="flex h-screen bg-[#FFF8E7]">
      {/* Sidebar */}
      <Sidebar 
        activePage="Nhập OCR" 
        onNavigate={onNavigate} 
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={onToggleCollapse}
        onSignOut={onSignOut}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto p-12">
          {/* File Upload Section */}
          <div className="mb-10">
            <div className="flex gap-6 items-stretch">
              {/* Upload Area */}
              <div className="flex-1">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept=".jpg,.png,.docx"
                  onChange={handleFileSelect}
                />
                <label
                  htmlFor="file-upload"
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`flex items-center justify-center h-full min-h-[200px] cursor-pointer bg-[#FFFCF2] border-2 border-dashed rounded-xl p-8 transition-all ${
                    isDragging
                      ? 'border-[#B8D4E8] bg-[#F0F8FF]'
                      : 'border-[#E0DCCC] hover:border-[#D0CCC0]'
                  }`}
                >
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#FFE8CC] flex items-center justify-center">
                      <Upload className="w-8 h-8 text-[#111111]" />
                    </div>
                    <div className="text-center">
                      <p
                        className="text-[#111111] mb-2"
                        style={{
                          fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                          fontSize: '26px',
                          letterSpacing: '0.12em',
                        }}
                      >
                        {uploadedFile ? uploadedFile.name : 'Kéo thả hoặc chọn tệp để thêm bài đọc'}
                      </p>
                      <p
                        className="text-[#888888]"
                        style={{
                          fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                          fontSize: '24px',
                          letterSpacing: '0.12em',
                        }}
                      >
                        Hỗ trợ: .jpg, .png, .docx
                      </p>
                    </div>
                  </div>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 justify-center">
                <button
                  onClick={handleDelete}
                  disabled={!uploadedFile}
                  className={`w-32 h-24 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${
                    uploadedFile
                      ? 'bg-[#FFE8E8] border-[#FFCCCC] hover:bg-[#FFD8D8] text-[#111111]'
                      : 'bg-[#F5F5F5] border-[#E0E0E0] text-[#999999] cursor-not-allowed'
                  }`}
                  style={{
                    fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                    fontSize: '24px',
                  }}
                >
                  <Trash2 className="w-6 h-6" />
                  <span>Xóa</span>
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={!uploadedFile}
                  className={`w-32 h-24 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${
                    uploadedFile
                      ? 'bg-[#D4E7F5] border-[#B8D4E8] hover:bg-[#C5DCF0] text-[#111111]'
                      : 'bg-[#F5F5F5] border-[#E0E0E0] text-[#999999] cursor-not-allowed'
                  }`}
                  style={{
                    fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                    fontSize: '24px',
                  }}
                >
                  <Check className="w-5 h-5" />
                  <span>Xác nhận</span>
                </button>
              </div>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-8">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666666]" />
                <Input
                  type="text"
                  placeholder="Tìm bài đọc theo tên..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-6 bg-[#FFFCF2] border-2 border-[#E0DCCC] rounded-xl focus:border-[#B8D4E8] focus:ring-2 focus:ring-[#B8D4E8] focus:ring-opacity-20"
                  style={{
                    fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                    fontSize: '24px',
                  }}
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666666] hover:text-[#111111] transition-colors">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Reading Files List */}
          <div className="space-y-4">
            <h2
              className="text-[#111111] mb-6"
              style={{
                fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                fontSize: '30px',
                letterSpacing: '0.12em',
              }}
            >
              Danh sách bài đọc ({filteredReadings.length})
            </h2>
            
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
              {filteredReadings.map((file) => (
                <div
                  key={file.id}
                  className="bg-[#FFFCF2] rounded-xl border-2 border-[#E0DCCC] p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p
                        className="text-[#111111] mb-2"
                        style={{
                          fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                          fontSize: '26px',
                          letterSpacing: '0.12em',
                        }}
                      >
                        <span className="text-[#666666]">Tên:</span> {file.name}
                      </p>
                      <p
                        className="text-[#666666]"
                        style={{
                          fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                          fontSize: '24px',
                          letterSpacing: '0.12em',
                        }}
                      >
                        Ngày tạo: {file.dateAdded}
                      </p>
                    </div>
                    
                    <div className="flex gap-3 ml-4">
                      <button
                        onClick={() => handleEditReading(file.id)}
                        className="px-6 py-3 bg-[#D4E7F5] border-2 border-[#B8D4E8] rounded-xl hover:bg-[#C5DCF0] transition-all flex items-center gap-2"
                        style={{
                          fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                          fontSize: '24px',
                        }}
                      >
                        <Edit2 className="w-5 h-5" />
                        <span>Sửa</span>
                      </button>
                      <button
                        onClick={() => handleDeleteReading(file.id)}
                        className="px-6 py-3 bg-[#FFE8E8] border-2 border-[#FFCCCC] rounded-xl hover:bg-[#FFD8D8] transition-all flex items-center gap-2"
                        style={{
                          fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                          fontSize: '24px',
                        }}
                      >
                        <Trash2 className="w-5 h-5" />
                        <span>Xóa</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredReadings.length === 0 && (
              <div className="text-center py-12">
                <p
                  className="text-[#888888]"
                  style={{
                    fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                    fontSize: '24px',
                    letterSpacing: '0.12em',
                  }}
                >
                  Không tìm thấy bài đọc nào
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Edit Name Popup */}
        {isEditPopupOpen && (
          <div className="fixed inset-0 backdrop-blur-sm bg-[#fff8e7] bg-opacity-60 z-40 flex items-center justify-center">
            <div 
              ref={popupRef}
              className="bg-[#fffcf2] rounded-3xl border-2 border-[#e0dccc] shadow-2xl p-8 w-[420px]"
            >
              <h3
                className="text-[#111111] mb-6 text-center"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '28px',
                  letterSpacing: '0.12em',
                }}
              >
                Sửa tên bài đọc
              </h3>

              {/* Input Field */}
              <input
                type="text"
                value={editedFileName}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= 50) {
                    setEditedFileName(value);
                  }
                }}
                maxLength={50}
                placeholder="Nhập tên bài đọc..."
                autoFocus
                className="w-full bg-[#fff8e7] border-2 border-[#e0dccc] rounded-2xl px-6 py-4 mb-2 text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#d4c5a9] focus:ring-0 shadow-sm transition-all"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '24px',
                  letterSpacing: '0.12em',
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleConfirmEdit();
                  }
                }}
              />

              {/* Character Counter */}
              <div
                className="text-right text-[#666666] mb-6"
                style={{
                  fontFamily: "'OpenDyslexic', 'Lexend', sans-serif",
                  fontSize: '18px',
                }}
              >
                {editedFileName.length}/50
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                {/* Cancel Button (X) */}
                <button
                  onClick={handleCancelEdit}
                  className="w-14 h-14 rounded-full bg-[#FAD4D4] hover:bg-[#F5BABA] border-2 border-[#F5BABA] flex items-center justify-center transition-all shadow-md hover:shadow-lg"
                  aria-label="Huỷ"
                  title="Huỷ"
                >
                  <X className="w-7 h-7 text-[#111111]" strokeWidth={3} />
                </button>

                {/* Confirm Button (✓) */}
                <button
                  onClick={handleConfirmEdit}
                  disabled={!editedFileName.trim()}
                  className="w-14 h-14 rounded-full bg-[#D4E7F5] hover:bg-[#C5DCF0] border-2 border-[#B8D4E8] flex items-center justify-center transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Xác nhận"
                  title="Xác nhận"
                >
                  <Check className="w-8 h-8 text-[#111111]" strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
