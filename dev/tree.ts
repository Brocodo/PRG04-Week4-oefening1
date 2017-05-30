/// <reference path="chicken.ts" />

class Tree {
    
    private _div: HTMLElement;
    private game:Game;
    private x:number;
    private y:number;
    private width:number;
    private height:number;
    private speed:number;
    public chickens:Array<Chicken>;

    public get div(): HTMLElement {
		return this._div;
	}

    constructor(g:Game, x:number, y:number) {
        this.game = g;

        this._div = document.createElement("tree");
        document.body.appendChild(this._div);
        
        this.speed = Math.random() * 4 + 1;
        this.width = 414;
        this.height = 86;
        this.x = x;
        this.y = y;

        //Chickens on tree
        this.chickens = new Array<Chicken>();
        for (let i=0; i < Math.random() * 3 + 1; i++){
            let x = i * 100;
            this.chickens.push(new Chicken(this.game, x, -70, this));
        }
    }
    
    public move():void {
        this.x += this.speed;
        if(this.x > window.innerWidth) this.x = -450;
        this._div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

}