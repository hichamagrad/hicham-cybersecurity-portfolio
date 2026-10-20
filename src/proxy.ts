import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // `icon` is the generated favicon route (app/icon.tsx); it has no file
  // extension, so without this exclusion it gets locale-redirected and 404s.
  matcher: ["/((?!api|trpc|_next|_vercel|icon|.*\\..*).*)"],
};
