export const QueryData = (url) => {
  const defaultHeader = {
    accept: "aplication/json",
  };

  const controller = new AbortController();
  const singal = controller.signal;

  singal.method = singal.method || "GET";
  singal.headers = singal.headers
    ? { ...defaultHeader, ...singal.headers }
    : defaultHeader;
  singal.body = JSON.stringify(singal.body) || false;

  setTimeout(() => controller.abort, 3000);

  return fetch(url, { singal })
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject({
            err: true,
            status: res.status || "00",
            statusText: res.statusText || "Ocurrio un error",
          })
    )
    .catch((err) => err);
};
