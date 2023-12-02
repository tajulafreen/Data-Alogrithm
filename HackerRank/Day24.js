// more linked lists =
this.removeDuplicates=function(head){
    //Write your code here
    let current = head;
    if (!current) return;
    while (current.next) {
        if (current.data === current.next.data) {
            current.next = current.next.next
        } else {
            current = current.next
        }    
    }
    return head;

}