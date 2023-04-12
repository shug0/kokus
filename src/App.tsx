import useRandom from "./hooks/useRandom";
import animals from "./data/animals.json";
import jobs from "./data/jobs.json";
import emotions from "./data/emotions.json";

function App() {
  const [randomAnimal, getRandomAnimal] = useRandom(animals);
  const [randomJob, getRandomJob] = useRandom(jobs);
  const [randomEmotion, getRandomEmotion] = useRandom(emotions);

  const handleGetNewOne = () => {
    getRandomAnimal();
    getRandomJob();
    getRandomEmotion();
  };

  return (
    <div
      className={`
        h-full
        px-8 py-20
        text-center
        flex flex-col items-center
        bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black
    `}
    >
      <header className="mb-auto">
        <h1 className="text-7xl font-light mb-4 text-accent-content">Kokus</h1>
        <h2 className="text-sm">Outil pour improvisateur audacieux</h2>
      </header>
      <section className="flex flex-col items-center">
        <h2 className="text mb-8 font-light">Pourquoi pas un.e ..</h2>
        <div className="mb-8 flex flex-col gap-2">
          <div className="text-accent-content text-4xl font-semibold">
            {randomJob}
          </div>
          <div>ascendant..</div>
          <div className="text-accent-content text-4xl font-semibold">
            {randomAnimal}
          </div>
          <div>avec..</div>
          <div className="text-accent-content text-4xl font-semibold">
            {randomEmotion}
          </div>
        </div>
      </section>
      <button
        className="btn btn-primary rounded-full mt-auto"
        onClick={handleGetNewOne}
      >
        Un.e autre !
      </button>
    </div>
  );
}

export default App;
