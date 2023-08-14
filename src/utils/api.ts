import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { configRefresh, configToken } from "./tokenManagement";

export const api_url = "http://192.168.10.38:3333";
export const url = "https://night-server.onrender.com";

export const api = axios.create({
  baseURL: url,
});

export const promoterApi = axios.create({
  baseURL: "https://pws.nightapp.me/",
});

export const locationApi = axios.create({
  baseURL: "https://api.bigdatacloud.net/data",
});

export const PostAPI = async (url: string, data: any) => {
  const connect = await api
    .post(url, data)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status: status, body: message };
    });

  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
    ? {
        status: connect.status,
        body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
      }
    : connect;
};

export const AuthPostAPI = async (url: string, data: any) => {
  const token = await configToken();

  if (token === 400) {
    return { status: 400, body: "" };
  }

  const connect = await api
    .post(url, data, token)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status: status, body: message };
    });

  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
    ? {
        status: connect.status,
        body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
      }
    : connect;
};

export const AuthPutAPI = async (url: string, data: any) => {
  const token = await configToken();

  if (token === 400) {
    return;
  }

  const connect = await api
    .put(url, data, token)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status: status, body: message };
    });

  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
    ? {
        status: connect.status,
        body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
      }
    : connect;
};

export const getAPI = async (url: string) => {
  const connect = await api
    .get(url)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status: status, body: message };
    });

  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
    ? {
        status: connect.status,
        body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
      }
    : connect;
};

export const authGetAPI = async (url: string) => {
  const token = await configToken();

  if (token === 400) {
    return { status: 400, body: "" };
  }

  const connect = await api
    .get(url, token)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status: status, body: message };
    });

  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
    ? {
        status: connect.status,
        body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
      }
    : connect;
};

export const authDeleteAPI = async (url: string) => {
  const token = await configToken();

  if (token === 400) {
    return { status: 400, body: "" };
  }

  const connect = await api
    .delete(url, token)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status: status, body: message };
    });

  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
    ? {
        status: connect.status,
        body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
      }
    : connect;
};

export const loginVerifyAPI = async () => {
  const token = await configToken();
  const refreshToken = await configRefresh();

  if (token == 400 || refreshToken == 400) {
    return 400;
  }

  const requisition = await api
    .get("/verifytoken", token)
    .then(async ({ data }) => {
      return { status: 200, body: "" };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status: status, body: message };
    });

  if (requisition.status === 200) {
    return 200;
  }
  const newToken = await api
    .get("/token", refreshToken)
    .then(async ({ data }) => {
      return { status: 200, body: "" };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status: status, body: message };
    });
  if (newToken.status != 200) {
    return 400;
  }
  await AsyncStorage.setItem(
    "@getapp:userToken",
    JSON.stringify(newToken.body)
  );
  return 200;
};
