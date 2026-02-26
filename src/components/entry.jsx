import marker from "./imagesJournal/marker.svg"

function Entry({ img, title, country, googleMapsLink, dates, text }){
  return(
    <>
  <div className="mainDiv">
        <img src={img.src}  alt={img.alt} className="fujiM"/>

  <div className="infoBlock">
    <div className="topRow">
      <div className="divJapan">
        <img src={marker} className="markerImg" />
              <p className="jaanP">{country}</p>
      </div>

      <div className="viewDiv">
        <a href={googleMapsLink}>View on Google Maps</a>
      </div>
    </div>

    <div className="fujiHeader">
      {title}
    </div>

    <div className="description">
            <p className="dateParagraph">{dates }</p>
            <p>{text}</p>
    </div>
  </div>
</div>

    </>
  )
}

export default Entry