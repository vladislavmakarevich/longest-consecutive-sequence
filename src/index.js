module.exports = function longestConsecutiveLength(array) {
  const arr=array;
  if(arr.length==0) return 0;
  let count=1,tmp=1;
  arr.sort((a,b)=>a-b);
  for(let i=0;i<arr.length;i++){
    if(arr[i]==arr[i-1]+1){
      count++;
    }
    if(arr[i]>arr[i-1]+1){
      if(count>tmp){
        tmp=count;
      }
      count=1;
    }
  }
  return tmp;
}
