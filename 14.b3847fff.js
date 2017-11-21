webpackJsonp([14],{KQCt:function(t,s,a){t.exports=a("Tu0y")},Tu0y:function(t,s,a){var v=a("VU/8")(a("ofd+"),a("bLdK"),null,null);t.exports=v.exports},bLdK:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[[a("h1",[t._v("多边形")]),t._v(" "),t._m(0,!1,!1),t._v(" "),a("h2",[t._v("属性")]),t._v(" "),t._m(1,!1,!1),t._v(" "),a("h2",[t._v("事件")]),t._v(" "),t._m(2,!1,!1),t._v(" "),a("h2",[t._v("示例")]),t._v(" "),a("h3",[t._v("在地图中添加可编辑的多边形")]),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(3,!1,!1),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15}},[a("bm-polygon",{attrs:{path:t.polygonPath,"stroke-color":"blue","stroke-opacity":.5,"fill-opacity":.5,editing:!0},on:{lineupdate:t.updatePolygonPath}})],1),t._v(" "),a("md-table",[a("md-table-header",[a("md-table-head",[t._v("坐标")]),t._v(" "),a("md-table-head",[t._v("经度")]),t._v(" "),a("md-table-head",[t._v("纬度")])],1),t._v(" "),a("md-table-body",t._l(t.polygonPath,function(s,v){return a("md-table-row",{key:v},[a("md-table-cell",[t._v(t._s("坐标-"+(v+1)))]),t._v(" "),a("md-table-cell",[a("md-input-container",[a("md-input",{attrs:{"md-inline":""},model:{value:s.lng,callback:function(a){t.$set(s,"lng",t._n(a))},expression:"point.lng"}})],1)],1),t._v(" "),a("md-table-cell",[a("md-input-container",[a("md-input",{attrs:{"md-inline":""},model:{value:s.lat,callback:function(a){t.$set(s,"lat",t._n(a))},expression:"point.lat"}})],1)],1)],1)}))],1),t._v(" "),a("md-button",{staticClass:"md-raised md-primary",on:{click:t.addPolygonPoint}},[t._v("\n    添加一个坐标点\n  ")])],1)]],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("BmPolygon")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("path")]),t._v(" "),a("td",[t._v("Array[Point]")]),t._v(" "),a("td",[t._v("[]")]),t._v(" "),a("td",[t._v("构成折线的点")])]),t._v(" "),a("tr",[a("td",[t._v("strokeColor")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("折线颜色")])]),t._v(" "),a("tr",[a("td",[t._v("strokeWeight")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("折线的宽度，以像素为单位")])]),t._v(" "),a("tr",[a("td",[t._v("strokeOpacity")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("折线的透明度，取值范围0 - 1")])]),t._v(" "),a("tr",[a("td",[t._v("strokeStyle")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("'solid'")]),t._v(" "),a("td",[t._v("折线的样式，solid或dashed")])]),t._v(" "),a("tr",[a("td",[t._v("fillColor")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("填充颜色。当参数为空时，折线覆盖物将没有填充效果")])]),t._v(" "),a("tr",[a("td",[t._v("fillOpacity")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("填充的透明度，取值范围0 - 1")])]),t._v(" "),a("tr",[a("td",[t._v("enableMassClear")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("是否在调用map.clearOverlays清除此覆盖物")])]),t._v(" "),a("tr",[a("td",[t._v("enableEditing")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("是否启用线编辑")])]),t._v(" "),a("tr",[a("td",[t._v("enableClicking")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("是否响应点击事件")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("事件名")]),t._v(" "),a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("click")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("点击折线后会触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("dblclick")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("双击折线后会触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("mousedown")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("鼠标在折线上按下触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("mouseup")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("鼠标在折线释放触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("mouseout")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("鼠标离开折线时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("mouseover")]),t._v(" "),a("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),a("td",[t._v("当鼠标进入折线区域时会触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("remove")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("移除折线时触发")])]),t._v(" "),a("tr",[a("td",[t._v("lineupdate")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("覆盖物的属性发生变化时触发")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-polygon")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":path")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"polygonPath"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("stroke-color")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"blue"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":stroke-opacity")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"0.5"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":stroke-weight")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"2"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":editing")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("@lineupdate")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"updatePolygonPath"')]),t._v("/>")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("polygonPath")]),t._v(": [\n        {"),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("116.412732")]),t._v(", "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("39.911707")]),t._v("},\n        {"),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("116.39455")]),t._v(", "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("39.910932")]),t._v("},\n        {"),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("116.403461")]),t._v(", "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("39.921336")]),t._v("}\n      ]\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    updatePolygonPath (e) {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".polygonPath = e.target.getPath()\n    },\n    addPolygonPoint () {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".polygonPath.push({"),a("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("116.404")]),t._v(", "),a("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),a("span",{staticClass:"hljs-number"},[t._v("39.915")]),t._v("})\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}},"ofd+":function(t,s,a){var v,_,n;!function(a,l){_=[t,s],v=l,void 0!==(n="function"==typeof v?v.apply(s,_):v)&&(t.exports=n)}(0,function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{polygonPath:[{lng:116.412732,lat:39.911707},{lng:116.39455,lat:39.910932},{lng:116.403461,lat:39.921336}]}},methods:{updatePolygonPath:function(t){this.polygonPath=t.target.getPath()},addPolygonPoint:function(){this.polygonPath.push({lng:116.404,lat:39.915})}}},t.exports=s.default})}});