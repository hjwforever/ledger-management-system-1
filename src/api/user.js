import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/login?email=" + data.username +"&password=" + data.password,
    method: "post",
    data
  });
}

export function getInfo(userEmail) {
  return request({
    url: "/info",
    method: "get",
    params: { userEmail }
  });
}

export function logout() {
  return request({
    url: "/logout",
    method: "post"
  });
}
