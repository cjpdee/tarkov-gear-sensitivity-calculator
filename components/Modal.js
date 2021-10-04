import { buttonClass } from "../util/css";

export default function Modal({ content, isOpen, setIsOpen }) {
  return isOpen ? (
    <aside
      className="absolute top-0 left-0 w-screen h-screen z-10 flex items-center justify-center text-white font-bender leading-8 tracking-wide"
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      js-modal-bg="true"
      onClick={(e) => {
        console.log(e.target, e.target.getAttribute("js-modal-bg"));
        if (e.target.getAttribute("js-modal-bg")) setIsOpen(false);
      }}
    >
      <div className="relative z-20 w-full max-w-3xl p-4 bg-background border-outline border-2">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-white text-3xl font-bender">
            Tarkov Gear Sensitivity Calculator
          </h1>
          <button
            className={buttonClass + " text-white"}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            X
          </button>
        </header>
        <main>
          <h2 className="text-2xl mb-3">How to use:</h2>
          <ol className="list-decimal list-inside text-xl">
            <li>Add your DPI and ingame settings to the input section.</li>
            <li>Choose your loadout</li>
            <li>
              The new settings will appear. Change
              <strong className="text-danger"> either</strong> in-game settings
              or DPI.
            </li>
          </ol>
          <p className="text-xl">
            <br />
            In-game settings will usually be more accurate because most mice don
            {"'"}t allow for precise DPI adjustments. However, if your mouse
            does allow this or you only run a few kits, DPI is faster to change
            once set up.
            <br />
            <br />
            If you want to have finer control over your in-game settings, you
            can set it manually in the config at C:/Username/Documents
          </p>
        </main>
      </div>
    </aside>
  ) : (
    <></>
  );
}
