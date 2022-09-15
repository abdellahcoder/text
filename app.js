let codes = document.getElementById("codes");

let play = document.getElementById("play");

let remove = document.getElementById("remove");

let result = document.getElementById("result");





play.onclick = () => {
  result.innerHTML = codes.value;

  // تخزين النتيجة في ذاكرة التخزين المحلي
  localStorage.setItem("RESULT" , codes.value)

}


remove.onclick = () => {
  // حذف النتيجة
  result.innerHTML = "";
  // حذف النص الذي يكتبه المستخدم
  codes.value = "";
}



// عند تحميل الصفحة سيتم عرض البيانات المخزنة في ذاكرة التخزين المحلي في
// textarea and result
onload = () => {
  codes.value = localStorage.getItem("RESULT");

  result.innerHTML = codes.value;
}
