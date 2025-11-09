/**
 * Audio Recording utility using MediaRecorder API
 */

export interface RecordingOptions {
  onDataAvailable?: (blob: Blob) => void;
  onError?: (error: Error) => void;
  onStart?: () => void;
  onStop?: () => void;
}

export class AudioRecorder {
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private stream: MediaStream | null = null;
  private options: RecordingOptions;

  constructor(options: RecordingOptions = {}) {
    this.options = options;
  }

  /**
   * Check if MediaRecorder is supported
   */
  static isSupported(): boolean {
    return typeof navigator !== 'undefined' && 
           'mediaDevices' in navigator && 
           'getUserMedia' in navigator.mediaDevices &&
           typeof MediaRecorder !== 'undefined';
  }

  /**
   * Start recording
   */
  async start(): Promise<void> {
    if (!AudioRecorder.isSupported()) {
      throw new Error('MediaRecorder is not supported in this browser');
    }

    try {
      // Request microphone access
      this.stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        } 
      });

      // Create MediaRecorder
      const options: MediaRecorderOptions = {
        mimeType: this.getSupportedMimeType(),
      };

      this.mediaRecorder = new MediaRecorder(this.stream, options);
      this.audioChunks = [];

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.audioChunks.push(event.data);
          this.options.onDataAvailable?.(event.data);
        }
      };

      this.mediaRecorder.onerror = (event) => {
        const error = new Error('Recording error occurred');
        this.options.onError?.(error);
      };

      this.mediaRecorder.onstop = () => {
        this.stopStream();
        this.options.onStop?.();
      };

      this.mediaRecorder.start(1000); // Collect data every second
      this.options.onStart?.();
    } catch (error) {
      this.stopStream();
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to start recording');
    }
  }

  /**
   * Stop recording
   */
  stop(): Promise<Blob> {
    return new Promise((resolve, reject) => {
      if (!this.mediaRecorder || this.mediaRecorder.state === 'inactive') {
        reject(new Error('Recording is not active'));
        return;
      }

      this.mediaRecorder.onstop = () => {
        this.stopStream();
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        resolve(audioBlob);
        this.options.onStop?.();
      };

      this.mediaRecorder.stop();
    });
  }

  /**
   * Get recording state
   */
  getState(): 'inactive' | 'recording' | 'paused' {
    return this.mediaRecorder?.state || 'inactive';
  }

  /**
   * Stop media stream
   */
  private stopStream(): void {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
  }

  /**
   * Get supported MIME type
   */
  private getSupportedMimeType(): string {
    const types = [
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/ogg;codecs=opus',
      'audio/mp4',
      'audio/mpeg',
    ];

    for (const type of types) {
      if (MediaRecorder.isTypeSupported(type)) {
        return type;
      }
    }

    return ''; // Browser will use default
  }
}

