import { useEffect } from "react";

export default function SensitivityInput({
  dpi,
  setDpi,
  hipfire,
  setHipfire,
  aimed,
  setAimed,
  change,
}) {
  const labelClass =
    "flex justify-between border-b border-outline items-center block text-2xl";
  const textboxClass = "w-1/2 bg-background border-outline p-4 text-2xl";
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
      <label className={labelClass}>
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
      </label>
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
