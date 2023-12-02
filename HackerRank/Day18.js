// Queues and stacks:
function Solution(){
    //Write your code here
    
    this.stack = new Array();
    this.queue = new Array();
    this.pushCharacter = function (s) {
      this.stack.push(s);
    };
    this.enqueueCharacter = function (s) {
      this.queue.push(s);
    };
    this.popCharacter = function () {
      return this.stack.pop();
    };
    this.dequeueCharacter = function () {
      return this.queue.shift();
    };
  
  }
  