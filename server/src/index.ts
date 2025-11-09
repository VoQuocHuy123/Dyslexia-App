import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { router as authRouter } from './routes/auth.js';
import { router as settingsRouter } from './routes/settings.js';
import { router as libraryRouter } from './routes/library.js';
import { router as sessionsRouter } from './routes/sessions.js';
import { router as dashboardRouter } from './routes/dashboard.js';
import { router as readingsRouter } from './routes/readings.js';
import { router as speakingsRouter } from './routes/speakings.js';
import { router as ocrRouter } from './routes/ocr.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '10mb' })); // Increased for file uploads
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'dyslexia-backend', time: new Date().toISOString() });
});

// API Routes
app.use('/api/auth', authRouter);
app.use('/api/settings', settingsRouter);
app.use('/api/library', libraryRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/dashboard', dashboardRouter);
app.use('/api/readings', readingsRouter);
app.use('/api/speakings', speakingsRouter);
app.use('/api/ocr', ocrRouter);

// Error handling middleware
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

const PORT = Number(process.env.PORT ?? 4000);
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API running on http://localhost:${PORT}`);
  // eslint-disable-next-line no-console
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});



