import { ErrorIconSvg } from "../components/error/ErrorIconSvg";
import { FormLogin } from "../components/login/FormLogin";
import { Modal } from "../components/modal/Modal";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { errorMessage, error, setError } = useAuth();
  return (
    <main className="h-screen w-screen bg-login bg-cover bg-no-repeat bg-center bg-fixed flex justify-center items-center monitor:justify-start">
      <div className="h-full w-full bg-gradient-to-r from-main to-secondary opacity-20 absolute z-0"></div>
      <section className="z-10 flex justify-center items-center flex-col h-screen bg-secondary/50 w-[600px] monitor:ml-64 tablet:w-[550px]">
        <div className="mb-20 flex flex-col justify-center items-center">
          <img src="/images/logo.webp" alt="Logo" />
          <h1 className="text-white text-4xl tablet:text-5x font-semibold tracking-widest">
            Bienvenido
          </h1>
        </div>
        <div className="z-10 w-[300px] tablet:w-[450px]">
          <FormLogin />
        </div>
        <Modal open={error} onClose={() => setError(false)}>
          <div className="flex flex-col justify-center items-center ">
            <ErrorIconSvg />
            <h3 className="font-semibold text-lg tablet:text-2xl tracking-wider">
              Error
            </h3>
            <p className="tablet:mt-3 tablet:text-lg">{errorMessage}</p>
          </div>
        </Modal>
      </section>
    </main>
  );
};

export default Login;
