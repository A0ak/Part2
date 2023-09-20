import React from 'react';

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

export default Course;



