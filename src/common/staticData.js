// navList
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


export const navList = [
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
];
export const guideData = {
    userList: [
        {
            icon: require("../assets/Images/guide/icon_1.png"),
            title: "系统操作指南",
            content: "平台开户指南，教您轻松了解平台开户指南，教您轻松了解",
            id: 1
        },
        {
            icon: require("../assets/Images/guide/icon_2.png"),
            title: "快捷开户",
            content: "平台开户指南，教您轻松了解平台开户指南，教您轻松了解",
            id: 2
        },
        {
            icon: require("../assets/Images/guide/icon_3.png"),
            title: "K线指标设置",
            content: "平台开户指南，教您轻松了解平台开户指南，教您轻松了解",
            id: 3
        },
        {
            icon: require("../assets/Images/guide/icon_4.png"),
            title: "杠杆交易操作",
            content: "平台开户指南，教您轻松了解平台开户指南，教您轻松了解",
            id: 4
        },
        {
            icon: require("../assets/Images/guide/icon_5.png"),
            title: "账户充值/提币",
            content: "平台开户指南，教您轻松了解平台开户指南，教您轻松了解",
            id: 5
        },
        {
            icon: require("../assets/Images/guide/icon_6.png"),
            title: "推广赚钱",
            content: "平台开户指南，教您轻松了解平台开户指南，教您轻松了解",
            id: 6
        }
    ]
};

export const askedData = {
    open_account: [
        {
            title: "是否能注册多个账户？",
            content: [
                "您可以注册多个账户，但一个身份证和一个手机号仅支持绑定一个账户。"
            ],
            name: 1
        },
        {
            title: "开户是否需要实名？",
            content: [
                "开户不需实名认证，您可以直接手机号或者邮箱注册，注册成功即可登录使用。但进行绑卡、充/提币等操作时，必须进行实名认证，以便保护您的资金安全！"
            ],
            name: 2
        },
        {
            title: "忘记登录密码怎么办？",
            content: [
                "忘记登录密码时，您可以在登录页面进行“忘记密码”操作，按照系统提示输入验证码，重置密码即可。"
            ],
            row: 1,
            name: 3
        }
    ],
    chong_ti: [
        {
            title: "充/提币有哪些方式？",
            content: [
                "目前可以直接向平台的USDT钱包转账，或者通过OTC场外的方式购买USDT充值进入平台。"
            ],
            name: 4
        },
        {
            title: "什么是OTC交易？",
            content: [
                "OTC交易为场外交易。平台与商户签约，用户可通过平台与签约商户自由进行数字货币资产与法币买卖。"
            ],
            name: 5
        },
        {
            title: "OTC交易如何操作？",
            content: [
                "OTC交易，即买方以法币（人民币）购买出售方提供的数字资产，如USDT。",
                "交易过程如下：",
                "购入：",
                "1、买方自由选择出售方，在出售方设定的出售额度范围内进行下单购买；",
                "2、买方下单成功后，出售方向买方提供收款账号，买方向其提供的账户进行转账，转账方式可通过个人微信、支付宝、银行卡等方式；",
                "3、转账成功后标记安全码，此时订单相应的数字货币将被锁定在平台上，卖方确认收到转账后，将释放数字货币给买方。",
                "4、如果有其他疑问可以直接联系我们的客服，加快操作速度。",
                "出售：",
                "1、进入出售界面，输入出售金额，设定每次交易额度范围，并设定转账方式；",
                "2、提交后，商户会进行审核，审核通过后即可进行交易，交易成功，款项到账；",
                "注：仅有实名认证的账户方可购入/出售数字货币；交易期间遇到问题可联系平台在线客服。"
            ],
            name: 6
        },
        {
            title: "什么是钱包转账？",
            content: [
                "1、指用户将其他第三方数字货币钱包下USDT资产充值到平台提供地址下；",
                "2、钱包转账受网络的拥挤程度决定，交易完成需6次确认；",
                "3、本平台目前只接受USDT的充值，请在充币钱，再次确认充值地址，交易一旦发送到区块链网络便不可撤回。",
                "4、钱包提币前需确保所提供提币地址准确无误，若无地址可选择新建地址，提币手续费每笔为提币USDT数量的3%。",
                "5、所有充提币记录可在历史明细查看。"
            ],
            name: 7
        }
    ],
    lever_list: [
        {
            title: "杠杆交易下单有哪些方式？",
            content: [
                "市价：以当前价立即成交，可设置止盈止损点及是否持仓过夜。",
                "挂单：是按投资者期望的价格下单但并未立即成交，仅当满足条件后才成交，可设置截止时间（指用户希望在某一时间内挂单按期望价格成交，若规定时间内未成交，则挂单取消）、止盈止损点及是否持仓过夜。"
            ],
            name: 8
        },
        {
            title: "杠杆交易费用包含哪些？",
            content: ["平台收取的费用主要包括交易手续费和持仓过夜费。"],
            name: 9
        },
        {
            title: "交易手续费怎么收取？",
            content: [
                "交易手续费=（交易量*开仓价-占用保证金）*费率",
                "交易手续费只在下单时收取一次，其余操作都不再收取。"
            ],
            name: 10
        },
        {
            title: "持仓过夜费怎么收取？",
            content: [
                "过夜费收取时间：每日06:00收取前一天的持仓过夜费；",
                "过夜费=交易手续费*30%；",
                "过夜费是对选择了持仓过夜的订单收取的费用，如订单在6:10前已经平仓，则不收取该费用；",
                "每笔订单每天都将收取一次，如订单持仓过夜2天，将收取2次过夜费；",
                "用户若想修改订单持仓过夜设置，可在下单时选择是否【持仓过夜】或在【06:10-次日06:00】至【持仓】页面修改该订单的持仓过夜设置，系统将根据该设置判断该笔订单是否持仓过夜。"
            ],
            name: 11
        },
        {
            title: "杠杆交易时间？",
            content: [
                "除服务器特殊维护时间外，为全部开放日，交易时间为当日的06:10—次日06:00 （按照香港的当地时间计算）"
            ],
            name: 12
        },
        {
            title: "投资的最小和最高交易量是多少？",
            content: ["每个品种的交易量各有不同，请具体查看每个交易品种介绍。"],
            name: 13
        },
        {
            title: "保证金交易是什么意思？",
            content: [
                "保证金是投资者放在自己开设的交易合约中的资金（承担风险的资金），用来弥补或者部分弥补可能遭受的亏损。保证金交易充分利用了杠杆投资的原理，即用较少的资金实现获取较大收益的可能性。固额保证金，三个档位，保证金越小风险越大，投资者谨慎选择！",
                "如购买一个BTC，合约价值为6000USDT，投资者选择10倍的杠杆保证金交易，即可用600USDT成交一个BTC。"
            ],
            name: 14
        },
        {
            title: "什么情况下杠杆交易会被强制平仓？",
            content: [
                "有三种情况会被强制平仓，一是亏损费用超出保证金的80%；二是用户没有设置【持仓过夜】，在次日06:00前会被系统强制平仓；三是账户资金不足以支付过夜费。"
            ],
            name: 15
        },
        {
            title: "是否可以一直持仓？",
            content: [
                "若订单开启【持仓过夜】设置，只要没有达到止损、止盈底线并有足够的资金支付过夜费，持仓将不受时间限制，可以长期持仓。"
            ],
            row: 1,
            name: 16
        }
    ],
    other_list: [
        {
            title: "什么是数字货币？",
            content: [
                "数字货币也称为加密货币，是一种端到端的电子现金系统，用户无需通过中央服务器或中介金融机构即可进行金融交易，比如，无需通过银行即可进行货币的电子转移。也就是说，数字货币是以电子支付形式存在的数字资产。此外，数字货币的价值与某个特定国家或货币没有相关性，是由市场供求关系决定的。"
            ],
            name: 17
        },
        {
            title: "该数字货币交易平台的特点？",
            content: [
                "本平台的交易主要采用了杠杆交易模式，即利用较少的资金实现获取较大收益的可能性，同时损失也相对放大。",
                "客户在本平台进行交易，支付保证金及交易手续费，由平台根据客户的交易信息在各大数字货币交易所进行实际交易，实际交易盈利部分归客户所有，亏损由客户的保证金承担，本平台仅赚取用户的交易手续费；",
                "客户一旦方向买错，会存在较大的资金损失，因此，本平台的交易模式并非适用于每个投资者，在您开始实盘交易前，建议您明确其交易风险，并控制投入资金额度，一旦您选择了本平台交易，即视为您认同本平台的交易模式并愿意承担其带来的风险。",
                "本平台的操作相较其他交易所简便，入门容易，更快上手投资。"
            ],
            name: 18
        },
        {
            title: "推广下线是如何分成的？",
            content: [
                "本平台采用师徒制的推广方式，按照一级二级下线进行分成，您将获取您一级下线交易手续费的10%，二级下线交易手续费的5%为分成。"
            ],
            name: 19
        },
        {
            title: "该平台行情对接方式是什么？",
            content: [
                "平台将订阅币安、OKEX和火币三大交易所的外盘行情，加权平均作为标准行情，若某交易所出现故障，则取消该交易所权重，将原有权重平均给其他交易所。"
            ],
            name: 20
        }
    ]
};

export const meList = [
    {
        title: "投资报表",
        icon: require("../assets/Images/me/icon_1.png"),
        link: "/",
        id: 1
    },
    {
        title: "资金明细",
        icon: require("../assets/Images/me/icon_2.png"),
        link: "/",
        id: 2
    },
    {
        title: "新手引导",
        icon: require("../assets/Images/me/icon_3.png"),
        link: "/guide",
        id: 3
    },
    {
        title: "联系客服",
        icon: require("../assets/Images/me/icon_4.png"),
        link: "/",
        id: 4
    },
    {
        title: "安全中心",
        icon: require("../assets/Images/me/icon_5.png"),
        link: "/",
        id: 5
    },
    {
        title: "账户设置",
        icon: require("../assets/Images/me/icon_6.png"),
        link: "/",
        id: 6
    }
];
