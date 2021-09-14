import { calculateDpi, calculateSensitivity } from "../util/sensitivity";

export default function SensitivityOutput({ dpi, hipfire, aimed, modifier }) {
  console.log("mod", typeof modifier, modifier);
  return (
    <div id="result" className="text-xl">
      <span className="block">
        Hipfire: {calculateSensitivity(dpi, hipfire, modifier)}
      </span>
      <span className="block">
        Aimed: {calculateSensitivity(dpi, aimed, modifier)}
      </span>
      <br />
      OR
      <br />
      <br />
      <span className="block">
        New DPI: {calculateDpi(dpi, hipfire, modifier)}
      </span>
    </div>
  );
}
