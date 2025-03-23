export type ClassTuple = [boolean | undefined, string];

const classNameDefaults = (arr: ClassTuple[]): string => {
  if (!arr.length) {
    return "";
  }
  const classes = [];

  for (let i = 0; i < arr.length; i++) {
    const tuple = arr[i];
    const bool = tuple[0];
    const className = tuple[1];

    if (bool && bool !== undefined && typeof bool === "boolean") {
      classes.push(className);
    }
  }

  return classes.join(" ").trim();
};

export default classNameDefaults;
