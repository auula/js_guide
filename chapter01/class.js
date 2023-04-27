// js 中也有 class 类型,类名要大
class Point {
	// consturctor 固定写法构造器
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}

	distance() {
		retrun Math.sqrt(this.x * this.x + 
				 this.y * this.y
		);
	}
}

let p = new Point(6,8);

p.distance();
