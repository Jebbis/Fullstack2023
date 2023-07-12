const Course = ({ course }) => {
  return (
    <>
      {course.map((course) => (
        <div key={course.id}>
          <Header course={course.name} />
          <Content course={course} />
          <Total parts={course.parts} />
        </div>
      ))}
    </>
  );
};

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((x, part) => x + part.exercises, 0);
  return <p>total of {total} exercises</p>;
};

export default Course;
