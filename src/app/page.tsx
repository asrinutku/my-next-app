import Wrapper from "./components/Wrapper";

export default function Home() {
  return (
    <Wrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-8 overflow-hidden rounded-full border border-gray-200 bg-white px-6 py-4 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
        <p className="text-sm font-semibold text-gray-700">
          Reina is Public !!!
        </p>
      </div>
      <h1 className="max-w-4xl font-bold text-5xl  md:text-6xl lg:text-7xl">
        Dosyanızla saniyeler içerisinde
        <span className="text-blue-600"> 
        sohbet </span>edin
      </h1>
      <p className="mt-7 max-w-prose text-zinc-700 sm:text-lg">
        Reina yükleyeceğiniz herhangi bir PDF dosyası ile sohbet etmenizi
        sağlar. Hemen bir PDF dosyası yükleyin ve deneyin.
      </p>
    </Wrapper>
  );
}
