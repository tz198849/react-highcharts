var React = require('react');
// Note that Highcharts has to be required separately
var ReactHighcharts = require('react-highcharts');
var Highlight = require('react-highlight');
var ReactDOM = require('react-dom');

var config = {
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
  }]
};

ReactDOM.render(
  <ReactHighcharts config={config}></ReactHighcharts>,
  document.getElementById('test')
);
ReactDOM.render(
  <Highlight className="jsx">{require("raw-loader!./index.jsx")}</Highlight>,
  document.getElementById('code-js')
);
ReactDOM.render(
  <Highlight className="html">{require("raw-loader!./index.html")}</Highlight>,
  document.getElementById('code-html')
);

require("file?name=[name].[ext]!./index.html");
require("file?name=[name].[ext]!./more.html");
require("file?name=[name].[ext]!./style.css");
require("file?name=[name].[ext]!./tomorrow.css");

