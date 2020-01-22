/***********************
 * @name JS
 * @author Jo.gel
 * @date 2020/1/20 0020
 * @ref 百度坐标提取器 http://api.map.baidu.com/lbsapi/getpoint/index.html
 * @warning 如果data 的城市不在这个列表下，则会产生坐标定位偏移
 ***********************/

export const geo = {
	"湖北": [115.65875349263533, 30.53695878561894],
	"武汉": [115.65875349263533, 30.53695878561894],
	"北京": [117.60313420277937, 41.02650092215634],
	"杭州": [120.219375, 30.259244],
	"温州": [120.690635, 28.002838],
	"舟山": [122.169872, 30.03601],
	"深圳": [114.025974, 22.546054],
	"广州": [113.30765, 23.120049],
	"上海": [121.487899, 31.249162],
	"贵阳": [106.709177, 26.629907],
	"珠海": [113.562447, 22.256915],
	"山东": [118.527663, 36.09929],
	"大连": [121.593478, 38.94871],
	"日本": [139.666002, 35.806528],
	"泰国": [100.486347, 13.756726],
	"韩国": [126.954566, 37.604327],
	"新加坡":[103.864104,1.356423],
	"菲律宾":[121.028927,14.639007],
	"美国":[-77.044809,38.92539],
	"澳大利亚":[149.196095,-35.297238],
};
