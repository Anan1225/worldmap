// import { Mapbox, GaodeMap } from '@antv/l7-maps';
// import { Scene, PolygonLayer } from '@antv/l7';

// 初始化地图
const scene = new L7.Scene({
    id: 'map', // 对应页面中 DOM 元素的 id
    map: new L7.GaodeMap({
        pitch: 0, // 地图倾斜角度
        style: 'blank', // 地图样式
        center: [104.288144, 31.239692], // 地图中心点
        zoom: 4.4, // 地图缩放级别
    }),
});

scene.on("loaded", () => {

    fetch(
        "https://gw.alipayobjects.com/os/bmw-prod/c4a6aa9d-8923-4193-a695-455fd8f6638c.json"
    )
        .then(res => res.json())
        .then(data => {

            // 创建面图层
            const chinaPolygonLayer = new L7.PolygonLayer({
                autoFit: true,
            }).source(data); // 数据源

            chinaPolygonLayer.color('name', [
                // 根据 'name' 字段设置颜色
                'rgb(239,243,255)',
                'rgb(189,215,231)',
                'rgb(107,174,214)',
                'rgb(49,130,189)',
                'rgb(8,81,156)',
            ])
                .shape('fill')
                .style({
                    opacity: 1,
                });
            const layer2 = new L7.LineLayer({
                zIndex: 2
            })
                .source(data)
                .color("rgb(93,112,146)")
                .size(0.6)
                .style({
                    opacity: 1,
                });

            // 将图层添加到地图中
            scene.addLayer(chinaPolygonLayer);
            scene.addLayer(layer2);
        })

        .catch(err => {
            console.log(err);
        });
});
