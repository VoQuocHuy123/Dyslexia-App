import { Router } from 'express';

export const router = Router();

// Import sessions to calculate metrics
// Note: In a real app, this would be from a database
const getSessions = () => {
  // This would be imported from sessions route, but for now we'll mock it
  return [];
};

// GET /api/dashboard/metrics - Get dashboard metrics
router.get('/metrics', (req, res) => {
  const userId = (req.query.userId as string) || (req.headers['x-user-id'] as string) || 'demo';
  
  // In a real app, these would be calculated from actual data
  // For now, return mocked data
  res.json({
    totalReadingMinutes: 123,
    totalSpeakingMinutes: 45,
    completedSessions: 18,
    wordsLearned: 256,
    streakDays: 5,
  });
});

// GET /api/dashboard/recent-reading - Get recent reading preview
router.get('/recent-reading', (req, res) => {
  const userId = (req.query.userId as string) || (req.headers['x-user-id'] as string) || 'demo';
  
  // In a real app, this would fetch the most recent reading session
  res.json({
    title: 'Vườn Bướm',
    preview: 'Con bướm đáp nhẹ nhàng trên bông hoa đầy màu sắc. Đôi cánh của nó có màu cam và đen tươi sáng, với những hoa văn đẹp trông giống như những ô cửa sổ nhỏ. Con bướm nghỉ ở đó một lúc, tận hưởng ánh nắng ấm áp. Đột nhiên, một cơn gió nhẹ thổi qua khu vườn. Con bướm mở và khép đôi cánh từ từ, như thể nó đang chào gió. Sau đó nó bay lên bầu trời, nhảy múa giữa những đám mây. Lũ trẻ quan sát từ bên dưới, chỉ tay và mỉm cười. Chúng thích nhìn con bướm nhảy múa trên không. Đó là một ngày hè hoàn hảo.',
    materialId: '1',
    lastReadAt: new Date().toISOString(),
  });
});

// GET /api/dashboard/new-words - Get new words from library
router.get('/new-words', (req, res) => {
  const userId = (req.query.userId as string) || (req.headers['x-user-id'] as string) || 'demo';
  const limit = parseInt(req.query.limit as string) || 3;
  
  // In a real app, this would fetch recent words from library
  // For now, return mocked data
  res.json([
    { word: 'bướm', definition: 'côn trùng có cánh' },
    { word: 'nhẹ nhàng', definition: 'mềm mại và cẩn thận' },
    { word: 'màu sắc', definition: 'có nhiều màu' },
  ].slice(0, limit));
});



