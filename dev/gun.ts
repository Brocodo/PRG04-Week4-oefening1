/// <reference path="chicken.ts"/>

class Gun {

    private game:Game;
    private div: HTMLElement;
    private x:number;
    private y:number;

    constructor(g:Game, chicken:Chicken) {
        this.game = g;

        this.div = document.createElement("gun");
        chicken.div.appendChild(this.div);

        this.x = 20;
        this.y = 40;
        
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";

        let audioNewGun = new Audio();
        audioNewGun.autoplay = true;
        audioNewGun.loop = false;
        audioNewGun.src = audioNewGun.canPlayType('audio/mp3') ? 'media/newgun.mp3': '';
    }

    public fire():void {
        // de globale positie van de gun kan je uitrekenen met getBoundingRect
        let rect:ClientRect = this.div.getBoundingClientRect();      
        this.game.addBullet(new Bullet(rect.left, rect.top));
        let audio = new Audio();
        audio.autoplay = true;
        audio.loop = false;
        audio.src = audio.canPlayType('audio/mp3') ? 'media/gunshot.mp3': 'media/gunshot.wav';
    }

}