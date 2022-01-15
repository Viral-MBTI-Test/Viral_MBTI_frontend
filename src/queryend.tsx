const Queryend=() =>{

    const ans = [
        {rank:'1위', text:'INTP', percent:'33%'},
        {rank:'2위', text:'INTJ', percent:'21%'},
        {rank:'3위', text:'ENTJ', percent:'11%'},
        {rank:'6위', text:'ENTP', percent:'9%'},
    ];

    const renderAns = ans.map(option =>{
        return(
            <div className="queryend_result"> 
                <div className="queryend_rank">{option.rank}</div> 
                <div className="queryend_text">{option.text}</div> 
                <div className="queryend_percent">{option.percent}</div>
            </div>
        )
    })

    return(
        <div className="query_container">
            <div className="progress_div"></div>

            <div className="queryend_question">
            질문 3. 친구랑 점심 약속을 해서 약속장소에 나갔는데 약속이 5분전에 파토났다.</div>
            <div className="query_selected"> 화가나서 배고픈것도 못느낀다 </div>
            <div className="queryend_mbti"> 나와 같은 답을 선택한 MBTI </div>
            {renderAns}
            <button className="queryend_nextBtn">다음질문</button>
        </div>
        
    )

};

export default Queryend;