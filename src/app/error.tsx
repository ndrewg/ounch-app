'use client';

import { FaceFrownIcon } from '@heroicons/react/16/solid';
import Header from '@/app/ui/Header/Header';
import { Button } from '@nextui-org/react';

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => {};
}) => {
  return (
    <main>
      <Header />
      <div className='max-w-[400px] mx-auto text-center'>
        <FaceFrownIcon />
        <h2 className='text-3xl font-bold'>Something went wrong</h2>
        <Button onClick={() => reset()} className='mt-4 font-bold text-lg'>
          Try again
        </Button>
      </div>
    </main>
  );
};

export default Error;
