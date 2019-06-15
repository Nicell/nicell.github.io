import { p as patchBrowser, g as globals, b as bootstrapLazy } from './chunk-06f44aaa.js';

patchBrowser().then(resourcesUrl => {
  globals();
  return bootstrapLazy([["app-about",[[1,"app-about"]]],["app-footer",[[0,"app-footer"]]],["app-section",[[1,"app-section"]]],["app-browser-preview",[[1,"app-browser-preview",{"site":[1],"direction":[1]}]]],["app-project",[[1,"app-project",{"config":[16]}]]],["app-icon",[[0,"app-icon",{"icon":[1],"class":[1]}]]],["app-skills-panel",[[1,"app-skills-panel",{"config":[16]}]]],["app-skills",[[1,"app-skills",{"skills":[16]}]]],["app-anim",[[4,"app-anim",{"anim":[1],"delay":[2],"duration":[2],"distance":[1]}]]],["app-img",[[0,"app-img",{"alt":[1],"src":[1],"type":[1]}]]],["app-home",[[1,"app-home"]]]], { resourcesUrl });
});
