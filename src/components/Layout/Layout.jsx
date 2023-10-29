import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { NavigationLink, Container, NavigationList } from './Layout.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Container>
      <header>
        <nav>
          <NavigationList>
            <li>
              <NavigationLink to={'/'}>Homepage</NavigationLink>
            </li>
            <li>
              <NavigationLink to={'/create'}>Create new quiz</NavigationLink>
            </li>
            <li>
              <NavigationLink to={'/quizzes'}>
                To see all quizzes
              </NavigationLink>
            </li>
          </NavigationList>
        </nav>
      </header>
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>

      <Toaster position="top-center" reverseOrder={false} />
    </Container>
  );
};
