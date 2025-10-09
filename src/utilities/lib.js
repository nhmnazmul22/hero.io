export const formatDownload = (downloadNum) => {
  let formatted = "0k";

  if (downloadNum < 1000000) {
    formatted = `${downloadNum / 1000}k`;
  } else if (downloadNum >= 1000) {
    formatted = `${downloadNum / 1000000}k`;
  } else {
    formatted = downloadNum.toString();
  }

  return formatted;
};
