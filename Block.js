class Block{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            density:0.4,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
    }
    display(){
        var pos=(this.body.position.x,this.body.position.y,this.width,this.height);
        
    }
}