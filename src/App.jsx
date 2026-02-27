import Header from "./components/headerJournal"
import Entry from "./components/entry"
import data from "./data.js"


function App() {
        const travelElements = data.map((travel)=>{
          return (
            <Entry
              key={travel.id}
              {...travel} />
        )
      })

  return(
    <>
      <Header></Header>
      <main>{ travelElements}</main>

    </>
  )
}
export default App
