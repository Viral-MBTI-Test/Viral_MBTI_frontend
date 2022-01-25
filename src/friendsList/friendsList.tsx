import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MBTIPercent from "../share/MBTIPercent";
import MBTIProfile from "../share/MBTIProfile";
import webClient from "../share/webClient";
import "./friendsList.css";
import question from "../images/questionMark.png";

interface FriendsType {
    favorite: boolean | null;
    id: number | null;
    profile_nickname: string;
    profile_thumbnail_image: string;
    uuid: string | null;
}
const FriendsList = (props: { profile: string; userName: string }) => {
    const [friendsList, setFriendsList] = useState<FriendsType[]>([
        {
            favorite: null,
            id: null,
            profile_nickname: "테스트를 진행한 친구가 없습니다.",
            profile_thumbnail_image: question,
            uuid: null,
        },
        {
            favorite: null,
            id: null,
            profile_nickname: "테스트를 진행한 친구가 없습니다.",
            profile_thumbnail_image: question,
            uuid: null,
        },
        {
            favorite: null,
            id: null,
            profile_nickname: "테스트를 진행한 친구가 없습니다.",
            profile_thumbnail_image: question,
            uuid: null,
        },
        {
            favorite: null,
            id: null,
            profile_nickname: "테스트를 진행한 친구가 없습니다.",
            profile_thumbnail_image: question,
            uuid: null,
        },
        {
            favorite: null,
            id: null,
            profile_nickname: "테스트를 진행한 친구가 없습니다.",
            profile_thumbnail_image: question,
            uuid: null,
        },
    ]);
    const getFriends = async () => {
        const response: AxiosResponse = await webClient.get("/friends/");
        const array: FriendsType[] = [...response.data.friends_list.elements];
        setFriendsList(array);
    };
    useEffect(() => {
        getFriends();
    }, []);
    return (
        <>
            <div className="friendsList_container">
                <MBTIProfile
                    friend_profile_image={props.profile}
                    friend_name={props.userName}
                />
                <div className="friendsList_list">
                    <div className="friendsList_text">
                        내 친구들은 이런 유형이 가장 많았어요
                    </div>
                    <MBTIPercent index={0} mbti="ESFJ" percent={50} />
                    <MBTIPercent index={1} mbti="ESFJ" percent={50} />
                    <MBTIPercent index={2} mbti="ESFJ" percent={50} />
                    <MBTIPercent index={3} mbti="ESFJ" percent={50} />
                </div>
                <div className="friendsList_list">
                    <div className="friendsList_text">
                        전체 친구들의 성격유형 확인하기
                    </div>
                    <MBTIProfile
                        friend_profile_image={
                            friendsList[0].profile_thumbnail_image
                        }
                        friend_name={friendsList[0].profile_nickname}
                    />
                    <MBTIProfile
                        friend_profile_image={
                            friendsList[1].profile_thumbnail_image
                        }
                        friend_name={friendsList[1].profile_nickname}
                    />
                    <MBTIProfile
                        friend_profile_image={
                            friendsList[2].profile_thumbnail_image
                        }
                        friend_name={friendsList[2].profile_nickname}
                    />
                    <MBTIProfile
                        friend_profile_image={
                            friendsList[3].profile_thumbnail_image
                        }
                        friend_name={friendsList[3].profile_nickname}
                    />
                    <MBTIProfile
                        friend_profile_image={
                            friendsList[4].profile_thumbnail_image
                        }
                        friend_name={friendsList[4].profile_nickname}
                    />
                    <Link to="/all_friendsList" className="friendsList_btn">
                        전체 친구목록
                    </Link>
                </div>
            </div>
        </>
    );
};
export default FriendsList;
