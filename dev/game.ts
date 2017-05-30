/// <reference path="tree.ts"/>

class Game {
    
    private trees:Array<Tree>;
    private bullets:Array<Bullet>;
 
    constructor() {
        this.trees = new Array<Tree>();
        this.trees.push(new Tree(this, -600, 140));
        this.trees.push(new Tree(this, -250, 260));
        this.trees.push(new Tree(this, -450, 500));
        this.trees.push(new Tree(this, -1150, 700));
        this.trees.push(new Tree(this, -400, 800));

        this.bullets = new Array<Bullet>();
        
        requestAnimationFrame(() => this.gameLoop());
    }
    
    private gameLoop(){
        for(let t of this.trees){
            t.move();
        }

        for(let b of this.bullets){
            b.move();
        }
                
        requestAnimationFrame(() => this.gameLoop());
    }

    public addBullet(b:Bullet){
        this.bullets.push(b);
    }
} 

