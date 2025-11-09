import { Router } from 'express';

export const router = Router();

type Word = {
  id: string;
  text: string;
  userId: string;
  dateAdded: string;
};

// In-memory words storage
const words = new Map<string, Word>();
const wordsByUser = new Map<string, Word[]>();

// Helper to get words for a user
function getUserWords(userId: string): Word[] {
  return Array.from(words.values()).filter(w => w.userId === userId);
}

// GET /api/library/words - Get all words for user (with optional search and filter)
router.get('/words', (req, res) => {
  const userId = (req.query.userId as string) || (req.headers['x-user-id'] as string) || 'demo';
  const searchQuery = (req.query.search as string) || '';
  const letterFilter = req.query.letter as string | undefined;
  
  let userWords = getUserWords(userId);
  
  // Apply search filter
  if (searchQuery) {
    userWords = userWords.filter(w => 
      w.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  
  // Apply letter filter
  if (letterFilter) {
    userWords = userWords.filter(w => 
      w.text.charAt(0).toUpperCase() === letterFilter.toUpperCase()
    );
  }
  
  // Sort by dateAdded descending
  userWords.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
  
  res.json(userWords);
});

// POST /api/library/words - Add a new word
router.post('/words', (req, res) => {
  const userId = (req.body.userId as string) || (req.headers['x-user-id'] as string) || 'demo';
  const { text } = req.body ?? {};
  
  if (!text || !text.trim()) {
    return res.status(400).json({ error: 'text is required' });
  }
  
  if (text.length > 15) {
    return res.status(400).json({ error: 'text must be 15 characters or less' });
  }
  
  // Check if word already exists for this user
  const existingWords = getUserWords(userId);
  if (existingWords.some(w => w.text.toLowerCase() === text.toLowerCase())) {
    return res.status(409).json({ error: 'word already exists' });
  }
  
  const id = `w_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const word: Word = {
    id,
    text: text.trim(),
    userId,
    dateAdded: new Date().toISOString(),
  };
  
  words.set(id, word);
  
  // Update user words cache
  const userWordsList = wordsByUser.get(userId) || [];
  userWordsList.push(word);
  wordsByUser.set(userId, userWordsList);
  
  res.status(201).json(word);
});

// DELETE /api/library/words/:id - Delete a word
router.delete('/words/:id', (req, res) => {
  const userId = (req.query.userId as string) || (req.headers['x-user-id'] as string) || 'demo';
  const word = words.get(req.params.id);
  
  if (!word) {
    return res.status(404).json({ error: 'word not found' });
  }
  
  if (word.userId !== userId) {
    return res.status(403).json({ error: 'forbidden' });
  }
  
  words.delete(req.params.id);
  
  // Update user words cache
  const userWordsList = wordsByUser.get(userId) || [];
  const index = userWordsList.findIndex(w => w.id === req.params.id);
  if (index !== -1) {
    userWordsList.splice(index, 1);
    wordsByUser.set(userId, userWordsList);
  }
  
  res.status(204).send();
});

// POST /api/library/words/pronounce - Get pronunciation (stub)
router.post('/words/pronounce', (req, res) => {
  const { word } = req.body ?? {};
  if (!word) {
    return res.status(400).json({ error: 'word is required' });
  }
  // In a real app, this would return audio URL or trigger TTS
  res.json({ word, audioUrl: null, message: 'pronunciation requested' });
});



