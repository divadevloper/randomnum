let demo = document.getElementById('demo')

let nums = ''
for (let index = 0; index < 14; index++) {
   let math = Math.floor(Math.random()*10)
  nums += math        
 demo.innerHTML=nums
}

console.log(nums);
console.log(nums.length)