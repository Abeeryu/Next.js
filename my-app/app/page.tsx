export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 text-center">
      <div className="p-8 rounded-2xl shadow-lg bg-white/70 backdrop-blur">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Hallo, dit is mijn eerste Next.js website! 🎉
        </h1>
        <p className="text-gray-700">
          Ik heb Next.js succesvol geïnstalleerd en draai het lokaal.
        </p>
      </div>
    </main>
  );
}

