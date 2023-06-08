/**
 * @description: 击鼓传花游戏
 * @param {type}
 * @author:"chris
 * 
 * @实现原理：将一份击鼓传花的名单传入队列，然后从队列开头移除一人，再将其添加到队列末尾，然后将队首的人加入移除的人的名单中，直到队列中只剩下一个人
 */




import { Queue } from "../queue/index";

export function hotPotato<T>(elementList:T[],num:number){
        const queue = new Queue<T>();
         const elimitatedList :T[] = [];

         for(let i = 0; i<elementList.length;i++){
             queue.enqueue(elementList[i])
         }
         while(queue.size()>1){
            for(let i =0;i<num;i++){
                queue.enqueue(queue.dequeue() as T) 
            }
            elimitatedList.push(queue.dequeue() as T)
            
         }
         return {
                elimitated:elimitatedList,
                winner:queue.dequeue()
         }

}
