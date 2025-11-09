import { Router } from 'express';

export const router = Router();

type ReadingMaterial = {
  id: string;
  title: string;
  topic: string;
  level: 'A1' | 'A2' | 'B1' | 'B2';
  content?: string;
  userId?: string;
};

// Sample reading materials
const readings: ReadingMaterial[] = [
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

const readingsMap = new Map<string, ReadingMaterial>();
readings.forEach(r => readingsMap.set(r.id, r));

// GET /api/readings - Get all readings with filters
router.get('/', (req, res) => {
  const level = req.query.level as string | undefined;
  const topic = req.query.topic as string | undefined;
  const search = (req.query.search as string) || '';
  
  let filtered = Array.from(readingsMap.values());
  
  // Filter by level
  if (level && level !== 'All') {
    filtered = filtered.filter(r => r.level === level);
  }
  
  // Filter by topic
  if (topic) {
    filtered = filtered.filter(r => r.topic === topic);
  }
  
  // Filter by search query
  if (search) {
    filtered = filtered.filter(r => 
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.topic.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  res.json(filtered);
});

// GET /api/readings/:id - Get reading content by ID
router.get('/:id', (req, res) => {
  const reading = readingsMap.get(req.params.id);
  if (!reading) {
    return res.status(404).json({ error: 'reading not found' });
  }
  res.json(reading);
});

// POST /api/readings - Create a new reading (for OCR imports)
router.post('/', (req, res) => {
  const { title, topic, level, content, userId } = req.body ?? {};
  
  if (!title) {
    return res.status(400).json({ error: 'title is required' });
  }
  
  const id = `r_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const reading: ReadingMaterial = {
    id,
    title,
    topic: topic || 'Khác',
    level: level || 'A1',
    content,
    userId,
  };
  
  readingsMap.set(id, reading);
  res.status(201).json(reading);
});

// PUT /api/readings/:id - Update reading
router.put('/:id', (req, res) => {
  const reading = readingsMap.get(req.params.id);
  if (!reading) {
    return res.status(404).json({ error: 'reading not found' });
  }
  
  const updated = { ...reading, ...req.body };
  readingsMap.set(req.params.id, updated);
  res.json(updated);
});

// DELETE /api/readings/:id - Delete reading
router.delete('/:id', (req, res) => {
  const reading = readingsMap.get(req.params.id);
  if (!reading) {
    return res.status(404).json({ error: 'reading not found' });
  }
  
  readingsMap.delete(req.params.id);
  res.status(204).send();
});

