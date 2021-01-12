import Vue from "vue";
import Echarts from "vue-echarts";

// import "echarts/lib/chart/pie";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/axis";
import "echarts/lib/chart/lines";
import "echarts/lib/chart/line";
// import "echarts/lib/chart/radar";
import "echarts/lib/chart/gauge"

Vue.component("chart", Echarts);
