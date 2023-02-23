import { useEffect } from "react";
import { labelClass, textboxClass } from "../util/css";

export default function SensitivityInput({
  dpi,
  setDpi,
  hipfire,
  setHipfire,
  aimed,
  setAimed,
  change,
}) {
  const saveToLocalStorage = () => {
    window.localStorage.setItem(
      "user_settings",
      JSON.stringify({ dpi, hipfire, aimed })
    );
  };

  // retrieve the user settings
  useEffect(() => {
    const settingsRaw = window.localStorage.getItem("user_settings");
    const settings = JSON.parse(settingsRaw);
    if (!!settings) {
      settings.dpi && setDpi(parseInt(settings.dpi));
      settings.hipfire && setHipfire(parseFloat(settings.hipfire));
      settings.aimed && setAimed(parseFloat(settings.aimed));
    }
  }, []);

  return (
    <div id="settings" className=" mb-4">
      <label className={labelClass}>
        <h2 className={textboxClass + " w-full text-center"}>
          Normal sensitivity (no gear)
        </h2>
      </label>
      <label className={labelClass}>
        DPI
        <input
          onChange={(e) => setDpi(e.currentTarget.value)}
          onBlur={() => {
            saveToLocalStorage();
          }}
          value={dpi}
          className={textboxClass}
          type="number"
          name="dpi"
        />
      </label>
      <label className={labelClass}>
        Hipfire
        <input
          onChange={(e) => setHipfire(e.currentTarget.value)}
          onBlur={() => {
            saveToLocalStorage();
          }}
          value={hipfire}
          className={textboxClass}
          type="number"
          name="hipfire"
        />
      </label>
      {/* <label className={labelClass}>
        Aimed
        <input
          onChange={(e) => setAimed(e.currentTarget.value)}
          onBlur={() => {
            saveToLocalStorage();
          }}
          value={aimed}
          className={textboxClass}
          type="number"
          name="aimed"
        />
      </label> */}
      <label className={labelClass}>
        % Change
        <input
          disabled
          value={change}
          className={textboxClass + " text-danger"}
          type="number"
          name="change"
        />
      </label>
    </div>
  );
}
