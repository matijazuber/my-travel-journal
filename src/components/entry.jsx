import fuji from "./imagesJournal/Fuji.svg"
import marker from "./imagesJournal/marker.svg"

function Entry(){
  return(
    <>
  <div className="mainDiv">
  <img src={fuji} width={150} />

  <div className="infoBlock">
    <div className="topRow">
      <div className="divJapan">
        <img src={marker} className="markerImg" />
        <p className="japanP">JAPAN</p>
      </div>

      <div className="viewDiv">
        <p>View on Google Maps</p>
      </div>
    </div>

    <div className="fujiHeader">
      Mount Fuji
    </div>

    <div className="description">
      <p className="dateParagraph">12 Jan,2023 - 24 Jan,2023</p>

      <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776<br></br> meters (12,380 feet). Mount Fuji is the single most popular tourist<br></br> site in Japan, for both Japanese and foreign tourists.</p>
    </div>
  </div>
</div>

    </>
  )
}

export default Entry