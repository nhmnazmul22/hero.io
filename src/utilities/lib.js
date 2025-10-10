export const abbreviateNumber = (downloadNum) => {
  let abbreviate = "0K";

  if (downloadNum < 1000000) {
    abbreviate = `${Math.round(downloadNum / 1000)}K`;
  } else if (downloadNum >= 1000000) {
    abbreviate = `${Math.round(downloadNum / 1000000)}M`;
  } else {
    abbreviate = downloadNum.toString();
  }

  return abbreviate;
};

export const fetchApps = async () => {
  try {
    const res = await fetch("/data/apps.json");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error("Error in fetching Apps", err?.message);
  }
};
