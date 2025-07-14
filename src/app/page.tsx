import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center gap-10">
      <section className="flex flex-col items-center gap-4 max-w-2xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          GameGazers
        </h1>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300">
          Stream the Battle. Watch the Glory.
        </h3>
        <h4 className="text-base sm:text-lg md:text-lg text-gray-400">
          Power your tournaments with live streams from every player. Organizers create events, gamers stream via OBS, and fans watch it all unfold live.
        </h4>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/streamers/register"
          className="bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 rounded-2xl text-lg font-semibold shadow-md text-white"
        >
          Register as a Streamer
        </Link>

        <a
          href="/watch"
          className="bg-white text-black hover:bg-gray-200 transition-colors px-6 py-3 rounded-2xl text-lg font-semibold shadow-md"
        >
          Watch Streams
        </a>
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
          <h5 className="text-xl font-bold mb-2">🎯 Built for Tournaments</h5>
          <p className="text-gray-400">
            Create and manage gaming events with ease — from brackets to
            broadcast.
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
          <h5 className="text-xl font-bold mb-2">📡 Stream via OBS</h5>
          <p className="text-gray-400">
            Players get personalized RTMP stream links. No setup headaches, just
            pure gameplay.
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
          <h5 className="text-xl font-bold mb-2">
            👀 Spectator-First Experience
          </h5>
          <p className="text-gray-400">
            Dedicated pages for every tournament, team, and player. Fans can
            follow the action live.
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
          <h5 className="text-xl font-bold mb-2">🔐 Organizer Controls</h5>
          <p className="text-gray-400">
            Control who streams, when it goes live, and how it’s displayed — all
            in one dashboard.
          </p>
        </div>
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          Ready to turn your matches into a show?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/register"
            className="bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 rounded-2xl text-lg font-semibold shadow-md text-white"
          >
            Set Up Your First Tournament
          </Link>

          <Link
            href="/watch"
            className="bg-white text-black hover:bg-gray-200 transition-colors px-6 py-3 rounded-2xl text-lg font-semibold shadow-md"
          >
            Try the Stream Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
