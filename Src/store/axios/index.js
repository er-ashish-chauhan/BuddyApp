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
      deviceType:Platform.OS,
      deviceToken:'jkjk'
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
  //signup
  signup(payload) {
    
    return Method.POST("register", payload);
  },
  updateProfile(payload) {
    
    return Method.PUT("user/updateProfile", payload);
  },
  userList() {
    
    return Method.GET("user/userList");
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
    console.log('test',url,body);
    return await new Promise((resolve, reject) => {
      http
        .post(url, body, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((result) => {
          console.log('result post===>',result);
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
                  error: err?.response?.data?.error?.msg,
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

  GETDATA(url, fileName) {
    return new Promise((resolve, reject) => {
      http
        .get(url, {
          // responseType: 'arraybuffer',
          headers: {
            "Content-Type": "application/json",
            Accept: "application/csv",
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
                status: 4,
                error: "Something went wrong.",
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
