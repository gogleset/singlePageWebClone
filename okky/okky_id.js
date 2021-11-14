"use strict";

class Join{
    // constructor()

      /**
     * 값의 존재 여부를 검사한다.
     * @param {string} selector 입력요소에 해당하는 css 선택자
     * @param {string} msg  값이 없을 경우 표시할 메시지 내용
     * @param {boolean} 입력된 경우 true / 입력되지 않은 경우 false
     */
    value(selector, msg){
        const select = document.querySelector(selector);
        const sl = selcet.trim();

        if(!sl){
            alert(msg);

        }
    }


}