import { calculateTimePassed } from "../../utils/calculateTimePassed";
import { userInitials } from "../../utils/userInitials";
import { CommentDiv } from "./styles";

interface CommentProps {
  userName: string;
  commentDate: string;
  text: string;
}

function CommentCard({ userName, commentDate, text }: CommentProps) {
  return (
    <CommentDiv>
      <div className="userInfo">
        <div className="sellerPhoto">
          <p>{userInitials(userName)}</p>
        </div>
        <p className="userName">{userName}</p>
        <span className="date">{calculateTimePassed(commentDate)}</span>
      </div>
      <div className="text">{text}</div>
    </CommentDiv>
  );
}

export default CommentCard;
