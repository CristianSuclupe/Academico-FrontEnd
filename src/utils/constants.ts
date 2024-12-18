export const ENV = {
  API_URL: import.meta.env.VITE_API_URL,
  ENDPOINTS: {
    AUTH: {
      LOGIN: "auth/login",
    },
    CLASS: "class",
    TEACHER: "teacher",
  },
  TOKEN: "token",
};

export const ROLE = {
  TEACHER: "ROLE_TEACHER",
  SECRETARY: "ROLE_SECRETARY",
};
