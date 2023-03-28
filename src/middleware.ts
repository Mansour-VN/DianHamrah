import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/UserDashboard')) {
    if(request.cookies.get("token")?.value){
      return NextResponse.next()
    } else {
      return NextResponse.redirect(new URL('/Login', request.url))
    }
  }

  if(request.nextUrl.pathname.startsWith('/Login')){
    if(request.cookies.get("token")?.value){
      return  NextResponse.redirect(new URL('/UserDashboard', request.url))
    }
  }

  if(request.nextUrl.pathname.startsWith('/Admin')){
    if(request.cookies.get("token")?.value){
      return NextResponse.next()
    }else {
      return NextResponse.redirect(new URL('/LoginAdmin', request.url))
    }
  }

 
}