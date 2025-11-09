/**
 * Text-to-Speech utility using Web Speech API
 */

let voicesLoaded = false;
let voices: SpeechSynthesisVoice[] = [];

// Load voices when available
const loadVoices = () => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }

  try {
    voices = window.speechSynthesis.getVoices();
    voicesLoaded = voices.length > 0;
  } catch (error) {
    console.warn('Error loading voices:', error);
  }
};

// Initialize voices loading
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  // Try to load immediately
  loadVoices();
  
  // Some browsers load voices asynchronously
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
  
  // Also try loading after a short delay (for Chrome)
  setTimeout(loadVoices, 100);
  setTimeout(loadVoices, 500);
}

export interface SpeakOptions {
  text: string;
  lang?: string;
  rate?: number;
  pitch?: number;
  volume?: number;
  voice?: string;
}

/**
 * Speak text using Web Speech API
 */
export const speakText = (options: SpeakOptions): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      reject(new Error('Speech synthesis is not supported in this browser'));
      return;
    }

    // Always try to reload voices (some browsers load them lazily)
    loadVoices();
    
    // Get fresh voices list
    if (voices.length === 0) {
      voices = window.speechSynthesis.getVoices();
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const {
      text,
      lang = 'vi-VN',
      rate = 1.0,
      pitch = 1.0,
      volume = 1.0,
      voice,
    } = options;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;

    // Try to find and set voice (non-blocking - browser will use default if not found)
    if (voices.length > 0) {
      if (voice) {
        const selectedVoice = voices.find(
          (v) => v.name.includes(voice) || v.lang.includes(lang)
        );
        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }
      } else {
        // Try to find Vietnamese voice first
        let selectedVoice = voices.find((v) => v.lang.includes('vi'));
        
        // If no Vietnamese voice, try other languages that might work
        if (!selectedVoice) {
          // Try Thai (similar language family)
          selectedVoice = voices.find((v) => v.lang.includes('th'));
        }
        
        // If still no voice, try any available voice (browser will use default if not set)
        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }
      }
    }
    
    // Even without voices, browser will try to pronounce the text
    // Setting lang is the most important part

    utterance.onend = () => {
      resolve();
    };

    utterance.onerror = (event: SpeechSynthesisErrorEvent) => {
      const errorMessage = event.error || 'Speech synthesis error';
      console.error('Speech synthesis error:', errorMessage);
      reject(new Error(errorMessage));
    };

    // Start speaking
    try {
      window.speechSynthesis.speak(utterance);
      
      // Fallback: if speech doesn't start, reject after timeout
      setTimeout(() => {
        if (window.speechSynthesis.speaking === false && window.speechSynthesis.pending === false) {
          // Speech didn't start, might be an issue
          console.warn('Speech synthesis may not have started');
        }
      }, 100);
    } catch (error) {
      reject(error instanceof Error ? error : new Error('Failed to start speech'));
    }
  });
};

/**
 * Stop any ongoing speech
 */
export const stopSpeaking = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

/**
 * Get available voices
 */
export const getVoices = (): SpeechSynthesisVoice[] => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return [];
  }
  
  if (!voicesLoaded) {
    loadVoices();
  }
  
  return voices;
};

/**
 * Check if speech synthesis is supported
 */
export const isSpeechSynthesisSupported = (): boolean => {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
};

