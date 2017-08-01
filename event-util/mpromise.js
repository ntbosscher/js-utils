/**
 * @Author: Nate Bosscher <natebosscher1>
 * @Date:   2017-06-12T20:50:55-04:00
 * @Email:  nate.bosscher@gmail.com
 * @Filename: mpromise.js
 * @Last modified by:   natebosscher1
 * @Last modified time: 2017-06-15T07:53:54-04:00
 */

 class MPromise {
   constructor() {
     this.state = {
       promise: null,
       resolve: null,
       completed: false,
       reject: null,
     };

     this.state.promise = new Promise(function(resolve, reject){

       this.state.resolve = resolve;
       this.state.reject = reject;

     }.bind(this));
   }

   nativePromise() {
     return this.state.promise;
   }

   isPending() {
     return !this.state.completed;
   }

   then(a, b){
     return this.state.promise.then(a, b);
   }

   resolve(value){
     setTimeout(function(){

       if(!this.state.resolve) {
         this.resolve(value);
         return;
       }

       if(this.state.completed){
         debugger;
         console.error("can't call .resolve() or .reject() on a promise twice");
         return;
       }

       this.state.completed = true;
       this.state.resolve(value);

     }.bind(this));
   }

   reject(value){
     setTimeout(function(){

       if(!this.state.reject) {
         this.reject(value);
         return;
       }

       if(this.state.completed){
         console.error("can't call .resolve() or .reject() on a promise twice");
         return;
       }

       this.state.completed = true;
       this.state.reject(value);

     }.bind(this));
   }

   static all(promises) {

     var list = [];
     promises.forEach(function(promise){

       if(promise instanceof MPromise) {
         list.push(promise.nativePromise());
       } else {
         list.push(promise);
       }

     });

     return Promise.all(list);
   }

   static resolve(value) {
     var p = new MPromise();
     p.resolve(value);
     return p;
   }

   static reject(value) {
     var p = new MPromise();
     p.reject(value);
     return p;
   }
}

export default MPromise;
