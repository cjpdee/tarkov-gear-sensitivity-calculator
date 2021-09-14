import { useEffect } from "react";

export default function SensitivityInput({
  dpi,
  setDpi,
  hipfire,
  setHipfire,
  aimed,
  setAimed,
}) {
  const textboxClass = "border bg-background border-outline p-2";
  const saveToLocalStorage = () => {
    window.localStorage.setItem(
      "user_settings",
      JSON.stringify({ dpi, hipfire, aimed })
    );
  };

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
      <label className="grid grid-cols-2">
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
      <label className="grid grid-cols-2">
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
      <label className="grid grid-cols-2">
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
    </div>
  );
}
