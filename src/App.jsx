const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(course => <Course key={course.id} course={course} />)}
    </div>
  )
}
const Course = ({ course }) => {
  return (
    <div>
      <Title name={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

const Title = ({ name }) => {
  return <h1>{name}</h1>
}

const Content = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part} />)}
      <p>Total exercises: {totalExercises}</p>
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <div>
      <h2>{part.name}</h2>
      <p>Exercises: {part.exercises}</p>
    </div>
  )
}

export default App;