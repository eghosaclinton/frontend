import ModeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between shadow-md">
      <h1 className="text-2xl font-bold tracking-wide">GameGazers</h1>
      <div className="flex items-center gap-4">
          <nav className="hidden sm:flex gap-6 text-sm font-medium">
            <a href="/register" className="hover:text-red-500 transition">Register</a>
            <a href="/watch" className="hover:text-red-500 transition">Watch</a>
          </nav>
          <ModeToggle />
      </div>

    </header>
  );
}
