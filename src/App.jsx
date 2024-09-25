import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Menu from "./Component/Menu";
// import ListchAni from "./Pages/ListAni";
import Anime from "./Pages/Anime";
import PiePagina from "./Component/PiePagina";
import Studios from "./Pages/Studios";
import Studio from "./Pages/Studio";
//import SearchAni from "./Component/SearchAni";
import TopAnime from "./Pages/TopAnime";
import TopAniList from "./Component/TopAniList";
import Season from "./Pages/Sesone";
import ListSeason from "./Component/ListSeason";
import SeasonSearch from "./Component/SeasonSearch";
import SearchAnime from "./Pages/SearchAnime";
import Page404 from "./Pages/Page404";

function App() {
  // Corregir el proyecto
  //1.el responsibe aun falta en el diseño de movil y tablet-Listo
  //10.el panel principal debo rediseñarlo
  //14-rediseñar el loading
  //3.la paginacion no funciona cada vez que se cambia de seccion
  //4. aplicar la paginacion a la url, para cada vez actualizar se mantega en la pagina correcta
  //6. esperar que los elementos cargen para mostrar la pagina
  //8. cada vez que entro a una pagina de los studio  de animacion no me muetra nada, debo revisarlo
  //13-cada vez que cambie se se muestre la carga
  //9.la pagina del 404 aun no esta diseñada

  //2.el menu-al selecionar no cierra el menu (falta)
  //5. el seo mejorar
  //7.al cambiar de pagina de mostrarme desde un inicio

  //11.en la busqueda del año no esta funcionando de la busqueda
  //12. Poner la pagina en español
  //15 de de busqueda esta mal cuando no hay nada debe aparcer un mensaje
  return (
    <>
      <HashRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Anime/:id" element={<Anime />} />
          <Route path="/Studios" element={<Studios />}></Route>
          <Route path="/Studios/:id" element={<Studio />}>
            <Route path=":type" element={<Studio />} />
          </Route>
          <Route path="/TopAnime" element={<TopAnime />}>
            <Route index element={<TopAniList />} />
            <Route path=":producto" element={<TopAniList />} />
          </Route>
          <Route path="/Season" element={<Season />}>
            <Route index element={<SeasonSearch />} />
            <Route path="All_Season" element={<ListSeason />} />
            <Route path=":year/:season" element={<SeasonSearch />}>
              <Route path=":type" element={<SeasonSearch />}></Route>
            </Route>
            <Route path=":type" element={<SeasonSearch />}></Route>
          </Route>
          <Route path="/Animes" element={<SearchAnime />}>
            <Route path=":type" element={<SearchAnime />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
        <PiePagina />
      </HashRouter>
    </>
  );
}

export default App;
