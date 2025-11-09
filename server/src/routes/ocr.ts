import { Router } from 'express';

export const router = Router();

type OCRFile = {
  id: string;
  name: string;
  userId: string;
  dateAdded: string;
  content?: string;
  status: 'pending' | 'processed' | 'error';
};

const ocrFiles = new Map<string, OCRFile>();
const ocrFilesByUser = new Map<string, OCRFile[]>();

// Helper to get OCR files for a user
function getUserOCRFiles(userId: string): OCRFile[] {
  return Array.from(ocrFiles.values()).filter(f => f.userId === userId);
}

// POST /api/ocr/upload - Upload and process OCR
router.post('/upload', (req, res) => {
  const userId = (req.body.userId as string) || (req.headers['x-user-id'] as string) || 'demo';
  const { fileName, fileData, fileType } = req.body ?? {};
  
  if (!fileName) {
    return res.status(400).json({ error: 'fileName is required' });
  }
  
  // Validate file type
  const allowedTypes = ['image/jpeg', 'image/png', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  if (fileType && !allowedTypes.some(t => fileType.includes(t.split('/')[1]))) {
    return res.status(400).json({ error: 'invalid file type. Only .jpg, .png, .docx are allowed' });
  }
  
  const id = `ocr_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  // Simulate OCR processing (in real app, this would call OCR service)
  const extractedText = fileData 
    ? 'This is mocked OCR text extracted from the uploaded file. In a real application, this would contain the actual text extracted using OCR technology.'
    : 'No file data provided';
  
  const ocrFile: OCRFile = {
    id,
    name: fileName.replace(/\.[^/.]+$/, ''), // Remove extension
    userId,
    dateAdded: new Date().toISOString(),
    content: extractedText,
    status: 'processed',
  };
  
  ocrFiles.set(id, ocrFile);
  
  // Update user files cache
  const userFilesList = ocrFilesByUser.get(userId) || [];
  userFilesList.push(ocrFile);
  ocrFilesByUser.set(userId, userFilesList);
  
  res.status(201).json({
    file: ocrFile,
    extractedText,
  });
});

// GET /api/ocr/files - Get all OCR files for user
router.get('/files', (req, res) => {
  const userId = (req.query.userId as string) || (req.headers['x-user-id'] as string) || 'demo';
  const search = (req.query.search as string) || '';
  
  let userFiles = getUserOCRFiles(userId);
  
  // Apply search filter
  if (search) {
    userFiles = userFiles.filter(f => 
      f.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  // Sort by dateAdded descending
  userFiles.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
  
  // Return only file metadata (not content)
  const filesMetadata = userFiles.map(f => ({
    id: f.id,
    name: f.name,
    dateAdded: f.dateAdded,
    status: f.status,
  }));
  
  res.json(filesMetadata);
});

// GET /api/ocr/files/:id - Get OCR file by ID
router.get('/files/:id', (req, res) => {
  const userId = (req.query.userId as string) || (req.headers['x-user-id'] as string) || 'demo';
  const file = ocrFiles.get(req.params.id);
  
  if (!file) {
    return res.status(404).json({ error: 'file not found' });
  }
  
  if (file.userId !== userId) {
    return res.status(403).json({ error: 'forbidden' });
  }
  
  res.json(file);
});

// PUT /api/ocr/files/:id - Update OCR file (e.g., rename)
router.put('/files/:id', (req, res) => {
  const userId = (req.query.userId as string) || (req.headers['x-user-id'] as string) || 'demo';
  const file = ocrFiles.get(req.params.id);
  
  if (!file) {
    return res.status(404).json({ error: 'file not found' });
  }
  
  if (file.userId !== userId) {
    return res.status(403).json({ error: 'forbidden' });
  }
  
  const { name } = req.body ?? {};
  if (name && name.trim()) {
    file.name = name.trim().substring(0, 50); // Max 50 characters
  }
  
  ocrFiles.set(req.params.id, file);
  res.json(file);
});

// DELETE /api/ocr/files/:id - Delete OCR file
router.delete('/files/:id', (req, res) => {
  const userId = (req.query.userId as string) || (req.headers['x-user-id'] as string) || 'demo';
  const file = ocrFiles.get(req.params.id);
  
  if (!file) {
    return res.status(404).json({ error: 'file not found' });
  }
  
  if (file.userId !== userId) {
    return res.status(403).json({ error: 'forbidden' });
  }
  
  ocrFiles.delete(req.params.id);
  
  // Update user files cache
  const userFilesList = ocrFilesByUser.get(userId) || [];
  const index = userFilesList.findIndex(f => f.id === req.params.id);
  if (index !== -1) {
    userFilesList.splice(index, 1);
    ocrFilesByUser.set(userId, userFilesList);
  }
  
  res.status(204).send();
});

