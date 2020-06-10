/**
*   Return the second largest number in the array.
**/
function getSecondLargest(nums) {
  // Complete the function
  let max = nums[0];
  let secondmax = 0;

  //set max equal to the highest number
  for(let i = 0;i < nums.length; i++){
    //console.log(max);  
    if (nums[i] > max) max = nums[i];
  }

  //set secondmax = second highest number
  for(let i = 0; i < nums.length; i++){
    //console.log(max);
    
    if (nums[i] > secondmax && nums[i] < max) secondmax = nums[i];
  }
  return secondmax;
}

console.log(getSecondLargest([6,3,4,1,5]));


/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(str) {
  
  try {
    console.log(str.split("").reverse().join(""));
  }

  catch {
    console.error("could not reverse the string")
    console.log(str);
  }

  
  
}

reverseString('hellowworld');
reverseString(54);



/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    
  if(a === 0){
    throw Error("Zero Error");
  }
  if(a < 0){
    throw Error("Negative Error");
  }
   return "YES"
}

isPositive(4);
isPositive(0);
isPositive(-4);

