


const GET = async (url?: string, signal?: AbortSignal,) => {
  const endpoint = `${url}`;
  console.log("endpoint > ", endpoint);
  const headers={
    // 'Authorization': "Bearer " +await TokenService.getLocalAccessToken() ,
    "Content-Type": "application/json"
  }
  console.log("endpoint > ", headers);
  const res = await fetch(endpoint, {
    method: "GET",
    mode: "cors",
    signal: signal,
    headers
  })
    .then(async (res) => {
      const json = await res.json();
      return [res?.status, json];
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(`error in api ${url} >`, error);
      return [500, error];
    });
  return res;
};
export default GET;
