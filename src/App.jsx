import Header from "./components/headerJournal"
import Entry from "./components/entry"
import data from "./data.js"


function App() {
        const travelElements = data.map((travel)=>{
          return (
            <Entry key={travel.id} img={{ src:travel.img.src, alt:travel.img.alt }} title={travel.title} country={travel.country} googleMapsLink={travel.googleMapsLink } dates={ travel.dates} text={travel.text} />
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
