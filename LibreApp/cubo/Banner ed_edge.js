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
            id:'Fondo_base',
            type:'image',
            rect:['0','0','1360px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Fondo_base.png",'0px','0px']
         },
         {
            id:'Base_celeste',
            type:'image',
            rect:['0','0','1360px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Base_celeste.png','0px','0px']
         },
         {
            id:'Izq_base',
            type:'image',
            rect:['0','0','1360px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Izq_base.png",'0px','0px']
         },
         {
            id:'img_dec2',
            type:'image',
            rect:['46px','-15px','1200px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",'img%20dec.png','0px','0px'],
            transform:[[],[],[],['0.85','0.85']]
         },
         {
            id:'Linea_base',
            type:'image',
            rect:['0','0','1360px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Linea_base.png",'0px','0px']
         },
         {
            id:'Der_base',
            type:'image',
            rect:['0','0','1360px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Der_base.png",'0px','0px']
         },
         {
            id:'Line_base',
            type:'image',
            rect:['0','0','1360px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Line_base.png",'0px','0px']
         },
         {
            id:'Mined',
            type:'image',
            rect:['1360px','0','1360px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Mined.png",'0px','0px']
         },
         {
            id:'Minerva',
            type:'image',
            rect:['-1360px','0','1360px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Minerva.png",'0px','0px']
         },
         {
            id:'Texto',
            type:'image',
            rect:['0%','24.3%','1360px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Texto.png",'0px','0px']
         },
         {
            id:'Titulo_blanco',
            type:'image',
            rect:['0','150px','1360px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Titulo_blanco.png','0px','0px']
         },
         {
            id:'Titulo_blancoCopy',
            type:'image',
            rect:['0','-150px','1360px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Titulo_blanco.png','0px','0px']
         },
         {
            id:'Titulo_celeste',
            type:'image',
            rect:['0','0','1360px','90px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Titulo_celeste.png','0px','0px']
         },
         {
            id:'Logos_libreoffice',
            type:'image',
            rect:['1104px','12px','90px','176px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Logos_libreoffice.png','0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Mined}": [
            ["style", "left", '1360px']
         ],
         "${_Der_base}": [
            ["style", "opacity", '0']
         ],
         "${_Izq_base}": [
            ["style", "opacity", '0']
         ],
         "${_Titulo_celeste}": [
            ["style", "opacity", '0']
         ],
         "${_Minerva}": [
            ["style", "left", '-1360px']
         ],
         "${_img_dec2}": [
            ["style", "top", '-15px'],
            ["transform", "scaleY", '0.85'],
            ["transform", "scaleX", '0.85'],
            ["style", "opacity", '0'],
            ["style", "left", '46px']
         ],
         "${_Logos_libreoffice}": [
            ["style", "top", '12px'],
            ["transform", "scaleY", '0.4'],
            ["transform", "scaleX", '0.4'],
            ["style", "opacity", '0'],
            ["style", "left", '1104px']
         ],
         "${_Linea_base}": [
            ["style", "opacity", '0']
         ],
         "${_Titulo_blanco}": [
            ["style", "top", '150px'],
            ["style", "opacity", '0']
         ],
         "${_Titulo_blancoCopy}": [
            ["style", "top", '-150px'],
            ["style", "opacity", '0']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '90px'],
            ["style", "width", '1360px']
         ],
         "${_Texto}": [
            ["style", "left", '0%'],
            ["style", "top", '24.3%']
         ],
         "${_Line_base}": [
            ["style", "opacity", '0']
         ],
         "${_Base_celeste}": [
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10000,
         autoPlay: true,
         timeline: [
            { id: "eid31", tween: [ "style", "${_Titulo_blancoCopy}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500 },
            { id: "eid37", tween: [ "style", "${_Titulo_blancoCopy}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid42", tween: [ "style", "${_Base_celeste}", "opacity", '1', { fromValue: '0.000000'}], position: 4500, duration: 250 },
            { id: "eid20", tween: [ "style", "${_Minerva}", "left", '0px', { fromValue: '-1360px'}], position: 4500, duration: 500 },
            { id: "eid28", tween: [ "style", "${_Titulo_celeste}", "opacity", '1', { fromValue: '0.000000'}], position: 750, duration: 250 },
            { id: "eid46", tween: [ "style", "${_Titulo_celeste}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500 },
            { id: "eid14", tween: [ "style", "${_Line_base}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 500 },
            { id: "eid22", tween: [ "style", "${_Titulo_blanco}", "top", '0px', { fromValue: '150px'}], position: 0, duration: 750 },
            { id: "eid10", tween: [ "style", "${_Izq_base}", "opacity", '1', { fromValue: '0.000000'}], position: 3750, duration: 500 },
            { id: "eid63", tween: [ "style", "${_Logos_libreoffice}", "opacity", '1', { fromValue: '0.000000'}], position: 4750, duration: 250, easing: "easeOutBounce" },
            { id: "eid72", tween: [ "style", "${_Logos_libreoffice}", "opacity", '1', { fromValue: '1'}], position: 10000, duration: 0, easing: "easeOutBounce" },
            { id: "eid12", tween: [ "style", "${_Der_base}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 500 },
            { id: "eid71", tween: [ "style", "${_img_dec2}", "opacity", '1', { fromValue: '0.000000'}], position: 4500, duration: 500 },
            { id: "eid24", tween: [ "style", "${_Titulo_blancoCopy}", "top", '0px', { fromValue: '-150px'}], position: 0, duration: 750 },
            { id: "eid68", tween: [ "transform", "${_Logos_libreoffice}", "scaleY", '1', { fromValue: '0.4'}], position: 5000, duration: 500, easing: "easeOutBounce" },
            { id: "eid34", tween: [ "style", "${_Titulo_blanco}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500 },
            { id: "eid39", tween: [ "style", "${_Titulo_blanco}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 250 },
            { id: "eid18", tween: [ "style", "${_Mined}", "left", '0px', { fromValue: '1360px'}], position: 4500, duration: 500 },
            { id: "eid67", tween: [ "transform", "${_Logos_libreoffice}", "scaleX", '1', { fromValue: '0.4'}], position: 5000, duration: 500, easing: "easeOutBounce" },
            { id: "eid16", tween: [ "style", "${_Texto}", "top", '0%', { fromValue: '24.3%'}], position: 4500, duration: 500 },
            { id: "eid7", tween: [ "style", "${_Linea_base}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 500 }         ]
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
})(jQuery, AdobeEdge, "EDGE-304920665");
