import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Toaster } from "./ui/toaster";

export function PageLayout() {
  return (
    <body>
      <Header />
      <main>
        <Outlet />
      </main>
      <Toaster />
    </body>
  );
}
