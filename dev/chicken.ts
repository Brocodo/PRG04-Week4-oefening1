/// <reference path="tree.ts"/>

class Chicken {
    
    private game:Game;
    private _div: HTMLElement;
    private x:number;
    private y:number;
    private width:number;
    private height:number;
    private gun:Gun;

    public get div(): HTMLElement {
		return this._div;
	}

    constructor(g:Game, x:number, y:number, tree:Tree) {
        this.game = g;

        this._div = document.createElement("bird");
        tree.div.appendChild(this._div);
                
        this.x = x;
        this.y = y;
        this.width = 67;
        this.height = 110;
        
        this._div.style.transform = "translate("+this.x+"px, "+this.y+"px)";

        // maak hier een click listener
        this._div.addEventListener("click", (e:MouseEvent) => this.onClick(e));
        // de click event handler moet een gun toevoegen
        // als de kip al een gun heeft, dan moet de fire() functie van de gun worden aangeroepen
    }

    private onClick(e:MouseEvent){
        //If chicken has a gun
        if (this.gun){
            this.gun.fire();
            console.log("firing")
        }else{
            this.gun = new Gun(this.game, this);
            console.log("click clack")
        }
    }

}