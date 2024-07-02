import { showErrorModal } from "../../dom/index.js";
import { Course } from "../../types";
import { generateId } from "../../utils.js";

export const getCoursesTotal = (courses: Course[]): number => {
  return courses.length;
};

export const addCourse = (courses: Course[], courseName: string): void => {
  const isACourse = courses.find((course) => course.name === courseName);

  if (!isACourse) {
    courses.push({
      id: generateId(courses),
      name: courseName,
    });
  } else {
    showErrorModal("El curso ya existe");
  }
};

export const deleteCourse = (courses: Course[], id: number): void => {
  const courseIndex = courses.findIndex((course) => course.id === id);

  if (courseIndex !== -1) {
    courses.splice(courseIndex, 1);
  }
};

export const getCoursesOptions = (
  courses: Course[]
): { id: number; name: string }[] => {
  const courseOptions = courses.map((course) => ({
    id: course.id,
    name: course.name,
  }));
  return courseOptions;
};
