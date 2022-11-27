import readline from 'readline'; 

const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
}]
  
const Names = [['pepe', 'juan', 'victor', 'leo', 'francisco', 'carlos'], ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia']];
const availableGenders = ['male', 'female'];

function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
}

function MenuAlumno(num) {
  switch(num){
      //case 0:fianlizar el while//
      
      //### 1- Mostrar en formato de tabla todos los alumnos.
      case 1: console.table(students)
      break;

      //### 2- Mostrar por consola la cantidad de alumnos que hay en clase.
      case 2: console.log(students.length)//
      break;
      //3- Mostrar por consola todos los nombres de los alumnos.
      case 3: students.map(student => console.log(student.name))
      break;
      //4- Eliminar el último alumno de la clase.
      case 4: students.pop(0,-1)

      break;
      //5- Eliminar un alumno aleatoriamente de la clase.
      
      case 5: let indexDelete = calculateRandomNumber(0,students.length)
              students.splice(indexDelete, 1)
      break;
      //6- Mostrar por consola todos los datos de los alumnos que son chicas.
      case 6: students.map(student => {
          if (student.gender === "female"){
          console.log(student)}
      })
      break;


      
      //7- Mostrar por consola el número de chicos y chicas que hay en la clase.
      case 7: let girls = 0;
              let boys = 0;
              students.map(student => {if (student.gender === "female"){
                girls++
              } else {boys++}
            })
            console.log(girls ,  boys)
      break;
      //8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
      case 8: let IsGirls = true
            students.map(student => {if (student.gender === "male"){
            IsGirls = false}
          })
          console.log(IsGirls)
      break;
      //9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
      case 9: students.map(student => {if (student.age>= 20 && student.age <= 25){
                console.log(student.name)
              }})
      break;
      //10- Añadir un alumno nuevo con los siguientes datos:
      case 10: let NewStudent = { age: calculateRandomNumber(20,50) ,
        examScores: [],
        gender: " " ,
        name: Names[calculateRandomNumber(0,2)][calculateRandomNumber(0,5)],
      }
      if (Names[0].includes(NewStudent.name)){
        NewStudent.gender = "male"
      } else {NewStudent.gender = "female"}

      students.push(NewStudent)
      break;
      //11- Mostrar por consola el nombre de la persona más joven de la clase.
      case 11: let Younger = students[0]

                students.map(student => {
                if (student.age < Younger.age) {Younger = student} 
                  })
      
                console.log(Younger)
      break;
      //12- Mostrar por consola la edad media de todos los alumnos de la clase.
      case 12: let sumAges = 0
              students.map(student => sumAges += student.age)
              console.log(sumAges/students.length)     
      break;
      //13- Mostrar por consola la edad media de las chicas de la clase.
      case 13: let sumAgesGirls = 0
              let Qgirls = 0
              students.map(student => {if (student.gender === "female"){
                sumAgesGirls += student.age, Qgirls ++
              }})
              console.log(sumAgesGirls/Qgirls)
      
      break;
      // 14-Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
      case 14: students.map(student => student.examScores.push(calculateRandomNumber(0,10)))
      break;

      //15- Ordenar el array de alumnos alfabéticamente según su nombre.
      case 15: 
                function SortArray(x, y){
                if (x.name < y.name) {return -1;}
                if (x.name > y.name) {return 1;}
                return 0;}
    
                students.sort(SortArray)
  }
}
  
//Hacer un while para que siempre este preguntando un numero y mostrando el menu//
let MenuCountinuos = true;
while(MenuCountinuos) {

  
  console.log("\nListado de requisitos:",
  "\n1- Mostrar en formato de tabla todos los alumnos.",
  "\n2- Mostrar por consola la cantidad de alumnos que hay en clase.",
  "\n3- Mostrar por consola todos los nombres de los alumnos.",
  "\n4- Eliminar el último alumno de la clase.",
  "\n5- Eliminar un alumno aleatoriamente de la clase.",
  "\n6- Mostrar por consola todos los datos de los alumnos que son chicas.",
  "\n7- Mostrar por consola el número de chicos y chicas que hay en la clase.",
  "\n8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.",
  "\n9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.",
  "\n10- Añadir un alumno nuevo con los siguientes datos: nombre aleatorio, edad aleatoria entre 20 y 50 años, género aleatorio, listado de calificaciones vacío.",
  "\n11- Mostrar por consola el nombre de la persona más joven de la clase.",
  "\n12- Mostrar por consola la edad media de todos los alumnos de la clase.",
  "\n13- Mostrar por consola la edad media de las chicas de la clase.",
  "\n14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.",
  "\n15- Ordenar el array de alumnos alfabéticamente según su nombre.")


  const NumFromUser = parseInt (await AskNumberMenu())
  
  
  if (!isNaN (NumFromUser) && 1<= NumFromUser && NumFromUser <=15){
    MenuAlumno(NumFromUser)
    
  }
    else{
      MenuCountinuos = false
    }

} 
  


//preguntar el numero y que la espera sea con una promesa//

async function AskNumberMenu(){
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  

  const promise = new Promise((resolve, reject) => {
    //Hacer funcion que pida un numero al usuario
      rl.question("Elija un numero segun lo que desea hacer: ", (numUser) => {
        rl.pause();
        resolve(numUser)
      })    
  })
  return promise;
}


  
  