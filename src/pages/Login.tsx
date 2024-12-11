import { FormLogin } from "../components/login/FormLogin";

const Login = () => {
  return (
    <main className="h-screen bg-login bg-cover bg-no-repeat bg-center bg-fixed flex flex-col justify-center items-center">
      <div className="h-full w-full bg-gradient-to-r from-main to-secondary opacity-20 absolute z-0"></div>
      <section className="flex justify-center items-center flex-col mb-20 z-10">
        <img src="/images/logo.webp" alt="Logo" />
        <h1 className="text-white text-4xl">Bienvenido</h1>
      </section>
      <section className="z-10">
        <FormLogin />
      </section>
    </main>
  );
};

export default Login;
