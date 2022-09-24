import cookie from "js-cookie";
// import { GoogleLogout } from 'react-google-login';

// Set in Cookie
export const setCookie = (key, value) => {
  //menyimpan token didlam cookie dengan maksimal 1Day
  if (window !== "undefiend") {
    cookie.set(key, value, {
      // 1 Day
      expires: 1,
    });
  }
};
// remove from cookie // menghilangkan token di dalam cookie
export const removeCookie = (key) => {
  if (window !== "undefined") {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

// Get from cookie such as stored token
// Will be useful when we need to make request to server with token
export const getCookie = (key) => {
  if (window !== "undefined") {
    return cookie.get(key);
  }
};

// Set in localstorage
export const setLocalStorage = (key, value) => {
  console.log("AUTHENTICATE HELPER ON SIGNIN RESPONSE", value);
  if (window !== "undefined") {
    console.log("AUTHENTICATE HELPER ON SIGNIN RESPONSE ELSE WORK", value);
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    console.log("AUTHENTICATE HELPER ON SIGNIN RESPONSE ELSE", value);
  }
};

// Remove from localstorage
export const removeLocalStorage = (key) => {
  if (window !== "undefined") {
    localStorage.removeItem(key);
  }
};

// Auth enticate user by passing data to cookie and localstorage during signin
export const authenticate = (response, next) => {
  console.log("AUTHENTICATE HELPER ON SIGNIN RESPONSE", response);
  setCookie("token", response.data.token);
  setLocalStorage("userdata", response.data.UserData);
  setLocalStorage("user", response.data.user);

  next();
};

// Access user info from localstorage
export const isAuth = () => {
  if (window !== "undefined") {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("user")) {
        console.log("Auth checked");
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};

//Acces userData from localstorage
export const LocalUserData = () => {
  if (window !== "undefined") {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("userdata")) {
        console.log("Auth checked");
        return JSON.parse(localStorage.getItem("userdata"));
      } else {
        return false;
      }
    }
  }
};
export const Terupdate = () => {
  if (window !== "undefined") {
    const Poster = LocalUserData().terupdate;
    if (Poster === "terdaftar" || Poster === "lolos") {
      // != //tambahin kode buat == lolos  // yang unu
      return true;
    } else {
      return false;
    } //Kode ini harusnta
  }
};

// export const googleloguts = (props) =>{
//     const GOOGLE_CLIENT_ID = "969730953690-habthaq3j8jg46i53tnn48njosr8ifgi.apps.googleusercontent.com";
//     <GoogleLogout
//       clientId={GOOGLE_CLIENT_ID}

//       onLogoutSuccess= "true"
//       onLogoutFailure={err => console.log(err)}
//      />

//     }

export const TerupdateDiri = () => {
  if (window !== "undefined") {
    const Poster = isAuth().institusi;
    if (Poster === "") {
      // !=
      return true;
    } else {
      return false;
    } //Kode ini harusnta
  }
};

export const MembayarLomba = (response) => {
  if (window !== "undefined") {
    const Adalink = response;
    if (Adalink === "Terverifikasi") {
      return true;
    }
  } else {
    return false;
  } //Kode ini harusnta
};

export const TerdaftarLombaPoster = () => {
  if (window !== "undefined") {
    const Poster = LocalUserData().lomba_poster;
    if (Poster === "Belum Terverifikasi" || Poster === "Terverifikasi") {
      // !=
      return true;
    } else {
      return false;
    } //Kode ini harusnta
  }
};

export const TerdaftarLombaPaper = () => {
  if (window !== "undefined") {
    const Paper = LocalUserData().lomba_paper;
    if (Paper === "Belum Terverifikasi" || Paper === "Terverifikasi") {
      return true;
    } else {
      return false;
    } //Kode ini harusnta
  }
};
export const TerdaftarLombaElektro = () => {
  if (window !== "undefined") {
    const Elektro = LocalUserData().lomba_elektro;
    if (Elektro === "Belum Terverifikasi" || Elektro === "Terverifikasi") {
      return true;
    } else {
      return false;
    } //Kode ini harusnta
  }
};

//logika terverifkasi kurang

export const TerdaftarWebinar = () => {
  if (window !== "undefined") {
    const Poster = isAuth().webinar;
    if (Poster === "Terdaftar") {
      // !=
      return true;
    } else {
      return false;
    } //Kode ini harusnta
  }
};

//logika terverifkasi kurang
export const isAdmin = () => {
  if (window !== "undefined") {
    const role = isAuth().role;
    if (role === "admin") {
      return true;
    } else {
      return false;
    } //Kode ini harusnta
  }
};

export const signout = (next) => {
  removeCookie("token");
  // googleloguts();
  removeLocalStorage("user");
  removeLocalStorage("userdata");
  next();
};

export const updateUser = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("user"));
    auth = response.data;
    localStorage.setItem("user", JSON.stringify(auth));
  }
  next();
};
export const updateUserImageProfile = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("user"));
    auth.link_profil = response.data; //
    localStorage.setItem("user", JSON.stringify(auth));
  }
  next();
};
export const updateProfileWebinar = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("user"));
    auth.webinar = "Terdaftar";
    localStorage.setItem("user", JSON.stringify(auth));
  }
  next();
};

export const updateUserImageKTM = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("userdata"));
    auth.link_ktm_ketua = response.data; //
    localStorage.setItem("userdata", JSON.stringify(auth));
  }
  next();
};
export const updateUserImageKTM1 = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("userdata"));
    auth.link_ktm_anggota_1 = response.data; // si URL
    localStorage.setItem("userdata", JSON.stringify(auth));
  }
  next();
};
export const updateUserImageKTM2 = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("userdata"));
    auth.link_ktm_anggota_2 = response.data; //
    localStorage.setItem("userdata", JSON.stringify(auth));
  }
  next();
};
export const updateUserImageKetua = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("userdata"));
    auth.link_foto_ketua = response.data; //
    localStorage.setItem("userdata", JSON.stringify(auth));
  }
  next();
};
export const updateUserImageA1 = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("userdata"));
    auth.link_foto_anggota_1 = response.data; //
    localStorage.setItem("userdata", JSON.stringify(auth));
  }
  next();
};
export const updateUserImageA2 = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("userdata"));
    auth.link_foto_anggota_2 = response.data; //
    localStorage.setItem("userdata", JSON.stringify(auth));
  }
  next();
};
export const updateSubmisiElektro = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("userdata"));
    auth.link_submisi_elektro = response.data; //
    localStorage.setItem("userdata", JSON.stringify(auth));
  }
  next();
};
export const updateSubmisiPaper = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("userdata"));
    auth.link_submisi_paper = response.data; //
    localStorage.setItem("userdata", JSON.stringify(auth));
  }
  next();
};
export const updateSubmisiPoster = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("userdata"));
    auth.link_submisi_poster = response.data; //
    localStorage.setItem("userdata", JSON.stringify(auth));
  }
  next();
};

export const updateBuktiElektro = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("userdata"));
    auth.bukti_pembayaran_elektro = response.data; //
    localStorage.setItem("userdata", JSON.stringify(auth));
  }
  next();
};

export const updateBuktiPaper = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("userdata"));
    auth.bukti_pembayaran_paper = response.data; //
    localStorage.setItem("userdata", JSON.stringify(auth));
  }
  next();
};

export const updateBuktiPoster = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("userdata"));
    auth.bukti_pembayaran_poster = response.data; //
    localStorage.setItem("userdata", JSON.stringify(auth));
  }
  next();
};

export const updateUserData = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("userdata"));
    auth = response.data;
    localStorage.setItem("userdata", JSON.stringify(auth));
  }
  next();
};
