import { courses, students } from "../../index.js";
import { showErrorModal } from "../../dom/index.js";
import { Grade } from "../../types";
import { generateId } from "../../utils.js";

export const getGradesTotal = (grades: Grade[]): number => {
  return grades.length;
};

// Crea una función para obtener los datos completos de una nota
// La función debe recibir una nota
// La función debe devolver un objeto con las mismas propiedades de la nota
// más las propiedades studentName, studentLastName y courseName
// export const getGradeFullData =

// Crea una función para eliminar una nota de la lista de notas
// La función debe recibir un array de notas y el id de la nota a eliminar
// export const deleteGrade =

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
