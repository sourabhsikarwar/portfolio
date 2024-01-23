const Circular = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className="absolute opacity-20 left-0 top-1/2 z-0 h-[64rem] w-[64rem] -translate-x-1/2 md:-translate-x-3/4 [mask-image:radial-gradient(closest-side,white,transparent)]"
      aria-hidden="true"
    >
      <circle
        cx={512}
        cy={512}
        r={512}
        fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
        fillOpacity="0.7"
      />
      <defs>
        <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
          <stop stopColor="#80caff" />
          <stop offset={1} stopColor="#6ac1ff" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Circular;
