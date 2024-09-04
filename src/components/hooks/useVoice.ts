/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

// Definisikan tipe untuk `SpeechRecognition` dan `SpeechRecognitionEvent` jika belum ada
interface SpeechRecognition {
  continuous: boolean;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionEvent) => void) | null;
  start(): void;
  stop(): void;
}

interface SpeechRecognitionEvent {
  results: {
    [key: number]: {
      0: {
        transcript: string;
      };
    };
    length: number;
  };
}

let speech: SpeechRecognition | null = null;

if (typeof window !== 'undefined' && (window as any).webkitSpeechRecognition) {
  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  speech = new SpeechRecognition();
  speech!.continuous = true;
} else {
  speech = null;
}

const useVoice = () => {
  const [text, setText] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);

  const listen = () => {
    setIsListening((prevState) => !prevState);
    console.log('Is listening:', !isListening);

    if (speech) {
      console.log('Speech recognition initialized:', speech);
    } else {
      console.log('Speech recognition not supported');
    }

    if (isListening && speech) {
      console.log('Stopping speech recognition...');
      speech.stop();
    } else if (speech) {
      console.log('Starting speech recognition...');
      speech.start();
    }
  };

  useEffect(() => {
    if (!speech) {
      return;
    }

    speech.onresult = (event: SpeechRecognitionEvent) => {
      console.log('Speech recognition result event:', event);
      setText(event.results[event.results.length - 1][0].transcript);
      setIsListening(false);
      speech.stop();
    };

    speech.onerror = (event: any) => {
      setText(event);
      console.error('Speech recognition error:', event);
    };

    return () => {
      if (speech) {
        console.log('Cleaning up speech recognition event listeners');
        speech.onresult = null;
        speech.onerror = null;
      }
    };
  }, []);

  console.log(text);

  return {
    text,
    isListening,
    listen,
    voiceSupported: speech !== null,
  };
};

export { useVoice };
