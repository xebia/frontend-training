export const fetchInstance = <T>(input: string | URL | globalThis.Request, init?: RequestInit): Promise<T> =>
  fetch(input, init).then(res => {
    if (!res.ok) {
      throw res;
    }

    return res.json();
  });
