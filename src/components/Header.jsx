import logo from "../assets/logo.png";
// import classes from './Header.module.css'

export default function Header() {
  return (
    <header className="mb-8 mt-8 flex flex-col items-center md:mb-16">
      <img
        src={logo}
        alt="A canvas"
        className="mb-8 h-44 w-44 object-contain"
      />
      <h1 className="font-title text-center text-xl font-semibold uppercase tracking-wide text-amber-800 md:text-4xl">
        ReactArt
      </h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  );
}
