import { showErrorModal } from "../../dom/index.js";
import { Student } from "../../types.js";
import { generateId } from "../../utils.js";

export const getStudentsTotal = (students: Student[]): number => {
  return students.length;
};

export const addStudent = (
  students: Student[],
  studentName: string,
  studentLastName: string,
  studentAge: number,
  studentEmail: string,
  studentPhoneNumber: string
): void => {
  const isUser = students.find((student) => student.email === studentEmail);

  if (!isUser) {
    students.push({
      id: generateId(students),
      name: studentName,
      lastName: studentLastName,
      age: studentAge,
      email: studentEmail,
      phoneNumber: studentPhoneNumber,
    });
  } else {
    showErrorModal("El estudiante ya existe");
  }
};

export const deleteStudent = (students: Student[], id: number): void => {
  const studentIndex = students.findIndex((student) => student.id === id);

  if (studentIndex !== -1) {
    students.splice(studentIndex, 1);
  }
};

// Crea una función para obtener las opciones de estudiantes para rellenar un select
// La función debe recibir un array de estudiantes
// La función debe devolver un array de objetos con tres propiedades: id, name y lastName
// La propiedad id debe ser el id del estudiante
// La propiedad name debe ser el nombre del estudiante
// La propiedad lastName debe ser el apellido del estudiante
export const getStudentsOptions = (
  students: Student[]
): { id: number; name: string; lastName: string }[] => {
  const studentOptions = students.map((student) => ({
    id: student.id,
    name: student.name,
    lastName: student.lastName,
  }));

  return studentOptions;
};

// Crea una función para obtener el nombre completo de un estudiante por su id
// La función debe recibir un array de estudiantes y el id del estudiante
// export const getStudentNameById =
