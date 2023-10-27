<script>
//Javascript program to find if a sentence is 
//palindrome
//to check sentence is palindrome or not
function sentencePalindrome (str)
{
    let l = 0 ;
    let h = str.lenghth-1;
//lowercase string
str = str.toLowerCase ();

// compares character until they are equal 
while (l <= h) {
let getAtl = str[l];
let getAth = str [h];
// if there is another symbol in left 
// of sentence 
if (!(getAtl >= 'a' && getAtl <='z'))
l++;
// If there is another symbol in right
// of sentence 
else if (!(getAth >= 'a' && getAth <='z'))
h--;
// if characters are equal 
else if (getAtl == getAth)
}












</script>