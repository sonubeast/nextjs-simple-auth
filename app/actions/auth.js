'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  // Replace this mock verification with real authentication logic
  if (email === 'user@example.com' && password === 'password123') {
    const cookieStore = await cookies();
    cookieStore.set('session', 'mock-session-token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });

    redirect('/dashboard');
  }

  return { error: 'Invalid email or password.' };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
  redirect('/login');
}
