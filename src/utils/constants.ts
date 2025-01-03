export const ENV = {
  API_URL: import.meta.env.VITE_API_URL,
  ENDPOINTS: {
    AUTH: {
      LOGIN: "auth/login",
    },
    CLASS: "class",
    TEACHER: "teacher",
    STUDENT: "student",
    REGISTER: "register",
    ACADEMICPRODUCT: "academicproduct",
    REGISTERNOTE: "registernote"
  },
  TOKEN: "token",
};

export const ROLE = {
  TEACHER: "ROLE_TEACHER",
  SECRETARY: "ROLE_SECRETARY",
};
