export const abbreviateNumber = (downloadNum) => {
  let formatted = "0k";

  if (downloadNum < 1000000) {
    formatted = `${Math.round(downloadNum / 1000)}K`;
  } else if (downloadNum >= 1000000) {
    formatted = `${Math.round(downloadNum / 1000000)}`;
  } else {
    formatted = downloadNum.toString();
  }

  return formatted;
};
