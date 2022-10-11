export function betterFetch<T>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<T> {
  return new Promise((resolve, reject) => {
    fetch(input, init)
      .then((res) => {
        if (res.ok) {
          resolve(res.json());
        } else {
          reject(res);
        }
      })
      .catch((err) => reject(err));
  });
}
