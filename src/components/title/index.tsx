import { FC } from 'react';

interface Props {
  title: string;
}

export const PageTitle: FC<Props> = ({ title }) => {
  return (
    <h1 className='flex h-16 w-screen items-center justify-center text-white'>
      {title}
    </h1>
  );
};
