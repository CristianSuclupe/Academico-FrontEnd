import { RegisterTable } from "../components/gradeRegister/RegisterTable";

export const GradeRegister = () => {
  return (
    <section>
      <h1 className="text-secondary font-semibold text-3xl mb-10">
        Registrar notas
      </h1>
      <RegisterTable />
    </section>
  );
};
