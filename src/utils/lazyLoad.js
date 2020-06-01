import { lazy } from 'react';

export const LibraryList = lazy(() => import('../components/container/libraryList'));
export const BookList = lazy(() =>
  import('../components/container/bookList')
);
