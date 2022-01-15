const Query=() => {

    const ans = [
        {text:'짜증나지만 배고프니까 혼밥할 식당을 찾아본다.'},
        {text:'혼밥은 절대 싫으니 집으로 간다.'},
        {text:'화가나서 배고픈것도 못느낀다.'},
        {text:'밥은 먹어야겠는데 식당 혼밥은 싫으니 편의점에서 대충 때운다.'},
    ];

    const renderAns = ans.map(option =>{
        return(
            <button className="query_answer"> {option.text} </button>
        )
    })

    return(
        <div className="query_container">
           <div className="progress_div"></div>

            <div className="query_question">
            질문 3. 친구랑 점심 약속을 해서 약속장소에 나갔는데 약속이 5분전에 파토났다.
            </div>
            
            {renderAns}
        </div>
    );
};

export default Query;