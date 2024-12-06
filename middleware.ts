import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  const path = request.nextUrl.pathname;
  if (!token && path === '/admin/login') {
    return NextResponse.next();
  }
  if (token && path === '/admin') {
    return NextResponse.next();
  }
  if (!token && path.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
