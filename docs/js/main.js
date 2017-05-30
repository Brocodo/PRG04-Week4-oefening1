var Chicken = (function () {
    function Chicken(g, x, y, tree) {
        var _this = this;
        this.game = g;
        this._div = document.createElement("bird");
        tree.div.appendChild(this._div);
        this.x = x;
        this.y = y;
        this.width = 67;
        this.height = 110;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this._div.addEventListener("click", function (e) { return _this.onClick(e); });
    }
    Object.defineProperty(Chicken.prototype, "div", {
        get: function () {
            return this._div;
        },
        enumerable: true,
        configurable: true
    });
    Chicken.prototype.onClick = function (e) {
        if (this.gun) {
            this.gun.fire();
            console.log("firing");
        }
        else {
            this.gun = new Gun(this.game, this);
            console.log("click clack");
        }
    };
    return Chicken;
}());
var Tree = (function () {
    function Tree(g, x, y) {
        this.game = g;
        this._div = document.createElement("tree");
        document.body.appendChild(this._div);
        this.speed = Math.random() * 4 + 1;
        this.width = 414;
        this.height = 86;
        this.x = x;
        this.y = y;
        this.chickens = new Array();
        for (var i = 0; i < Math.random() * 3 + 1; i++) {
            var x_1 = i * 100;
            this.chickens.push(new Chicken(this.game, x_1, -70, this));
        }
    }
    Object.defineProperty(Tree.prototype, "div", {
        get: function () {
            return this._div;
        },
        enumerable: true,
        configurable: true
    });
    Tree.prototype.move = function () {
        this.x += this.speed;
        if (this.x > window.innerWidth)
            this.x = -450;
        this._div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Tree;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.trees = new Array();
        this.trees.push(new Tree(this, -600, 140));
        this.trees.push(new Tree(this, -250, 260));
        this.trees.push(new Tree(this, -450, 500));
        this.trees.push(new Tree(this, -1150, 700));
        this.trees.push(new Tree(this, -400, 800));
        this.bullets = new Array();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.trees; _i < _a.length; _i++) {
            var t = _a[_i];
            t.move();
        }
        for (var _b = 0, _c = this.bullets; _b < _c.length; _b++) {
            var b = _c[_b];
            b.move();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.addBullet = function (b) {
        this.bullets.push(b);
    };
    return Game;
}());
var Bullet = (function () {
    function Bullet(x, y) {
        this.width = 22;
        this.height = 22;
        this.div = document.createElement("bullet");
        document.body.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.xspeed = -1;
        this.yspeed = 1;
        this.move();
    }
    Bullet.prototype.move = function () {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Bullet;
}());
var Gun = (function () {
    function Gun(g, chicken) {
        this.game = g;
        this.div = document.createElement("gun");
        chicken.div.appendChild(this.div);
        this.x = 20;
        this.y = 40;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        var audioNewGun = new Audio();
        audioNewGun.autoplay = true;
        audioNewGun.loop = false;
        audioNewGun.src = audioNewGun.canPlayType('audio/mp3') ? 'media/newgun.mp3' : '';
    }
    Gun.prototype.fire = function () {
        var rect = this.div.getBoundingClientRect();
        this.game.addBullet(new Bullet(rect.left, rect.top));
        var audio = new Audio();
        audio.autoplay = true;
        audio.loop = false;
        audio.src = audio.canPlayType('audio/mp3') ? 'media/gunshot.mp3' : '';
    };
    return Gun;
}());
window.addEventListener("load", function () {
    new Game();
    var audio = new Audio();
    audio.autoplay = true;
    audio.loop = true;
    audio.src = audio.canPlayType('audio/mp3') ? 'media/chickenonaraft.mp3' : 'media/chickenonaraft.ogg';
});
//# sourceMappingURL=main.js.map