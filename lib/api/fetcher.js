export async function apiFetch(
  url,
  { method = "GET", body, headers = {} } = {}
) {
  try {
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });

    if (!res.ok) {
      const message = await res.text();
      throw new Error(message || `Fetch error: ${res.status}`);
    }

    const data = await res.json();
    return { success: true, data };
  } catch (err) {
    console.error(`apiFetch error (${url}):`, err.message);
    return { success: false, error: err.message || "Something went wrong" };
  }
}
