// bst level order traversel := in java
static void levelOrder(Node root){
    Queue<Node> q=new LinkedList<>();
    Node n=root;
    while(n!=null){
        System.out.print(n.data+" ");
        if(n.left!=null)
            q.add(n.left);
        if(n.right!=null)
            q.add(n.right);
        if(!q.isEmpty()){
            n=q.peek();
            q.remove(); 
        }  
        else
            n=null;
    }
}