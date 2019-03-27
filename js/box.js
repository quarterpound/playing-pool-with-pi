class Box {
	constructor (x, y, w, h, m, v) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h
		this.m = m;
		this.v = v;
	}

	update () {
		this.x += this.v;
		if(this.hitWall()) this.v = -this.v
	}

	collide (coll) {
		if (this.x < coll.x + coll.w && this.x + this.w > coll.x) {
			let v1 = this.v1(this.m, coll.m, this.v, coll.v);
			let v2 = this.v2(this.m, coll.m, this.v, coll.v);

			this.v = v1;
			coll.v = v2;

			return true;
		}
		return false;
	}

	show () {
		push();
		translate(this.x, this.y);
		rect(0, 0, this.w, this.h);
		pop();
	}

	v1 (m1, m2, u1, u2) {
		let d = m1 + m2;
		let a = (m1 - m2) * u1 / d;
		let b = 2 * m2 * u2 / d;
		return a + b;
	}

	v2 (m1, m2, u1, u2) {
		let d = m1 + m2;
		let a = 2 * m1 * u1 / d;
		let b = (m2 - m1) * u2 / d;
		return a + b;
	}

	hitWall () {
		return (this.x <= 0)
	}

	offScreen () {
		return (this.x >= width);
	}
}
