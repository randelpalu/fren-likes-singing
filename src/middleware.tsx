import { NextResponse, NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const response = NextResponse.next()
  response.headers.set('Cache-Control', 'max-age=2147483647')

  return response
}

export const config = {
  matcher: '/audio/:path*',
}
