import newsTile from "../Assets/img/news-tile.png";
import "./about.css";

export default function About() {
  const about = {
    images: [newsTile, newsTile],
    title: "About",
    description: `Lörem ipsum hysade Filip Eriksson cirkulär handel gande new retail. Triple helix seras, multihet. Transparens del, samt Anita Ek det äll. 
Posamma tidat. Suprang las. Pres Pia Nordin. 
Likes intrana eller dinade trid. Cirkulär handel hexapyvis. Dira monocism men ROPO kun. 
Bionyvis suprangen är paratide. Unicorn osade fibelt. Anton Arvidsson imase sod astrobel. 
Gar donenade ber. Nån rötirade förutom kvasina. Göra osk om syr, respektive difugt. 
Ulla Lundberg planing. Nement diska i dosm plajåsyll SEM. Kar decil. 
Treryll dikoling Pinterest homosarat i neplar. Fer mifada förutom Linda Nyberg, ponar. Marianne Mattsson fesk. 
Syvingen innovationsekosystem funde pren Frida Jakobsson. Kluster. Tibel häbel tetrabel. 
Havis dilig, var kande. Digitala assistenter tiv Anders Danielsson ultranar innovationssystem. Sebel kamire är intral, och spengen. 
Kona an, Carl Fransson: suprask. Sydade furtad Sonja Falk med innovationsprocess intran. Makroherade rutregen en plar inte egoras parakuhertad. 
Podosengen spes fugäligt, äväkarade GPT-3. Preren maska. Ultrakall Sofia Sjöberg. 
Redel Olov Gustavsson häst. Marie Jönsson dekuss disruptiv handel. Din infrass bootstrapping. 
Vangen res vamåment trad. Pade kosade äde, Leif Larsson är Jonathan Blom. Innovationshöjd Helen Fredriksson fårade, gäkusm hemimasonde. 
Krokuligt heligen i vir i pokaliga. Fimimirade monosasm ifall tivivis hämafågisk. Gelass povis kunade därför att begisk på gökal. 
Patt Birgitta Petersson gigafiras preda, epigåliga. Gigaprest nåre: om Charlotte Sjögren det vill säga mining pure players. Podda Olivia Magnusson. 
Gillamarkeringar teleska, och Snapchat. Homodat tes Bengt Eriksson. Relaterade artiklar plagärade i göras, liksom paraling Annika Lindholm. 
Hemider diss. Hare antidat. Eurokyna ohet, ger, tiktigt malarat. 
Yresade tresm. Analedes Anette Bergström. Er pseudosk falig hegen lar. 
Hegist suprasa, till trepok, fess. Coworking space orat. Sorat fål om fagen sovis. Du kan vara drabbad. 
Bektig antidengen, pegisk benera. Makrogäv åsat Tomas Sundström vivis Björn Berggren. Likes bism. 
Preheten spens i homoll läv heteroda. Tihens mavifit heledes prer alltså Lina Persson. Bufurade sytt, friktionsfri handel. 
Pres difunde. Trens pebulingar, Rolf Karlsson det att gadynde. Kade Linus Nordström kosamma sedan abuligen. 
Befåsk plasydese. Bism speskapet farat. Sospengar nessade, av ed. 
Ortad autotressa tresont gillamarkeringar. Travis synade Ingegerd Berglund. Personalisering pyligt med fål. 
Lahesa kontraheheten. Gänat prer väjådade Emil Persson, för att astrokorade. Trer krofament kadick för att Lena Wallin nyfivis. 
`,
  };

  return (
    <div className="about-page">
      <div className="about-content">
        <div>
          <div className="about-title">{about.title}</div>
          <div className="about-description">{about.description}</div>
        </div>
        <div className="about-images">
          {about.images.map((image) => (
            <div className="img">
              <img src={image} alt={about.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
