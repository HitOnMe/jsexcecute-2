/* Bài tập 1 */

//Khi có sự kiện click button xảy ra:
document.querySelectorAll('button')[0].onclick=function(){

//input: Điểm 3 môn thi + khu vực ưu tiên+ đối tượng ưu tiên + điểm chuẩn hội đồng
    var subject1 = document.querySelectorAll('input')[0].value,
    subject2 = document.querySelectorAll('input')[1].value,
    subject3 = document.querySelectorAll('input')[2].value,
    passScore= document.querySelectorAll('input')[3].value,
    originScore= document.querySelectorAll('select')[0].value,
    objectScore= document.querySelectorAll('select')[1].value;
//output: Đậu/Rớt: So sánh tổng số điểm đạt được (subject1+subject2+subject3+originScore+objectScore) - Điểm chuẩn hội đồng(passScore)
    /* Bước 1: Tính tổng 3 môn thi */
    /* Bước 2: Tính điểm tổng kết = Tổng 3 môn thi + điểm ưu tiên (khu vực + đối tượng) */
var sum = Number(subject1)+Number(subject2)+Number(subject3)+Number(originScore)+Number(objectScore)
    /* Bước 3: So sánh điểm tổng kết và điểm chuẩn hội đồng ==> in ra kết quả */
    if (sum>=passScore){
        document.querySelector('.result').innerHTML= 'Bạn đã đậu! Xin chúc mừng'
    } else{
       
        document.querySelector('.result').innerHTML= 'Bạn đã trượt kỳ thi này. Hãy thử lại '
    }
    document.querySelector('.totalScore').innerHTML='Điểm tổng kết của bạn là: '+ sum
}

/* Bài tập 2 */
function tinhtiendien(kw){
        //input Họ tên, số kw tiêu thụ điện: kw
        //output: Tổng tiền cần thanh toán: total
    var     total = 0,
            myKey = [50, 50, 100, 150], // 50, 100, 200, 350 kw
            myValue = [500, 650, 850, 1100] // 2500, 
            for(var count=0; count<myKey.length; count++){
                if (kw>myKey[count]){
                    total+=myKey[count]*myValue[count]
                    kw-=myKey[count]
                } else{
                    total+=kw*myValue[count];
                    return total
                } 
            } if (kw>0){
                total+=kw*1300
        }   return total
}

document.querySelectorAll('button')[1].onclick=function(){
    var sokw = Number(document.querySelectorAll('input')[5].value),
    totalElectric = tinhtiendien(sokw);
    document.querySelector('.totalMoney').innerHTML = 'Tổng tiền điện cần thanh toán tháng này: '+ totalElectric
}

/* Bài tập 3 */
function tinhthue(thueThunhap){
    var mySalary = [60, 120, 210, 384, 624, 960],
        myPercent = [5, 10, 15, 20, 25, 30],
        ttcn = 0
        if (thueThunhap>Math.max(...mySalary)){
            ttcn=35
        } else{
            for (var count=0; count<mySalary.length; count++){
                if (thueThunhap<=mySalary[count]){
                    ttcn = myPercent[count]
                    break;
                } 
        } 
    } return ttcn
}
document.querySelectorAll('button')[2].onclick=function(){
//input: họ tên, thu nhập năm, người phụ thuộc
    var yearSalary = Number(document.querySelectorAll('input')[7].value),
        numberDepend = Number(document.querySelectorAll('input')[8].value),
//output: TTCN
        thueThunhap = yearSalary - 4 -numberDepend*1.6,
        ttcn = tinhthue(thueThunhap),
        thueTNCN = thueThunhap*ttcn/100
    document.querySelector('.totalPercent').innerHTML = 'TTCN: '+ thueTNCN + 'triệu VND'
}
    
/* Bài tập 5 */
    document.querySelectorAll('select')[2].addEventListener('click', function(){ //Lắng nghe sự kiện user chọn loại KH
    //input: Họ tên, loại khách hàng, số kết nối, số kênh cao cấp
    var customerOpt = Number(document.querySelectorAll('select')[2].value), //Loại khách hàng
        connect = document.querySelectorAll('input')[12];                   //thẻ kết nối
    customerOpt == 0 ? connect.disabled=true : connect.disabled=false;      //thẻ kết nối disabled khi KH không là doanh nghiệp
        document.querySelectorAll('button')[3].onclick=function(){              //lắng nghe sự kiện click button từ user
        var channel = Number(document.querySelectorAll('input')[11].value),//số kênh cao cấp
            connectValue = connect.value, //số kết nối
            service = connectValue<=10? 75 : 75+connectValue*5, //phí dịch vụ cơ bản
        //output: giá tiền cáp
            totalService = 0
        switch (customerOpt) {
            case 0: totalService=4.5+20.5+7.5*channel  //giá cáp tính theo KH là nhà dân
            break;
            case 1: totalService=15+service+50*channel;//giá cáp tính theo KH là doanh nghiệp
            break;
        }
        document.querySelector('.totalService').innerHTML = 'Giá tiền cáp của bạn là: '+ totalService + '$' //in kết quả ra màn hình
        }
})

/* Chỉ cho phép người dùng nhập vào tối đa <number> số thực ngăn cách bởi dấu phẩy*/
function preventNumber(id, number){
    getID(id).addEventListener('input', function(event){
        let numberTarget=event.target.value,
            numberArray=numberTarget.split(',')
            if (numberArray.length>number){
                event.target.value=numberArray.slice(0, number).join(',')
            }
    })
}
/* lọc number từ dữ liệu người dùng nhập vào */
function numberOnly(className) {
    var elements = document.querySelectorAll(className);
    elements.forEach(function(element) {
        element.addEventListener('input', function(event) {
            const input = event.target.value;
            let numbers = input.replace(/[^\d.]/g, ''); // Loại bỏ tất cả các ký tự không phải số thực và dấu phẩy
            let parts = numbers.split('.');//tách chuỗi thành các mảng ngăn cách bởi dấu phẩy
            if (parts.length > 2) {//nếu mảng có nhiều hơn 2 phần tử ==> có nhiều hơn 1 dấu chấm
                numbers = parts.shift() + '.' + parts.join('');//cộng phần nguyên và phần thập phân đã nối thành chuỗi
            }
            event.target.value = numbers;
        });
    });
}
/* lọc number với 1 dấu chấm duy nhất */
function numberOnly2(className) {
    var elements = document.querySelectorAll(className);
    elements.forEach(function(element) {
        element.addEventListener('input', function(event) {
            const input = event.target.value;
            // Loại bỏ tất cả các ký tự không phải số
            let numbers = input.replace(/[^\d]/g, ''); 
            event.target.value = numbers;
        });
    });
}
numberOnly('.number__only')
numberOnly2('.number__only2')
