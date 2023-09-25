// pages/index.js
'use client';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a><br/><br/>
        Les information de {user.name}! <a href="/api/auth/me">me</a>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}