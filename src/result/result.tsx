import React from "react";
import "./result.css";

interface resultState{
    color:string[];
}

interface mbtiPercentProps{
    mbti:string;
    percent:number;
    index:number;
}

export default class Result extends React.Component{
    render(){
        return(
            <div className="result_container">
                <div className="result_rectangle_big">
                    당신은...ENTP에 INTJ 한스푼
                </div>
                <RectangleSmall mbti="INFJ" percent={77} index={0}/>
                <RectangleSmall mbti="ESFJ" percent={35} index={1}/>
                <RectangleSmall mbti="INFJ" percent={7} index={2}/>
                당신은 무슨 성격이에요~~~ 텍스트 들어갈수도
            </div>
        )
    }
}

class RectangleSmall extends React.Component<mbtiPercentProps, resultState>{
    constructor(props: mbtiPercentProps | Readonly<mbtiPercentProps>){
        super(props);
        this.state={
            color:[
                "#e8e0ce",
                "#9aa48e",
                "#b3bbaa"
            ]
        }
    }
    render(){
        return(
            <div className="result_rectangle_small" style={{backgroundColor:`${this.state.color[this.props.index]}`,
            marginTop:this.props.index===0?"44px":"0px"}}>
            <span style={{color:this.props.index%3===0?"#1f513f":"#f4f2ed"}}>{this.props.mbti}</span>
            <span style={{color:this.props.index%3===0?"#1f513f":"#f4f2ed"}}>{this.props.percent}%</span>
        </div>
        )
    }
}