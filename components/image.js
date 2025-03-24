export async function randomImage(type = "image") {
  const baseURL = window.location.origin;
  const endpoint = "/wp-json/wp/v2/media";
  let searchParam = "";
  if (type == "video") {
    searchParam = "?search=.mp4";
  }
  const url = `${baseURL}${endpoint}${searchParam}`;
  console.log(url);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  const randomIndex = Math.floor(Math.random() * data.length);
  //   console.table(data);
  console.log("randomIndex: " + randomIndex);
  const randomImage = data[randomIndex];
  const randomID = randomImage.id;
  console.log(randomID);
  return randomID;
}
