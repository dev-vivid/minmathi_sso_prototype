

interface patchProps {
  url: string;
  data: unknown;
  token?: string;
}
const PATCH = async ({ url, data }: patchProps) => {
  const res = await fetch(`${url}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "text/html",
    },
  })
    .then(async (res) => {
      const json = await res.json();
      return [res?.status, json];
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(`error in patch ${url} >`, error);
      return [500, error];
    });
  return res;
};

export default PATCH;
