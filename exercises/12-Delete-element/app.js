var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    var nombres=[];
    for(var i = 0; i <people.length; i++){
        if(people[i]!=personName){
            nombres[i]=people[i];
        }
    }
    return nombres;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));