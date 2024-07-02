import { showErrorModal } from "../../dom/index.js";
import { students } from "../../index.js";
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
  const isStudent = students.find((student) => student.email === studentEmail);

  if (!isStudent) {
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
export const getStudentNameById = (
  students: Student[],
  id: number
): { studentName: string; studentLastName: string } => {
  const student = students.find((student) => student.id === id);

  return {
    studentName: student ? student.name : "No se ha encontrado el estudiante",
    studentLastName: student
      ? student.lastName
      : "No se ha encontrado el estudiante",
  };
};
