import SecretaryHome from "../components/home/secretary/SecretaryHome";
import { TeacherHome } from "../components/home/teacher/TeacherHome";
import { useAuth } from "../hooks/useAuth";
import { ROLE } from "../utils/constants";

export const Home = () => {
  const { currentUser } = useAuth();
  return (
    <>
      {currentUser?.role === ROLE.TEACHER && <TeacherHome />}
      {currentUser?.role === ROLE.SECRETARY && <SecretaryHome />}
    </>
  );
};
