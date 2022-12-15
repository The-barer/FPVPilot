import newsTile from "../Assets/img/news-tile.png";
export default function News() {
  const description: string = `NEWS description....Lörem ipsum dosam mas till endless aisles,
              minade. Befinat operaosmos: till Caroline Berglund despessade
              såsom tekassade. Polybögen bere trelyv lyjugisk. Ogt Lovisa
              Berggren om än Elisabeth Lundström. Retailtainment voice commerce
              Filip Sundberg. Vipont beriska jotåtad pongen. Exekvera rän.
              Söling bevis. Bior Johan Lindqvist friktionsfri handel, i denyrade
              är vöhyska. Rerade böng. Anton Karlsson jul i bos. Rean dest och
              digt. Multisam nilig Leif Samuelsson pod, Rune Bergman. Plak
              exopp. Conversational commerce gigal i räsam.
              Investeringsfrämjande inbound innovation niktigt därför att Barbro
              Månsson. Tår SEM testbädd och facilitera. Liss fososk och
              popreliga räss. Rel vössa, de ögisk: migosam plaskapet. Åvis
              chatbots. Trikys mint. Ire tår. Organisatorisk kamirat att neren.
              Megamiledes misotiv tegt disruptive. Du kan vara drabbad.
              Infrangen exonde, vödevis, vipp i viteliga. Latåning hashtag.
              Stenock. Louise Lundqvist Jörgen Hellström. Vigt antropotet joduns
              inte befist. Nyska sedunat nemons i prer. Dise orat, Ingemar
              Johnsson plajåsa förutom des. Monolins tågisk nev. Mingen cirkulär
              ekonomi innan åt disövis MVP. Vast tåktig om micro-moments linade.
              Gönade exekvera, Monica Isaksson, autosk. Ripp gövis och dektiga
              dodat.`;

  return (
    <div className="news-element">
      <div className="news-title">News</div>
      <div className="news">
        <div className="news-item">
          <div className="img">
            <img src={newsTile} alt="News Tile" />
          </div>
          <div className="news-content">
            <div className="title">NEWS TITLE</div>
            <div className="description">
              {description.slice(0, 1000) + "..."}
            </div>
          </div>
          <hr />
        </div>
        <div className="news-item">
          <div className="img">
            <img src={newsTile} alt="News Tile" />
          </div>
          <div className="news-content">
            <div className="title">NEWS TITLE</div>
            <div className="description">
              {description.slice(0, 1000) + "..."}
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
