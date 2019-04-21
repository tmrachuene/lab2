(function() {
    'use strict' ; 
})


fetch('/todo/api/list') // Returns a Promise for the GET request
 .then(function (response) {
    // Check if the request returned a valid code
    console.log('tumza');
    if (response.ok)
       return response.json() // Return the response parse as JSON if code is valid
    else
      throw 'Failed to load classlist: response code invalid!'
   })
 .then(function (data) { // Display the JSON data appropriately
   // Retrieve the classList outer element
    
     let classList = document.getElementById('classList')
   // Iterate through all students
     data.forEach(function (student) {
   // Create a new list entry
       let li = document.createElement('LI')
       let liText = document.createTextNode(student)
       // Append the class to the list element
       li.className += 'student'
    // Append list text to list item and list item to list
      li.appendChild(liText)
      classList.appendChild(li)
 
      })
   })
.catch(function (e) { // Process error for request
  alert(e) // Displays a browser alert with the error message.
  // This will be the string thrown in line 7 IF the
  // response code is the reason for jumping to this
  // catch() function.
})
