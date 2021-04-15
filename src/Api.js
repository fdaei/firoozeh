export const apiService = {
  setAuth: auth => localStorage.setItem("Auth",auth),
  checkAuth: () => localStorage.getItem("Auth"),
}
