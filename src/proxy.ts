import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

interface SessionData {
  user?: Record<string, unknown>;
  expires?: string;
}

interface ProxyConfig {
  matcher: string[];
}

export async function proxy(request: NextRequest): Promise<NextResponse> {
  const session: SessionData | null = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config: ProxyConfig = {
  matcher: ["/details/:path*", "/profile"], // Specify the routes the middleware applies to
};
