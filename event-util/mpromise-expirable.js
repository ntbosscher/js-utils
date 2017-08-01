/**
 * @Author: Nate Bosscher <natebosscher1>
 * @Date:   2017-06-13T08:23:38-04:00
 * @Email:  nate.bosscher@gmail.com
 * @Filename: promised-expirable.js
 * @Last modified by:   natebosscher1
 * @Last modified time: 2017-06-14T21:17:22-04:00
 */

import MPromise from "./mpromise.js";

class MPromiseExpirable extends MPromise {
   constructor() {
     super();

     this.state.expiry = Infinity;
   }

   setExpiry(duration) {
     this.state.expiry = new Date().getTime() + duration;
   }

   invalidate() {
     this.state.expiry = 0;
   }

   isValid() {
     return this.state.expiry > new Date().getTime();
   }

   reject() {
     this.state.expiry = 0;
     return super.reject();
   }

   static resolve(value) {
     var p = new MPromiseExpirable();
     p.resolve(value);
     return p;
   }

   static reject(value) {
     var p = new MPromiseExpirable();
     p.reject(value);
     return p;
   }
}

export default MPromiseExpirable;
