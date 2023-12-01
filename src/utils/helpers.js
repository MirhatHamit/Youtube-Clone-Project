import axios from "axios";

const options = {
  params: { geo: "TR", lang: "tr" },
  headers: {
    "X-RapidAPI-Key": "1f1c4d3967msha952b833c2974ccp156b77jsn699a8dbe45d5",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

// veridğimiz url'e istek atıp
// geriye verileri döndüren yardımıxcı fonk
export const getData = async (url) => {
  try {
    const response = await axios.get(url, options);
    return response;
  } catch (err) {
    console.log("Verileri çekerken hata oluştu");
  }
};