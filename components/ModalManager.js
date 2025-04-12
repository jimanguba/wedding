'use client';
import { useSearchParams } from 'next/navigation';
import TravelModal from './TravelModal';

export default function ModalManager() {
  const params = useSearchParams();
  const modalType = params.get('modal');

  return (
    <>
      {modalType === 'travel' && <TravelModal />}
    </>
  );
}
