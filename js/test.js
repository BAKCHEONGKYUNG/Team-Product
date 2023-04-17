<form class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl"> <!-- modal-dialog 클래스에 modal-xl 추가 -->
    <div class="modal-content">

       <div class="modal-header">
        <h5 class="modal-title" id="petModalLabel">의료수첩 작성</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>


          <div class="modal-body">
            <div class="pet_modal-main-title">
              <p>반려동물 기본 정보</p>
            </div>
            <div class="pet_modal-info">
              <div class="pet_modal-info-profile">
                <img src="../img/img_profile1.png" alt="" />
                <div class="pet-name">반려동물이름</div>
              </div>
              <div class="pet_modal-info-text">
                <div class="list-frm">
                  <div class="list">반려동물 품종</div>
                  <div class="pet-info">소동물/햄스터</div>
                </div>
                <div class="list-frm">
                  <div class="list">성별</div>
                  <div class="pet-info">여</div>
                </div>
                <div class="list-frm">
                  <div class="list">생일</div>
                  <div class="pet-info">20200315</div>
                  <div class="list">입양일</div>
                  <div class="pet-info">20200315</div>
                </div>
                <div class="list-frm">
                  <div class="list">중성화 여부</div>
                  <div class="pet-info">중성화 완료</div>
                </div>
                <div class="list-frm">
                  <div class="list">기초접종 여부</div>
                  <div class="pet-info">모름</div>
                </div>
              </div>
            </div>
            <div class="pet_modal-others">
              <p>추가 작성 정보</p>
              <div class="pet_modal-other-text">
                <div class="list-frm">
                  <div class="list">몸무게</div>
                  <input type="text" id="" maxlength="5" />
                  <div class="list">방문날짜</div>
                  <input type="date" id="vday" />
                </div>
                <div class="list-frm">
                  <div class="list">병원명</div>
                  <input type="text" id="" maxlength="25" />
                  <div class="list">담당수의사</div>
                  <input type="text" id="" maxlength="15" />
                </div>
                <div class="list-frm">
                  <div class="list">내방이유</div>
                  <input type="text" id="" maxlength="30" />
                  <div class="list">증상</div>
                  <input type="text" id="" maxlength="30" />
                </div>
                <div class="list-frm-other">
                  <div class="list">* 진료내용 및 유의사항</div>
                  <p>
                    <textarea name="act-text" placeholder="기타정보를 입력해보세요" cols="40" rows="5"></textarea>
                  </p>
                </div>
                <div class="pet_modal-day">
                  <div class="list-frm">다음 예약일</div>
                  <input type="date" id="petDay" />
                </div>
              </div>
              <div>
                <button>작성완료</button>
              </div>
            </div>
          </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
    </form>