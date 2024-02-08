/* exported stringifyJSON */

const stringifyJSON = (obj) => {
  if (typeof obj === "function" || obj === undefined) {
    return undefined;
  }

  if (obj === null || typeof obj !== "object") {
    if (typeof obj === "string") {
      return `"${obj}"`;
    } else {
      return String(obj);
    }
  }

  if (Array.isArray(obj)) {
    const result =
      "[" + obj.map((item) => stringifyJSON(item)).join(", ") + "]";
    return result;
  }

  const result =
    "{" +
    Object.keys(obj)
      .map((key) => {
        const value = stringifyJSON(obj[key]);
        if (value !== undefined) {
          return `"${key}": ${value}`;
        }
      })
      .filter((item) => item !== undefined)
      .join(", ") +
    "}";

  return result;
};
