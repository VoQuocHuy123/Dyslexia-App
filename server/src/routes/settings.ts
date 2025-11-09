import { Router } from 'express';

export const router = Router();

type AudioSettings = {
  speechRate: number;
  pitch: number;
  volume: number;
  voice: string | null;
};

type DisplaySettings = {
  fontSize: number;
  fontFamily: string;
  letterSpacing: number;
  lineSpacing: number;
  theme: 'light' | 'dark' | 'system' | number;
};

type Settings = {
  audio: AudioSettings;
  display: DisplaySettings;
};

const defaultSettings: Settings = {
  audio: { 
    speechRate: 1.0, 
    pitch: 1.0, 
    volume: 1.0, 
    voice: 'male-1' 
  },
  display: { 
    fontSize: 26, 
    fontFamily: "'OpenDyslexic', 'Lexend', sans-serif", 
    letterSpacing: 0.14, 
    lineSpacing: 1.8, 
    theme: 0 
  },
};

const userSettings = new Map<string, Settings>();

router.get('/', (req, res) => {
  const userId = (req.query.userId as string) || (req.headers['x-user-id'] as string) || 'demo';
  res.json(userSettings.get(userId) ?? defaultSettings);
});

router.get('/audio', (req, res) => {
  const userId = (req.query.userId as string) || (req.headers['x-user-id'] as string) || 'demo';
  const settings = userSettings.get(userId) ?? defaultSettings;
  res.json(settings.audio);
});

router.get('/display', (req, res) => {
  const userId = (req.query.userId as string) || (req.headers['x-user-id'] as string) || 'demo';
  const settings = userSettings.get(userId) ?? defaultSettings;
  res.json(settings.display);
});

router.put('/', (req, res) => {
  const userId = (req.query.userId as string) || (req.headers['x-user-id'] as string) || 'demo';
  const incoming = req.body as Partial<Settings>;
  const current = userSettings.get(userId) ?? defaultSettings;
  const merged: Settings = {
    audio: { ...current.audio, ...(incoming.audio ?? {}) },
    display: { ...current.display, ...(incoming.display ?? {}) },
  };
  userSettings.set(userId, merged);
  res.json(merged);
});

router.put('/audio', (req, res) => {
  const userId = (req.query.userId as string) || (req.headers['x-user-id'] as string) || 'demo';
  const current = userSettings.get(userId) ?? defaultSettings;
  const updated: Settings = {
    ...current,
    audio: { ...current.audio, ...(req.body as Partial<AudioSettings>) },
  };
  userSettings.set(userId, updated);
  res.json(updated.audio);
});

router.put('/display', (req, res) => {
  const userId = (req.query.userId as string) || (req.headers['x-user-id'] as string) || 'demo';
  const current = userSettings.get(userId) ?? defaultSettings;
  const updated: Settings = {
    ...current,
    display: { ...current.display, ...(req.body as Partial<DisplaySettings>) },
  };
  userSettings.set(userId, updated);
  res.json(updated.display);
});



