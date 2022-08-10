import React from "react"

const NewHOC = (PassedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div>
          <PassedComponent {...this.props} />
        </div>
      )
    }
  }
}

const Movie = ({ name }) => <div>{name}</div>

const NewComponent = NewHOC(Movie)

export const Login=()=> {
  return (
    <div>
      <NewComponent name="Kill Bill" />
    </div>
  )
}
