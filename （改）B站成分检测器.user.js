// ==UserScript==
// @name              （改）B站成分检测器
// @version           2.0.0
// @author            hmjz100,xulaupuz,trychen
// @namespace         github.com/hmjz100
// @license           GPLv3
// @description       《也许同类型中最好用？》系列 - B站评论区自动标注成分，支持动态和关注识别以及手动输入 UID 识别，默认标注包括抽奖、原神、崩坏3、崩坏星穹铁道、绝区零、鸣潮、战双帕弥什、少女前线、少女前线2、明日方舟、碧蓝航线、VTuber、Asoul、王者荣耀、三国杀、Minecraft、迷你世界、初生科技、穿越火线、地下城与勇士、绝地求生、英雄联盟、第五人格、蛋仔派对、GLITCH、碧蓝档案、尘白禁区、NIKKE胜利女神、彩虹六号：围攻。
// @match             *://*.bilibili.com/*
// @icon              data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAABMLAAATCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A1qEAANahAADWoQAG1qEAb9ahAMvWoQD01qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD01qEAy9ahAG/WoQAG1qEAANahAADWoQAA1qEAG9ahAM/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahANDWoQAb1qEAANahAAfWoQDQ1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahANHWoQAH1qEAbtahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAG7WoQDH1qEA/9ahAP/WoQD/1qEAtdahABjWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahABvWoQC11qEA/9ahAP/WoQD/1qEAx9ahAPnWoQD/1qEA/9ahAP/WoQAZ1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahABjWoQD/1qEA/9ahAP/WoQDz1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAErWoQDn1qEA5NahAErWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAErWoQDn1qEA5NahAErWoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA59ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA59ahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA5tahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA5tahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQBJ1qEA5tahAObWoQBJ1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQBJ1qEA5tahAObWoQBJ1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA+dahAP/WoQD/1qEA/9ahABnWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAGdahAP/WoQD/1qEA/9ahAPjWoQDH1qEA/9ahAP/WoQD/1qEAttahABnWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahABnWoQC21qEA/9ahAP/WoQD/1qEAx9ahAG3WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQBt1qEABtahAM/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA0NahAAfWoQAA1qEAG9ahAM/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAM/WoQAb1qEAANahAADWoQAA1qEABtahAG7WoQDH1qEA89ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA89ahAMfWoQBu1qEABtahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAxdahAA/WoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAxdahAA/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAAbWoQDF1qEA/9ahAP/WoQD/1qEA/9ahAMXWoQAP1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAxdahAAbWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAYtahAP/WoQD/1qEA/9ahAP/WoQDF1qEADtahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAY9ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQBf1qEA/9ahAP/WoQD/1qEAxdahAA7WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQBf1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAATWoQCg1qEA6tahAKjWoQAO1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAKjWoQDr1qEAoNahAATWoQAA1qEAANahAADWoQAA1qEAAP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A///////////AAAADgAAAAQAAAAAAAAAAA///wAf//+AP///wD///8A////AP///wDw/w8A8P8PAPD/DwDw/w8A8P8PAPD/DwD///8A////AH///gA///wAAAAAAAAAAAgAAAAcAAAAP8A8A/+AfgH/gP8B/4H/gf+D/8H/////8=
// @connect           bilibili.com
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             GM_xmlhttpRequest
// @grant             GM.xmlHttpRequest
// @grant             GM_registerMenuCommand
// @grant             GM_getResourceText
// @require           https://unpkg.com/jquery@3.6.0/dist/jquery.min.js
// @require           https://unpkg.com/sweetalert2@11/dist/sweetalert2.min.js
// @resource Swal     https://unpkg.com/sweetalert2@11/dist/sweetalert2.min.css
// @resource SwalDark https://unpkg.com/@sweetalert2/theme-dark@5/dark.min.css
// ==/UserScript==

$(function BiliChecker() {
	// 是否在控制台显示错误消息
	let debug = false;
	/* 注释~
	在这里配置要检查的成分，或者直接拉黑（使用指定UID评论的人会被直接添加标签）。
	假设你要直接给指定UID添加一个标签的话，就这样写：blacklist: [1234567890,0987654321]
	*/
	const checkers = [
		{
			displayName: "抽奖",
			displayIcon: "🎁",
			keywords: ["互动抽奖", "转发本条动态"],
		},
		{
			displayName: "原神",
			displayIcon: "https://i0.hdslb.com/bfs/face/d2a95376140fb1e5efbcbed70ef62891a3e5284f.jpg@100w_100h.webp",
			keywords: ["互动抽奖 #原神", "#原神", "原神", "芙宁娜", "白术", "赛诺", "神里绫人", "神里绫华", "夏洛蒂", "珊瑚宫", "九条裟罗", "班尼特", "夜阑", "那维莱特", "枫原万叶", "万叶", "钟离", "纳西妲", "香菱", "八重神子", "久岐忍", "菲谢尔", "艾尔海森", "胡桃", "林尼", "达达利亚", "提纳里", "宵宫", "莫娜", "甘雨", "罗莎莉亚", "刻晴", "九条裟罗", "温迪", "阿贝多", "云堇", "芭芭拉", "迪卢克", "烟绯", "重云", "雷泽", "凝光", "坎蒂丝", "辛焱"],
			followings: [401742377] // 原神官方号的 UID
		},
		{
			displayName: "崩坏3",
			displayIcon: "https://i0.hdslb.com/bfs/face/f861b2ff49d2bb996ec5fd05ba7a1eeb320dbf7b.jpg@100w_100h.webp",
			keywords: ["互动抽奖 #崩坏3", "#崩坏3", "崩坏3", "德丽莎", "温蒂"],
			followings: [27534330] // 崩坏3官方号的 UID
		},
		{
			displayName: "崩坏星穹铁道",
			displayIcon: "https://i0.hdslb.com/bfs/face/57b6e8c16b909a49bfc8d8394d946f908cabe728.jpg@100w_100h.webp",
			keywords: ["互动抽奖 #崩坏星穹铁道", "#崩坏星穹铁道", "#星穹铁道", "崩坏星穹铁道", "星铁", "崩铁"],
			followings: [1340190821] // 崩坏星穹铁道官方号的 UID
		},
		{
			displayName: "绝区零",
			displayIcon: "https://i0.hdslb.com/bfs/face/049b47e0e73fc5cc1564343bb0aeacce8ae8e6f8.jpg@100w_100h.webp",
			keywords: ["互动抽奖 #绝区零", "#绝区零", "#绝区零公测", "绝区零"],
			followings: [1636034895] // 绝区零官方号的 UID
		},
		{
			displayName: "鸣潮",
			displayIcon: "https://i0.hdslb.com/bfs/face/0abd6b9df304334a9388e968740b5b9b7d1a84be.jpg@100w_100h.webp",
			keywords: ["互动抽奖 #鸣潮", "#鸣潮", "#鸣潮长离", "鸣潮"],
			followings: [1955897084] // 鸣潮官方号的 UID
		},
		{
			displayName: "战双帕弥什",
			displayIcon: "https://i0.hdslb.com/bfs/face/29d40886bc649fd2b81793c17077728820d411b6.jpg@100w_100h.webp",
			keywords: ["互动抽奖 #战双帕弥什", "#战双帕弥什", "#剪身成蝶", "战双帕弥什"],
			followings: [382651856] // 战双帕弥什官方号的 UID
		},
		{
			displayName: "少女前线",
			displayIcon: "https://i0.hdslb.com/bfs/face/667e4b1ca39300bff0672774f1980c02c2353b11.jpg@100w_100h.webp",
			keywords: ["互动抽奖 #少女前线", "#少女前线", "#零电荷", "少女前线"],
			followings: [
				32472953, // 少女前线官方号的 UID
				266017919 // 少女前线后勤组的 UID
			]
		},
		{
			displayName: "少女前线2",
			displayIcon: "https://i0.hdslb.com/bfs/face/427f8dde32e18465a723f7c7216340c2013d595d.jpg@100w_100h.webp",
			keywords: ["互动抽奖 #少前2", "#少前2#", "少女前线2", "少前2"],
			followings: [697654195] // 少女前线2官方号的 UID
		},
		{
			displayName: "明日方舟",
			displayIcon: "https://i0.hdslb.com/bfs/face/d4005a0f9b898d8bb049caf9c6355f8e8f772a8f.jpg@100w_100h.webp",
			keywords: ["明日方舟", "#明日方舟"],
			followings: [161775300] // 明日方舟官方号的 UID
		},
		{
			displayName: "碧蓝航线",
			displayIcon: "https://i0.hdslb.com/bfs/face/1fd5b43d5f619e6df8c8adcf13c962a3e80ee971.jpg@100w_100h.webp",
			keywords: ["碧蓝航线", "#碧蓝航线", "#舰船新增#"],
			followings: [233114659] // 碧蓝航线官方号的 UID
		},
		{
			displayName: "碧蓝档案",
			displayIcon: "https://i0.hdslb.com/bfs/face/f2635e09fe667d4ad29229c6ed0b5f4bdea09bd1.jpg@100w_100h.webp",
			keywords: ["碧蓝档案", "#碧蓝档案"],
			followings: [3493265644980448] // 碧蓝档案官方号的 UID
		},
		{
			displayName: "尘白禁区",
			displayIcon: "https://i0.hdslb.com/bfs/face/e2a7e30399860cfa7c1ec5c958ab9e519290e181.jpg@100w_100h.webp",
			keywords: ["尘白禁区", "#尘白禁区"],
			followings: [1409863611] // 尘白禁区官方号的 UID
		},
		{
			displayName: "NIKKE胜利女神",
			displayIcon: "https://i0.hdslb.com/bfs/face/cc690158528967d1c57586290e3be57edd4e6e47.jpg@100w_100h.webp", // 实在没有图标，先用情报站的头像
			keywords: ["NIKKE", "胜利女神"],
			followings: [1972404330] // NIKKE情报站的 UID
		},
		{
			displayName: "VTuber",
			displayIcon: "https://i0.hdslb.com/bfs/face/d399d6f5cf7943a996ae96999ba3e6ae2a2988de.jpg@100w_100h.webp",
			keywords: ["雪蓮", "塔菲", "七海", "草莓猫", "嘉然", "乃琳", "珈乐", "贝拉"],
			followings: [
				1437582453, // 東雪蓮Official
				1265680561, // 永雏塔菲
				434334701, // 七海Nana7mi
				1210816252, // 草莓猫Taffy
				672328094, // 嘉然今天吃什么
				672342685, // 乃琳Queen
				351609538, // 珈乐Carol
				672346917, // 向晚大魔王
				672353429, // 贝拉kira
			]
		},
		{
			displayName: "Asoul",
			displayIcon: "https://i0.hdslb.com/bfs/face/43b21998da8e7e210340333f46d4e2ae7ec046eb.jpg@100w_100h.webp",
			keywords: ["@A-SOUL_Official", "#A_SOUL#"],
			followings: [
				703007996, // Asoul
				547510303, // Asoul二创计画
				672328094, // 嘉然今天吃什么
				672342685, // 乃琳Queen
				351609538, // 珈乐Carol
				672346917, // 向晚大魔王
				672353429, // 贝拉kira
			]
		},
		{
			displayName: "王者荣耀",
			displayIcon: "https://i0.hdslb.com/bfs/face/effbafff589a27f02148d15bca7e97031a31d772.jpg@100w_100h.webp",
			keywords: ["互动抽奖 #王者荣耀", "#王者荣耀", "王者荣耀"],
			followings: [
				57863910, // 王者荣耀
				392836434, // 哔哩哔哩王者荣耀赛事
			]
		},
		{
			displayName: "三国杀",
			displayIcon: "https://i0.hdslb.com/bfs/face/fe2e1a6e3dc702a6c91378e096ef37ca71bf4629.jpg@100w_100h.webp",
			keywords: ["互动抽奖 #三国杀", "#三国杀", "三国杀", "#2023三国杀"],
			followings: [1254932367] // 三国杀十周年官方号的 UID
		},
		{
			displayName: "Minecraft",
			displayIcon: "https://i0.hdslb.com/bfs/face/c5578966c447a70edf831bbf7e522b7be6090fea.jpg@100w_100h.webp",
			keywords: ["我的世界", "minecraft", "#我的世界", "我的世界拜年祭", "MCBBS", "我的世界中文论坛", "MC玩家"],
			followings: [
				43310262, // 我的世界官方号的 UID
				39914211, // 我的世界中文论坛(MCBBS)官方号的 UID
			]
		},
		{
			displayName: "迷你世界",
			displayIcon: "https://i0.hdslb.com/bfs/face/a7591e5e0278aafb76cc083b11ca5dd46f049420.jpg@100w_100h.webp",
			keywords: ["mnsj", "迷你世界", "miniworld", "#迷你世界", "迷你世界拜年祭"],
			followings: [
				470935187, // 迷你世界官方号的 UID
				3493113479825578, //迷你世界-拆
				1823344826, //汉堡迷你世界v
				1001979471, //迷你世界果冻丫
				1578117313, //迷你世界辣条吖
                                606753153, //迷你世界狗蛋
				1272155030, //迷你世界半拉
				3493075015960752, //迷你世界奶茶v
				51494691, //迷你世界果冻呀
				1110563414, //紫枫一迷你世界
				1541734600, //迷你世界二驴
				3493257967307320, //迷你世界小哆啦吖
				1862951948, //迷你世界白熊
				1659178469, //迷你世界柒柒姐
				1546135282, //迷你世界汉堡吖mini
				1586479234, //迷你世界小白吖
				3493074967726714, //迷你世界奶糖v
				328368589, //迷你世界王不畏解说
			]
		},
		{
			displayName: "小马宝莉",
			displayIcon: "https://xc.null.red:8043/XCimg/img/save/2024/08/30/image-108006778.png",
			keywords: ["小马", "马迷", "mlp", "MLP", "彩虹小马", "esq", "ESQ"],
			followings: [
		                18251508, //千景
                                3546559893473298, //暗冥优莉
                                66970100, //LUMO_Xu
                                1625041793, //Eastquestria-东马厂牌
                                3546588335049207, //星雪凌晶-Snowy_Twinkle
                                159413920, //BronyTown
                                95119610, //与君醉桃坞
                                359143428, //赤昧灯辉
                                19443010, //CokeCoffee
                                28344516, //中二病大狮子
                                44162034, //玛奇马骑马骑马
                                1436757844, //Lydia-Windy
                                340472568, //马圈视野
                                671656021, //神七233
                                37479021, //小马宝莉点播厅
                                3537122323597967, //线牌洗衣机
                                536402568, //糖希酱
                                162857987, //神通广大的超级闪闪
                                485600404, //御坂美麒
                                299313851, //荧光_Fluorescence
                                3493080399349765, //慕芯w
                                291253032, //魔熠小星星-c-
                                346748701, //Twilight-Shimmer
                                29254354, //Tridashie
                                352400157, //叶翼叶芝
                                525140745, //Uncle-Chai
                                1100577818, //苍筤feather
                                306310521, //幻歌精神状态良好
                                1774687156, //呆呆猫
                                2052819254, //BladeFeather
                                1080164448, //LemonCola柠檬可乐
                                3546388015089937, //中央空调tear
                                442392499, //友谊俱乐部starlight苍鱼
                                480137948, //Silvery_SKY
                                173407173, //Mushak植物
                                3493293801343294, //晶云QwQ
                                550924902, //流光叆叇_ふきおくる
                                403110171, //红染之凌
                                51688809, //Stellar-Windy
                                21618817, //CNBC马展
                                37719736, //灵翼Lingyeee|CSBC马展
                                529496831, //Unkinfo_
                                143348211, //暮光闪闪_Twilight
                                38818936, //荆荆荆竹野
                                1259597415, //翠虹-nuyadable
                                695521854, //凝安---
                                1355029670, //zyh黑风
                                5517794, //WonderLS
                                1122442912, //Viento动画工作室
                                3493110080342763, //彩霞闪闪_开学消失版
                                409790680, //Talirian
                                381647702, //Coryzen
                                1235216769, //MLP-紫悦
                                1160291544, //ShunHsi瞬息色彩
                                3494365531999068, //ry_Xplosion
                                1694237999, //画马丧志的屑彩梦
                                3493114880722969, //泠老师的遗嘱
                                1630607440, //Fimtale官方
                                597085888, //Stellar_Dusk暮辰
                                641391025, //凝霜cream
                                3546632490584150, //涂山-秋卉
                                481261734, //一只星月star
                                32218088, //紫鬃骊驹
                                606568713, //费杰龙只会画画
                                205022800, //霜月月月月
                                6881238, //PonyDaily
                                1117091922, //神风小马同人绘画
                                1676425649, //Starsky_Bearer
                                475290371, //Douershun
                                1999706609, //羽落05
                                3493135629945549, //KARINA_WHITE
                                27708737, //雅欣妮砸
                                23737695, //不恰萝卜の兔子
                                14824857, //丢丢之王
                                3493118047422505, //MLP-Twilight
                                429649720, //White_AL
                                1584226296, //_海盐気泡水_
                                596133695, //酒不可食用X
                                401633058, //短笛横吹1231
                                8346596, //斯朗Shiron
                                1599773009, //晴云字幕组
                                496801702, //bf官方
                                141792972, //音灵灵
                                319298296, //小马国男孩
                                646801310, //cbf重庆马迷嘉年华
                                381352558, //TTSS
                                44134944, //青焰小马
                                3461563140802631, //hhzzy
                                16497847, //小杯冠
                                118936756, //心军RD
                                22938997, //霹雳神偷
                                12719091, //习成PBU
                                12651008, //虹云彼方
			]
		},
		{
			displayName: "初生科技",
			displayIcon: "https://i0.hdslb.com/bfs/face/eb4c7bbea813eed3a92ee194809d85715e6a7659.jpg@100w_100h.webp",
			// [禁止骂我！禁止拉黑！.jpg]
			keywords: ["易语言", "编程猫", "scratch", "ramos", "winpe", "bsod", "memz", "MEMZ", "WindowsCE", "下崽器", "aero", "setup", "DWM", "CmzPrep", "VMWare", "希沃白板", "Ubuntu PE", "PowerShell", "gnu/linux"],
			followings: [
				//- 组1/关键词:system -//
				493998035, // SYSTEM-RAMOS-ZDY
				702028797, // JERRY-SYSTEM
				631731585, // system-bootmgr-L
				501355555, // MS-SYSTEM
				1865727084, // SYSTEM-WinPE-CHD
				1162296488, // System3206
				1531948091, // SYSTEM_Win11_RE
				392697653, // System-i386
				313342814, // SYSTEM-GREE-GZN
				1546428456, // SYSTEM-WIN-EDGE
				631731585, // system-bootmgr-L
				501355555, // MS-SYSTEM
				2043088162, // SYSTEM-WINNT-ZDY
				601270898, // 601270898
				1531948091, // SYSTEM_Win11_RE
				3493083238894137, // 井_SYSTEM_火车迷
				1666981688, // System-Installer
				1546428456, // SYSTEM-WIN-24H2
				1162296488, // system4831
				1886348413, // SYSTEM-MEMZ-CAO
				1827307028, // SYSTEM_小影
				1744631001, // SYSTEM-SUYI-WIN
				699804375, // SYSTEM-MSDOS-ZDY
				3493298725456171, // SYSTEM-WIN-BY
				1431997122, // SYSTEM-Start
				669094468, // SYSTEM-TANGYUAN
				703051574, // SYSTEM-OOBE
				604076432, // SYSTEM-WIN32-PE => Hacker_NanGua QQ:940123839 -来源:用户简介
				//- 组2/关键词:bsod -//
				451475014, // STR-BSOD
				1511907771, // MEMZ-BSOD
				1975308950, // BSOD-MEMZ
				397847418, // 蓝屏钙BSOD
				1776025003, // 蓝瓶钙BSoD
				1007224506, // EXPLORER-BSOD
				1175873768, // BSOD-Winme
				2032637936, // BSOD-SYSTEM
				1933399514, // win11_BSOD
				1641461034, // DEEPIN_BSOD2_CMD
				3493293100894309, // SYSTEM-BSOD-ZFS
				1204666655, // 草方块BSOD
				1124857662, // Wininit_BSOD
				1306710323, // SHITOU_BSOD
				10828819, // BSoD正在玩
				1776025003, // 蓝瓶钙BSoD
				1266839139, // JHR_BSOD_MIMZ
				3461566410262700, // Windows_BSOD
				1061621085, // Vista-BSOD
				1007224506, // EXPLORER-BSOD
				1175873768, // BSOD-Winme
				665360141, // 微飞的BSOD
				3461578091399948, // Silversoft_BSOD
				1933399514, // win11_BSOD
				2043170695, // SYSTEM-BSOD-MEMZ
				//- 组3/关键词:memz -//
				21927744, // 360MEMZ
				1353783215, // MEMZ-Chrome
				412777837, // 注册表MEMZ
				457692234, // 奇怪的MEMZ
				298993710, // 注册表编辑器MEMZ
				413269076, // Cmd_MEMZ
				649846967, // Win7MEMZ-BX
				498912953, // AMD_MEMZ
				390483853, // 炒鸡360MEMZ
				362451533, // NC_Memz
				351258144, // 豆沙包MEMZ
				104657830, // 尚宜鼎MEMZ
				365129777, // DrAMA-MEMZ
				378430387, // 小李MEMZ
				392672572, // 123MEMZ
				1465447323, // 爱搞机的MEMZ
				1585476, // 23胡彬MEMZ
				1151195812, // 开朗的冰人MEMZ
				1089892994, // MEMZ-Windows11
				//- 组5/关键词:Aero -//
				435972058, // WindowsAero毛玻璃
				1452376557, // 没有Aero就没有灵魂
				1911529131, // Aero8m
				1321946754, // 没有Aero的Windows7
				//- 组5/关键词:setup -//
				589370259, // setup-windows安装
				2050076822, // Windows-Setup
				1549141274, // system-setup
				692755897, // Setup-Official
				483574120, // setup安装程序
				1031408618, // Deewin-Setup
				671918906, // win95setup
				//- 组6/关键词:Start -//
				524501321, // Start-hs888
				2030178992, // Start-BME
				//- 组7/关键词:Linux -//
				1933598970, // 白羊Linux
				603375808, // linux265
				1984449284, // Linux粉
				1093084152, // BSD-Linux
				67247219, // Linux_Newbie
				//- 组8/关键词:Windows -//
				1921195852, // Windows之家
				621857141, // Windows哥
				612743845, // 浩瀚星晨win
				1050145612, // windows11不会出
				3493092688661431, // 炸了的win10
				1601172780, // Windows毛玻璃解说233
				353290736, // Win11的粉丝_offical
				24821321, // Windows系统追更狂魔
				1833642992, // Win32_WinSxS_sys
				276817988, // 无人所知的windows12
				1613384176, // Aero-Windows311
				483675256, // Windows功能
				2009792251, // Windows-Lover
				3493125863508026, // 失败的Windows
				696040999, // Lemon_x64_Win11
				1225952698, // 叶一程哥哥win10
				601259909, // 星晨大海win_Acpn
				605857877, // 卖蓝屏钙的Win11
				1736839855, // SYSTEM-D-WIN
				3494364330330273, // 一只野生的win31
				1375459514, // 开心的Windows
				1340261135, // windows1球_启动中
				578278851, // 星晨天际win
				582129140, // Windows11-PPT
				1462538741, // 很屑的windows114514
				26284934, // win_小火龙
				1965090607, // 可乐Windows
				261016792, // Win10HOME
				1751934902, // Win-PowerShell
				248556377, // Win_Update
				2108200476, // Win_Threshold-10
				2017167096, // 喜欢Win8的MacPro
				694139497, // Windows_Tester_2
				1119522579, // 爱蓝屏的win10
				1724541085, // SYSTEM--win7
				1628906682, // 被win11吃掉的磁贴
				1509347075, // Windows12MC
				1261767230, // 一只屑win10
				1605910926, // -Windows-11-
				1326423111, // Win-Flash-Pro
				1497262975, // 不解风情のWin11
				1604146839, // windows田字牌电脑
				1463163459, // Windows81Metro
				687996269, // 喜欢Windows8的架空放送
				3493119670618871, // 小锅说Windows
				483345456, // Win10家庭版
				2101678528, // OS_Windows11_lzn
				1729734602, // bug32_Windows
				1222118214, // windows11电脑的cmd
				503289010, // Windows7の理系を行う
				403527839, // windows核心编程
				435227174, // Win10Win10是个屑
				509902447, // 爱折腾的Windows
				35833798, // Windows710
				3493133778160480, // SYSTEM-WIN11-PE
				169290582, // VMware的win7
				1385242199, // MS-SYSTEM-WIN
				383322806, // Win10Pro
				3546554428295778, // SYSTEM-WIN-DCR
				1283206843, // Windows被砍掉的Aero
				1935801783, // Windows软件倒腾师
				392012144, // 一只win8球
				1338015717, // windows_system
				1187162171, // Setup-Win11
				1009063496, // Windows的Windows
				3493118152280841, // mcdos-windows
				435462593, // 唐狐WIN
				1065194305, // 彩虹猫-win11
				//- 组9/关键词:KDE -//
				2008726064, // kde-yyds
				1989712487, // SYSTEM-WIN11-KDE
				//- 组10/关键词:Ubuntu -//
				668421393, // Ubuntu-PE
				586347926, // memz-ubuntu
				//- 自定义组/依照个人判断 -//
				1157923020, // 仗义的老班长
				401094700, // 旮沓曼_gt428
				356882513, // 被重组吃掉的虚拟桌面
				198316802, // 传说当中的帅锅
				1151325757, // SYSTEM-OPS-LJY
				1304244190, // System-NBNB
				504179884, // MYB_CKLS
				1776456802, // 奇怪的MEMZ的小号
				1534842751, // 爱WinPE的MEMZ
				2112060594, // WINPE-SYSTEM
				1439352366, // SYSTEM-WINPE-EXE
				678414222, // Windows-regedit
				505199229, // SYSTEM_PHILI
				652188355, // 一个windows爱好者
				1863175083, // 半不了世的空城
				1736202379, // 胡桃玩VM
				1322183332, // WindowsCEMEMZ新账号
				414666753, // 桌面窗口管理器_DWM
				698760287, // 出星海wrcjs_sp4
				307432672, // 花l火
				3493108908034540, // S-1-5-21-1726115
				1158046953, // VistaChrome108
				727892489, // Windows2003R2
				1243577821, // hyq061221
				1330313497, // alan-CRL
				1190936866, // Qt小徐
				507658814, // 镜靛openforge
				310265955, // Ticki-Pigeon
				357779530, // 空巢老KriaStans
				456061336, // He1lo_Wor1d
				590491558, // Technology_him
				1948479703, // SYSTEM-Image-WIM
				3494362556140426, // start-windows
				1801064268, // 张星华-official
				390148573, // 西瓜xg_
				3461562834618602, // 辰东帅逼版
				1093536899, // 软萌可爱的洛神
				440662801, // 爱玩电脑的特兰克斯
				1029196202, // 杀猴专业户
				1283468503, // WinToGo-LZP
				3493105315613465, // van-豆射手
				42494833, // Happymax1212
				1015730693, // 玩了114514分钟mc
				484165196, // 351Workshop
				1624520869, // Lime青柠_QingNing
				1834260927, // Mo_Network
				62677028, // LoadingPoint
				696897486, // Mono也是墨诺喵
				1308669589, // 殇げNyrMu
				316481254, // 旗界汽车
				513312081, // Opteron64
				413043448, // 小杨聊科技
				1499173387, // 下一终端
				76868264, // 吃不到筷子的鼠
				619829471, // 小宇_ERain
				604251988, // 我可真是个添柴
				20567718, // So_Y0ung
				3493140700859270, // 中文名亦好听
				1040308682, // 战王爱分享
				37064895, // 小锋学长生活大爆炸
				1268760897, // 屑の早茶光
				384650704, // 91047971901_bili
				1947070041, // 80691808980
				1462538741, // MC-Windows114514
				547326701, // 游戏攻资君
				1572064888, // 波波yr
				1965857981, // muci_nn
				1347936870, // 托尔普森
				3546589083732470, // 刘哥gametime做游戏
				1969160969, // SR思锐Official
				1868794422, // 僵尸是萌新
				1500275808, // Minecraft729 WeChat:summoniron_golem QQ:3531622583 -来源:用户简介
				1591866703, // 人朝的小郭同学 QQ群:370019841 -来源:用户简介
				1179374590, // MRJX_QWQ
				82363089, // 小宇Boi
				529452185, // 酸乳甜梅 QQ:3202902554 -来源:用户简介
				3493146268797771, // 莪乃Vista叔
				3493114847168983, // 易溶于水的澳涐
				1733089232, // Windwos7
				3493104831171448, // 万恶之源669
				272743796, // 难忘的朱古力232
				89062643, // 泠楠梓萌
				1964181966, // Minedows
				1218496648, // 新年代老登暴扣黑曼巴
				1569663198, // B-windows10-user
				3537107693865449, // 我是小r解说
				1080519183,
				443988102, // 何人哉er
				3493111974071179, // 一只在tfs的野飞友
				3493133344049877, // mc泰菲6
				3493086852286877, // MC团长解说
				1812413197, // F_are_well
				514802302, // 不爱笑的黑客
				261401138, // S15万分小拿小刚
				1760573759, // 轻轻抚摸她的身体
				1053425351, // End_Infinity
				348877540, // FurryXH
				21946608, // 是土豆哒
				3493108075464919, // 组策略编辑器GPEDIT
				652665076, // 1204992
				1152576410, // 一个Minecraft用户
				7955948, // FTG_Win11
				1632975427, // KALI_MC
				1317996804, // 新版B界萌新
				272836680, // 13437855279
				502257570, // 智慧的蓝屏之神-doge
				1309042145, // pvpjjjj
				417138, // 你的两位朋友
				2005074146, // 小熊猫Firedoge
				15052067, // Gelan丶
				3299305, // qaqz111
				405545981, // 德比鹤-鸡你太美
				1487149980, // CHUANGWEI每日游戏推荐
				686217254, // has_7_h0l1day
				5337680, // 550W离线版
				1971481152, // windowstaskmgr
				673473165, // orangeATA
			],
			blacklist: [
				//- 组1/关键词:system -//
				493998035, // SYSTEM-RAMOS-ZDY
				702028797, // JERRY-SYSTEM
				631731585, // system-bootmgr-L
				501355555, // MS-SYSTEM
				1865727084, // SYSTEM-WinPE-CHD
				1162296488, // System3206
				1531948091, // SYSTEM_Win11_RE
				392697653, // System-i386
				313342814, // SYSTEM-GREE-GZN
				1546428456, // SYSTEM-WIN-EDGE
				631731585, // system-bootmgr-L
				501355555, // MS-SYSTEM
				2043088162, // SYSTEM-WINNT-ZDY
				601270898, // 601270898
				1531948091, // SYSTEM_Win11_RE
				3493083238894137, // 井_SYSTEM_火车迷
				1666981688, // System-Installer
				1546428456, // SYSTEM-WIN-24H2
				1162296488, // system4831
				1886348413, // SYSTEM-MEMZ-CAO
				1827307028, // SYSTEM_小影
				1744631001, // SYSTEM-SUYI-WIN
				699804375, // SYSTEM-MSDOS-ZDY
				3493298725456171, // SYSTEM-WIN-BY
				1431997122, // SYSTEM-Start
				669094468, // SYSTEM-TANGYUAN
				703051574, // SYSTEM-OOBE
				604076432, // SYSTEM-WIN32-PE => Hacker_NanGua QQ:940123839 -来源:用户简介
				//- 组2/关键词:bsod -//
				451475014, // STR-BSOD
				1511907771, // MEMZ-BSOD
				1975308950, // BSOD-MEMZ
				397847418, // 蓝屏钙BSOD
				1776025003, // 蓝瓶钙BSoD
				1007224506, // EXPLORER-BSOD
				1175873768, // BSOD-Winme
				2032637936, // BSOD-SYSTEM
				1933399514, // win11_BSOD
				1641461034, // DEEPIN_BSOD2_CMD
				3493293100894309, // SYSTEM-BSOD-ZFS
				1204666655, // 草方块BSOD
				1124857662, // Wininit_BSOD
				1306710323, // SHITOU_BSOD
				10828819, // BSoD正在玩
				1776025003, // 蓝瓶钙BSoD
				1266839139, // JHR_BSOD_MIMZ
				3461566410262700, // Windows_BSOD
				1061621085, // Vista-BSOD
				1007224506, // EXPLORER-BSOD
				1175873768, // BSOD-Winme
				665360141, // 微飞的BSOD
				3461578091399948, // Silversoft_BSOD
				1933399514, // win11_BSOD
				2043170695, // SYSTEM-BSOD-MEMZ
				//- 组3/关键词:memz -//
				21927744, // 360MEMZ
				1353783215, // MEMZ-Chrome
				412777837, // 注册表MEMZ
				457692234, // 奇怪的MEMZ
				298993710, // 注册表编辑器MEMZ
				413269076, // Cmd_MEMZ
				649846967, // Win7MEMZ-BX
				498912953, // AMD_MEMZ
				390483853, // 炒鸡360MEMZ
				362451533, // NC_Memz
				351258144, // 豆沙包MEMZ
				104657830, // 尚宜鼎MEMZ
				365129777, // DrAMA-MEMZ
				378430387, // 小李MEMZ
				392672572, // 123MEMZ
				1465447323, // 爱搞机的MEMZ
				1585476, // 23胡彬MEMZ
				1151195812, // 开朗的冰人MEMZ
				1089892994, // MEMZ-Windows11
				//- 组5/关键词:Aero -//
				435972058, // WindowsAero毛玻璃
				1452376557, // 没有Aero就没有灵魂
				1911529131, // Aero8m
				1321946754, // 没有Aero的Windows7
				//- 组5/关键词:setup -//
				589370259, // setup-windows安装
				2050076822, // Windows-Setup
				1549141274, // system-setup
				692755897, // Setup-Official
				483574120, // setup安装程序
				1031408618, // Deewin-Setup
				671918906, // win95setup
				//- 组6/关键词:Start -//
				524501321, // Start-hs888
				2030178992, // Start-BME
				//- 组7/关键词:Linux -//
				1933598970, // 白羊Linux
				603375808, // linux265
				1984449284, // Linux粉
				1093084152, // BSD-Linux
				67247219, // Linux_Newbie
				//- 组8/关键词:Windows -//
				1921195852, // Windows之家
				621857141, // Windows哥
				612743845, // 浩瀚星晨win
				1050145612, // windows11不会出
				3493092688661431, // 炸了的win10
				1601172780, // Windows毛玻璃解说233
				353290736, // Win11的粉丝_offical
				24821321, // Windows系统追更狂魔
				1833642992, // Win32_WinSxS_sys
				276817988, // 无人所知的windows12
				1613384176, // Aero-Windows311
				483675256, // Windows功能
				2009792251, // Windows-Lover
				3493125863508026, // 失败的Windows
				696040999, // Lemon_x64_Win11
				1225952698, // 叶一程哥哥win10
				601259909, // 星晨大海win_Acpn
				605857877, // 卖蓝屏钙的Win11
				1736839855, // SYSTEM-D-WIN
				3494364330330273, // 一只野生的win31
				1375459514, // 开心的Windows
				1340261135, // windows1球_启动中
				578278851, // 星晨天际win
				582129140, // Windows11-PPT
				1462538741, // 很屑的windows114514
				26284934, // win_小火龙
				1965090607, // 可乐Windows
				261016792, // Win10HOME
				1751934902, // Win-PowerShell
				248556377, // Win_Update
				2108200476, // Win_Threshold-10
				2017167096, // 喜欢Win8的MacPro
				694139497, // Windows_Tester_2
				1119522579, // 爱蓝屏的win10
				1724541085, // SYSTEM--win7
				1628906682, // 被win11吃掉的磁贴
				1509347075, // Windows12MC
				1261767230, // 一只屑win10
				1605910926, // -Windows-11-
				1326423111, // Win-Flash-Pro
				1497262975, // 不解风情のWin11
				1604146839, // windows田字牌电脑
				1463163459, // Windows81Metro
				687996269, // 喜欢Windows8的架空放送
				3493119670618871, // 小锅说Windows
				483345456, // Win10家庭版
				2101678528, // OS_Windows11_lzn
				1729734602, // bug32_Windows
				1222118214, // windows11电脑的cmd
				503289010, // Windows7の理系を行う
				403527839, // windows核心编程
				435227174, // Win10Win10是个屑
				509902447, // 爱折腾的Windows
				35833798, // Windows710
				3493133778160480, // SYSTEM-WIN11-PE
				169290582, // VMware的win7
				1385242199, // MS-SYSTEM-WIN
				383322806, // Win10Pro
				3546554428295778, // SYSTEM-WIN-DCR
				1283206843, // Windows被砍掉的Aero
				1935801783, // Windows软件倒腾师
				392012144, // 一只win8球
				1338015717, // windows_system
				1187162171, // Setup-Win11
				1009063496, // Windows的Windows
				3493118152280841, // mcdos-windows
				435462593, // 唐狐WIN
				1065194305, // 彩虹猫-win11
				//- 组9/关键词:KDE -//
				2008726064, // kde-yyds
				1989712487, // SYSTEM-WIN11-KDE
				//- 组10/关键词:Ubuntu -//
				668421393, // Ubuntu-PE
				586347926, // memz-ubuntu
				//- 自定义组/依照个人判断 -//
				1157923020, // 仗义的老班长
				401094700, // 旮沓曼_gt428
				356882513, // 被重组吃掉的虚拟桌面
				198316802, // 传说当中的帅锅
				1151325757, // SYSTEM-OPS-LJY
				1304244190, // System-NBNB
				504179884, // MYB_CKLS
				1776456802, // 奇怪的MEMZ的小号
				1534842751, // 爱WinPE的MEMZ
				2112060594, // WINPE-SYSTEM
				1439352366, // SYSTEM-WINPE-EXE
				678414222, // Windows-regedit
				505199229, // SYSTEM_PHILI
				652188355, // 一个windows爱好者
				1863175083, // 半不了世的空城
				1736202379, // 胡桃玩VM
				1322183332, // WindowsCEMEMZ新账号
				414666753, // 桌面窗口管理器_DWM
				698760287, // 出星海wrcjs_sp4
				307432672, // 花l火
				3493108908034540, // S-1-5-21-1726115
				1158046953, // VistaChrome108
				727892489, // Windows2003R2
				1243577821, // hyq061221
				1330313497, // alan-CRL
				1190936866, // Qt小徐
				507658814, // 镜靛openforge
				310265955, // Ticki-Pigeon
				357779530, // 空巢老KriaStans
				456061336, // He1lo_Wor1d
				590491558, // Technology_him
				1948479703, // SYSTEM-Image-WIM
				3494362556140426, // start-windows
				1801064268, // 张星华-official
				390148573, // 西瓜xg_
				3461562834618602, // 辰东帅逼版
				1093536899, // 软萌可爱的洛神
				440662801, // 爱玩电脑的特兰克斯
				1029196202, // 杀猴专业户
				1283468503, // WinToGo-LZP
				3493105315613465, // van-豆射手
				42494833, // Happymax1212
				1015730693, // 玩了114514分钟mc
				484165196, // 351Workshop
				1624520869, // Lime青柠_QingNing
				1834260927, // Mo_Network
				62677028, // LoadingPoint
				696897486, // Mono也是墨诺喵
				1308669589, // 殇げNyrMu
				316481254, // 旗界汽车
				513312081, // Opteron64
				413043448, // 小杨聊科技
				1499173387, // 下一终端
				76868264, // 吃不到筷子的鼠
				619829471, // 小宇_ERain
				604251988, // 我可真是个添柴
				20567718, // So_Y0ung
				3493140700859270, // 中文名亦好听
				1040308682, // 战王爱分享
				37064895, // 小锋学长生活大爆炸
				1268760897, // 屑の早茶光
				384650704, // 91047971901_bili
				1947070041, // 80691808980
				1462538741, // MC-Windows114514
				547326701, // 游戏攻资君
				1572064888, // 波波yr
				1965857981, // muci_nn
				1347936870, // 托尔普森
				3546589083732470, // 刘哥gametime做游戏
				1969160969, // SR思锐Official
				1868794422, // 僵尸是萌新
				1500275808, // Minecraft729 WeChat:summoniron_golem QQ:3531622583 -来源:用户简介
				1591866703, // 人朝的小郭同学 QQ群:370019841 -来源:用户简介
				1179374590, // MRJX_QWQ
				82363089, // 小宇Boi
				529452185, // 酸乳甜梅 QQ:3202902554 -来源:用户简介
				3493146268797771, // 莪乃Vista叔
				3493114847168983, // 易溶于水的澳涐
				1733089232, // Windwos7
				3493104831171448, // 万恶之源669
				272743796, // 难忘的朱古力232
				89062643, // 泠楠梓萌
				1964181966, // Minedows
				1218496648, // 新年代老登暴扣黑曼巴
				1569663198, // B-windows10-user
				3537107693865449, // 我是小r解说
				1080519183,
				443988102, // 何人哉er
				3493111974071179, // 一只在tfs的野飞友
				3493133344049877, // mc泰菲6
				3493086852286877, // MC团长解说
				1812413197, // F_are_well
				514802302, // 不爱笑的黑客
				261401138, // S15万分小拿小刚
				1760573759, // 轻轻抚摸她的身体
				1053425351, // End_Infinity
				348877540, // FurryXH
				21946608, // 是土豆哒
				3493108075464919, // 组策略编辑器GPEDIT
				652665076, // 1204992
				1152576410, // 一个Minecraft用户
				7955948, // FTG_Win11
				1632975427, // KALI_MC
				1317996804, // 新版B界萌新
				272836680, // 13437855279
				502257570, // 智慧的蓝屏之神-doge
				1309042145, // pvpjjjj
				417138, // 你的两位朋友
				2005074146, // 小熊猫Firedoge
				15052067, // Gelan丶
				3299305, // qaqz111
				405545981, // 德比鹤-鸡你太美
				1487149980, // CHUANGWEI每日游戏推荐
				686217254, // has_7_h0l1day
				5337680, // 550W离线版
				1971481152, // windowstaskmgr
				673473165, // orangeATA
			]
		},
		{
			displayName: "穿越火线",
			displayIcon: "https://cf.qq.com/favicon.ico",
			keywords: ["穿越火线"],
			followings: [
				315554376, // 穿越火线官方号的 UID
				204120111, // CF农哥吊打小怪兽
				1083400219, // cf孙某
				398597510, // CF教父
				456180476, // CF猫七
				33281681, // CF威廉I黑化版
				440017413, // 穿越火线兴兴
				474595618, // 穿越火线赛事
			]
		},
		{
			displayName: "地下城与勇士",
			displayIcon: "https://dnf.qq.com/favicon.ico",
			keywords: ["地下城与勇士", "DNF"],
			followings: [
				102176172, // 地下城与勇士官方号的 UID
				90179837, // dnf老搬
				27253173, // DNF面码
				8233456, // DNF枪魂冰子
				332349, // DNF死兔子
				168090912, // 17173DNF官方
				353944511, // DNF手游假猪
			]
		},
		{
			displayName: "绝地求生",
			displayIcon: "https://pubg.qq.com/favicon.ico",
			keywords: ["绝地求生", "PUBG"],
			followings: [
				449704680, // 意识DT
				6528910, // 小贝的游戏食堂
				46708782, // 鲁大能
				50329485, // 吃鸡赛事
				552064023, // 吃鸡小表弟
			]
		},
		{
			displayName: "英雄联盟",
			displayIcon: "https://lol.qq.com/favicon.ico",
			keywords: ["英雄联盟", "LOL"],
			followings: [
				50329118, // 哔哩哔哩英雄联盟赛事官方号的 UID
				4895244, // LOL丶诺诺
				470840543, // LOL楠神李青
				178778949, // 英雄联盟
				50329220, // 哔哩哔哩LOL赛事直播
				302651406, // WBG英雄联盟分部
				652663378, // LOL小超梦
				23364027, // 英雄联盟-小白鸦
			]
		},
		{
			displayName: "第五人格",
			displayIcon: "https://i0.hdslb.com/bfs/face/c4cbdafecef76836b94f2ba8832d0a04d709a499.jpg@100w_100h.webp",
			keywords: ["第五人格", "#第五人格", "互动抽奖 #第五人格"],
			followings: [
				211005705, // 网易第五人格手游官方号的 UID
				105022844, // 第五人格赛事
				452627895, // 狼队电竞第五人格分部
				1385707562, // TE溯第五人格分部
			]
		},
		{
			displayName: "蛋仔派对",
			displayIcon: "https://i0.hdslb.com/bfs/face/6afedb4d85ea6c4115f5548146dc8d7127886ca0.jpg@100w_100h.webp",
			keywords: ["蛋仔派对", "#蛋仔派对", "互动抽奖 #蛋仔派对"],
			followings: [
				1306451842, // 网易蛋仔派对官方号的 UID
			]
		},
		{
			displayName: "GLITCH",
			displayIcon: "https://i0.hdslb.com/bfs/face/06ea197a6b245ff730c8d9abd684abdff3193ef3.jpg@100w_100h.webp",
			keywords: ["格历奇GLITCH", "YouTube GLITCH", "GLITCH入驻b站", "无机杀手", "Murder Drones", "神奇数字马戏团", "The Amazing Digital Circus"],
			followings: [
				49442838, // 格历奇GLITCH官方号的 UID
			]
		},
		{
			displayName: "彩虹六号：围攻",
			displayIcon: "https://i0.hdslb.com/bfs/game/0f80bc73fc12a30c7f9c42f4e304a125f9aa1f10.jpg@100w_100h.webp",
			keywords: ["彩虹6号：围攻", "彩虹六号", "彩六", "R6", "R6S", "Rainbow Six Siege"],
			followings: [
				1661612, // Hex今天切墙了吗
				1932102, // 溪木的龙裔
				3227461, // 乔伊奥斯托雷
				3933162, // 蚊子
				17098554, // 豆豆最棒
				98991109, // 角社区
				115545042, // 梅西杰的西餐厅
				140403337, // 塔塔kira
				415890389 // 高板大芥末
			]
		},
	]

	/*
	防止代码因其他原因被执行多次
	这段代码出自 Via轻插件，作者谷花泰
	*/
	let key = encodeURIComponent('（改）B站成分检测器:主代码');
	if (window[key]) return;
	window[key] = true;
	console.log("【（改）B站成分检测器】即时\n运行中...")

	// 创建样式
	addCheckerStyle();

	// 空间动态api
	const cardApiUrl = 'https://api.bilibili.com/x/web-interface/card?mid='
	const spaceApiUrl = 'https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space?host_mid='
	const followingApiUrl = 'https://api.bilibili.com/x/relation/followings?vmid='

	const searchIcon = `<svg width="12" height="12" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.3451 15.2003C16.6377 15.4915 16.4752 15.772 16.1934 16.0632C16.15 16.1279 16.0958 16.1818 16.0525 16.2249C15.7707 16.473 15.4456 16.624 15.1854 16.3652L11.6848 12.8815C10.4709 13.8198 8.97529 14.3267 7.44714 14.3267C3.62134 14.3267 0.5 11.2314 0.5 7.41337C0.5 3.60616 3.6105 0.5 7.44714 0.5C11.2729 0.5 14.3943 3.59538 14.3943 7.41337C14.3943 8.98802 13.8524 10.5087 12.8661 11.7383L16.3451 15.2003ZM2.13647 7.4026C2.13647 10.3146 4.52083 12.6766 7.43624 12.6766C10.3517 12.6766 12.736 10.3146 12.736 7.4026C12.736 4.49058 10.3517 2.1286 7.43624 2.1286C4.50999 2.1286 2.13647 4.50136 2.13647 7.4026Z" fill="currentColor"></path></svg>`
	const checkButton = `<div class="composition-checkable"><div class="composition-badge-control"><a class="composition-name-control" title="点击查询用户成分">${searchIcon}</a></div></div>`
	const checked = {}
	const checking = {}
	let dom = ''

	// 2024版评论
	waitForKeyElements("div#info div#user-name[data-user-profile-id]", (element) => {
		if (element && element.length > 0) {
			let style = document.createElement("style");
			style.rel = 'stylesheet';
			style.innerHTML = addCheckerStyle(true)
			element.before(style)

			let button = $(checkButton)
			element.after(button)
			button.on('click', function () {
				checkComposition(element.attr("data-user-profile-id"), element, button.find(".composition-name-control"), element, '')
			})
			if (GM_getValue('Auto') === 'true') button.click()
		}
	});

	// 2024版 回复、纯@评论
	waitForKeyElements("p#contents a[data-user-profile-id]", (element) => {
		if (element && element.length > 0) {
			let style = document.createElement("style");
			style.rel = 'stylesheet';
			style.innerHTML = addCheckerStyle(true)
			element.before(style)

			let button = $(checkButton)
			element.after(button)
			button.on('click', function () {
				checkComposition(element.attr("data-user-profile-id"), element, button.find(".composition-name-control"), element, '')
			})
			if (GM_getValue('Auto') === 'true') button.click()
		}
	});

	// 2024版用户卡片
	waitForKeyElements("div#wrap div#view div#body div#title a#name", (element) => {
		if (element && element.length > 0 && element.parent().parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1].length > 0) {
			let style = document.createElement("style");
			style.rel = 'stylesheet';
			style.innerHTML = addCheckerStyle(true)
			element.parent().parent().before(style)

			let button = $(checkButton)
			let initialText = element.text().trim();

			if (element.parent().parent().parent().find(".composition-checkable, .composition-checked"))
				element.parent().parent().parent().find(".composition-checkable, .composition-checked").remove()

			button.css({ "margin": "8px 5px" });
			button.on('click', function () {
				checkComposition(element.parent().parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1], element, button.find(".composition-name-control"), element.parent().parent(), { "margin": "0 0 10px" })
			})
			element.parent().parent().after(button);
			if (GM_getValue('Auto') === 'true') button.click()

			const observer = new MutationObserver(mutations => {
				mutations.forEach(mutation => {
					if (mutation.type === 'childList' || mutation.type === 'characterData') {
						let button = $(checkButton)
						let currentText = element.text().trim();
						if (currentText === initialText) return;

						initialText = currentText;
						if (element.parent().parent().parent().find(".composition-checkable, .composition-checked"))
							element.parent().parent().parent().find(".composition-checkable, .composition-checked").remove();

						button.css({ "margin": "8px 5px" });
						button.off('click').on('click', function () {
							checkComposition(element.parent().parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1], element, button.find(".composition-name-control"), element.parent().parent(), { "margin": "0 0 10px" });
						});

						element.parent().parent().after(button);
						if (GM_getValue('Auto') === 'true') button.click();
					}
				});
			});

			// 配置观察器
			observer.observe(element.get(0), {
				childList: true,
				subtree: true,
				characterData: true
			});

			// 清理观察器的函数
			element.data('observer', observer);
		}
	});

	// 2022版评论
	waitForKeyElements("div.content-warp div.user-info div.user-name[data-user-id]", (element) => {
		if (element && element.length > 0) {
			let button = $(checkButton)
			element.after(button)
			button.on('click', function () {
				checkComposition(element.attr("data-user-id"), element, button.find(".composition-name-control"), element, '')
			})
			if (GM_getValue('Auto') === 'true') button.click()
		}
	});

	// 2022版子评论
	waitForKeyElements("div > div.sub-user-info div.sub-user-name[data-user-id]", (element) => {
		if (element && element.length > 0) {
			let button = $(checkButton)
			element.after(button)
			button.on('click', function () {
				checkComposition(element.attr("data-user-id"), element, button.find(".composition-name-control"), element, '')
			})
			if (GM_getValue('Auto') === 'true') button.click()
		}
	});

	// 2022版含@的评论
	waitForKeyElements("span a.jump-link.user[data-user-id]", (element) => {
		if (element && element.length > 0) {
			let button = $(checkButton)
			element.after(button)
			button.on('click', function () {
				checkComposition(element.attr("data-user-id"), element, button.find(".composition-name-control"), element, '')
			})
			if (GM_getValue('Auto') === 'true') button.click()
		}
	});

	// 2022版用户卡片
	waitForKeyElements("div.user-card div.card-content div.card-user-info a.card-user-name", (element) => {
		if (element && element.length > 0 && element.parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1].length > 0) {
			let button = $(checkButton)
			element.parent().parent().after(button);
			button.css({ "margin": "8px 5px" });
			button.on('click', function () {
				checkComposition(element.parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1], element, button.find(".composition-name-control"), element.parent().parent(), { "margin": "0 0 10px" })
			})
			if (GM_getValue('Auto') === 'true') button.click()
		}
	});

	// 2022版动态用户卡片
	waitForKeyElements("div.bili-user-profile div.bili-user-profile-view div.bili-user-profile-view__info div.bili-user-profile-view__info__header a.bili-user-profile-view__info__uname", (element) => {
		if (element && element.length > 0 && element.parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1].length > 0) {
			let button = $(checkButton)
			let initialText = element.text().trim();

			if (element.parent().parent().parent().parent().find(".composition-checkable, .composition-checked"))
				element.parent().parent().parent().parent().find(".composition-checkable, .composition-checked").remove()

			element.parent().parent().parent().after(button);
			button.css({ "margin": "8px 5px" });
			button.on('click', function () {
				checkComposition(element.parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1], element, button.find(".composition-name-control"), element.parent().parent().parent(), { "margin": "0 0 10px" })
			})
			if (GM_getValue('Auto') === 'true') button.click()

			// 可能只会有一个元素，所以监听用户名刷新
			element.on('DOMSubtreeModified', function () {
				let button = $(checkButton)
				let currentText = $(this).text().trim();
				if (currentText === initialText) return;

				initialText = currentText;
				if (element.parent().parent().parent().parent().find(".composition-checkable, .composition-checked"))
					element.parent().parent().parent().parent().find(".composition-checkable, .composition-checked").remove()

				button.css({ "margin": "8px 5px" });
				button.off('click').on('click', function () {
					checkComposition(element.parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1], element, button.find(".composition-name-control"), element.parent().parent().parent(), { "margin": "0 0 10px" })
				})

				element.parent().parent().parent().after(button);
				if (GM_getValue('Auto') === 'true') button.click()
			})
		}
	});

	// 旧版评论
	waitForKeyElements("div.reply-wrap > div > div.user a.name[data-usercard-mid]", (element) => {
		if (element && element.length > 0) {
			let button = $(checkButton)
			element.after(button)
			button.on('click', function () {
				checkComposition(element.attr("data-usercard-mid"), element, button.find(".composition-name-control"), element, '')
			})
			if (GM_getValue('Auto') === 'true') button.click()
		}
	});

	// 旧版用户卡片
	waitForKeyElements("div.user-card div.info p.user a.name", (element) => {
		if (element && element.length > 0 && element.parent().parent().parent().find("a.like").attr("mid")) {
			let button = $(checkButton)
			element.parent().parent().parent().find("div.btn-box").after(button);
			button.css({ "margin": "8px 5px" });
			button.on('click', function () {
				checkComposition(element.parent().parent().parent().find("a.like").attr("mid"), element, button.find(".composition-name-control"), element.parent().parent().parent().find("div.btn-box"), { "margin": "0 0 10px" })
			})
			if (GM_getValue('Auto') === 'true') button.click()
		}
	});

	// 用户中心 关注列表、粉丝列表
	waitForKeyElements("div.content a.title span.fans-name", (element) => {
		if (element && element.length > 0) {
			if (element.parent().parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1].length > 0) {
				let button = $(checkButton)
				button.css({ "overflow": "hidden", "margin-bottom": "10px" });
				element.parent().after(button)
				button.on('click', function () {
					checkComposition(element.parent().parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1], element, button.find(".composition-name-control"), element.parent(), { "overflow": "hidden", "margin-bottom": "10px" })
				})
				if (GM_getValue('Auto') === 'true') button.click()
			}
		}
	});

	// 旧版包含@的评论
	waitForKeyElements("div.reply-wrap > div > p.text a[data-usercard-mid]", (element) => {
		if (element && element.length > 0) {
			let button = $(checkButton)
			element.after(button)
			button.on('click', function () {
				checkComposition(element.attr("data-usercard-mid"), element, button.find(".composition-name-control"), element, '')
			})
			if (GM_getValue('Auto') === 'true') button.click()
		}
	});

	// 旧版 回复、纯@评论
	waitForKeyElements("span.text-con a[data-usercard-mid]", (element) => {
		if (element && element.length > 0) {
			let button = $(checkButton)
			element.after(button)
			button.on('click', function () {
				checkComposition(element.attr("data-usercard-mid"), element, button.find(".composition-name-control"), element, '')
			})
			if (GM_getValue('Auto') === 'true') button.click()
		}
	});

	// 添加标签
	function installComposition(rule, elemload, eleminst, elemcss) {
		let badge = $(`<div class="composition-checked"><div class="composition-badge">
			<a class="composition-name" title="点击查看已识别用户">${rule.displayName}</a>
			${rule.displayIcon ? (
				rule.displayIcon.match("https:") ? `<img referrer="no-referrer" referrerPolicy="no-referrer" src="${rule.displayIcon}" class="composition-icon">` :
					rule.displayIcon.match("data:") ? `<img referrer="no-referrer" referrerPolicy="no-referrer" src="${rule.displayIcon}" class="composition-icon">` :
						`<span class="composition-icon">${rule.displayIcon}</span>`
			) : ''}
			</div></div>`)
		badge.on('click', function () {
			showAllUser()
		})
		if (elemcss) badge.css(elemcss);
		if (eleminst) eleminst.after(badge);
		elemload.parent().parent().remove();
	}

	// 检查标签
	function checkComposition(id, element, elemload, eleminst, elemcss) {
		// 用户名称获取
		let eltx = element.text().trim()
		let name = eltx.charAt(0) == "@" ? eltx.substring(1) : eltx

		elemload.text('等待...')
		elemload.attr('title', '正在查询中，等下吧...')

		if (checked[id] != undefined) {
			let found = checked[id]
			if (found.length > 0) {
				for (let rule of found) {
					installComposition(rule, elemload, eleminst, elemcss)
				}
				console.log(`【（改）B站成分检测器】缓存\n检测到 ${name} ${id} 的成分为\n`, JSON.parse(JSON.stringify(found.map(it => { return { name: it.displayName, reason: it.reason, item: it.item, keyword: it.keyword, uid: it.uid, full: it.full } }))))
			} else {
				console.log(`【（改）B站成分检测器】缓存\n检测到 ${name} ${id} 的成分为 无`)
				elemload.text('无')
				elemload.attr('title', '点击查看已查询过的用户')
				elemload.on('click', function () {
					showAllUser()
				})
			}
		} else if (checking[id] != undefined) {
			if (checking[id].indexOf(element) < 0)
				checking[id].push({
					element: element,
					elemload: elemload,
					eleminst: eleminst,
					elemcss: elemcss,
				});
		} else {
			checking[id] = [{
				element: element,
				elemload: elemload,
				eleminst: eleminst,
				elemcss: elemcss
			}];
			detectComposition(id, name, true)
				.then((found) => {
					if (found.length > 0) {
						value = found.map(it => ({
							name: it.displayName,
							img: it.displayIcon,
							reason: it.reason,
							item: it.item,
							keyword: it.keyword,
							uid: it.uid,
							full: it.full
						}))
						dom += `
						<div style="margin-top: 25px">
							<span style="margin:0">${name}</span>
							<div id="tips" style="color: #fb7299;"><a href="https://space.bilibili.com/${id}/" target="_blank" style="color: #fb7299;">UID ${id}</a></div>
							`;
						for (let i = 0; i < value.length; i++) {
							let reason = value[i].keyword || value[i].uid
							let icon = value[i].img ? (
								value[i].img.match("https:") ? `<img referrer="no-referrer" referrerPolicy="no-referrer" src="${value[i].img}" class="composition-icon">` :
									value[i].img.match("data:") ? `<img referrer="no-referrer" referrerPolicy="no-referrer" src="${value[i].img}" class="composition-icon">` :
										`<span class="composition-icon">${value[i].img}</span>`
							) : ''
							dom += `
							<div style="margin-top: 10px;">
								<div class="composition-badge">
									<a class="composition-name">${value[i].name}</a>
									${icon}
								</div>
								<div style="margin-top: 8px;">
									<div class="composition-name">原因：${value[i].reason}${typeof value[i].item === 'string' ? "（" + value[i].item + "）" : ""}</div>
									<div class="composition-name">匹配：${reason}</div>
								</div>
							</div>`;
						}
						dom += `</div>`

						let displayNameSet = new Set();
						found = found.filter(item => {
							if (displayNameSet.has(item.displayName)) {
								return false;
							} else {
								displayNameSet.add(item.displayName);
								return true;
							}
						});

						// 给所有用到的地方添加标签
						for (let elements of checking[id]) {
							if (found.length > 0) {
								for (let rule of found) {
									installComposition(rule, elements.elemload, elements.eleminst, elements.elemcss);
								}
							} else {
								elements.elemload.text('无');
								elements.elemload.attr('title', '点击查看已查询过的用户');
								elements.elemload.on('click', function () {
									showAllUser();
								});
							}
						}
					} else {
						for (let elements of checking[id]) {
							elements.elemload.text('无');
							elements.elemload.attr('title', '点击查看已查询过的用户');
							elements.elemload.on('click', function () {
								showAllUser();
							});
						}
					}
					delete checking[id];
					checked[id] = found
				})
				.catch((error) => {
					if (debug) console.error(`【（改）B站成分检测器】即时\n检测 ${name} ${id} 的成分失败`, error);
					for (let elements of checking[id]) {
						elements.elemload.text('重试')
						elements.elemload.attr('title', '点击重新查询此用户成分')
						elements.elemload.on('click', function () {
							checkComposition(id, elements.element, elements.elemload, elements.eleminst, elements.elemcss)
						})
					}
					delete checking[id];
				});
		}
	}
	dom = `<div id="Identified">
	<div id="tips">因判断关键词较为广泛，可能会出现误杀的现象</div>
	<div id="tips">脚本还在测试阶段，喜欢的话还请留下你的评论</div>
	<div id="tips">Ctrl+F 可以快速搜索</div>
	${dom}</div>`;
	function showAllUser() {
		Swal.fire({
			title: '已识别用户',
			html: dom,
			icon: 'info',
			heightAuto: false,
			scrollbarPadding: false,
			showCloseButton: true,
			confirmButtonText: '关闭'
		})
	}

	GM_registerMenuCommand("查看已检查的用户", () => {
		showAllUser();
	});
	GM_registerMenuCommand("手动输入 ID 检查", () => {
		uidChecker();
	});

	function request(option) {
		return new Promise((resolve, reject) => {
			let httpRequest = typeof GM_xmlhttpRequest !== "undefined" ? GM_xmlhttpRequest : GM.xmlHttpRequest;
			httpRequest({
				method: 'get',
				...option,
				onload: (response) => {
					let res = JSON.parse(response.responseText);
					resolve(res);
				},
				onerror: (error) => {
					reject(error);
				},
			});
		});
	}

	function setting(conf_name, tips) {
		if (GM_getValue(conf_name) === 'true') {
			GM_setValue(conf_name, 'false');
			message.info(`已禁用 ${tips}<br/>刷新后生效。`, true);
		} else {
			GM_setValue(conf_name, 'true');
			message.info(`已启用 ${tips}<br/>刷新后生效。`, true);
		}
	}

	function uidChecker() {
		Swal.fire({
			title: '成分检测',
			imageUrl: 'https://www.bilibili.com/favicon.ico',
			imageAlt: `哔哩哔哩 干杯~`,
			imageWidth: 40,
			imageHeight: 40,
			input: 'number',
			inputAttributes: {
				autocapitalize: 'off'
			},
			allowOutsideClick: false,
			showCloseButton: true,
			confirmButtonText: '确定并查询',
			showLoaderOnConfirm: true,
			heightAuto: false,
			scrollbarPadding: false,
			text: '请输入要查询的 UID 号码',
			preConfirm: (uid) => {
				return new Promise(async (resolve, reject) => {
					// 检查用户卡片
					try {
						if (!uid) throw new CodeError("请输入完整的用户 UID")
						let cardRequest = await request({
							url: cardApiUrl + uid,
							headers: {
								"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
								"referer": "https://www.bilibili.com",
								"cookies": {
									"buvid3": generateBuvid3(),
								},
							},
						});
						let cardContent = cardRequest;
						if (cardContent.code === 0) {
							let card = cardContent.data.card
							detectComposition(card.mid, card.name, true)
								.then((found) => {
									let result = {
										mid: card.mid,
										name: card.name,
										level: card.level_info.current_level,
										face: card.face,
										sign: card.sign ? card.sign : '',
										official_title: card.Official.title ? card.Official.title : '',
										official_desc: card.Official.desc ? card.Official.desc : '',
										official_role: card.Official.role !== 0 ? (
											card.Official.role === 1 ? '个人认证 - 知名UP主' : card.Official.role === 2 ? '个人认证 - 大V达人' : card.Official.role === 3 ? '机构认证 - 企业' : card.Official.role === 4 ? '机构认证 - 组织' : card.Official.role === 5 ? '机构认证 - 媒体' : card.Official.role === 6 ? '机构认证 - 政府' : card.Official.role === 7 ? '个人认证 - 高能主播' : card.Official.role === 9 ? '个人认证 - 社会知名人士' : '未知认证角色(' + card.Official.role + ')'
										) : '',
										official_type: card.Official.type !== -1 ? (
											card.Official.type === 0 ? 'UP主认证' : card.Official.type === 1 ? '机构认证' : '未知认证类型(' + card.Official.type + ')'
										) : '',
										vip: card.vip.vipType !== 0 ? (
											card.vip.vipType === 1 ? '月度大会员' : card.vip.vipType === 2 ? '年度大会员(或以上)' : '未知会员(' + card.vip.vipType + ')'
										) : '',
										found: found.map(it => ({
											name: it.displayName,
											img: it.displayIcon,
											reason: it.reason,
											item: it.item,
											keyword: it.keyword,
											uid: it.uid,
											full: it.full
										}))
									}
									resolve(result)
								})
								.catch(error => {
									throw error
								})
						} else {
							throw new CodeError(`获取用户信息失败，错误码：${cardContent.code}`)
						}
					} catch (error) {
						resolve(null);
						Swal.showValidationMessage(`失败: ${error}`)
					}
				})
			},
		}).then((result) => {
			if (result.value) {
				let info = result.value
				let value = result.value.found;
				let final = '';
				for (let i = 0; i < value.length; i++) {
					let reason = value[i].keyword || value[i].uid
					let icon = value[i].img ? (
						value[i].img.match("https:") ? `<img referrer="no-referrer" referrerPolicy="no-referrer" src="${value[i].img}" class="composition-icon">` :
							value[i].img.match("data:") ? `<img referrer="no-referrer" referrerPolicy="no-referrer" src="${value[i].img}" class="composition-icon">` :
								`<span class="composition-icon">${value[i].img}</span>`
					) : ''
					final += `
					<div style="margin-top: 25px;">
						<div class="composition-badge">
							<a class="composition-name">${value[i].name}</a>
							${icon}
						</div>
						<div style="margin-top: 12px;">
							<div class="composition-name">原因：${value[i].reason}${typeof value[i].item === 'string' ? "（" + value[i].item + "）" : ""}</div>
							<div class="composition-name">匹配：${reason}</div>
						</div>
					</div>`;
				}
				Swal.fire({
					title: info.name,
					imageUrl: info.face,
					imageAlt: `${info.name}的头像`,
					imageWidth: 200,
					imageHeight: 200,
					html: `<div id="Identified">
							<div id="tips">${info.sign}</div>
							<br/>
							<div id="tips" style="color: #fb7299;">LV${info.level}</div>
							<div id="tips" style="color: #fb7299;"><a href="https://space.bilibili.com/${info.mid}/" target="_blank" style="color: #fb7299;">UID ${info.mid}</a></div>
							<div id="tips" style="color: #fb7299;">${info.vip}</div>
							<br/>
							<div id="tips" style="color: #ffd700;">${info.official_type}</div>
							<div id="tips" style="color: #ffd700;">${info.official_role}</div>
							<div id="tips" style="color: #ffd700;">${info.official_title}</div>
							<div id="tips" style="color: #ffd700;">${info.official_desc}</div>
							<br/>
							<div id="tips">因判断关键词较为广泛，可能会出现识别错误的现象<br/>脚本还在测试阶段，喜欢的话还请留下你的评论</div>
							${final}
						</div>`,
					allowOutsideClick: false,
					showCloseButton: true,
					showConfirmButton: false,
					heightAuto: false,
					scrollbarPadding: false,
				})
			}
		})
	}

	if (GM_getValue('Auto') === 'true') {
		GM_registerMenuCommand('自动检测用户成分(易触发风控)：✅ 已启用', function () {
			setting('Auto', '自动检测用户成分')
		});
	} else {
		GM_registerMenuCommand('自动检测用户成分(易触发风控)：❌ 已禁用', function () {
			setting('Auto', '自动检测用户成分')
		});
	}

	function addStyle(id, tag, css) {
		tag = tag || 'style';
		let doc = document, styleDom = doc.getElementById(id);
		if (styleDom) styleDom.remove();
		let style = doc.createElement(tag);
		style.rel = 'stylesheet';
		style.id = id;
		tag === 'style' ? style.innerHTML = css : style.href = css;
		doc.getElementsByTagName('body')[0].appendChild(style);
	}

	function addCheckerStyle(text) {
		let color = "#574AB8";

		let swalcss = `
			.swal2-styled{transition: all 0.2s ease;}
			.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:${color} transparent }
			.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:${color};color:#fff;font-size:1em}
			.swal2-styled.swal2-confirm:hover,.swal2-styled.swal2-deny:hover{opacity:0.8;background-image:none!important}
			.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px ${color}80}
			.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px #dc374180}
			.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}
			.swal2-timer-progress-bar{width:100%;height:.25em;background:${color}33 }
			.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:${color};color:#fff;line-height:2em;text-align:center}
			.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:${color} }
			.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:${color}}
			.swal2-popup {padding:1.25em 0 1.25em;flex-direction:column}
			.swal2-close {position:absolute;top:1px;right:1px;transition: all 0.2s ease;}
			div:where(.swal2-container) .swal2-html-container{padding: 1.3em 1.3em 0.3em;}
			div:where(.swal2-container) button:where(.swal2-close):hover {color:${color}!important;font-size:60px!important}
			div:where(.swal2-icon) .swal2-icon-content {font-family: sans-serif;}
			`;
		let bilicss = `
			[class^="composition-check"] {
				display: inline-block !important;
				cursor: pointer !important;
			}

			.composition-badge {
				display: inline-flex !important;
 				justify-content: center !important;
 				align-items: center !important;
				width: fit-content !important;
 				background: ${color}25 !important;
 				border-radius: 10px !important;
 				margin: 0 6px 0 6px !important;
 				font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif !important;
				font-weight: normal !important;
				cursor: pointer !important;
			}

			.composition-name {
 				line-height: 13px !important;
 				font-size: 13px !important;
				color: ${color} !important;
				padding: 2px 8px !important;
			}

			.composition-icon {
				color: ${color} !important;
				background: transparent !important;
				border-radius: 50% !important;
				width: 25px !important;
				height: 25px !important;
				border: 2px solid ${color}80 !important;
				margin: -6px !important;
				margin-right: 6px !important;
				display: flex !important;
				justify-content: center !important;
				align-items: center !important;
				font-size: 20px !important;
			}

			.composition-badge-control {
				display: inline-flex !important;
				justify-content: center !important;
				align-items: center !important;
				width: fit-content !important;
				background: #00000008 !important;
				border-radius: 10px !important;
				margin: 0 5px !important;
				font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;
			}

			.composition-name-control {
				line-height: 13px !important;
				font-size: 12px !important;
				color: #00000050 !important;
				padding: 2px 8px !important;
			}
			`;
		if (text) return bilicss;

		// 先监听颜色方案变化 SweetAlert2-Default
		window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
			if (e.matches) {
				// 切换到暗色主题
				addStyle('swal-pub-style', 'style', GM_getResourceText('SwalDark'));
			} else {
				// 切换到浅色主题
				addStyle('swal-pub-style', 'style', GM_getResourceText('Swal'));
			}
		});

		// 再修改主题 SweetAlert2-Default
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			// 切换到暗色主题
			addStyle('swal-pub-style', 'style', GM_getResourceText('SwalDark'));
		} else {
			// 切换到浅色主题
			addStyle('swal-pub-style', 'style', GM_getResourceText('Swal'));
		}
		addStyle('SweetAlert2-User', 'style', swalcss);
		addStyle('BiliChecker-Style', 'style', bilicss);
	};

	// 准备好右上角的Toast提示
	async function toast(type = 'success', text, refreshOnClick = false) {
		let dialog = await Swal.mixin({
			toast: true,
			position: 'bottom-start',
			showConfirmButton: refreshOnClick,
			confirmButtonText: '刷新',
			showCloseButton: true,
			timer: 5000,
			scrollbarPadding: true,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.addEventListener('mouseenter', Swal.stopTimer);
				toast.addEventListener('mouseleave', Swal.resumeTimer);
				// 如果需要刷新页面的标志存在，则添加点击事件

			}
		}).fire({ html: `<span>${text}</span>`, icon: type })
		if (dialog.isConfirmed && refreshOnClick) {
			window.location.reload(); // 刷新
		}
	}

	// 提示信息
	const message = {
		success: (text, refresh = false) => {
			toast('success', text, refresh)
		},
		error: (text, refresh = false) => {
			toast('error', text, refresh)
		},
		warning: (text, refresh = false) => {
			toast('warning', text, refresh)
		},
		info: (text, refresh = false) => {
			toast('info', text, refresh)
		},
		question: (text, refresh = false) => {
			toast('question', text, refresh)
		}
	};


	class CodeError extends Error {
		constructor(message) {
			super(message);
			this.name = '';
		}
	}

	function generateBuvid3() {
		const uuid = () => {
			return 'xxxxxx'.replace(/[x]/g, function () {
				return Math.floor(Math.random() * 16).toString(16);
			});
		};
		const randomInt = Math.floor(Math.random() * 99999) + 1;
		const buvid3 = `${uuid()}${randomInt.toString().padStart(5, '0')}infoc`;
		return buvid3;
	}

	function detectComposition(id, name, single) {
		return new Promise(async (resolve, reject) => {
			try {
				// 存储检测结果的数组
				let found = [];

				// 设定请求
				let spaceRequest = request({
					url: spaceApiUrl + id,
					headers: {
						"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
						"referer": "https://www.bilibili.com"
					},
				});

				async function followingRequest() {
					let page = 1, totalFollowings, fetchedFollowings = [], maxPages = 5, pageSize, totalPages;
					while (true) {
						try {
							let followingContent = await request({
								url: `${followingApiUrl}${id}&pn=${page}`,
								headers: {
									'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
								},
							});
							if (followingContent.code === 0) {
								let following = followingContent.data.list.map(it => it.mid);
								fetchedFollowings = fetchedFollowings.concat(following);

								if (page === 1) {
									totalFollowings = followingContent.data.total; // 获取关注总数
									pageSize = followingContent.data.list.length; // 获取每页数量

									// 计算，先得到 大致页数 并与 最多可获取页数 对比然后取其中最小数
									totalPages = Math.min(Math.ceil(totalFollowings / pageSize), maxPages);
									if (totalPages === 1) break; // 只有一页时，直接结束
								}
								if (page >= totalPages) break; // 达到最大页数时结束
								page++; // 获取下一页
							} else if (followingContent.code === 22115) {
								console.warn(`【（改）B站成分检测器】即时\n获取 ${name} ${id} 的关注列表的第 ${page} 页失败，对方已关闭展示关注列表，错误码：${followingContent.code}`);
								break;
							} else if (followingContent.code === -352) {
								console.error(`【（改）B站成分检测器】即时\n获取 ${name} ${id} 的关注列表的第 ${page} 页失败，已触发哔哩哔哩风控，错误码：${followingContent.code}`);
								break;
							} else {
								if (fetchedFollowings.length > 0) {
									if (debug) console.error(`【（改）B站成分检测器】即时\n获取 ${name} ${id} 的关注列表的第 ${page} 页失败，错误码：${followingContent.code}`);
								} else {
									throw new CodeError(`获取关注列表失败，错误码：${followingContent.code}`);
								}
							}
						} catch (error) {
							throw new CodeError(error);
						}
					}
					return fetchedFollowings;
				}

				console.log(`【（改）B站成分检测器】即时\n正在检查用户 ${name} ${id} 的成分...`);

				// 检查用户是否在黑名单中
				try {
					for (let rule of checkers) {
						if (rule.blacklist) {
							for (let mid of rule.blacklist) {
								if (id.includes(mid) && !found.includes(rule)) {
									found.push({
										...rule,
										reason: `黑名单`,
										keyword: "uid" + mid
									});
									if (single) break;
								}
							}
						}
					}
				} catch (error) {
					if (debug) console.error(`【（改）B站成分检测器】即时\n获取 ${name} ${id} 是否在命中名单失败`, error);
				}

				// 检查动态内容
				try {
					let spaceContent = await spaceRequest;
					if (spaceContent.code === 0) {
						let items = spaceContent.data.items;
						for (let rule of checkers) {
							if (rule.keywords) {
								for (let i = 0; i < items.length; i++) {
									let itemContent = items[i]
									let spacefull = items;
									let content = itemContent.modules?.module_dynamic?.desc?.text
									if (
										spacefull && content &&
										rule.keywords.find(keyword => JSON.stringify(spacefull).includes(keyword)) &&
										rule.keywords.find(keyword => JSON.stringify(content).includes(keyword))
									) {
										found.push({
											...rule,
											full: items[i],
											reason: `空间动态正文`,
											item: content,
											keyword: rule.keywords.find(keyword => JSON.stringify(content).includes(keyword))
										});
										if (single) break;
									}
								}
							}
						}
					} else if (spaceContent.code === -352) {
						console.error(`【（改）B站成分检测器】即时\n获取 ${name} ${id} 的空间动态失败，已触发哔哩哔哩风控，错误码：${spaceContent.code}`);
					} else {
						if (found.length > 0) {
							if (debug) console.error(`【（改）B站成分检测器】即时\n获取 ${name} ${id} 的空间动态失败，错误码：${spaceContent.code}`);
						} else {
							reject(new CodeError(`获取空间动态失败，错误码：${spaceContent.code}`));
						}
					}
				} catch (error) {
					if (debug) console.error(`【（改）B站成分检测器】即时\n获取 ${name} ${id} 的空间动态失败`, error);
				}

				// 检查关注列表
				try {
					let following = await followingRequest()
					for (let rule of checkers) {
						if (rule.followings) {
							for (let mid of rule.followings) {
								if (following.includes(mid) && !found.includes(rule)) {
									found.push({
										...rule,
										uid: "uid" + mid,
										reason: `关注列表`
									});
									if (single) break;
								}
							}
						}
					}
				} catch (error) {
					if (debug) console.error(`【（改）B站成分检测器】即时\n获取 ${name} ${id} 的关注列表失败`, error);
				}

				// 返回检测结果
				if (found.length > 0) {
					console.log(`【（改）B站成分检测器】即时\n检测到 ${name} ${id} 的成分为\n`, JSON.parse(JSON.stringify(found.map(it => { return { name: it.displayName, reason: it.reason, item: it.item, keyword: it.keyword, uid: it.uid, full: it.full } }))))
				}
				resolve(found);
			} catch (error) {
				if (debug) console.error(`【（改）B站成分检测器】即时\n检测 ${name} ${id} 的成分失败`, error);
				reject(error)
			}
		})
	}

	function waitForKeyElements(selectorTxt, actionFunction, bWaitOnce, iframeSelector) {
		function findInShadowRoots(root, selector) {
			let elements = $(root).find(selector).toArray();
			$(root).find('*').each(function () {
				const shadowRoot = this.shadowRoot;
				if (shadowRoot) {
					elements = elements.concat(findInShadowRoots(shadowRoot, selector));
				}
			});
			return elements;
		}
		var targetElements;
		if (iframeSelector) {
			targetElements = $(iframeSelector).contents();
		} else {
			targetElements = $(document);
		}
		let allElements = findInShadowRoots(targetElements, selectorTxt);
		if (allElements.length > 0) {
			allElements.forEach(function (element) {
				var jThis = $(element);
				var alreadyFound = jThis.data('alreadyFound') || false;
				if (!alreadyFound) {
					var cancelFound = actionFunction(jThis);
					if (cancelFound) {
						return false;
					} else {
						jThis.data('alreadyFound', true);
					}
				}
			});
		}
		var controlObj = waitForKeyElements.controlObj || {};
		var controlKey = selectorTxt.replace(/[^\w]/g, "_");
		var timeControl = controlObj[controlKey];
		if (allElements.length > 0 && bWaitOnce && timeControl) {
			clearInterval(timeControl);
			delete controlObj[controlKey];
		} else {
			if (!timeControl) {
				timeControl = setInterval(function () {
					waitForKeyElements(selectorTxt, actionFunction, bWaitOnce, iframeSelector);
				}, 1000);
				controlObj[controlKey] = timeControl;
			}
		}
		waitForKeyElements.controlObj = controlObj;
	}
})
