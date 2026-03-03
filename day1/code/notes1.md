#javascript intial 
##How to add Javascrit to HTML
    ## How to Add JavaScript to HTML

We use the <script> tag to connect JavaScript file.

Example:
<script src="script.js"></script>


##Array
isme hm number string object aur new array bhi enter kra skte hh

An array can store:
- Numbers
- Strings
- Objects
- Even another array

Example:
let arr = [1, "shivam", {age: 20}, [10, 20]];

Accessing elements:
arr[0]  // 1
arr[1]  // "shivam" 

### if we want to go through each elemnt in arr we use 
- forEach(function(val))   val ek variable hh hr elment isme jayega

## Map 
- arr.map(function(val)){
    return val*3;
}

# Jb ap map use krte ho tb jis array pr use krte ho too ek naya array bn jata hh same size ka side by side aur usko return krdeta hh 

## filter
- filter km krta hhh true ya phir false pr agar arr me filter true to array me input hoga warna nhi hoga 


# find 
- find ke use tm koi elemnt ko find krna chahte ho aur phla wala dega 

# index of 
- arr ka index find krna ho to use krte hh 


# OBJEXTS 
  -curly braces ke andar  
  - left : right ; isko object khte hh  aur right wala value hota hh
  - object ka value acces krna h to object ka naam .age ya .name 
  - 2 method hh objext ka naam ['name'] -> obj['name'];
  - ap object ka value bhi change kr kte h obj.name=29;
  - ap value ko freeze bhi kr skte ho 
  # function 
  - function is basically a object in javscript


# Asynchronous Javascript 
