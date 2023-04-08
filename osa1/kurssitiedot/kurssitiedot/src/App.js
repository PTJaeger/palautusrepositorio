const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React. Amount of exercises:'
  const exercises1 = 10
  const part2 = 'Using props to pass data. Amount of exercises:'
  const exercises2 = 7
  const part3 = 'State of a component. Amount of exercises:'
  const exercises3 = 14
  const Header = () => {
    return (
      <div>
        <h1>{course}</h1>
      </div>
    )
  }
  const Content = () => {
    return (
      <div>
        <p>
          {part1} {exercises1}
        </p>
        <p>
          {part2} {exercises2}
        </p>
        <p>
          {part3} {exercises3}
        </p>
      </div>
    )
  }
  const Total = () => {
    return (
      <div>
        <p>
        Number of exercises: {exercises1 + exercises2 + exercises3}
        </p>
      </div>
    )
  }

  return (
    <div>
    <Header course={course} />
    <Content  />
    <Total  />
    </div>
  )
}

export default App
