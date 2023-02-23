export const getTargetEdpi = (dpi, sens, turnSpeedModifier) => {
  const currentEdpi = dpi * sens;
  const realTurnSpeedModifier = turnSpeedModifier * 0.01 * -1; // convert to a better number
  const targetEdpi = currentEdpi + currentEdpi * realTurnSpeedModifier;
  return targetEdpi;
};

export const getNewIngameSensitivity = (targetEdpi, dpi) => {
  return targetEdpi / dpi;
};

export const getNewDpi = (targetEdpi, originalSens) => {
  return targetEdpi / originalSens;
};

export const calculateSensitivity = (dpi, sens, turnSpeedModifier) => {
  // console.log(dpi, sens, turnSpeedModifier);
  const targetEdpi = getTargetEdpi(dpi, sens, turnSpeedModifier);
  return getNewIngameSensitivity(targetEdpi, dpi).toFixed(3);
};

export const calculateDpi = (dpi, sens, turnSpeedModifier) => {
  const targetEdpi = getTargetEdpi(dpi, sens, turnSpeedModifier);
  return getNewDpi(targetEdpi, sens).toFixed(0);
};

export const calculateTurnModifier = (vest, helmet, rig, visor, facePlate) => {
  const speeds = [
    vest?.turnSpeed,
    helmet?.turnSpeed,
    rig?.turnSpeed,
    visor?.turnSpeed,
    facePlate?.turnSpeed,
  ].filter((mod) => !!mod);

  return speeds.length ? speeds.reduce((a, b) => a + b) : 0;
};
