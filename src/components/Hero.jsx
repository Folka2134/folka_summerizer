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
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarise Articles with <br className="max-md:hidden" />
        <span className="blue_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with summize and open-source article summarizer
        that transforms lengthly articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
