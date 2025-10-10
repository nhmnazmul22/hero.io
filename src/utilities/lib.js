export const abbreviateNumber = (number) => {
  let abbreviate = "0K";

  if (number < 1000000) {
    abbreviate = `${Math.round(number / 1000)}K`;
  } else if (number >= 1000000) {
    abbreviate = `${Math.round(number / 1000000)}M`;
  } else {
    abbreviate = number.toString();
  }

  return abbreviate;
};
