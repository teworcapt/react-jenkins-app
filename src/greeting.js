
export function getGreeting(name) {
  const normalizedName = name.trim();

  return normalizedName
    ? `Hello, ${normalizedName}!`
    : "Hello, Guest!";
}
