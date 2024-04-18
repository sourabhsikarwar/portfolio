import { profile2 } from "../assets";

export default function Hero() {
  return (
    <div className="relative isolate pt-32 pb-24 px-6 sm:px-16">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <div className="mx-auto flex flex-col md:flex-row items-center gap-8 max-w-6xl xl:max-w-7xl w-full">
        <div className="mx-auto flex-1">
          <span className="rounded-full bg-secondary/10 px-4 py-2 font-semibold leading-6 text-secondary ring-1 ring-inset ring-secondary/20">
            Hello
          </span>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl">
            I am <br />
            <span className="text-gradient">Sourabh Sikarwar</span>
          </h1>
          <p className="mt-6 text-md md:text-lg leading-6 text-gray-300">
            A passionate Full Stack Web Developer 🚀 having an experience of
            building Web applications with JavaScript / Reactjs / Nodejs /
            Expressjs / MongoDB and some other cool libraries and frameworks.
          </p>
          <div className="mt-8 flex items-center gap-x-6">
            <a
              href="https://drive.google.com/file/d/1D1NyKV2AFBKHwQJV1tbqp9HXCS3flUPk/view?usp=sharing"
              className="px-4 py-2 md:px-6 md:py-3 bg-blue-gradient dark:bg-blue-gradient rounded font-semibold"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="mx-auto flex-1">
          <div className="w-full md:w-4/5 mx-auto">
            <img src={profile2} alt="App screenshot" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
