import request from "@/utils/request";

export const getUsers = () =>
  request({
    url: "/dev-api/users",
    method: "get",
  });
