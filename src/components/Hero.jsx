import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="flex w-full flex-col items-center justify-center">
      <nav className="mb-10 flex w-full items-center justify-between pt-3">
        <img
          src={logo}
          alt="logo"
          className="w-28 rounded-full object-contain"
        />
        <button
          type="button"
          onClick={() => window.open("https://github.com/folka2134")}
          className="rounded-full border border-black bg-black px-5 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
        >
          GitHub
        </button>
      </nav>

      <h1 className="mt-5 text-center text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
        Summarise <span className="blue_gradient">Articles</span>
      </h1>
      <h2 className="mt-5 max-w-2xl text-center text-lg text-gray-600 sm:text-xl">
        Transforms your lengthly articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
