// 初始化地图
const scene = new L7.Scene({
    id: 'map', // 对应页面中 DOM 元素的 id
    map: new L7.GaodeMap({
        pitch: 0, // 地图倾斜角度
        style: 'dark', // 地图样式
        center: [104.288144, 31.239692], // 地图中心点
        zoom: 4.4, // 地图缩放级别
    }),
});

// 创建面图层
const chinaPolygonLayer = new L7.PolygonLayer({})
    .source(data) // 数据源
    .color('name', [
        // 根据 'name' 字段设置颜色
        'rgb(239,243,255)',
        'rgb(189,215,231)',
        'rgb(107,174,214)',
        'rgb(49,130,189)',
        'rgb(8,81,156)',
    ]);

// 将图层添加到地图中
scene.addLayer(chinaPolygonLayer);

