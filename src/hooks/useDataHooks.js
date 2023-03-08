import courses from "../__mock__/data";

const useDataHooks = () => {
  const getFetchData = () => new Promise(( resolve ) => {
    setTimeout(() => {
      resolve(courses);
    }, 2000);
  });

  const getCourseById = ( id ) => new Promise(( resolve ) => {
    setTimeout(() => {
      resolve(courses.find(( course ) => course.id === id ));
    }, 1000);
  });

  return {
    getFetchData,
    getCourseById
  };
};

export default useDataHooks;