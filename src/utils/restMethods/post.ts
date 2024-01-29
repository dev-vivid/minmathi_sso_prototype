const headersList = {
	"Accept": "*/*", "Content-Type": "application/json"
}
const POST = async ({url, data, authenticate = true}: {
	url?: string,
	data?: unknown,
	authenticate?: boolean
}) => {
	const session = await JSON.parse(localStorage.getItem('session') || '{}');
	const res = await fetch(`${url}`, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {...headersList, ...(authenticate ? {Authorization: `Bearer ${session?.id} ${session?.accessToken}`} : {})}
	})
		.then(async (res) => {
			const json = await res.json();
			console.log(data);
			return [res?.status, json];
		})
		.then((res) => {
			return res;
		})
		.catch((error) => {
			console.log(`error in post api ${url} >`, error);
			return [500, error];
		});
	return res;
};

export default POST
