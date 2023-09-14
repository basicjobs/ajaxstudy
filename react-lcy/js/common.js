$(document).ready(function () {

  // API 주소를 변수에 저장
  var surl = "https://basicjobs.site/api/board/list";

  // API에 보낼 데이터 객체를 생성
  var sendData = {};
  sendData.formType = "1"; // formType 값으로 "1"을 설정

  // AJAX 요청 시작
  $.ajax({
    url: surl,
    type: "post",
    contentType: "application/json",
    data: JSON.stringify(sendData),

    // API 호출이 성공적으로 완료됐을 때 실행할 함수
    success: function (data) {

      //게시판 데이터를 가져와 변수에 저장
      let boardList = data.resultList;

      console.log(boardList);

      //html내의 게시판 목록 테이블에 접근
      let tableBody = $("#board-list .board-table tbody");

      tableBody.empty(); // 기존에 있던 게시물 목록을 삭제

      //각 게시물 데이터를 테이블에 표시
      boardList.forEach(function (item) {
        let row = `
        <tr>
          <td>${item.boardIdx}</td>
          <th>
            <a href="javascript:void(0)">${item.title}}</a>
          </th>
          <td>${item.createDate}</td>
        </tr>
        `;
        tableBody.append(row);
      });
    },

    // API 호출 중 오류가 발생했을 때 실행할 함수
    error: function (request, status, error) {
      console.error("API 호출 중 오류 발생. 상태:", status, "오류:", error, "요청:", request);
    }
  });
});
