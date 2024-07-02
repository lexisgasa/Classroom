import { courses, grades, students } from "../../index.js";
import { showErrorModal } from "../../dom/index.js";
import { Grade } from "../../types";
import { generateId } from "../../utils.js";

export const getGradesTotal = (grades: Grade[]): number => {
  return grades.length;
};

export const getGradeFullData = (
  grade: Grade
): {
  value: number;
  studentName: string;
  studentLastName: string;
  courseName: string;
} => {
  const studentData = students.find(
    (student) => student.id === grade.studentId
  );
  const courseData = courses.find((course) => course.id === grade.courseId);

  return {
    value: grade.value,
    studentName: studentData
      ? studentData.name
      : "No se ha encontrado los datos de usuario",
    studentLastName: studentData
      ? studentData.lastName
      : "No se ha encontrado los datos de usuario",
    courseName: courseData
      ? courseData.name
      : "No se ha encontrado los datos del curso",
  };
};

// Crea una función para eliminar una nota de la lista de notas
// La función debe recibir un array de notas y el id de la nota a eliminar
export const deleteGrade = (grades: Grade[], id: number) => {
  const gradeIndex = grades.findIndex((grade) => grade.id === id);

  if (gradeIndex !== -1) {
    grades.splice(gradeIndex, 1);
  }
};

export const addGrade = (
  grades: Grade[],
  studentId: number,
  courseId: number,
  value: number
): void => {
  const existingGrade = grades.find(
    (grade) => grade.studentId === studentId && grade.courseId === courseId
  );

  if (!existingGrade) {
    const newGrade: Grade = {
      id: generateId(grades),
      studentId: studentId,
      courseId: courseId,
      value: value,
    };
    grades.push(newGrade);
  } else {
    showErrorModal(
      "El estudiante ya tiene una nota en el curso que has elegido"
    );
  }
};
