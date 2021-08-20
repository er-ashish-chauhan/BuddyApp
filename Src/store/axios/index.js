import http from "./apiKit";
import { appMessages } from "../../Theme/AppConstants";
import { Platform } from "react-native";

const logout = () => {
};

export default {
  // ********** AUTHENTICATION **********
  // Login Api Call
  login(email, password) {
    let data = JSON.stringify({
      email: email,
      password: password,
      deviceType: Platform.OS,
      deviceToken: 'jkjk'
      // type: "admin",
    });
    return Method.POST("login", data);
  },
  forgot(email) {
    let data = JSON.stringify({
      email: email,
    });
    return Method.POST("user/forgotPassword", data);
  },
  userExits(email) {
    let data = JSON.stringify({
      email: email,
    });
    return Method.POST("userExist", data);
  },
  //signup
  signup(payload) {

    return Method.POST("register", payload);
  },
  updateProfile(payload) {
    return Method.PUT("user/updateProfile", payload);
  },
  userLike(id) {
    let body = JSON.stringify({
      'user_id': id
    })
    return Method.POST("user/like", body);
  },
  userDisLike(id) {
    let body = JSON.stringify({
      'user_id': id
    })
    return Method.POST("user/dislike", body);
  },
  userList() {

    return Method.GET("user/userList");
  },
  matchList() {
    return Method.GET("user/matches");
  },
  //update avatar
  updateAvatar(payload) {
    return Method.POST_FORMDATA("user/uploadAvatar", payload);
  },
  getUserDetails() {
    return Method.GET("user/userData");
  },
  changePwd(payload) {
    return Method.PUT("user/changePassword", payload);
  },
};


const Method = {
  // Get Method
  async GET(url) {

    return await new Promise((resolve, reject) => {
      http
        .get(url, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((result) => {
          if (result.status === 200) {
            return resolve({
              status: 1,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.msg,
              });
            } else {
              return reject({
                status: 5,
                error: appMessages.messageStatus500,
              });
            }
          }
        })
        .catch((err) => {
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status == 500) {
                return reject({
                  status: 2,
                  error: err,
                });
              } else if (err.response.status == 403) {
                logout();
                return reject({
                  status: 4,
                  error: err?.response?.data?.msg,
                });
              } else if (
                err.response.status == 400 ||
                err.response.status == 401 ||
                err.response.status == 404
              ) {
                return reject({
                  status: 4,
                  error: err?.response?.data?.msg,
                });
              } else {
                return reject({
                  status: 8,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: appMessages.messageStatus500,
            });
          }
        });
    });
  },

  // Post Method
  async POST(url, body) {
    console.log('test', url, body);
    return await new Promise((resolve, reject) => {
      http
        .post(url, body, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((result) => {
          console.log('result post===>', result);
          if (result.status === 200) {
            return resolve({
              status: 1,
              result: result,
            });
          } else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.msg,
              });
            } else {
              return reject({
                status: 5,
                error: appMessages.messageStatus500,
              });
            }
          }
        })
        .catch((err) => {
          console.log(err.response);
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status == 500) {
                return reject({
                  status: 2,
                  error: err,
                });
              } else if (err.response.status == 403) {
                logout();
                return reject({
                  status: 4,
                  error: err?.response?.data?.msg,
                });
              } else if (
                err.response.status == 400 ||
                err.response.status == 401 ||
                err.response.status == 404
              ) {
                return reject({
                  status: 4,
                  error: err?.response?.data?.msg,
                });
              } else {
                return reject({
                  status: 8,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: appMessages.messageStatus500,
            });
          }
        });
    });
  },

  // Post formData Method
  async POST_FORMDATA(url, body) {
    console.log('test', url, body);
    return await new Promise((resolve, reject) => {
      http
        .post(url, body, {
          headers: {
            'Content-Type': 'multipart/form-data; '
            // Accept: "application/json",
          },
        })
        .then((result) => {
          console.log('result post===>', result);
          if (result.status === 200) {
            console.log('result post===>200', result);
            return resolve({
              status: 1,
              result: result,
            });
          }
          else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.msg,
              });
            } else {
              return reject({
                status: 5,
                error: appMessages.messageStatus500,
              });
            }
          }
        })
        .catch((err) => {
          console.log(err.response);
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status == 500) {
                return reject({
                  status: 2,
                  error: err,
                });
              } else if (err.response.status == 403) {
                logout();
                return reject({
                  status: 4,
                  error: err?.response?.data?.msg,
                });
              } else if (
                err.response.status == 400 ||
                err.response.status == 401 ||
                err.response.status == 404
              ) {
                return reject({
                  status: 4,
                  error: err?.response?.data?.msg,
                });
              } else {
                return reject({
                  status: 8,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: appMessages.messageStatus500,
            });
          }
        });
    });
  },

  // Put Method
  async PUT(url, body) {
    return await new Promise((resolve, reject) => {
      http
        .put(url, body, {
          headers: {
            "access-control-allow-origin": "*",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((result) => {
          console.log(JSON.stringify(result, null, 1), "aaal")
          if (result.status === 200) {
            return resolve({
              status: 1,
              result: result,
            });
          }
          else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.msg,
              });
            } else {
              return reject({
                status: 5,
                error: appMessages.messageStatus500,
              });
            }
          }
        })
        .catch((err) => {
          console.log(err.response.data, "Error in put")
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status == 500) {
                return reject({
                  status: 2,
                  error: err?.response?.data?.msg,
                });
              } else if (err.response.status == 403) {
                logout();
                return reject({
                  status: 4,
                  error: err,
                });
              } else if (
                err.response.status == 400 ||
                err.response.status == 401 ||
                err.response.status == 404
              ) {
                return reject({
                  status: 4,
                  error: err?.response?.data?.msg,
                });
              } else {
                return reject({
                  status: 8,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: appMessages.messageStatus500,
            });
          }
        });
    });
  },

  // Delete Method
  async DELETE(url) {
    return await new Promise((resolve, reject) => {
      http
        .delete(url, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })

        .then((result) => {
          if (result.status === 200) {
            return resolve({
              status: 1,
              result: result,
            });
          }
          // else if (result.status == 212) {
          //   return resolve({
          //     status: 4,
          //     result: result
          //   });
          // }
          else {
            if (result) {
              return reject({
                status: 3,
                error: result.data.msg,
              });
            } else {
              return reject({
                status: 5,
                error: appMessages.messageStatus500,
              });
            }
          }
        })
        .catch((err) => {
          if (err.response) {
            if (
              err.response.status !== null &&
              err.response.status !== undefined
            ) {
              if (err.response.status == 500) {
                return reject({
                  status: 2,
                  error: err,
                });
              } else if (err.response.status == 403) {
                logout();
                return reject({
                  status: 4,
                  error: err?.response?.data?.msg,
                });
              } else if (
                err.response.status == 400 ||
                err.response.status == 401 ||
                err.response.status == 404
              ) {
                return reject({
                  status: 4,
                  error: err?.response?.data?.msg,
                });
              } else {
                return reject({
                  status: 8,
                  error: err,
                });
              }
            }
          } else {
            return reject({
              status: 6,
              error: appMessages.messageStatus500,
            });
          }
        });
    });
  },


};
