const courses = document.querySelector(".course")

class scrollDown{
    constructor(elem){
        this.elem = elem;
        this.elem_height = this.elem.clientHeight
        this.firstChild = this.elem.children[0];
        this.width = this.firstChild.clientWidth;
        this.height = this.firstChild.clientHeight + 0.5;
        this.change = false
    }

    getHeight(){
        return this.height;
    }
    setDefaultHeight(){
        this.elem.style.height = this.getHeight()+"px";
    }
    setHider(){
        this.elem.style.width = this.width+"px";
        this.elem.style.height = this.height+"px";
    }
    setvisible(){
        this.elem.style.height = this.elem_height+"px";
    }
    
    controlEvent(){
        this.firstChild.addEventListener("click", ()=>{
            console.log(this.change)
            if (this.change) this.setHider();
            else this.setvisible();
            this.change = (this.change) ? false : true
        })
    }
}

const scrool = new scrollDown(courses)
scrool.setDefaultHeight()
scrool.controlEvent()
