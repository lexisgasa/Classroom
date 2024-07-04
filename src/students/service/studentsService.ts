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

export const getStudentNameById = (students: Student[], id: number): string => {
  const student = students.find((student) => student.id === id);
  return `${student?.name} ${student?.lastName}`;
};
