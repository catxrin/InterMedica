import { toast } from "react-toastify";
export async function apiFetch(url, method = "GET", body) {
  const hasBody = ["POST", "PUT", "PATCH"].includes(method);
  try {
  const res = await fetch( url, {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    ...(hasBody
         && { body: JSON.stringify(body) }),
    })
  const response = res.json()

    return {status: res.status, ...response};

  } catch (error) {
        console.error(error)
        return toast.error("Network error. Please try again.")
  }
}
