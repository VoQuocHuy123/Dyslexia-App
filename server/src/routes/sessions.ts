import { Router } from 'express';

export const router = Router();

type Session = {
  id: string;
  type: 'reading' | 'speaking';
  userId: string;
  materialId?: string;
  startedAt: string;
  endedAt?: string;
  duration?: number; // in seconds
  progress?: number; // 0..1
  notes?: string;
  wordsLearned?: string[];
  accuracy?: number;
  incorrectWords?: number[];
};

const sessions = new Map<string, Session>();

// POST /api/sessions - Start a new session
router.post('/', (req, res) => {
  const userId = (req.body.userId as string) || (req.headers['x-user-id'] as string) || 'demo';
  const { type, materialId } = req.body ?? {};
  
  if (!type || (type !== 'reading' && type !== 'speaking')) {
    return res.status(400).json({ error: 'type must be "reading" or "speaking"' });
  }
  
  const id = `s_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const session: Session = {
    id,
    type,
    userId,
    materialId,
    startedAt: new Date().toISOString(),
  };
  
  sessions.set(id, session);
  res.status(201).json(session);
});

// PUT /api/sessions/:id - Update session (e.g., update progress)
router.put('/:id', (req, res) => {
  const session = sessions.get(req.params.id);
  if (!session) {
    return res.status(404).json({ error: 'session not found' });
  }
  
  const { progress, notes, wordsLearned, accuracy, incorrectWords } = req.body ?? {};
  
  if (typeof progress === 'number') session.progress = progress;
  if (notes !== undefined) session.notes = notes;
  if (wordsLearned) session.wordsLearned = wordsLearned;
  if (typeof accuracy === 'number') session.accuracy = accuracy;
  if (incorrectWords) session.incorrectWords = incorrectWords;
  
  sessions.set(req.params.id, session);
  res.json(session);
});

// PUT /api/sessions/:id/end - End a session
router.put('/:id/end', (req, res) => {
  const session = sessions.get(req.params.id);
  if (!session) {
    return res.status(404).json({ error: 'session not found' });
  }
  
  const endedAt = new Date().toISOString();
  const startedAt = new Date(session.startedAt);
  const duration = Math.floor((new Date(endedAt).getTime() - startedAt.getTime()) / 1000);
  
  session.endedAt = endedAt;
  session.duration = duration;
  
  const { progress, notes, wordsLearned, accuracy, incorrectWords } = req.body ?? {};
  if (typeof progress === 'number') session.progress = progress;
  if (notes !== undefined) session.notes = notes;
  if (wordsLearned) session.wordsLearned = wordsLearned;
  if (typeof accuracy === 'number') session.accuracy = accuracy;
  if (incorrectWords) session.incorrectWords = incorrectWords;
  
  sessions.set(req.params.id, session);
  res.json(session);
});

// GET /api/sessions - Get all sessions for user
router.get('/', (req, res) => {
  const userId = (req.query.userId as string) || (req.headers['x-user-id'] as string) || 'demo';
  const type = req.query.type as 'reading' | 'speaking' | undefined;
  
  let userSessions = Array.from(sessions.values()).filter(s => s.userId === userId);
  
  // Filter by type if provided
  if (type) {
    userSessions = userSessions.filter(s => s.type === type);
  }
  
  // Sort by startedAt descending
  userSessions.sort((a, b) => 
    new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime()
  );
  
  res.json(userSessions);
});

// GET /api/sessions/:id - Get session by ID
router.get('/:id', (req, res) => {
  const session = sessions.get(req.params.id);
  if (!session) {
    return res.status(404).json({ error: 'session not found' });
  }
  res.json(session);
});



