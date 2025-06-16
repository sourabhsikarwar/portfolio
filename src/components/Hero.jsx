import classNames from "classnames";
import { profile } from "../assets";
import styles from "../style";
import Button from "./Common/Button";
import TextWithHighlights from "./Common/TextWithHighlights";

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
      <div
        className={classNames(
          "mx-auto flex flex-col md:flex-row items-center gap-8",
          styles.boxWidth
        )}
      >
        <div className="mx-auto flex-1">
          <span className="rounded-full text-sm bg-secondary/10 px-4 py-2 font-semibold leading-6 text-secondary ring-1 ring-inset ring-secondary/20">
            Hello 👋
          </span>
          <h1 className="mt-4 text-3xl font-space font-bold text-white md:text-4xl lg:text-4xl">
            I am <br />
            <span className="text-gradient">Sourabh Sikarwar</span>
          </h1>
          <TextWithHighlights
            text="A passionate Full Stack Developer 🚀 having an experience of building Web applications with TypeScript / Nextjs / Nodejs and some other cool libraries and frameworks."
            highlights={["TypeScript", "Nextjs", "Nodejs"]}
            tag="p"
            highlightStyle="bold"
            className="mt-6 text-md font-space leading-6 text-gray-300"
          />
          <Button
            variant="solid"
            style="primary"
            href="https://dub.sh/pupdy2l"
            target="_blank"
            rel="noreferrer"
            className="mt-8 flex items-center w-fit gap-x-6"
          >
            Resume
          </Button>
        </div>
        <div className="mx-auto flex-1">
          <div className="w-full md:w-4/5 mx-auto">
            <img src={profile} alt="App screenshot" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
