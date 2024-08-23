export async function GET(request) {
	const res = await fetch("https://api.jikan.moe/v4/top/anime?filter=airing&type=tv", {
		cache: "no-store"
	});
	const {data} = await res.json();

	return Response.json({ data });
}