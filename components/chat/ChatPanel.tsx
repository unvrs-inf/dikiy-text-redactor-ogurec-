"use client";

import { DocumentFile } from '@/lib/types';

interface ChatPanelProps {
  document: DocumentFile | null;
  onError: (message: string, type?: 'success' | 'error' | 'info') => void;
}

export default function ChatPanel({ document }: ChatPanelProps) {
  // Placeholder — will be implemented in Phase 5
  return (
    <div className="flex items-center justify-center h-full">
      <p className="text-gray-400 text-sm">
        {document ? 'Чат будет здесь...' : 'Загрузите документ, чтобы начать'}
      </p>
    </div>
  );
}
