"use client";

import { DocumentFile } from '@/lib/types';
import Spinner from '@/components/ui/Spinner';

interface DocumentViewerProps {
  document: DocumentFile;
  onGigaChatFileId: (id: string) => void;
  onUploadError: (error: string) => void;
  onUploadStart: () => void;
  onError: (message: string, type?: 'success' | 'error' | 'info') => void;
}

export default function DocumentViewer({ document }: DocumentViewerProps) {
  // Placeholder — will be implemented in Phase 3
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <Spinner size="lg" />
        <p className="mt-4 text-gray-500">Загрузка просмотрщика: {document.name}</p>
      </div>
    </div>
  );
}
