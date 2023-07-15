let geo = document.querySelector("#local>span");
let fixed = document.querySelector("#fixed>span");

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    geo.textContent = `纬度：${latitude} °，经度：${longitude} °`;
}

function error() {
    geo.textContent = '无法获取你的位置';
}

if (!navigator.geolocation) {
    geo.textContent = '你的浏览器不支持地理位置';
} else {
    geo.textContent = '定位中……';
    navigator.geolocation.watchPosition(success, error);
}

if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', handleOrientation, true);
} else {
    console.log("设备不支持方向传感器");
}

function handleOrientation(event) {
    var alpha = event.alpha; // 绕 Z 轴的旋转角度，取值范围为 0 到 360
    var beta = event.beta;   // 绕 X 轴的旋转角度，取值范围为 -180 到 180
    var gamma = event.gamma; // 绕 Y 轴的旋转角度，取值范围为 -90 到 90

    // 更新页面上的数据
    fixed.textContent = alpha.toFixed(2) + "," + beta.toFixed(2) + "," + gamma.toFixed(2);
}

