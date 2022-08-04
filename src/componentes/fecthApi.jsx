
const link = process.env.REACT_APP_API;
const token = process.env.REACT_APP_TOKEN;

export default function fecthApi(url) {
  return (
    fetch(link + url,{
          headers: {
              Authorization: 
                  "Bearer " + token,
                  "Content-Type" : "application/json;charset=utf-8",
          },
    })
    .then((result)=>result.json())
  )
}
