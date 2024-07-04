import { courses, grades } from "../../index.js";
import { CourseStats } from "../../types";

// Crea una función para obtener las estadísticas de un curso
// La función debe recibir el id de un curso
// La función debe devolver un objeto de tipo CourseStats
export const getCourseStats = (courseId: number): CourseStats => {
  const totalCourses = grades.filter((grade) => grade.courseId === courseId);

  const studentsInCourse = totalCourses.map((grade) => grade.studentId);

  const studentsCount = studentsInCourse.length;

  const approvalScore = 5;
  const passedStudents = totalCourses.filter(
    (grade) => grade.value >= approvalScore
  );
  const passedStudentsCount = passedStudents.length;

  const passedStudentsPercentage = (passedStudentsCount / studentsCount) * 100;

  const failedStudents = totalCourses.filter(
    (grade) => grade.value < approvalScore
  );
  const failedStudentsCount = failedStudents.length;

  const failedCountPercentage = (failedStudentsCount / studentsCount) * 100;

  const totalGrades = totalCourses.map((grade) => grade.value);
  const gradesSum = totalGrades.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  const gradesCount = totalGrades.length;
  const averageGrade = gradesSum / gradesCount;

  const sortedGrades = totalGrades.toSorted((a, b) => a - b);
  const highestGrade = sortedGrades[sortedGrades.length - 1];
  const highestGradeStudent = totalCourses.find(
    (student) => student.value === highestGrade
  );
  totalCourses;
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
