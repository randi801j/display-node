class SingleNode{
    constructor(val){
        this.value = val
        this.pointer = null
    }
}

class Single{
    constructor(){
        this.head = null; 
    }
    // display hw 
    display(){
        var list = "";
        if (this.head == null){
            return "none";
        }
        list += this.head.value;
        var pointer = this.head.next; // .next to grab second node
        while (pointer != null){
            pointer = pointer.next;
        }
        return list;
    }
}

// to use add font we need a var to call it
    // need to link it with single to check for head
var mySLL = new Single();
//mySLL.removefront();
mySLL.addFont(65);
console.log(mySLL.display());
mySLL.addFont(55);
console.log(mySLL.display());
mySLL.addFont(75);
console.log(mySLL.display());

