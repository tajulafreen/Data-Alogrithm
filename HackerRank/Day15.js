// LinkedList:
this.insert=function(head,data){
    //complete this method
    let newnode = new Node(data)
    if(head == null){
        head = newnode
    }
    else if(head.next === null){
        head.next = newnode
    }
    else{
        this.insert(head.next,data)
    }
    return head
}
