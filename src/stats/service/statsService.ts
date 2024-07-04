import { courses, grades } from "../../index.js";
import { CourseStats } from "../../types";

// Crea una función para obtener las estadísticas de un curso
// La función debe recibir el id de un curso
// La función debe devolver un objeto de tipo CourseStats
export const getCourseStats = (courseId: number): CourseStats => {
  const totalStudents = grades.map((grade) => grade.studentId);
  const studentsCount = totalStudents.length;

  const passedStudents = grades.filter((grade) => grade.value >= 5);
  const passedStudentsCount = passedStudents.length;

  const passedStudentsPercentage = (passedStudentsCount / studentsCount) * 100;

  const failedStudents = grades.filter((grade) => grade.value < 5);
  const failedStudentsCount = failedStudents.length;

  const failedCountPercentage = (failedStudentsCount / studentsCount) * 100;

  const totalGrades = grades.map((grade) => grade.value);
  const gradesSum = totalGrades.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  const gradesCount = totalGrades.length;
  const averageGrade = gradesSum / gradesCount;

  const sortedGrades = totalGrades.toSorted();
  const highestGrade = sortedGrades.length > 0 ? sortedGrades.at(-1)! : 0;
  const highestGradeStudent = grades.find(
    (grade) => grade.value === highestGrade
  );
  const highestGradeStudentId = highestGradeStudent
    ? highestGradeStudent.studentId
    : 0;

  return {
    courseId: courseId,
    studentsCount: studentsCount,
    passedCount: passedStudentsCount,
    passedCountPercentage: passedStudentsPercentage,
    failedCount: failedStudentsCount,
    failedCountPercentage: failedCountPercentage,
    averageGrade: averageGrade,
    highestGrade: highestGrade,
    highestGradeStudentId: highestGradeStudentId,
  };
};
