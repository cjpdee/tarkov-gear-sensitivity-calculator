import { labelClass, textboxClass } from "../util/css";
import { calculateDpi, calculateSensitivity } from "../util/sensitivity";

export default function SensitivityOutput({ dpi, hipfire, aimed, modifier }) {
  console.log("mod", typeof modifier, modifier);
  return (
    <div id="result" className="text-xl">
      <label className={labelClass}>
        <h2 className={textboxClass + " w-full text-center"}>
          New in-game sensitivity
        </h2>
      </label>
      <label className={labelClass}>
        Hipfire
        <input
          disabled
          value={calculateSensitivity(dpi, hipfire, modifier)}
          className={textboxClass + " text-green-600"}
          type="number"
          name="change"
        />
      </label>
      <label className={labelClass}>
        Aimed
        <input
          disabled
          value={calculateSensitivity(dpi, aimed, modifier)}
          className={textboxClass + " text-green-600"}
          type="number"
          name="change"
        />
      </label>
      <label className={labelClass}>
        <h2 className={textboxClass + " w-full text-center"}>New DPI</h2>
      </label>
      <label className={labelClass}>
        DPI
        <input
          disabled
          value={calculateDpi(dpi, hipfire, modifier)}
          className={textboxClass + " text-green-600"}
          type="number"
          name="change"
        />
      </label>
    </div>
  );
}
