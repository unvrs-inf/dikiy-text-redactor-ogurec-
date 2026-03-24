"use client";

import Modal from '@/components/ui/Modal';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  // Placeholder — will be implemented in Phase 6
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Настройки">
      <p className="text-gray-500 text-sm">Настройки будут здесь...</p>
    </Modal>
  );
}
