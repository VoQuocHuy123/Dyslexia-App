import { Router } from 'express';

export const router = Router();

type SpeakingMaterial = {
  id: string;
  title: string;
  topic: string;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  content?: string;
  userId?: string;
};

// Sample speaking materials (same as readings for now)
const speakings: SpeakingMaterial[] = [
  { id: '1', title: 'Vườn Bướm', topic: 'Thiên nhiên', level: 'A1', content: 'Con bướm đáp nhẹ nhàng trên bông hoa đầy màu sắc. Đôi cánh của nó có màu cam và đen tươi sáng, với những hoa văn đẹp trông giống như những ô cửa sổ nhỏ. Con bướm nghỉ ở đó một lúc, tận hưởng ánh nắng ấm áp. Đột nhiên, một cơn gió nhẹ thổi qua khu vườn. Con bướm mở và khép đôi cánh từ từ, như thể nó đang chào gió. Sau đó nó bay lên bầu trời, nhảy múa giữa những đám mây. Lũ trẻ quan sát từ bên dưới, chỉ tay và mỉm cười. Chúng thích nhìn con bướm nhảy múa trên không. Đó là một ngày hè hoàn hảo.' },
  { id: '2', title: 'Gia Đình Tôi', topic: 'Gia đình', level: 'A1' },
  { id: '3', title: 'Động Vật Ở Sở Thú', topic: 'Động vật', level: 'A2' },
  { id: '4', title: 'Một Ngày Ở Bãi Biển', topic: 'Thiên nhiên', level: 'A2' },
  { id: '5', title: 'Chú Chó Thân Thiện', topic: 'Động vật', level: 'B1' },
  { id: '6', title: 'Cuộc Phiêu Lưu Mùa Hè', topic: 'Truyện', level: 'B1' },
  { id: '7', title: 'Giúp Đỡ Ở Nhà', topic: 'Gia đình', level: 'A1' },
  { id: '8', title: 'Màu Sắc Xung Quanh', topic: 'Học tập', level: 'A1' },
  { id: '9', title: 'Cây Thần Kỳ', topic: 'Truyện', level: 'B2' },
  { id: '10', title: 'Hoa Quả Và Rau Củ', topic: 'Thức ăn', level: 'A1' },
  { id: '11', title: 'Món Ăn Yêu Thích', topic: 'Thức ăn', level: 'A2' },
  { id: '12', title: 'Chơi Ở Công Viên', topic: 'Phiêu lưu', level: 'B1' },
];

const speakingsMap = new Map<string, SpeakingMaterial>();
speakings.forEach(s => speakingsMap.set(s.id, s));

// GET /api/speakings - Get all speaking materials with filters
router.get('/', (req, res) => {
  const level = req.query.level as string | undefined;
  const topic = req.query.topic as string | undefined;
  const search = (req.query.search as string) || '';
  
  let filtered = Array.from(speakingsMap.values());
  
  // Filter by level
  if (level && level !== 'All') {
    filtered = filtered.filter(s => s.level === level);
  }
  
  // Filter by topic
  if (topic) {
    filtered = filtered.filter(s => s.topic === topic);
  }
  
  // Filter by search query
  if (search) {
    filtered = filtered.filter(s => 
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.topic.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  res.json(filtered);
});

// GET /api/speakings/:id - Get speaking content by ID
router.get('/:id', (req, res) => {
  const speaking = speakingsMap.get(req.params.id);
  if (!speaking) {
    return res.status(404).json({ error: 'speaking material not found' });
  }
  res.json(speaking);
});

// POST /api/speakings/:id/record - Submit recording (stub)
router.post('/:id/record', (req, res) => {
  const { audioBlob, userId } = req.body ?? {};
  const speaking = speakingsMap.get(req.params.id);
  
  if (!speaking) {
    return res.status(404).json({ error: 'speaking material not found' });
  }
  
  // In a real app, this would process the audio and provide feedback
  res.json({
    success: true,
    message: 'recording received',
    feedback: {
      accuracy: 0.85,
      incorrectWords: [5, 8],
      suggestions: [],
    },
  });
});

