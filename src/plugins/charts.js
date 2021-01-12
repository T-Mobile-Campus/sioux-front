import Vue from "vue";
import Echarts from "vue-echarts";

import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/axis";
import 'echarts/lib/coord/cartesian/Grid';
import 'echarts/lib/coord/cartesian/Axis2D';
import "echarts/lib/chart/lines";
import "echarts/lib/chart/line";
import "echarts/lib/chart/gauge"

Vue.component("chart", Echarts);
