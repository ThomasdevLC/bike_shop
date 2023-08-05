const currentDay = () => {
  const options = { weekday: "short", day: "numeric", month: "long" };
  const today = new Date();
  const localeDateString = today.toLocaleDateString("en-EN", options);

  return localeDateString;
};

const currentTime = () => {
  const options = { hour: "numeric", minute: "numeric" };
  const today = new Date();
  const localeTimeString = today.toLocaleTimeString("en-EN", options);

  return localeTimeString;
};

export default { currentDay, currentTime };
