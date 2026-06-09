export default async function handler(req, res) {
  const target =
    "https://staging.portal.rhodespastoral.com.au/api/payload-jobs/run?queue=pdfs&limit=10";

  try {
    const response = await fetch(target, { method: "GET" });
    const body = await response.text();
    res.status(response.status).send(body);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
