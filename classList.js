

// Private
var list = []
// Public
module.exports = {
add: function (student) {
list.push(student)
console.log(list)
},
getList: function() {
   return list 
},

edit: function (student, index) {
list[index] = student
},

get: function (index) {
return list[index]
},

delete: function (index) {
list.splice(index, 1) // remove one element starting from index
}
}