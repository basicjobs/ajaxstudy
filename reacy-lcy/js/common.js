// 페이지 로딩이 완료되면 실행될 함수를 설정
$(document).ready(function () {

  // API 주소를 변수에 저장
  var surl = "https://basicjobs.site/api/board/list";

  // API에 보낼 데이터 객체를 생성
  var sendData = {};
  sendData.formType = "1"; // formType 값으로 "1"을 설정

  // sendData.simpleDate = $("#date").val();
  console.log(sendData);

  // AJAX 요청 시작
  $.ajax({
    url: surl, 
    type: "post", 
    contentType: "application/json", 
    data: JSON.stringify(sendData), 

    // API 호출이 성공적으로 완료됐을 때 실행할 함수
    success: function (data) {
      console.log(data); // 받은 데이터를 콘솔에 출력
    },

    // API 호출 중 오류가 발생했을 때 실행할 함수
    error: function (request, status, error) {
      console.error("API 호출 중 오류 발생. 상태:", status, "오류:", error, "요청:", request);
    }
  });
});
