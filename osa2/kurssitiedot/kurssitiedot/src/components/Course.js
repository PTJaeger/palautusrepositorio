const Course = ({ course }) => {
 
    return (
        <div>
        <Header name={course.name} />
        <Content  parts={course.parts}/>
        <Total  parts={course.parts}/>
        </div>
      )
    }
    
    const Part = ({ name, exercises }) => {
     
        return (
          <div>
            <p>
              {name} {exercises}
            </p>
          </div>
        )
      }
    const Header = ({ name }) => {
      
      return (
        <div>
          <h3>{name}</h3>
        </div>
      )
    }   

    const Content = ({ parts }) => {
      
      return (
        <div>
        {parts.map((part) => (<Part  key={part.id} name={part.name} exercises={part.exercises}/>))}  
        </div>
      )
    }
    const Total = ({ parts }) => {    
      const total = parts.reduce((sum,part) => 
      sum + part.exercises, 0);
      
      return (
        <div>
          <b>Contains a total of {total} exercises</b>
        </div> 
      )
    }

      export default Course;