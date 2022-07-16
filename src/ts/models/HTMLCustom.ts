class HTMLCustom extends HTMLElement{
    constructor(){
        super()
    }
    
    onClick(callback: any){
        this.onclick = callback
    }
}

