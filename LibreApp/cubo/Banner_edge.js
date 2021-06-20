/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Fondo',
            type:'image',
            rect:['0','0','1360px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Fondo.png",'0px','0px']
         },
         {
            id:'TituloGrandeBlanco',
            type:'image',
            rect:['0','50px','1360px','100px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"TituloGrandeBlanco.png",'0px','0px']
         },
         {
            id:'TituloGrandeBlancoCopy',
            type:'image',
            rect:['0','-50px','1360px','100px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"TituloGrandeBlanco.png",'0px','0px'],
            transform:[]
         },
         {
            id:'TituloGrandeCeleste',
            type:'image',
            rect:['0','0','1360px','100px','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"TituloGrandeCeleste.png",'0px','0px']
         },
         {
            id:'FondoCeleste',
            type:'image',
            rect:['0','0','1360px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"FondoCeleste.png",'0px','0px']
         },
         {
            id:'BaseIzquierda',
            type:'image',
            rect:['-200px','0','1360px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"BaseIzquierda.png",'0px','0px']
         },
         {
            id:'LineaBase',
            type:'image',
            rect:['0','35px','1360px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"LineaBase.png",'0px','0px']
         },
         {
            id:'BaseDerecha',
            type:'image',
            rect:['210px','0','1360px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"BaseDerecha.png",'0px','0px']
         },
         {
            id:'Franja',
            type:'image',
            rect:['106px','-100px','1360px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Franja.png",'0px','0px']
         },
         {
            id:'Mined',
            type:'image',
            rect:['1360px','0','1360px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Mined.png",'0px','0px']
         },
         {
            id:'Minerva',
            type:'image',
            rect:['-1360px','0','1360px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Minerva.png",'0px','0px']
         },
         {
            id:'TituloPequeo',
            type:'image',
            rect:['0','30px','1360px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"TituloPequeno.png",'0px','0px']
         },
         {
            id:'FotosAlumnos',
            type:'image',
            rect:['0','0','1360px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"FotosAlumnos.png",'0px','0px']
         },
         {
            id:'LogosLibreOffice',
            type:'image',
            rect:['0','0','1360px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"LogosLibreOffice.png",'0px','0px']
         },
         {
            id:'LibreOffice',
            type:'image',
            rect:['1109px','0','102px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"LibreOffice.png",'0px','0px'],
            transform:[[],[],[],['0.5','0.5']]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_BaseDerecha}": [
            ["style", "left", '210px']
         ],
         "${_LibreOffice}": [
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '1109px'],
            ["transform", "scaleY", '0.5']
         ],
         "${_Minerva}": [
            ["style", "-webkit-transform-origin", [96.05,51.75], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [96.05,51.75],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [96.05,51.75],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [96.05,51.75],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [96.05,51.75],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '-1360px'],
            ["subproperty", "filter.drop-shadow.offsetH", '-3px']
         ],
         "${_LogosLibreOffice}": [
            ["transform", "scaleX", '0.3'],
            ["style", "opacity", '0'],
            ["transform", "scaleY", '0.3']
         ],
         "${_FotosAlumnos}": [
            ["style", "opacity", '0'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_TituloGrandeBlancoCopy}": [
            ["style", "top", '-50px'],
            ["style", "opacity", '0']
         ],
         "${_LineaBase}": [
            ["style", "top", '35px']
         ],
         "${_TituloGrandeCeleste}": [
            ["transform", "scaleY", '1'],
            ["subproperty", "filter.blur", '0px'],
            ["subproperty", "filter.invert", '0'],
            ["style", "opacity", '0'],
            ["transform", "scaleX", '1']
         ],
         "${_Mined}": [
            ["style", "left", '1360px']
         ],
         "${_TituloPequeo}": [
            ["style", "top", '30px']
         ],
         "${_FondoCeleste}": [
            ["style", "left", '0px'],
            ["style", "opacity", '0']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1360px'],
            ["style", "height", '100px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Franja}": [
            ["style", "left", '106px'],
            ["style", "top", '-100px']
         ],
         "${_BaseIzquierda}": [
            ["style", "left", '-200px']
         ],
         "${_TituloGrandeBlanco}": [
            ["style", "top", '50px'],
            ["style", "opacity", '0'],
            ["subproperty", "filter.contrast", '0.6'],
            ["subproperty", "filter.invert", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 11000,
         autoPlay: true,
         timeline: [
            { id: "eid46", tween: [ "style", "${_BaseIzquierda}", "left", '0px', { fromValue: '-200px'}], position: 4500, duration: 250 },
            { id: "eid6", tween: [ "style", "${_TituloGrandeBlancoCopy}", "top", '0px', { fromValue: '-50px'}], position: 0, duration: 750 },
            { id: "eid108", tween: [ "style", "${_Minerva}", "opacity", '0', { fromValue: '1'}], position: 7000, duration: 500, easing: "swing" },
            { id: "eid111", tween: [ "style", "${_Minerva}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 500, easing: "swing" },
            { id: "eid53", tween: [ "style", "${_Franja}", "left", '0px', { fromValue: '106px'}], position: 5250, duration: 250 },
            { id: "eid7", tween: [ "style", "${_TituloGrandeBlanco}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750 },
            { id: "eid20", tween: [ "style", "${_TituloGrandeBlanco}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 },
            { id: "eid57", tween: [ "style", "${_Minerva}", "left", '0px', { fromValue: '-1360px'}], position: 5750, duration: 500 },
            { id: "eid48", tween: [ "style", "${_BaseDerecha}", "left", '0px', { fromValue: '210px'}], position: 4750, duration: 250 },
            { id: "eid80", tween: [ "transform", "${_LibreOffice}", "scaleY", '1', { fromValue: '0.5'}], position: 6250, duration: 750, easing: "easeOutBounce" },
            { id: "eid58", tween: [ "style", "${_Mined}", "left", '0px', { fromValue: '1360px'}], position: 5750, duration: 500 },
            { id: "eid50", tween: [ "style", "${_LineaBase}", "top", '0px', { fromValue: '35px'}], position: 5000, duration: 250 },
            { id: "eid106", tween: [ "transform", "${_Minerva}", "scaleY", '0', { fromValue: '1'}], position: 7000, duration: 500, easing: "swing" },
            { id: "eid110", tween: [ "transform", "${_Minerva}", "scaleY", '1', { fromValue: '0'}], position: 7500, duration: 500, easing: "swing" },
            { id: "eid88", tween: [ "transform", "${_Minerva}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 7000, duration: 500, easing: "swing" },
            { id: "eid112", tween: [ "transform", "${_Minerva}", "rotateZ", '720deg', { fromValue: '360deg'}], position: 7500, duration: 500, easing: "swing" },
            { id: "eid91", tween: [ "subproperty", "${_Minerva}", "filter.drop-shadow.offsetH", '-3px', { fromValue: '-3px'}], position: 7000, duration: 0, easing: "swing" },
            { id: "eid95", tween: [ "style", "${_Minerva}", "-webkit-transform-origin", [96.05,51.75], { valueTemplate: '@@0@@% @@1@@%', fromValue: [96.05,51.75]}], position: 7000, duration: 0, easing: "swing" },
            { id: "eid129", tween: [ "style", "${_Minerva}", "-moz-transform-origin", [96.05,51.75], { valueTemplate: '@@0@@% @@1@@%', fromValue: [96.05,51.75]}], position: 7000, duration: 0, easing: "swing" },
            { id: "eid130", tween: [ "style", "${_Minerva}", "-ms-transform-origin", [96.05,51.75], { valueTemplate: '@@0@@% @@1@@%', fromValue: [96.05,51.75]}], position: 7000, duration: 0, easing: "swing" },
            { id: "eid131", tween: [ "style", "${_Minerva}", "msTransformOrigin", [96.05,51.75], { valueTemplate: '@@0@@% @@1@@%', fromValue: [96.05,51.75]}], position: 7000, duration: 0, easing: "swing" },
            { id: "eid132", tween: [ "style", "${_Minerva}", "-o-transform-origin", [96.05,51.75], { valueTemplate: '@@0@@% @@1@@%', fromValue: [96.05,51.75]}], position: 7000, duration: 0, easing: "swing" },
            { id: "eid105", tween: [ "transform", "${_Minerva}", "scaleX", '0', { fromValue: '1'}], position: 7000, duration: 500, easing: "swing" },
            { id: "eid109", tween: [ "transform", "${_Minerva}", "scaleX", '1', { fromValue: '0'}], position: 7500, duration: 500, easing: "swing" },
            { id: "eid86", tween: [ "transform", "${_FotosAlumnos}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 5750, duration: 500 },
            { id: "eid5", tween: [ "style", "${_TituloGrandeBlancoCopy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 750 },
            { id: "eid19", tween: [ "style", "${_TituloGrandeBlancoCopy}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 250 },
            { id: "eid60", tween: [ "style", "${_TituloPequeo}", "top", '0px', { fromValue: '30px'}], position: 5750, duration: 500 },
            { id: "eid81", tween: [ "style", "${_FondoCeleste}", "left", '0px', { fromValue: '0px'}], position: 11000, duration: 0 },
            { id: "eid39", tween: [ "transform", "${_TituloGrandeCeleste}", "scaleY", '1', { fromValue: '1'}], position: 750, duration: 0 },
            { id: "eid44", tween: [ "style", "${_FondoCeleste}", "opacity", '1', { fromValue: '0.000000'}], position: 4250, duration: 250 },
            { id: "eid72", tween: [ "style", "${_LibreOffice}", "opacity", '1', { fromValue: '0.000000'}], position: 5750, duration: 500 },
            { id: "eid8", tween: [ "style", "${_TituloGrandeBlanco}", "top", '0px', { fromValue: '50px'}], position: 0, duration: 750 },
            { id: "eid66", tween: [ "style", "${_FotosAlumnos}", "opacity", '1', { fromValue: '0'}], position: 5750, duration: 500 },
            { id: "eid79", tween: [ "transform", "${_LibreOffice}", "scaleX", '1', { fromValue: '0.5'}], position: 6250, duration: 750, easing: "easeOutBounce" },
            { id: "eid54", tween: [ "style", "${_Franja}", "top", '0px', { fromValue: '-100px'}], position: 5250, duration: 250 },
            { id: "eid10", tween: [ "style", "${_TituloGrandeCeleste}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_TituloGrandeCeleste}", "opacity", '1', { fromValue: '0.000000'}], position: 750, duration: 250 },
            { id: "eid41", tween: [ "style", "${_TituloGrandeCeleste}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 250 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-216210602");
