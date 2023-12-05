 //var , function, let

 var age =10; // biến toản cục
 let b =0.5;  // tại vị nó một khối nên có thế có thể dùng đc b khi mà khai bảo b trong const show lr thì sẽ k sử dụng được b
 const showle =() =>{
    var age =10; // biến toản cục
    let b =0.5;
    age =12;
    b=b+1;
    console.log('mm', b);
 }

 const showchan = () =>{
    age =13;
    console.log("mm",b);
 }

 showle();
 showchan();

 const AI =20;
 const DEFAULT_LIMIT=12;
 const isMoreThan10 = 13 >DEFAULT_LIMIT ? "lơn hơn":"nhỏ hơn"
 console.log(isMoreThan10) // không nên dùng câu điều kiện rút gọn quá nhiều lần

 const  d="A";
 const c = "3";
const e=3
console.log(e*d)
 //CHUỖI CỘNG SỔ RA CHUỖI
 // sting à số ms ra kết quả ra số

const object ={
    age:'1',
    name:'Luân'
}
const array =[1,23,4,4,4]


 const h=3;
 console.log(typeof h)


 const string ="luan"
// sẽ lấy vị trí bất ký của ký tự
console.log(string.concat(object.name))// nối gọp lại
const luan = 100;
console.log(Math.PI);

// ARRAY
const now = new Date();
console.log(now.getFullYear());

console.log(now.getMonth());
//Function

function tinhtoan (x,y ) {

    return x+y;
}
console.log(tinhtoan(4,"ádfbfdsad"));

const tinhtoan1 = (name ) =>{
    return `hello, ${name}`;
}
// không nằm trong block thì k return còn nằm trong block thì return bình thường

console.log( tinhtoan1("Luan"));


// String
// const  a ="Hello\v 'thanhLuan'"
// console.log(a);

// function dateTime () {
//     const dateNow = new Date();
//     const hour = dateNow.getHours();
//     const minute = dateNow.getMinutes();
//     const second = dateNow.getSeconds();
//     if(hour <10){
//         hour = '0'+ hour;
//     }
//     else if (minute < 10){
//         minute = '0' + minute
//     }
//     else if (second < 10) {
//         second = '0' +second
//     }
//     const result =  hour + ':' + minute + ':'  +second;
//     return result;
//   }
//   console.log(dateTime());
//   const cars = ["Saab", "Volvo", "BMW"];
//   cars.length //lấy độ dài của mảng

//   find //tìm kiếm
  // k tìm ra index thì sẽ hiển thị ra -1
  // map dùng để set qua từng phần tử và chỉnh sửa đó
  //every
  // trả về true nếu tất cả các phần tử thỏa mãng điều kiện
  //some
  //chỉ cần một phần tử thỏa mãn thỏa mãn điều kiến sẽ trả kết quả true
  // inclue nó kiểm tra xem phần tủ có nằm trong mảng đó k??

  //reduce

// phương thức reduce() được sử dụng để thực hiện một phép tích lũy trên một mảng và trả về kết quả cuối cùng.
const sumArray = [1, 3, 4, 1, 5];
// Tính tổng của tất cả các số trong mảng
const sum = sumArray.reduce((accumulator, currentValue) => {
    // Phương thức reduce() lặp qua từng phần tử của mảng sumArray
    // Accumulator lưu tổng tích luỹ, currentValue là phần tử hiện tại
    return accumulator + currentValue; // Cộng phần tử hiện tại vào tổng tích luỹ
}, 0); // 0 là giá trị khởi tạo của tổng tích luỹ
console.log(sum);
// Tính trung bình bằng cách chia tổng cho số lượng phần tử trong mảng
const average = sum / sumArray.length;
console.log(average);




// console.log([...ha, ...ba])
// console.log(ha.concat(ba))


// const tongHa = ha.reduce((acc, curr) => acc + curr, 0);
// const tongBa = ba.reduce((acc, curr) => acc + curr, 0);

// const tongTatCa = tongHa + tongBa;

// console.log(tongTatCa)




// // Kết hợp mảng sử dụng phương thức concat()
// console.log(ha.concat(ba)); 






// const ha=[1, 2, 4, 7,9]
// const ba=[6, 7, 8,9]
// // Kết hợp mảng sử dụng toán tử spread
// console.log([...ha, ...ba]);
// // Tính tổng của tất cả các số trong mảng kết hợp
// const combinedArray = [...ha, ...ba]; // Kết hợp mảng sử dụng toán tử spread
// const Sum = combinedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log("Tổng:", Sum); 

//Object

// const obj= {
//     id:'1',
//     nameD:'Luân'
// }
// console.log(obj)
// Object.entries(obj).map(((e,index)=>{
// console.log(e);
// }))

// const students = [
//     {
//       id: 1,
//       name: "Suu",
//       age: 26,
//     },
//     {
//       id: 2,
//       name: "Tien",
//       age: 24,
//     },
//     {
//       id: 3,
//       name: "Tu",
//       age: 19,
//     },
//     {
//       id: 4,
//       name: "Huong",
//       age: 20,
//     },
//     {
//       id: 5,
//       name: "Thien",
//       age: 22,
//     },
//     {
//       id: 6,
//       name: "Sen",
//       age: 21,
//     },
//     {
//       id: 7,
//       name: "Quang",
//       age: 24,
//     },
//     {
//       id: 8,
//       name: "Luan",
//       age: 23,
//     },
//   ];


// const ageStudents = students.filter(students => students.age > 23);
// console.log(ageStudents);

  
const students = [
    {
      id: 1,
      name: "Suu",
      age: 26,
    },
    {
      id: 2,
      name: "Tien",
      age: 27,
    },
    {
      id: 3,
      name: "Tu",
      age: 19,
    },
    {
      id: 4,
      name: "Huong",
      age: 20,
    },
    {
      id: 5,
      name: "Thien",
      age: 24,
    },
    {
      id: 6,
      name: "Sen",
      age: 21,
    },
    {
      id: 7,
      name: "Quang",
      age: 24,
    },
    {
      id: 8,
      name: "Luan",
      age: 23,
    },
  ];

//   const namesOfStudents = students.filter(students => students.age > 23 && students.age %2 == 0).map(student => student.name);
// // Lọc mảng 'students', chọn chỉ những đối tượng có thuộc tính 'age' lớn hơn 23
// // Tạo một mảng mới chỉ chứa thuộc tính 'name' của các đối tượng sinh viên đã được lọc
// console.log(namesOfStudents);


// Khởi tạo một mảng rỗng để lưu tên của những học sinh đáp ứng điều kiện cụ thể
const namesOfStudent = students.reduce((accumulator, student) => {
    // Kiểm tra nếu tuổi của học sinh lớn hơn 23 và là số chẵn
    if (student.age > 23 && student.age % 2 === 0) {
      // Nếu đáp ứng điều kiện, thêm tên của học sinh vào mảng kết quả
      accumulator.push(student.name);
    }
    // Trả về mảng kết quả để sử dụng trong lần lặp tiếp theo
    return accumulator;
  }, []); // Khởi tạo mảng kết quả là một mảng rỗng
  

  console.log(namesOfStudent);
  
  

  
  


  
  






