import icon_home from "Images/footer/home.png";
import icon_home_a from "Images/footer/home_active.png";
import icon_lever from "Images/footer/lever.png";
import icon_lever_a from "Images/footer/lever_active.png";
import icon_position from "Images/footer/position.png";
import icon_position_a from "Images/footer/position_active.png";
import icon_chat from "Images/footer/chat.png";
import icon_chat_a from "Images/footer/chat_active.png";
import icon_me from "Images/footer/me.png";
import icon_me_a from "Images/footer/me_active.png";
export default {
    nav: [
        {
            id: 1,
            normal: icon_home,
            active: icon_home_a,
            name: "home",
            path: "/"
        },
        {
            id: 2,
            normal: icon_lever,
            active: icon_lever_a,
            name: "lever",
            path: "/lever"
        },
        {
            id: 3,
            normal: icon_position,
            active: icon_position_a,
            name: "position",
            path: "/position"
        },
        {
            id: 4,
            normal: icon_chat,
            active: icon_chat_a,
            name: "chat",
            path: "/chat"
        },
        {
            id: 5,
            normal: icon_me,
            active: icon_me_a,
            name: "me",
            path: "/me"
        }
    ]
};
