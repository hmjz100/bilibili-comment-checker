// ==UserScript==
// @name              （改）B站成分检测器
// @version           2.0.8
// @author            hmjz100,xulaupuz,trychen
// @namespace         github.com/hmjz100
// @license           GPLv3
// @description       《也许同类型中最好用？》系列 - B站评论区自动标注成分，支持动态和关注识别以及手动输入 UID 识别，默认标注包括 抽奖、原神、崩坏3、崩坏星穹铁道、绝区零、明日方舟、碧蓝航线、蔚蓝档案、鸣潮、战双帕弥什、尘白禁区、少女前线、少女前线2、NIKKE胜利女神、VTuber、王者荣耀、和平精英、三国杀、Minecraft、迷你世界、初生科技、火柴人、Roblox、火影忍者、暗区突围、香肠派对、穿越火线、地下城与勇士、绝地求生、英雄联盟、魔兽世界、CSGO、第五人格、蛋仔派对、GLITCH、彩虹六号：围攻、无畏契约、战争雷霆、Fate/Grand Order、女神异闻录: 夜幕魅影、MyGO/AveMujica、GBC、孤独摇滚、黑神话: 悟空、小马宝莉、孙笑川、电棍otto、涩涩、这辈子有了、学生、互助、仙家军、伪成分。
// @homepage          https://github.com/hmjz100/bilibili-comment-checker/
// @supportURL        https://github.com/hmjz100/bilibili-comment-checker/issues
// @match             *://*.bilibili.com/*
// @icon              data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAABMLAAATCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A1qEAANahAADWoQAG1qEAb9ahAMvWoQD01qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD01qEAy9ahAG/WoQAG1qEAANahAADWoQAA1qEAG9ahAM/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahANDWoQAb1qEAANahAAfWoQDQ1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahANHWoQAH1qEAbtahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAG7WoQDH1qEA/9ahAP/WoQD/1qEAtdahABjWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahABvWoQC11qEA/9ahAP/WoQD/1qEAx9ahAPnWoQD/1qEA/9ahAP/WoQAZ1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahABjWoQD/1qEA/9ahAP/WoQDz1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAErWoQDn1qEA5NahAErWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAErWoQDn1qEA5NahAErWoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA59ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA59ahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA5tahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA5tahAP/WoQD/1qEA5tahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAADWoQAA1qEAANahAADWoQBJ1qEA5tahAObWoQBJ1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQBJ1qEA5tahAObWoQBJ1qEAANahAADWoQAA1qEAANahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQD/1qEA/9ahAP/WoQD/1qEA+dahAP/WoQD/1qEA/9ahABnWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAGdahAP/WoQD/1qEA/9ahAPjWoQDH1qEA/9ahAP/WoQD/1qEAttahABnWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahABnWoQC21qEA/9ahAP/WoQD/1qEAx9ahAG3WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQBt1qEABtahAM/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA0NahAAfWoQAA1qEAG9ahAM/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAM/WoQAb1qEAANahAADWoQAA1qEABtahAG7WoQDH1qEA89ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA/9ahAP/WoQD/1qEA89ahAMfWoQBu1qEABtahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAxdahAA/WoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAxdahAA/WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAAbWoQDF1qEA/9ahAP/WoQD/1qEA/9ahAMXWoQAP1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAxdahAAbWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAYtahAP/WoQD/1qEA/9ahAP/WoQDF1qEADtahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQD/1qEAY9ahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQBf1qEA/9ahAP/WoQD/1qEAxdahAA7WoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAMXWoQD/1qEA/9ahAP/WoQBf1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAATWoQCg1qEA6tahAKjWoQAO1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEAANahAADWoQAA1qEADtahAKjWoQDr1qEAoNahAATWoQAA1qEAANahAADWoQAA1qEAAP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A///////////AAAADgAAAAQAAAAAAAAAAA///wAf//+AP///wD///8A////AP///wDw/w8A8P8PAPD/DwDw/w8A8P8PAPD/DwD///8A////AH///gA///wAAAAAAAAAAAgAAAAcAAAAP8A8A/+AfgH/gP8B/4H/gf+D/8H/////8=
// @connect           bilibili.com
// @connect           gcore.jsdelivr.net
// @grant             GM_setValue
// @grant             GM_getValue
// @grant             GM_xmlhttpRequest
// @grant             GM.xmlHttpRequest
// @grant             GM_registerMenuCommand
// @grant             GM_getResourceText
// @grant             GM_setClipboard
// @grant             unsafeWindow
// @run-at            document-idle
// @require           https://unpkg.com/jquery@3.6.0/dist/jquery.min.js
// @require           https://unpkg.com/sweetalert2@11/dist/sweetalert2.min.js
// @resource Swal     https://unpkg.com/sweetalert2@11/dist/sweetalert2.min.css
// @resource SwalDark https://unpkg.com/@sweetalert2/theme-dark@5/dark.min.css
// ==/UserScript==

(function BiliChecker() {
	/**
	 * 是否在控制台显示大多数错误消息
	 */
	let debug = false;
	/**
	 * 是否在查询按钮旁显示复制按钮
	 * 开启后点击复制按钮可以复制该用户对应的成分规则
	 * 复制的信息大概就是这样：UID, // 用户名
	 */
	let copyName = false;
	/**
	 * 注释~
	 * 在这里配置要检查的成分，或者直接拉黑（使用指定UID评论的人会被直接添加标签）。
	 * 假设你要直接给指定UID添加一个标签的话，就这样写：blacklist: [1234567890,0987654321]
	 * 成分列表后有一个 支持含注释快速排序 UID 的函数，到了那里，您可以查看相关使用说明
	 * 借此脚本守护我们最好的噼里啪啦捏~
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
			keywords: ["互动抽奖 #原神", "#原神", "原神", "芙宁娜", "白术", "赛诺", "神里绫人", "神里绫华", "夏洛蒂", "珊瑚宫", "九条裟罗", "班尼特", "夜阑", "那维莱特", "枫原万叶", "万叶", "钟离", "纳西妲", "香菱", "八重神子", "久岐忍", "菲谢尔", "艾尔海森", "林尼", "达达利亚", "提纳里", "宵宫", "莫娜", "甘雨", "罗莎莉亚", "刻晴", "九条裟罗", "温迪", "阿贝多", "云堇", "芭芭拉", "迪卢克", "烟绯", "重云", "雷泽", "凝光", "坎蒂丝", "辛焱"],
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
			displayName: "蔚蓝档案",
			displayIcon: "https://i0.hdslb.com/bfs/face/f2635e09fe667d4ad29229c6ed0b5f4bdea09bd1.jpg@100w_100h.webp",
			keywords: ["蔚蓝档案", "#蔚蓝档案", "碧蓝档案", "#碧蓝档案"],
			followings: [
				3493265644980448, // 蔚蓝档案官方号的 UID
				37507923, // 碧蓝档案资讯站
				436037759, // 碧蓝档案情报站
				7045822, // 威威字幕君
				425535005, // 夜猫咪喵喵猫
			]
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
			displayName: "尘白禁区",
			displayIcon: "https://i0.hdslb.com/bfs/face/e2a7e30399860cfa7c1ec5c958ab9e519290e181.jpg@100w_100h.webp",
			keywords: ["尘白禁区", "#尘白禁区"],
			followings: [1409863611] // 尘白禁区官方号的 UID
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
			displayName: "NIKKE胜利女神",
			displayIcon: "https://i0.hdslb.com/bfs/face/cc690158528967d1c57586290e3be57edd4e6e47.jpg@100w_100h.webp",
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
				1210816252, // 草莓猫Taffy
				703007996, // Asoul
				547510303, // Asoul二创计画
				672328094, // 嘉然今天吃什么
				672342685, // 乃琳Queen
				351609538, // 珈乐Carol
				672346917, // 向晚大魔王
				672353429, // 贝拉kira
				434334701, // 七海Nana7mi
			]
		},
		{
			displayName: "王者荣耀",
			displayIcon: "https://i0.hdslb.com/bfs/face/effbafff589a27f02148d15bca7e97031a31d772.jpg@100w_100h.webp",
			keywords: ["互动抽奖 #王者荣耀", "#王者荣耀", "王者荣耀"],
			followings: [
				57863910, // 王者荣耀官方号的 UID
				392836434, // 哔哩哔哩王者荣耀赛事
			]
		},
		{
			displayName: "和平精英",
			displayIcon: "https://i0.hdslb.com/bfs/face/d0673abc9b9e0df3518c3073299ccf94b8cb327d.jpg@100w_100h.webp",
			keywords: ["互动抽奖 #和平精英", "#和平精英", "和平精英"],
			followings: [
				434786180, // 和平精英官方号的 UID
				50329337, // PEL和平精英职业联赛
				522214928, // 江苏KONE和平精英分部
				387752366, // AG-和平精英
				638285563, // WBG和平精英战队
				481783021, // LGD_和平精英
			]
		},
		{
			displayName: "三国杀",
			displayIcon: "https://i0.hdslb.com/bfs/face/53f3ea77172036fba4d70fb0945abe6738349779.jpg@100w_100h.webp",
			keywords: ["互动抽奖 #三国杀", "#三国杀", "三国杀", "#2023三国杀"],
			followings: [
				1254932367, // 三国杀十周年官方号的 UID
				1672821212, // 三国杀OL互通版手游官方号的 UID
				1738180662, // 欢乐三国杀官方号的 UID
				587050283, // 三国杀移动版官方号的 UID
				43292408, // 三国杀官方赛事
			]
		},
		{
			displayName: "Minecraft",
			displayIcon: "https://i0.hdslb.com/bfs/face/c5578966c447a70edf831bbf7e522b7be6090fea.jpg@100w_100h.webp",
			keywords: ["我的世界", "minecraft", "#我的世界", "我的世界拜年祭", "MCBBS", "我的世界中文论坛", "MC玩家", "MC服务器"],
			followings: [
				43310262, // 我的世界官方号的 UID
				39914211, // 我的世界中文论坛(MCBBS)官方号的 UID
				591074, // 毫无人性的大麦纸
				686127, // 籽岷
				1503187, // 和谐号舰长
				2170934, // 明月庄主
				5836069, // 脏小豆
				9037593, // 灰机咕咕
				13337125, // GoldenEggs
				19525533, // KL_qiqi
				22083989, // 节操Pro
				22890621, // 宏二NordWes
				34456580, // 药儿哟
				35734399, // 小橙子姐姐解说
				35925939, // 两幺六
				44222886, // 喜欢旅拍的阿玮
				53055540, // GW漫游大作战
				96498913, // PoetJamil
				165025941, // 大马哈鱼47
				170651403, // 邹陈云飞
				236574844, // Minecraft小救星
				243681035, // wuli小周
				288309681, // TianKong_y
				362024317, // 哦还活着
				390527713, // 史蒂猪StevenPig
				393112610, // 上海交通大学Minecraft社
				434736287, // Minecraft_传送门
				470839152, // 图图图酱吖
				486511101, // Minecraft-RIC
				490670548, // Minecraft-ICE
				614678902, // Crawler工作室
				631881755, // 豆哥啦
				661547786, // 绯色批i
				1183597757, // 米可-Micro
				1377901474, // 东南大学Minecraft社
				1670040346, // Minecraft-Curios
				3546631009995059, // SquaredMedia官方频道
			]
		},
		{
			displayName: "迷你世界",
			displayIcon: "https://i0.hdslb.com/bfs/face/a7591e5e0278aafb76cc083b11ca5dd46f049420.jpg@100w_100h.webp",
			keywords: ["mnsj", "迷你世界", "miniworld", "#迷你世界", "迷你世界拜年祭"],
			followings: [
				470935187, // 迷你世界官方号的 UID
				51494691, // 迷你世界果冻呀
				328368589, // 迷你世界王不畏解说
				606753153, // 迷你世界狗蛋
				1001979471, // 迷你世界果冻丫
				1110563414, // 紫枫一迷你世界
				1272155030, // 迷你世界半拉
				1541734600, // 迷你世界二驴
				1546135282, // 迷你世界汉堡吖mini
				1578117313, // 迷你世界辣条吖
				1586479234, // 迷你世界小白吖
				1659178469, // 迷你世界柒柒姐
				1823344826, // 汉堡迷你世界v
				1862951948, // 迷你世界白熊
				3493074967726714, // 迷你世界奶糖v
				3493075015960752, // 迷你世界奶茶v
				3493113479825578, // 迷你世界-拆
				3493257967307320, // 迷你世界小哆啦吖
			]
		},
		{
			displayName: "初生科技",
			displayIcon: "https://i0.hdslb.com/bfs/face/eb4c7bbea813eed3a92ee194809d85715e6a7659.jpg@100w_100h.webp",
			// 正所谓：物以类聚，人以群分
			keywords: ["作死拿班", "整蛊老师", "易语言", "编程猫", "scratch", "ramos", "winpe", "bsod", "memz", "MEMZ", "XP Horror", "XPHorror", "xp horror", "xphorror", "WindowsCE", "下崽器", "aero", "setup", "DWM", "CmzPrep", "VMWare", "希沃白板", "Ubuntu PE", "PowerShell", "gnu/linux", "SYSTEM", "vista", "VISTA", "电脑病毒", "Windows卸载", "Trustedlnstaller", "反微软"],
			followings: [
				417138, // 你的两位朋友
				1585476, // 23胡彬MEMZ
				3299305, // qaqz111
				5337680, // 550W离线版
				7955948, // FTG_Win11
				8053098, // 十炮君
				10828819, // BSoD正在玩
				11451610, // 白小是就我
				15052067, // Gelan丶
				17762573, // 退休就养狗
				20567718, // So_Y0ung
				21927744, // 360MEMZ
				21946608, // 是土豆哒
				24821321, // Windows系统追更狂魔
				26284934, // win_小火龙
				30760525, // EIANTRA
				35833798, // Windows710
				37064895, // 小锋学长生活大爆炸
				37557747, // hifysh
				40039625, // 踹我一脚
				42494833, // Happymax1212
				52070231, // Paimeng-HoYo
				52192256, // 歐洲皇室熊少
				56875382, // 闰月优葡
				62677028, // LoadingPoint
				67168389, // Intel_0000
				67247219, // Linux_Newbie
				76868264, // 吃不到筷子的鼠
				82363089, // 小宇Boi
				88665483, // 和平精英扣肉
				89062643, // 泠楠梓萌
				104657830, // 尚宜鼎MEMZ
				107238284, // 奇怪的小羊减少了
				108721070, // 玛菲特
				168830095, // 胖小次samaaaaa
				169290582, // VMware的win7
				198316802, // 传说当中的帅锅
				204809809,
				213847634, // We_R_All_Insane
				248556377, // Win_Update
				261016792, // Win10HOME
				261401138, // S15万分小拿小刚
				272743796, // 难忘的朱古力232
				272836680, // 13437855279
				273727645, // Bili-Tube
				276817988, // 无人所知的windows12
				277995137, // EnderCraft
				283733002, // Aristore
				285435837, // 四月樱花-洇染成殇
				292912975,
				298993710, // 注册表编辑器MEMZ
				306193653, // BV1si4y1x7rG
				307432672, // 花l火
				310265955, // Ticki-Pigeon
				313342814, // SYSTEM-GREE-GZN
				316481254, // 旗界汽车
				322227973, // 布雷德yyds
				341884500, // Stevesuk
				348877540, // FurryXH
				351258144, // 豆沙包MEMZ
				353290736, // Win11的粉丝_offical
				356616083, // 第一位p站用户
				356882513, // 被重组吃掉的虚拟桌面
				357779530, // 空巢老KriaStans
				359937651, // MicrosoftRTX2080 QQ群:550196805/699949890 -来源：用户简介
				360590692, // 鸭子_aayz
				361858612, // 于小丘
				362451533, // NC_Memz -> Aero123321
				365129777, // DrAMA-MEMZ
				365166874, // RZ-world
				367151287, // A奶味伏特加
				375791016, // AegetOS
				378430387, // 小李MEMZ
				383322806, // Win10Pro
				383897380, // ThisPC的Bili官方頻道 网站:senpai.114514.cloudns.be 邮箱:ruich97@icloud.com -来源:用户简介
				384650704, // 91047971901_bili
				384896681, // 66321649060_bili
				386401641, // 李欢欢白白bili
				388160119, // 用户-265
				389114607, // 快乐MEMZ
				390148573, // 西瓜xg_
				390483853, // 炒鸡360MEMZ
				392012144, // 一只win8球
				392472741, // 苏莹3
				392672572, // 123MEMZ
				392697653, // System-i386
				393597677, // 西赫xihe
				395177787, // Android-TSK
				397847418, // 蓝屏钙BSOD
				398662881, // Frogcell
				398861490, // 啊啊啊啊是miku
				399597303, // 没有光明神の世界
				401094700, // 旮沓曼_gt428
				401386572, // Hooops
				402422350, // 白桑Brighsun
				403527839, // windows核心编程
				403584656, // 竹取雾雨_
				405543129, // Franklin-浩辰
				405545981, // 德比鹤-鸡你太美
				406081076, // emmmm么么么mm
				407053282, // 浅笑盈盈a_a
				412777837, // 注册表MEMZ
				413043448, // 小杨聊科技
				413269076, // Cmd_MEMZ
				414666753, // 桌面窗口管理器_DWM
				424394723, // _NAMER_
				431414767, // 星间晞
				431507192, // 打歌者
				431822440, // ゙COJO
				433554137, // 查拉娘_Zara-Line
				435227174, // Win10Win10是个屑
				435407713, // 砍死秋濑的天野
				435462593, // 唐狐WIN
				435972058, // WindowsAero毛玻璃
				436415283, // 无惧死机
				436837378, // 星雨在b站
				440662801, // 爱玩电脑的特兰克斯
				443988102, // 何人哉er
				448815938, // MisakaPothole
				451475014, // STR-BSOD
				456061336, // He1lo_Wor1d
				456512961, // _天晴了雨停了_
				457692234, // 奇怪的MEMZ
				470983675, // 刀影光剑
				471635164, // csgoGYROROLL
				476248972, // 政雾
				477686238, // k-ns
				479401385, // 风梓_wwt
				480498743, // 山猹qwq
				483345456, // Win10家庭版
				483574120, // setup安装程序
				483675256, // Windows功能
				483680764, // Kuewwc QQ群:566766266 验证:9D5A -来源:用户简介
				484165196, // 351Workshop
				487291887, // Saber_White
				493936144, // 御坂妹10010号
				493998035, // SYSTEM-RAMOS-ZDY
				494899652, // 第聂伯河银燕
				496728862, // YUDS_清风
				498370133, // Huan_XLZ558
				498912953, // AMD_MEMZ
				499969876, // 英雄的世界我不懂
				501193600, // bili_78951786765
				501319924, // Code_Box
				501355555, // MS-SYSTEM
				502257570, // 智慧的蓝屏之神-doge
				503289010, // Windows7の理系を行う
				503329203, // ゚゙゚゙゚薛禅汗
				503884937, // KD_wen
				504179884, // MYB_CKLS
				505199229, // SYSTEM_PHILI
				506031381, // 1665075
				507578721, // 激鱼134_C4 网站:jiyu134.top QQ群:141198268 -来源:用户简介、动态
				507581495, // 迷你世界哈毕夏公主
				507603924, // CY945
				507658814, // 镜靛openforge
				509902447, // 爱折腾的Windows
				511131590, // TTHorror红熔
				512901548, // eggy灵鱼小晶
				513312081, // Opteron64
				513458998, // Bf109G-10
				513898841, // 无聊的路人家
				514205283, // -长音-
				514557913, // 金忆往昔
				514802302, // 不爱笑的黑客
				516197605, // 灬川氵
				516443571, // 46102837537
				518020596, // 360小精灵qwq
				520758232, // NiHa0531
				522317369, // Korzy
				522669301, // xmwpumpkin528
				524501321, // Start-hs888
				524972094, // 毫无价值的人
				525078314, // msstart
				525654062, // 我永远爱周防有希
				526271721, // Pursn_延千
				526816891, // OWOPROMAXPLUS
				527001741, // 南宫邵伊
				529094334, // 牢达硬金
				529452185, // 酸乳甜梅 QQ:3202902554 -来源:用户简介
				535112369, // swryzxc34567
				546142687, // SYSTEM-ELEN-IDM
				546653386, // 鞍山的观众
				547326701, // 游戏攻资君
				549337765, // 比尔星驰
				551120966, // JustJaye233
				552851004, // fsl3118
				564642460, // GM焊化组
				578278851, // 星晨天际win
				582129140, // Windows11-PPT
				586347926, // memz-ubuntu
				589370259, // setup-windows安装
				590428323, // gbxrr
				590491558, // Technology_him
				590569754, // 和你heni
				592551597, // 东风Cherrier账号 邮箱:chengowen6@outlook.com -来源:用户简介
				594779227, // 星弈社-暖言鸢猫猫SE
				599959906, // Sun邦焱
				600328664, // 王宾汉
				601259909, // 星晨大海win_Acpn
				601270898, // 601270898
				603268734, // 截拍器
				603375808, // linux265
				604076432, // SYSTEM-WIN32-PE => Hacker_NanGua QQ:940123839 -来源:用户简介
				604251988, // 我可真是个添柴
				605857877, // 卖蓝屏钙的Win11
				612743845, // 浩瀚星晨win
				619829471, // 小宇_ERain
				621857141, // Windows哥
				626275698, // 星辰大海ZSF
				626287157, // Aero董事长
				626846441, // Tu_villagehead
				626857039, // 喜欢我民粹主义吗
				627007091, // 你永远的二爷
				627081577, // 晨夕星海
				627742070, // yz23333
				629096557, // 阿柒漫
				630547936, // 你的茶色
				631731585, // system-bootmgr-L
				631746555, // 卢本布奇诺
				649846967, // Win7MEMZ-BX
				651648884, // 羽殿啊
				652188355, // 一个windows爱好者
				652665076, // 1204992
				665360141, // 微飞的BSOD
				668421393, // Ubuntu-PE
				669094468, // SYSTEM-TANGYUAN
				671918906, // win95setup
				672508011, // -雨木森林-
				673473165, // orangeATA
				678414222, // Windows-regedit
				686217254, // has_7_h0l1day
				686533556, // w泊九溟w
				678665731, // 南山少帅Felix---反微软
				687561772, // 哎嘿哟_芙宁娜酱
				687996269, // 喜欢Windows8的架空放送
				689299632, // 桦树GAME
				691089382, // k博士QAQ
				692755897, // Setup-Official
				694139497, // Windows_Tester_2
				696040999, // Lemon_x64_Win11
				696897486, // Mono也是墨诺喵
				698760287, // 出星海wrcjs_sp4
				699368142, // 胶兽兽化
				699804375, // SYSTEM-MSDOS-ZDY
				700419968, // bili_36752566369
				702028797, // JERRY-SYSTEM
				702568841, // mini2的机主
				703051574, // SYSTEM-OOBE
				703074370, // 江江daisuki
				727892489, // Windows2003R2
				1006043618, // 咕咕石头人
				1007224506, // EXPLORER-BSOD
				1008072191, // 神金且抽象的鼓手
				1009063496, // Windows的Windows
				1015730693, // 玩了114514分钟mc
				1029196202, // 杀猴专业户
				1031408618, // Deewin-Setup
				1038146876, // Coping官方
				1040308682, // 战王爱分享
				1041748680, // 珂尼美容
				1050145612, // windows11不会出
				1053425351, // End_Infinity
				1058630574, // 悠然1206006
				1061621085, // Vista-BSOD
				1065194305, // 彩虹猫-win11
				1066128216, // SYSTEM-NTDEV-PRO
				1071251434, // 激昂的小羊
				1077831924, // 再笑半夜把你吃了
				1080519183,
				1089892994, // MEMZ-Windows11
				1090909606, // 失落的怪兽8号
				1093084152, // BSD-Linux
				1093536899, // 软萌可爱的洛神
				1098548751, // 小苏阳cute
				1102137180, // 也数据发
				1109921625, // 川冶YRin_
				1112058008, // OxyStudio QQ群:742263029 -来源:用户简介
				1119522579, // 爱蓝屏的win10
				1124857662, // Wininit_BSOD
				1131093653, // 冰峰RTS
				1136956066, // 艾佧耒柒
				1150089109, // 小睿的奇妙冒险
				1151195812, // 开朗的冰人MEMZ
				1151325757, // SYSTEM-OPS-LJY
				1152576410, // 一个Minecraft用户
				1157923020, // 仗义的老班长
				1158046953, // VistaChrome108
				1158758149, // 卅卅卌鸖
				1162296488, // System3206
				1164102027, // 末影箱都没你能装
				1165628529, // 114514abC3
				1175873768, // BSOD-Winme
				1179374590, // MRJX_QWQ
				1187162171, // Setup-Win11
				1187167397, // 药水1304
				1190936866, // Qt小徐
				1194342823, // 科比牢大-找史王
				1204666655, // 草方块BSOD
				1211977366, // 樊烨炘
				1218496648, // 新年代老登暴扣黑曼巴
				1222118214, // windows11电脑的cmd
				1223133127, // Edit_Win8
				1225952698, // 叶一程哥哥win10
				1235828103, // 无言_WYAN
				1243577821, // hyq061221
				1244352340, // 爱玩Windows搜索麦块
				1251211739, // 云上倾风
				1254215732, // 汪庭纬
				1261767230, // 一只屑win10
				1266839139, // JHR_BSOD_MIMZ
				1268760897, // 屑の早茶光
				1273052206, // 永远爱流萤小姐_
				1277034331, // 郝茬哥哥 QQ群:284872979 -来源:用户简介
				1283206843, // Windows被砍掉的Aero
				1283468503, // WinToGo-LZP
				1304244190, // System-NBNB
				1306710323, // SHITOU_BSOD
				1308669589, // 殇げNyrMu
				1309042145, // pvpjjjj
				1315846577, // sakura-山樱
				1317996804, // 新版B界萌新
				1321946754, // 没有Aero的Windows7
				1322183332, // WindowsCEMEMZ新账号
				1326423111, // Win-Flash-Pro
				1330313497, // alan-CRL
				1338015717, // windows_system
				1340261135, // windows1球_启动中
				1343385133, // 山月云星
				1347936870, // 托尔普森
				1353783215, // MEMZ-Chrome
				1366576220, // 絕區零
				1372632926, // Potassiumhemp
				1375459514, // 开心的Windows
				1378946985, // KunDeveloper
				1379761884, // 八万很困
				1380415597, // 雨林木风YLMF
				1385242199, // MS-SYSTEM-WIN
				1385474716, // G丶乱码
				1389264027, // 灰兔吖
				1394588870, // LoveSwissroll
				1399361729, // 想peach的夏美子
				1428008184, // 冈易又闪退了
				1431997122, // SYSTEM-Start
				1439352366, // SYSTEM-WINPE-EXE
				1452376557, // 没有Aero就没有灵魂
				1462538741, // 很屑的windows114514
				1463163459, // Windows81Metro
				1465447323, // 爱搞机的MEMZ
				1470765817, // 茨埃_须库恩
				1487149980, // CHUANGWEI每日游戏推荐
				1487688405, // 孤独up摇滚mmz
				1497262975, // 不解风情のWin11
				1499173387, // 下一终端
				1500275808, // Minecraft729 WeChat:summoniron_golem QQ:3531622583 -来源:用户简介
				1509347075, // Windows12MC
				1511907771, // MEMZ-BSOD
				1512804294, // Win_Minecraft
				1516914162, // 天_炫武神赵子龙
				1526589324, // 温笛WPTSX QQ群:609082529 -来源:用户简介
				1527055836, // 小墩搞机
				1530814757, // 取个名字好曲折
				1530862681, // 风云百得
				1531948091, // SYSTEM_Win11_RE
				1534842751, // 爱WinPE的MEMZ
				1536447241, // 小左1120 
				1543261354, // 查子CHAKER
				1546428456, // SYSTEM-WIN-EDGE
				1547075814, // 平凉小羊
				1549141274, // system-setup
				1560833788, // SYSTEM-EDGE
				1569663198, // B-windows10-user
				1569839185, // MEMZ-Scratch
				1572064888, // 波波yr
				1586085996, // SilesiaLandwehr
				1591866703, // 人朝的小郭同学 QQ群:370019841 -来源:用户简介
				1601172780, // Windows毛玻璃解说233
				1604146839, // windows田字牌电脑
				1605910926, // -Windows-11-
				1613384176, // Aero-Windows311
				1613998133, // 死神魔影兽
				1620728316, // 余谁333
				1624520869, // Lime青柠_QingNing
				1628906682, // 被win11吃掉的磁贴
				1632975427, // KALI_MC
				1639826047, // 一个账号一部手机
				1641461034, // DEEPIN_BSOD2_CMD
				1648756265, // ydjysngs
				1657379991, // 龙哥之哥
				1666981688, // System-Installer
				1681993937, // 平平淡淡才是爱情
				1687676724, // 灵眸闪熠
				1689805888, // 青蛙小汤圆
				1700935144, // hamicat哈米
				1704629193, // 冰绒の某猫
				1719525270, // ゚゙゚゙゚慎独
				1724541085, // SYSTEM--win7
				1726945129, // 热爱电脑方面的人
				1729734602, // bug32_Windows
				1733089232, // Windwos7
				1736202379, // 胡桃玩VM
				1736254071, // SteveMC牢玩家
				1736839855, // SYSTEM-D-WIN
				1741780603, // SYSTEM-XUGE-AND
				1744631001, // SYSTEM-SUYI-WIN
				1751934902, // Win-PowerShell
				1756883351, // 亓宫Cka
				1760573759, // 轻轻抚摸她的身体
				1765439198, // 小美女生日快乐么么哒
				1768531816, // 时光-别跑
				1772112592, // XEnder2000
				1776025003, // 蓝瓶钙BSoD
				1776456802, // 奇怪的MEMZ的小号
				1784552473, // AT-ALMS
				1789764060, // 55尽快回的莲花与多吉 QQ群:241660013 -来源:用户简介
				1800010051, // lin00544
				1801064268, // 张星华-official
				1812413197, // F_are_well
				1822128404, // 星海陨落の鲸
				1825543241, // 灰执事黄桃
				1827307028, // SYSTEM_小影 => SYSTEM-BIOS-XY
				1832217331, // 하늘이아름답다
				1833642992, // Win32_WinSxS_sys
				1834260927, // Mo_Network
				1834519604, // 爱吃肠粉拌辣椒
				1838075061, // 爱玩机的空晨
				1853394432, // 博博102929
				1863175083, // 半不了世的空城
				1865727084, // SYSTEM-WinPE-CHD
				1868794422, // 僵尸是萌新
				1877771759, // 一台iPhoneX
				1885710485, // 爱编程的小陈同学
				1886311488, // 凌玻Minecraft
				1886348413, // SYSTEM-MEMZ-CAO
				1901053083, // 一个大俄球
				1907727665, // 好小的云烟
				1911529131, // Aero8m
				1921195852, // Windows之家
				1923455866, // 想上凤凰蛋的蛋仔
				1930623048,
				1933399514, // win11_BSOD
				1933598970, // 白羊Linux
				1935801783, // Windows软件倒腾师
				1937436816, // 大好通
				1947070041, // 80691808980
				1948479703, // SYSTEM-Image-WIM
				1957089739, // 柴佳妮
				1964181966, // Minedows
				1965090607, // 可乐Windows
				1965857981, // muci_nn
				1969160969, // SR思锐Official
				1971481152, // windowstaskmgr
				1975308950, // BSOD-MEMZ
				1975752801, // 无助的金apple
				1975794422, // WindowsLH
				1984449284, // Linux粉
				1989712487, // SYSTEM-WIN11-KDE
				1991535809, // TongTong1071
				2004315025, // MrWEI95
				2005074146, // 小熊猫Firedoge
				2006378269, // 不__________
				2008619333, // 哈利波特0909
				2008726064, // kde-yyds
				2009792251, // Windows-Lover
				2012973284, // gm骆大乐经纪人版
				2017167096, // 喜欢Win8的MacPro
				2030178992, // Start-BME
				2032637936, // BSOD-SYSTEM
				2043088162, // SYSTEM-WINNT-ZDY
				2043170695, // SYSTEM-BSOD-MEMZ
				2047811419, // bili_17236773346
				2050076822, // Windows-Setup
				2052314422, // Kimmy_Yan_Nian
				2064265859, // 126com2012949294
				2065466782, // Error0x00001
				2101678528, // OS_Windows11_lzn
				2108200476, // Win_Threshold-10
				2108935908, // bili_37409270614
				2111756244, // 火车吃药玩CO
				2112060594, // WINPE-SYSTEM
				2121097172, // 篮球只因桀桀桀
				2124855476, // Y-doudou
				2147171943, // Luminous374
				3461562834618602, // 辰东帅逼版
				3461563419724110, // TD的冒险日记
				3461564680112507, // 火鸡味锅巴11644
				3461566250879953, // 煤脑子的鸭鸭
				3461566410262700, // Windows_BSOD
				3461567312038162, // Aqr陈
				3461571237907087, // 自己想柠檬
				3461573066623225, // ahuaibi
				3461573093886296, // 牢蝶刹那冷门接板玩家
				3461576820525957, // 金身一地头孢
				3461577011366120, // RoyFreetz
				3461578091399948, // Silversoft_BSOD
				3461582916946644, // 王德馨呀
				3492972888853021, // kE3Mn_1714
				3493078583216766, // 小昂仔s
				3493081181588076, // 山中繁星
				3493082699926050, // 陈沉尘CSY2022
				3493083238894137, // 井_SYSTEM_火车迷
				3493083964508258, // 龖龖潔
				3493086852286877, // MC团长解说
				3493088339167261, // 工会大吉大利
				3493092688661431, // 炸了的win10
				3493093087119686, // SYSTEM-VISTA-FDK
				3493094217485200, // 风风在努力学习
				3493094980847954, // 牢一百七十七
				3493104831171448, // 万恶之源669
				3493105315613465, // van-豆射手
				3493105831512662, // T82坦克
				3493107444222139, // CR7_NB
				3493108075464919, // 组策略编辑器GPEDIT
				3493108578782082, // 点穴勾冷门信仰玩家
				3493108908034540, // S-1-5-21-1726115
				3493109132430078, // 袁天川
				3493110904523297, // oranges夏侯
				3493111974071179, // 一只在tfs的野飞友
				3493114683590808, // 电脑病毒爱好者
				3493114847168983, // 易溶于水的澳涐
				3493115270793340, // 一只minipig
				3493115440662822, // 一只爱玩roblox的noob
				3493116157888945, // aill_Office
				3493118152280841, // mcdos-windows
				3493118435395808, // 喜灰爱豆
				3493119670618871, // 小锅说Windows
				3493122866677876, // 牛UE
				3493125863508026, // 失败的Windows
				3493126373116659, // 不知道道qu什么_awa
				3493128654817870, // wyx6669036
				3493131269966444, // 爱喝Naixi
				3493133344049877, // mc泰菲6
				3493133778160480, // SYSTEM-WIN11-PE
				3493134929496963, // 该昵称己被占用_
				3493140700859270, // 中文名亦好听
				3493143079029172, // HCH233
				3493146268797771, // 莪乃Vista叔
				3493265716284014, // 一个新鲜的UP主
				3493269004617827, // 王奕璋璋WIN-WYZ
				3493275868596351, // 叫什么昵称好呢1024
				3493279186290766, // 6181jeve
				3493284609526085, // 点击修改合适昵称
				3493286161418802, // 俏皮的方块鹦鹉
				3493287340018436, // 下饭的天浩er
				3493288499743479, // Hrbbrudgrhrurury
				3493288516520138, // SpiderPolice
				3493288680098789, // 小詹jue飞网喷
				3493291987307331, // 超级爱吃薯条的汉堡包
				3493293100894309, // SYSTEM-BSOD-ZFS
				3493295292418122, // 码克兔9223372036854
				3493295556659472, // 啟沁
				3493298725456171, // SYSTEM-WIN-BY
				3494359745956087, // 恽化
				3494361276877525, // Wormwaker QQ群:196218959 QQ群:786411273 -来源:用户简介
				3494362556140426, // start-windows
				3494363998980102, // EXEdows10
				3494364330330273, // 一只野生的win31
				3494367373298490, // Minecraft_bed
				3494368688211997, // 不要让需要长途车人
				3494371397732535, // ssday
				3494372110764495, // 不变的windows10
				3494372316285246, // 拒绝阿里177
				3494374686066832, // 玩gb的noob
				3494376391051469, // Windows11setup
				3494376393148878, // SYSTEM-WIN11-DSH
				3536996756621386, // RUYUE-PC-MC
				3537107693865449, // 我是小r解说
				3537109172357757, // Big-Hard
				3537112137730450, // 临雨与林
				3537114216008048, // up确实是人机
				3537116059404773, // 即便急救包
				3537116686453264, // 扥丨
				3537117630171381, // 我要买红
				3537122388609608, // NMCKROSSE
				3537124821305775, // 獨愛散寶
				3546378202515847, // 夏目友人智障
				3546554268912183, // SYSTEM_WINNT_ZZC
				3546554428295778, // SYSTEM-WIN-DCR
				3546556223457980, // bili_95794963688
				3546558308026494, // 王启春国航737
				3546563917908620, // 鸡你大美美
				3546565218142987, // 国航波音789
				3546570507160068, // 233王者战士
				3546572151327515, // bili_86502927497
				3546575292860423, // 糊奶油
				3546576519695082, // 四爪鱼呐
				3546584010721468, // 苟分王1145141号
				3546587502479420, // Win12cmd
				3546588681079261, // Windows7TOGO
				3546589083732470, // 刘哥gametime做游戏
				3546591006820827, // 明月论坛
				3546600454490707, // bili_20690504794
				3546604573296995, // --张某人
				3546607943419915, // bili_17836242624
				3546616451566145, // Debian说Linux
				3546627134457918, // 朕是汉武帝
				3546627769895405, // Never-ZDY-BSOD
				3546629424548790, // cmd指令管理员
				3546632052280170, // 没史赤的退休的咕
				3546634109585552, // 小豌豆xiaowando
				3546635650992988, // X-Exp
				3546639996291804, // Tinsdsd_Tt
				3546643970395048, // 春_夜-
				3546652017166707, // error_1145
				3546655280335698, // 小小的口腔溃疡
				3546670914603634, // Windows卸载程序
				3546673292774004, // 想你向往星空
				3546675725470229, // 树眼镜蛇归来
				3546677854079074, // 喜欢Windows的49
				3546694952160136, // 暑假无敌123
				3546712450795645, // 爱玩游戏的海猫儿
				3546713621006982, // 桃酥油饼渣
				3546717039364768, // SYSTEM-ZCQ
				3546722538097413, // 伍颖曾
				3546724786243797, // 俺的世界启动
				3546725021124630, // 关城与久
				3546727575455815, // 陆言言言
				3546733705431785, // 喜欢玩mc的偏科生
				3546738468063402, // 传奇人物赫斯
				3546739313216164, // SYSTEM114541
				3546744115693851, // 柠檬吃基岩
				3546745631934631, // 98664346
				3546746072336605, // 爱玩电脑的sandbox
				3546761366866084, // 鲤鱼153
				3546772651641690, // Kubuntu说Linux
			],
			blacklist: [
				417138, // 你的两位朋友
				1585476, // 23胡彬MEMZ
				3299305, // qaqz111
				5337680, // 550W离线版
				7955948, // FTG_Win11
				8053098, // 十炮君
				10828819, // BSoD正在玩
				11451610, // 白小是就我
				15052067, // Gelan丶
				17762573, // 退休就养狗
				20567718, // So_Y0ung
				21927744, // 360MEMZ
				21946608, // 是土豆哒
				24821321, // Windows系统追更狂魔
				26284934, // win_小火龙
				30760525, // EIANTRA
				35833798, // Windows710
				37064895, // 小锋学长生活大爆炸
				37557747, // hifysh
				40039625, // 踹我一脚
				42494833, // Happymax1212
				52070231, // Paimeng-HoYo
				52192256, // 歐洲皇室熊少
				56875382, // 闰月优葡
				62677028, // LoadingPoint
				67168389, // Intel_0000
				67247219, // Linux_Newbie
				76868264, // 吃不到筷子的鼠
				82363089, // 小宇Boi
				88665483, // 和平精英扣肉
				89062643, // 泠楠梓萌
				104657830, // 尚宜鼎MEMZ
				107238284, // 奇怪的小羊减少了
				108721070, // 玛菲特
				168830095, // 胖小次samaaaaa
				169290582, // VMware的win7
				198316802, // 传说当中的帅锅
				204809809,
				213847634, // We_R_All_Insane
				248556377, // Win_Update
				261016792, // Win10HOME
				261401138, // S15万分小拿小刚
				272743796, // 难忘的朱古力232
				272836680, // 13437855279
				273727645, // Bili-Tube
				276817988, // 无人所知的windows12
				277995137, // EnderCraft
				283733002, // Aristore
				285435837, // 四月樱花-洇染成殇
				292912975,
				298993710, // 注册表编辑器MEMZ
				306193653, // BV1si4y1x7rG
				307432672, // 花l火
				310265955, // Ticki-Pigeon
				313342814, // SYSTEM-GREE-GZN
				316481254, // 旗界汽车
				322227973, // 布雷德yyds
				341884500, // Stevesuk
				348877540, // FurryXH
				351258144, // 豆沙包MEMZ
				353290736, // Win11的粉丝_offical
				356616083, // 第一位p站用户
				356882513, // 被重组吃掉的虚拟桌面
				357779530, // 空巢老KriaStans
				359937651, // MicrosoftRTX2080 QQ群:550196805/699949890 -来源：用户简介
				360590692, // 鸭子_aayz
				361858612, // 于小丘
				362451533, // NC_Memz -> Aero123321
				365129777, // DrAMA-MEMZ
				365166874, // RZ-world
				367151287, // A奶味伏特加
				375791016, // AegetOS
				378430387, // 小李MEMZ
				383322806, // Win10Pro
				383897380, // ThisPC的Bili官方頻道 网站:senpai.114514.cloudns.be 邮箱:ruich97@icloud.com -来源:用户简介
				384650704, // 91047971901_bili
				384896681, // 66321649060_bili
				386401641, // 李欢欢白白bili
				388160119, // 用户-265
				389114607, // 快乐MEMZ
				390148573, // 西瓜xg_
				390483853, // 炒鸡360MEMZ
				392012144, // 一只win8球
				392472741, // 苏莹3
				392672572, // 123MEMZ
				392697653, // System-i386
				393597677, // 西赫xihe
				395177787, // Android-TSK
				397847418, // 蓝屏钙BSOD
				398662881, // Frogcell
				398861490, // 啊啊啊啊是miku
				399597303, // 没有光明神の世界
				401094700, // 旮沓曼_gt428
				401386572, // Hooops
				402422350, // 白桑Brighsun
				403527839, // windows核心编程
				403584656, // 竹取雾雨_
				405543129, // Franklin-浩辰
				405545981, // 德比鹤-鸡你太美
				406081076, // emmmm么么么mm
				407053282, // 浅笑盈盈a_a
				412777837, // 注册表MEMZ
				413043448, // 小杨聊科技
				413269076, // Cmd_MEMZ
				414666753, // 桌面窗口管理器_DWM
				424394723, // _NAMER_
				431414767, // 星间晞
				431507192, // 打歌者
				431822440, // ゙COJO
				433554137, // 查拉娘_Zara-Line
				435227174, // Win10Win10是个屑
				435407713, // 砍死秋濑的天野
				435462593, // 唐狐WIN
				435972058, // WindowsAero毛玻璃
				436415283, // 无惧死机
				436837378, // 星雨在b站
				440662801, // 爱玩电脑的特兰克斯
				443988102, // 何人哉er
				448815938, // MisakaPothole
				451475014, // STR-BSOD
				456061336, // He1lo_Wor1d
				456512961, // _天晴了雨停了_
				457692234, // 奇怪的MEMZ
				470983675, // 刀影光剑
				471635164, // csgoGYROROLL
				476248972, // 政雾
				477686238, // k-ns
				479401385, // 风梓_wwt
				480498743, // 山猹qwq
				483345456, // Win10家庭版
				483574120, // setup安装程序
				483675256, // Windows功能
				483680764, // Kuewwc QQ群:566766266 验证:9D5A -来源:用户简介
				484165196, // 351Workshop
				487291887, // Saber_White
				493936144, // 御坂妹10010号
				493998035, // SYSTEM-RAMOS-ZDY
				494899652, // 第聂伯河银燕
				496728862, // YUDS_清风
				498370133, // Huan_XLZ558
				498912953, // AMD_MEMZ
				499969876, // 英雄的世界我不懂
				501193600, // bili_78951786765
				501319924, // Code_Box
				501355555, // MS-SYSTEM
				502257570, // 智慧的蓝屏之神-doge
				503289010, // Windows7の理系を行う
				503329203, // ゚゙゚゙゚薛禅汗
				503884937, // KD_wen
				504179884, // MYB_CKLS
				505199229, // SYSTEM_PHILI
				506031381, // 1665075
				507578721, // 激鱼134_C4 网站:jiyu134.top QQ群:141198268 -来源:用户简介、动态
				507581495, // 迷你世界哈毕夏公主
				507603924, // CY945
				507658814, // 镜靛openforge
				509902447, // 爱折腾的Windows
				511131590, // TTHorror红熔
				512901548, // eggy灵鱼小晶
				513312081, // Opteron64
				513458998, // Bf109G-10
				513898841, // 无聊的路人家
				514205283, // -长音-
				514557913, // 金忆往昔
				514802302, // 不爱笑的黑客
				516197605, // 灬川氵
				516443571, // 46102837537
				518020596, // 360小精灵qwq
				520758232, // NiHa0531
				522317369, // Korzy
				522669301, // xmwpumpkin528
				524501321, // Start-hs888
				524972094, // 毫无价值的人
				525078314, // msstart
				525654062, // 我永远爱周防有希
				526271721, // Pursn_延千
				526816891, // OWOPROMAXPLUS
				527001741, // 南宫邵伊
				529094334, // 牢达硬金
				529452185, // 酸乳甜梅 QQ:3202902554 -来源:用户简介
				535112369, // swryzxc34567
				546142687, // SYSTEM-ELEN-IDM
				546653386, // 鞍山的观众
				547326701, // 游戏攻资君
				549337765, // 比尔星驰
				551120966, // JustJaye233
				552851004, // fsl3118
				564642460, // GM焊化组
				578278851, // 星晨天际win
				582129140, // Windows11-PPT
				586347926, // memz-ubuntu
				589370259, // setup-windows安装
				590428323, // gbxrr
				590491558, // Technology_him
				590569754, // 和你heni
				592551597, // 东风Cherrier账号 邮箱:chengowen6@outlook.com -来源:用户简介
				594779227, // 星弈社-暖言鸢猫猫SE
				599959906, // Sun邦焱
				600328664, // 王宾汉
				601259909, // 星晨大海win_Acpn
				601270898, // 601270898
				603268734, // 截拍器
				603375808, // linux265
				604076432, // SYSTEM-WIN32-PE => Hacker_NanGua QQ:940123839 -来源:用户简介
				604251988, // 我可真是个添柴
				605857877, // 卖蓝屏钙的Win11
				612743845, // 浩瀚星晨win
				619829471, // 小宇_ERain
				621857141, // Windows哥
				626275698, // 星辰大海ZSF
				626287157, // Aero董事长
				626846441, // Tu_villagehead
				626857039, // 喜欢我民粹主义吗
				627007091, // 你永远的二爷
				627081577, // 晨夕星海
				627742070, // yz23333
				629096557, // 阿柒漫
				630547936, // 你的茶色
				631731585, // system-bootmgr-L
				631746555, // 卢本布奇诺
				649846967, // Win7MEMZ-BX
				651648884, // 羽殿啊
				652188355, // 一个windows爱好者
				652665076, // 1204992
				665360141, // 微飞的BSOD
				668421393, // Ubuntu-PE
				669094468, // SYSTEM-TANGYUAN
				671918906, // win95setup
				672508011, // -雨木森林-
				673473165, // orangeATA
				678414222, // Windows-regedit
				686217254, // has_7_h0l1day
				686533556, // w泊九溟w
				678665731, // 南山少帅Felix---反微软
				687561772, // 哎嘿哟_芙宁娜酱
				687996269, // 喜欢Windows8的架空放送
				689299632, // 桦树GAME
				691089382, // k博士QAQ
				692755897, // Setup-Official
				694139497, // Windows_Tester_2
				696040999, // Lemon_x64_Win11
				696897486, // Mono也是墨诺喵
				698760287, // 出星海wrcjs_sp4
				699368142, // 胶兽兽化
				699804375, // SYSTEM-MSDOS-ZDY
				700419968, // bili_36752566369
				702028797, // JERRY-SYSTEM
				702568841, // mini2的机主
				703051574, // SYSTEM-OOBE
				703074370, // 江江daisuki
				727892489, // Windows2003R2
				1006043618, // 咕咕石头人
				1007224506, // EXPLORER-BSOD
				1008072191, // 神金且抽象的鼓手
				1009063496, // Windows的Windows
				1015730693, // 玩了114514分钟mc
				1029196202, // 杀猴专业户
				1031408618, // Deewin-Setup
				1038146876, // Coping官方
				1040308682, // 战王爱分享
				1041748680, // 珂尼美容
				1050145612, // windows11不会出
				1053425351, // End_Infinity
				1058630574, // 悠然1206006
				1061621085, // Vista-BSOD
				1065194305, // 彩虹猫-win11
				1066128216, // SYSTEM-NTDEV-PRO
				1071251434, // 激昂的小羊
				1077831924, // 再笑半夜把你吃了
				1080519183,
				1089892994, // MEMZ-Windows11
				1090909606, // 失落的怪兽8号
				1093084152, // BSD-Linux
				1093536899, // 软萌可爱的洛神
				1098548751, // 小苏阳cute
				1102137180, // 也数据发
				1109921625, // 川冶YRin_
				1112058008, // OxyStudio QQ群:742263029 -来源:用户简介
				1119522579, // 爱蓝屏的win10
				1124857662, // Wininit_BSOD
				1131093653, // 冰峰RTS
				1136956066, // 艾佧耒柒
				1150089109, // 小睿的奇妙冒险
				1151195812, // 开朗的冰人MEMZ
				1151325757, // SYSTEM-OPS-LJY
				1152576410, // 一个Minecraft用户
				1157923020, // 仗义的老班长
				1158046953, // VistaChrome108
				1158758149, // 卅卅卌鸖
				1162296488, // System3206
				1164102027, // 末影箱都没你能装
				1165628529, // 114514abC3
				1175873768, // BSOD-Winme
				1179374590, // MRJX_QWQ
				1187162171, // Setup-Win11
				1187167397, // 药水1304
				1190936866, // Qt小徐
				1194342823, // 科比牢大-找史王
				1204666655, // 草方块BSOD
				1211977366, // 樊烨炘
				1218496648, // 新年代老登暴扣黑曼巴
				1222118214, // windows11电脑的cmd
				1223133127, // Edit_Win8
				1225952698, // 叶一程哥哥win10
				1235828103, // 无言_WYAN
				1243577821, // hyq061221
				1244352340, // 爱玩Windows搜索麦块
				1251211739, // 云上倾风
				1254215732, // 汪庭纬
				1261767230, // 一只屑win10
				1266839139, // JHR_BSOD_MIMZ
				1268760897, // 屑の早茶光
				1273052206, // 永远爱流萤小姐_
				1277034331, // 郝茬哥哥 QQ群:284872979 -来源:用户简介
				1283206843, // Windows被砍掉的Aero
				1283468503, // WinToGo-LZP
				1304244190, // System-NBNB
				1306710323, // SHITOU_BSOD
				1308669589, // 殇げNyrMu
				1309042145, // pvpjjjj
				1315846577, // sakura-山樱
				1317996804, // 新版B界萌新
				1321946754, // 没有Aero的Windows7
				1322183332, // WindowsCEMEMZ新账号
				1326423111, // Win-Flash-Pro
				1330313497, // alan-CRL
				1338015717, // windows_system
				1340261135, // windows1球_启动中
				1343385133, // 山月云星
				1347936870, // 托尔普森
				1353783215, // MEMZ-Chrome
				1366576220, // 絕區零
				1372632926, // Potassiumhemp
				1375459514, // 开心的Windows
				1378946985, // KunDeveloper
				1379761884, // 八万很困
				1380415597, // 雨林木风YLMF
				1385242199, // MS-SYSTEM-WIN
				1385474716, // G丶乱码
				1389264027, // 灰兔吖
				1394588870, // LoveSwissroll
				1399361729, // 想peach的夏美子
				1428008184, // 冈易又闪退了
				1431997122, // SYSTEM-Start
				1439352366, // SYSTEM-WINPE-EXE
				1452376557, // 没有Aero就没有灵魂
				1462538741, // 很屑的windows114514
				1463163459, // Windows81Metro
				1465447323, // 爱搞机的MEMZ
				1470765817, // 茨埃_须库恩
				1487149980, // CHUANGWEI每日游戏推荐
				1487688405, // 孤独up摇滚mmz
				1497262975, // 不解风情のWin11
				1499173387, // 下一终端
				1500275808, // Minecraft729 WeChat:summoniron_golem QQ:3531622583 -来源:用户简介
				1509347075, // Windows12MC
				1511907771, // MEMZ-BSOD
				1512804294, // Win_Minecraft
				1516914162, // 天_炫武神赵子龙
				1526589324, // 温笛WPTSX QQ群:609082529 -来源:用户简介
				1527055836, // 小墩搞机
				1530814757, // 取个名字好曲折
				1530862681, // 风云百得
				1531948091, // SYSTEM_Win11_RE
				1534842751, // 爱WinPE的MEMZ
				1536447241, // 小左1120 邮箱:xiaozuo1120@qq.com -来源:视频简介
				1543261354, // 查子CHAKER
				1546428456, // SYSTEM-WIN-EDGE
				1547075814, // 平凉小羊
				1549141274, // system-setup
				1560833788, // SYSTEM-EDGE
				1569663198, // B-windows10-user
				1569839185, // MEMZ-Scratch
				1572064888, // 波波yr
				1586085996, // SilesiaLandwehr
				1591866703, // 人朝的小郭同学 QQ群:370019841 -来源:用户简介
				1601172780, // Windows毛玻璃解说233
				1604146839, // windows田字牌电脑
				1605910926, // -Windows-11-
				1613384176, // Aero-Windows311
				1613998133, // 死神魔影兽
				1620728316, // 余谁333
				1624520869, // Lime青柠_QingNing
				1628906682, // 被win11吃掉的磁贴
				1632975427, // KALI_MC
				1639826047, // 一个账号一部手机
				1641461034, // DEEPIN_BSOD2_CMD
				1648756265, // ydjysngs
				1657379991, // 龙哥之哥
				1666981688, // System-Installer
				1681993937, // 平平淡淡才是爱情
				1687676724, // 灵眸闪熠
				1689805888, // 青蛙小汤圆
				1700935144, // hamicat哈米
				1704629193, // 冰绒の某猫
				1719525270, // ゚゙゚゙゚慎独
				1724541085, // SYSTEM--win7
				1726945129, // 热爱电脑方面的人
				1729734602, // bug32_Windows
				1733089232, // Windwos7
				1736202379, // 胡桃玩VM
				1736254071, // SteveMC牢玩家
				1736839855, // SYSTEM-D-WIN
				1741780603, // SYSTEM-XUGE-AND
				1744631001, // SYSTEM-SUYI-WIN
				1751934902, // Win-PowerShell
				1756883351, // 亓宫Cka
				1760573759, // 轻轻抚摸她的身体
				1765439198, // 小美女生日快乐么么哒
				1768531816, // 时光-别跑
				1772112592, // XEnder2000
				1776025003, // 蓝瓶钙BSoD
				1776456802, // 奇怪的MEMZ的小号
				1784552473, // AT-ALMS
				1789764060, // 55尽快回的莲花与多吉 QQ群:241660013 -来源:用户简介
				1800010051, // lin00544
				1801064268, // 张星华-official
				1812413197, // F_are_well
				1822128404, // 星海陨落の鲸
				1825543241, // 灰执事黄桃
				1827307028, // SYSTEM_小影 => SYSTEM-BIOS-XY
				1832217331, // 하늘이아름답다
				1833642992, // Win32_WinSxS_sys
				1834260927, // Mo_Network
				1834519604, // 爱吃肠粉拌辣椒
				1838075061, // 爱玩机的空晨
				1853394432, // 博博102929
				1863175083, // 半不了世的空城
				1865727084, // SYSTEM-WinPE-CHD
				1868794422, // 僵尸是萌新
				1877771759, // 一台iPhoneX
				1885710485, // 爱编程的小陈同学
				1886311488, // 凌玻Minecraft
				1886348413, // SYSTEM-MEMZ-CAO
				1901053083, // 一个大俄球
				1907727665, // 好小的云烟
				1911529131, // Aero8m
				1921195852, // Windows之家
				1923455866, // 想上凤凰蛋的蛋仔
				1930623048,
				1933399514, // win11_BSOD
				1933598970, // 白羊Linux
				1935801783, // Windows软件倒腾师
				1937436816, // 大好通
				1947070041, // 80691808980
				1948479703, // SYSTEM-Image-WIM
				1957089739, // 柴佳妮
				1964181966, // Minedows
				1965090607, // 可乐Windows
				1965857981, // muci_nn
				1969160969, // SR思锐Official
				1971481152, // windowstaskmgr
				1975308950, // BSOD-MEMZ
				1975752801, // 无助的金apple
				1975794422, // WindowsLH
				1984449284, // Linux粉
				1989712487, // SYSTEM-WIN11-KDE
				1991535809, // TongTong1071
				2004315025, // MrWEI95
				2005074146, // 小熊猫Firedoge
				2006378269, // 不__________
				2008619333, // 哈利波特0909
				2008726064, // kde-yyds
				2009792251, // Windows-Lover
				2012973284, // gm骆大乐经纪人版
				2017167096, // 喜欢Win8的MacPro
				2030178992, // Start-BME
				2032637936, // BSOD-SYSTEM
				2043088162, // SYSTEM-WINNT-ZDY
				2043170695, // SYSTEM-BSOD-MEMZ
				2047811419, // bili_17236773346
				2050076822, // Windows-Setup
				2052314422, // Kimmy_Yan_Nian
				2064265859, // 126com2012949294
				2065466782, // Error0x00001
				2101678528, // OS_Windows11_lzn
				2108200476, // Win_Threshold-10
				2108935908, // bili_37409270614
				2111756244, // 火车吃药玩CO
				2112060594, // WINPE-SYSTEM
				2121097172, // 篮球只因桀桀桀
				2124855476, // Y-doudou
				2147171943, // Luminous374
				3461562834618602, // 辰东帅逼版
				3461563419724110, // TD的冒险日记
				3461564680112507, // 火鸡味锅巴11644
				3461566250879953, // 煤脑子的鸭鸭
				3461566410262700, // Windows_BSOD
				3461567312038162, // Aqr陈
				3461571237907087, // 自己想柠檬
				3461573066623225, // ahuaibi
				3461573093886296, // 牢蝶刹那冷门接板玩家
				3461576820525957, // 金身一地头孢
				3461577011366120, // RoyFreetz
				3461578091399948, // Silversoft_BSOD
				3461582916946644, // 王德馨呀
				3492972888853021, // kE3Mn_1714
				3493078583216766, // 小昂仔s
				3493081181588076, // 山中繁星
				3493082699926050, // 陈沉尘CSY2022
				3493083238894137, // 井_SYSTEM_火车迷
				3493083964508258, // 龖龖潔
				3493086852286877, // MC团长解说
				3493088339167261, // 工会大吉大利
				3493092688661431, // 炸了的win10
				3493093087119686, // SYSTEM-VISTA-FDK
				3493094217485200, // 风风在努力学习
				3493094980847954, // 牢一百七十七
				3493104831171448, // 万恶之源669
				3493105315613465, // van-豆射手
				3493105831512662, // T82坦克
				3493107444222139, // CR7_NB
				3493108075464919, // 组策略编辑器GPEDIT
				3493108578782082, // 点穴勾冷门信仰玩家
				3493108908034540, // S-1-5-21-1726115
				3493109132430078, // 袁天川
				3493110904523297, // oranges夏侯
				3493111974071179, // 一只在tfs的野飞友
				3493114683590808, // 电脑病毒爱好者
				3493114847168983, // 易溶于水的澳涐
				3493115270793340, // 一只minipig
				3493115440662822, // 一只爱玩roblox的noob
				3493116157888945, // aill_Office
				3493118152280841, // mcdos-windows
				3493118435395808, // 喜灰爱豆
				3493119670618871, // 小锅说Windows
				3493122866677876, // 牛UE
				3493125863508026, // 失败的Windows
				3493126373116659, // 不知道道qu什么_awa
				3493128654817870, // wyx6669036
				3493131269966444, // 爱喝Naixi
				3493133344049877, // mc泰菲6
				3493133778160480, // SYSTEM-WIN11-PE
				3493134929496963, // 该昵称己被占用_
				3493140700859270, // 中文名亦好听
				3493143079029172, // HCH233
				3493146268797771, // 莪乃Vista叔
				3493265716284014, // 一个新鲜的UP主
				3493269004617827, // 王奕璋璋WIN-WYZ
				3493275868596351, // 叫什么昵称好呢1024
				3493279186290766, // 6181jeve
				3493284609526085, // 点击修改合适昵称
				3493286161418802, // 俏皮的方块鹦鹉
				3493287340018436, // 下饭的天浩er
				3493288499743479, // Hrbbrudgrhrurury
				3493288516520138, // SpiderPolice
				3493288680098789, // 小詹jue飞网喷
				3493291987307331, // 超级爱吃薯条的汉堡包
				3493293100894309, // SYSTEM-BSOD-ZFS
				3493295292418122, // 码克兔9223372036854
				3493295556659472, // 啟沁
				3493298725456171, // SYSTEM-WIN-BY
				3494359745956087, // 恽化
				3494361276877525, // Wormwaker QQ群:196218959 QQ群:786411273 -来源:用户简介
				3494362556140426, // start-windows
				3494363998980102, // EXEdows10
				3494364330330273, // 一只野生的win31
				3494367373298490, // Minecraft_bed
				3494368688211997, // 不要让需要长途车人
				3494371397732535, // ssday
				3494372110764495, // 不变的windows10
				3494372316285246, // 拒绝阿里177
				3494374686066832, // 玩gb的noob
				3494376391051469, // Windows11setup
				3494376393148878, // SYSTEM-WIN11-DSH
				3536996756621386, // RUYUE-PC-MC
				3537107693865449, // 我是小r解说
				3537109172357757, // Big-Hard
				3537112137730450, // 临雨与林
				3537114216008048, // up确实是人机
				3537116059404773, // 即便急救包
				3537116686453264, // 扥丨
				3537117630171381, // 我要买红
				3537122388609608, // NMCKROSSE
				3537124821305775, // 獨愛散寶
				3546378202515847, // 夏目友人智障
				3546554268912183, // SYSTEM_WINNT_ZZC
				3546554428295778, // SYSTEM-WIN-DCR
				3546556223457980, // bili_95794963688
				3546558308026494, // 王启春国航737
				3546563917908620, // 鸡你大美美
				3546565218142987, // 国航波音789
				3546570507160068, // 233王者战士
				3546572151327515, // bili_86502927497
				3546575292860423, // 糊奶油
				3546576519695082, // 四爪鱼呐
				3546584010721468, // 苟分王1145141号
				3546587502479420, // Win12cmd
				3546588681079261, // Windows7TOGO
				3546589083732470, // 刘哥gametime做游戏
				3546591006820827, // 明月论坛
				3546600454490707, // bili_20690504794
				3546604573296995, // --张某人
				3546607943419915, // bili_17836242624
				3546616451566145, // Debian说Linux
				3546627134457918, // 朕是汉武帝
				3546627769895405, // Never-ZDY-BSOD
				3546629424548790, // cmd指令管理员
				3546632052280170, // 没史赤的退休的咕
				3546634109585552, // 小豌豆xiaowando
				3546635650992988, // X-Exp
				3546639996291804, // Tinsdsd_Tt
				3546643970395048, // 春_夜-
				3546652017166707, // error_1145
				3546655280335698, // 小小的口腔溃疡
				3546670914603634, // Windows卸载程序
				3546673292774004, // 想你向往星空
				3546675725470229, // 树眼镜蛇归来
				3546677854079074, // 喜欢Windows的49
				3546694952160136, // 暑假无敌123
				3546712450795645, // 爱玩游戏的海猫儿
				3546713621006982, // 桃酥油饼渣
				3546717039364768, // SYSTEM-ZCQ
				3546722538097413, // 伍颖曾
				3546724786243797, // 俺的世界启动
				3546725021124630, // 关城与久
				3546727575455815, // 陆言言言
				3546733705431785, // 喜欢玩mc的偏科生
				3546738468063402, // 传奇人物赫斯
				3546739313216164, // SYSTEM114541
				3546744115693851, // 柠檬吃基岩
				3546745631934631, // 98664346
				3546746072336605, // 爱玩电脑的sandbox
				3546761366866084, // 鲤鱼153
				3546772651641690, // Kubuntu说Linux
			]
		},
		{
			displayName: "火柴人",
			displayIcon: "https://i0.hdslb.com/bfs/face/75e1219501e9ca3e82cad2c4a466fb4b5c7d0557.jpg@100w_100h.webp",
			keywords: ["火柴人", "柴柴"],
			followings: [
				519253600, // 火柴人AlanBecker
				57909353, // 我叫沐沐子
				75641878, // 希望三一律
				83509813, // waggly_hjc
				87441854, // THE-BIG-BLACK
				100771368, // 崩坏3最强律者识宝
				107989871, // 黄淘z
				173797484, // 千岛乙因
				175513547, // 叶影忍者
				228179388, // Nantes0
				245163660, // -李大本事-
				285796659, // 暗影的Cyan君
				345965947, // Freeze-sixdots
				379902223, // 时空间越
				387373058, // 黎沐汲汲汲汲
				401018761, // 无规律粒子
				403413300, // 溯洄爱吃面包
				413061310, // 汪梓驿
				443337157, // 喜欢狼执事的L
				470956929, // 孽五重
				471271293, // bili_84192435173
				471504404, // 九卦灵生
				476404001, // QIANYUANNNN
				479839985, // 搞事兔hhh
				483299949, // 后厨端水师傅
				488006411, // sn柒拾酒79
				489645159, // 格局溶洞
				493695410, // 一Hvn
				499204800, // 来自天堂的Kuma
				504946587, // 逆-天--
				510565171, // 只喝果汁的果酱
				511561951, // 三年前的我556
				512131662, // 加小加JXJ
				512270385, // 侍卫-Squire
				519979908, // 郁林_伽罗
				549526061, // 原初托丽尔
				577499359, // White_05
				594945143, // 星--辰---大-海
				608285543, // 小龙1412号
				622689887, // 熊孩子皮卡丘
				630568330, // Dmm白喵
				631152953, // 星殇_凝痕
				636299113, // 木系光系的Ray
				669301616, // 源源源源源不绝
				670770984, // 侦探大山
				687017132, // TR-救赎
				697575027, // heiheigeigei
				1066124802, // 祁休_Victim
				1138330822, // 火柴人GFO天之骄子
				1146246778, // 蓝色西红柿_
				1171887791, // 风荣ForonG-H
				1209719364, // 酷蓝Mc
				1215986792, // 你狗哥之星
				1220376320, // MCBETA
				1233871531, // 我素chch晨
				1245061510, // 阿帽压线写论文
				1258415253, // wjz60
				1265339783, // OwO想当up但没能力
				1285250459, // 面包蟹95
				1290670516, // 欢愉界的系统君
				1353924068, // 二氧化锆ZrO2
				1464013080, // 必杨德-储盛
				1508811087, // 负18贷
				1541077225, // 黎域老鱼abc
				1634526138, // 土豆尼射指甲
				1653145450, // 别人都在活我为什么死
				1678868771, // 景元元不知道哦
				1764109148, // 中墨纸狼
				1837966706, // 用户不想用这个账号了
				1845612067, // 已经睡着了zz
				1857172550, // YUANZIDAN-
				1878959276, // 桔梗紫陨星
				1932840580, // 肖文魚
				1958660810, // 2的n次方_P
				1982889877, // 染vvv是我全名
				1989881182, // 迷路的糕丸
				2012604163, // _sjzy_
				2033123642, // 柚柚柚柚柚柚子124
				2043433175, // 孔至圣
				2052840187, // gacha-江映月
				2089691199, // 一只Yang-羊
				2094311513, // 鬼兜一虫
				2138000825, // 芊玖呢
				3461569096715224, // 我是糖野
				3461572013853145, // Unknown_Entity_
				3461581021120559, // 熠逢
				3493076632865556, // 今天学经济法了吗
				3493086510451014, // Endly_
				3493091879159854, // _花六硬币改名
				3493116319369296, // 神奇欧克
				3493131077027872, // 恶臭的向日葵
				3493133151111407, // 藻恬
				3493146256214384, // 武士带师不会居合斩
				3493285599382066, // GreenStickFigure
				3493295023982687, // 奧利奧大師
				3494369296386343, // universe-gr
				3537116805990632, // 我是green的修狗
				3546394438666321, // 丧得开朗
				3546563374745871, // 杂交版大帝
				3546571023059147, // 冬霞-梦怡
				3546584535009303, // 想不到取啥名字了咋办
				3546585935907496, // 阴人狙击炮
				3546590839049150, // 零宿烟冽
				3546594469219099, // 剑下无罪
				3546602195126587, // yumi_呦米
				3546615390407063, // 无名逝有名字
				3546615591734214, // 球形岩质飞船
				3546615969220979, // 幻灭空梦诗婷
				3546619786037338, // 金条-秽土转生
				3546621587491370, // 好同志鸭
				3546621824469075, // 爱学习的小小橙子
				3546624502532751, // Ala草莓皮条客
				3546667462690884, // -番薯块儿-
				3546703804238001, // terminoo
				3546707157583914, // 竹子馅包
				3546726929533318, // 秋满JQ
				3546735039220062, // 没名字起了呀喂
				3546740095453423, // VictimBecker
				3546744935680160, // 气态氢二氧
				3546751369743194, // wei-xing-chen
			],
			blacklist: [
				57909353, // 我叫沐沐子
				75641878, // 希望三一律
				83509813, // waggly_hjc
				87441854, // THE-BIG-BLACK
				100771368, // 崩坏3最强律者识宝
				107989871, // 黄淘z
				173797484, // 千岛乙因
				175513547, // 叶影忍者
				228179388, // Nantes0
				245163660, // -李大本事-
				285796659, // 暗影的Cyan君
				345965947, // Freeze-sixdots
				379902223, // 时空间越
				387373058, // 黎沐汲汲汲汲
				401018761, // 无规律粒子
				403413300, // 溯洄爱吃面包
				413061310, // 汪梓驿
				443337157, // 喜欢狼执事的L
				470956929, // 孽五重
				471271293, // bili_84192435173
				471504404, // 九卦灵生
				476404001, // QIANYUANNNN
				479839985, // 搞事兔hhh
				483299949, // 后厨端水师傅
				488006411, // sn柒拾酒79
				489645159, // 格局溶洞
				493695410, // 一Hvn
				499204800, // 来自天堂的Kuma
				504946587, // 逆-天--
				510565171, // 只喝果汁的果酱
				511561951, // 三年前的我556
				512131662, // 加小加JXJ
				512270385, // 侍卫-Squire
				519979908, // 郁林_伽罗
				549526061, // 原初托丽尔
				577499359, // White_05
				594945143, // 星--辰---大-海
				608285543, // 小龙1412号
				622689887, // 熊孩子皮卡丘
				630568330, // Dmm白喵
				631152953, // 星殇_凝痕
				636299113, // 木系光系的Ray
				669301616, // 源源源源源不绝
				670770984, // 侦探大山
				687017132, // TR-救赎
				697575027, // heiheigeigei
				1066124802, // 祁休_Victim
				1138330822, // 火柴人GFO天之骄子
				1146246778, // 蓝色西红柿_
				1171887791, // 风荣ForonG-H
				1209719364, // 酷蓝Mc
				1215986792, // 你狗哥之星
				1220376320, // MCBETA
				1233871531, // 我素chch晨
				1245061510, // 阿帽压线写论文
				1258415253, // wjz60
				1265339783, // OwO想当up但没能力
				1285250459, // 面包蟹95
				1290670516, // 欢愉界的系统君
				1353924068, // 二氧化锆ZrO2
				1464013080, // 必杨德-储盛
				1508811087, // 负18贷
				1541077225, // 黎域老鱼abc
				1634526138, // 土豆尼射指甲
				1653145450, // 别人都在活我为什么死
				1678868771, // 景元元不知道哦
				1764109148, // 中墨纸狼
				1837966706, // 用户不想用这个账号了
				1845612067, // 已经睡着了zz
				1857172550, // YUANZIDAN-
				1878959276, // 桔梗紫陨星
				1932840580, // 肖文魚
				1958660810, // 2的n次方_P
				1982889877, // 染vvv是我全名
				1989881182, // 迷路的糕丸
				2012604163, // _sjzy_
				2033123642, // 柚柚柚柚柚柚子124
				2043433175, // 孔至圣
				2052840187, // gacha-江映月
				2089691199, // 一只Yang-羊
				2094311513, // 鬼兜一虫
				2138000825, // 芊玖呢
				3461569096715224, // 我是糖野
				3461572013853145, // Unknown_Entity_
				3461581021120559, // 熠逢
				3493076632865556, // 今天学经济法了吗
				3493086510451014, // Endly_
				3493091879159854, // _花六硬币改名
				3493116319369296, // 神奇欧克
				3493131077027872, // 恶臭的向日葵
				3493133151111407, // 藻恬
				3493146256214384, // 武士带师不会居合斩
				3493285599382066, // GreenStickFigure
				3493295023982687, // 奧利奧大師
				3494369296386343, // universe-gr
				3537116805990632, // 我是green的修狗
				3546394438666321, // 丧得开朗
				3546563374745871, // 杂交版大帝
				3546571023059147, // 冬霞-梦怡
				3546584535009303, // 想不到取啥名字了咋办
				3546585935907496, // 阴人狙击炮
				3546590839049150, // 零宿烟冽
				3546594469219099, // 剑下无罪
				3546602195126587, // yumi_呦米
				3546615390407063, // 无名逝有名字
				3546615591734214, // 球形岩质飞船
				3546615969220979, // 幻灭空梦诗婷
				3546619786037338, // 金条-秽土转生
				3546621587491370, // 好同志鸭
				3546621824469075, // 爱学习的小小橙子
				3546624502532751, // Ala草莓皮条客
				3546667462690884, // -番薯块儿-
				3546703804238001, // terminoo
				3546707157583914, // 竹子馅包
				3546726929533318, // 秋满JQ
				3546735039220062, // 没名字起了呀喂
				3546740095453423, // VictimBecker
				3546744935680160, // 气态氢二氧
				3546751369743194, // wei-xing-chen
			],
		},
		{
			displayName: "Roblox",
			displayIcon: "https://i0.hdslb.com/bfs/face/916a16a2d69f25819adbb99946dea8d9dc6017e4.jpg@100w_100h.webp",
			keywords: ["Roblox", "ROBLOX", "roblox", "Roblox代充", "ROBLOX代充", "roblox代充"],
			followings: [
				697014145, // ROBLOX中文社区
				1318705997, // Roblox代充狼少
				1871040990, // ROBLOX栖酸
				3546609593878970, // 玩Roblox的小培根头呀
				2100562436, // 萌游戏Roblox
				24858417, // Roblox黑科技 WeChat:oxYLENxo QQ:390751814 -来源:用户简介
				3493115440662822, // 一只爱玩roblox的noob
				1113903222, // 太南游戏Roblox
				1707425225, // Roblox_XiaoDi
				1631113298, // 阿叶游戏Roblox
			]
		},
		{
			displayName: "火影忍者",
			displayIcon: "https://i0.hdslb.com/bfs/face/3c975d44586143dd0eb4b121a3437bc8cc696610.jpg@100w_100h.webp",
			keywords: ["互动抽奖 #火影忍者", "#火影忍者", "火影忍者", "火影"],
			followings: [
				441897078, // 火影忍者手游情报君
				323357649, // 鬼渐van火影
				43991083, // 暴躁老哥艾火影
				172858724, // 火影手游晚安姐姐实况
				396388451, // 火影忍者萝卜
				320588834, // 火影忍者手游吴克玩家
				516904626, // 火影隔壁村大聪明
				259906339, // 火影手游静静NPL
				8489468, // 火影手游灭霸
				1808271299, // 旗木卡卡兮火影手游
				559357874, // 火影手游fj
				671089519, // 火影-村男与欧队长
				2051066128, // 奇拉比-火影型男
				404761044, // 火影手游G木生 QQ:3194987547
				619039634, // 小七火影忍者
			]
		},
		{
			displayName: "暗区突围",
			displayIcon: "https://i0.hdslb.com/bfs/face/9fb5b78af4a4345f650b783cf8a1b176d8389b8f.jpg@100w_100h.webp",
			keywords: ["互动抽奖 #暗区突围", "#暗区突围", "暗区突围", "#一起上暗", "暗区", "暗突"],
			followings: [
				1915056903, // 暗区突围官方号的 UID
				3546578394548722, // 《暗区突围：无限》端游官方号的 UID
				3493093171006178, // 暗区突围赛事
				1716115080, // 天霸暗区突围手游分部
				675132117, // 小鲨鱼-暗区突围
				471147874, // 暗区突围XJJ
				443116092, // 暗区突围阿柒
				2033313166, // 心叶-暗区突围
				1214503199, // 刘杨杨暗区突围
				86881329, // 梦求真暗区突围
				195223983, // 阿帅暗区突围
				627424061, // 暗区突围柒零 QQ群:513785932
				1023776900, // 暗区突围一君
				1611146372, // 老冯暗区突围
				425037514, // 六子暗区突围
				349964931, // 小余哥-暗区突围
				3493294497597661, // 暗区突围欧大帅博奇王
				3537109052819504, // 三石暗区突围
				1463996771, // 暗区突围小舩子 QQ群:927133872
				1150405278, // 暗区突围陌柒-世一粉
			]
		},
		{
			displayName: "香肠派对",
			displayIcon: "https://i0.hdslb.com/bfs/face/ecfc11464941618978d464c5db795dfc9ac7d932.jpg@100w_100h.webp",
			keywords: ["香肠派对"],
			followings: [
				285308635, // 香肠派对手游官方号的 UID
				236615531, // 香肠派对屁屁王
				1047655453, // 香肠派对梦柯
				483407496, // 香肠派对流雲
				1203401319, // 菲丽西香肠派对
				1411805718, // 香肠派对晓冬吖
				1650922953, // 香肠派对随缘
				239687082, // 香肠派对空空
				473502534, // 香肠派对卤本蛋
				1387713046, // 香肠派对电竞
			]
		},
		{
			displayName: "穿越火线",
			displayIcon: "https://cf.qq.com/favicon.ico",
			keywords: ["穿越火线", "CF"],
			followings: [
				315554376, // 穿越火线官方号的 UID
				33281681, // CF威廉I黑化版
				204120111, // CF农哥吊打小怪兽
				398597510, // CF教父
				440017413, // 穿越火线兴兴
				456180476, // CF猫七
				474595618, // 穿越火线赛事
				1083400219, // cf孙某
			]
		},
		{
			displayName: "地下城与勇士",
			displayIcon: "https://dnf.qq.com/favicon.ico",
			keywords: ["地下城与勇士", "DNF"],
			followings: [
				102176172, // 地下城与勇士官方号的 UID
				332349, // DNF死兔子
				8233456, // DNF枪魂冰子
				27253173, // DNF面码
				90179837, // dnf老搬
				168090912, // 17173DNF官方
				353944511, // DNF手游假猪
			]
		},
		{
			displayName: "绝地求生",
			displayIcon: "https://pubg.qq.com/favicon.ico",
			keywords: ["绝地求生", "PUBG"],
			followings: [
				6528910, // 小贝的游戏食堂
				46708782, // 鲁大能
				50329485, // 吃鸡赛事
				449704680, // 意识DT
				552064023, // 吃鸡小表弟
			]
		},
		{
			displayName: "英雄联盟",
			displayIcon: "https://lol.qq.com/favicon.ico",
			keywords: ["英雄联盟", "LOL"],
			followings: [
				50329118, // 哔哩哔哩英雄联盟赛事官方号的 UID
				50329220, // 哔哩哔哩LOL赛事直播
				4895244, // LOL丶诺诺
				23364027, // 英雄联盟-小白鸦
				178778949, // 英雄联盟
				302651406, // WBG英雄联盟分部
				470840543, // LOL楠神李青
				652663378, // LOL小超梦
			]
		},
		{
			displayName: "魔兽世界",
			displayIcon: "https://i0.hdslb.com/bfs/game/6e3b53029663a11fc2e66ca1b3e523870177c6cc.png@100w_100h.webp",
			keywords: ["魔兽世界", "魔兽", "艾泽拉斯"],
		},
		{
			displayName: "CSGO",
			displayIcon: "https://i0.hdslb.com/bfs/face/8119efd25d219ae7f192d51f5a3fc3ec45856375.jpg@100w_100h.webp",
			keywords: ["CS2", "cs2", "CSGO", "csgo", "CS:GO", "cs:go", "反恐精英", "沙二", "沙2", "核子危机", "炙热沙城", "远古遗迹", "殒命大厦", "炼狱小镇", "死亡游乐园", "跳投", "s1mple", "major"],
			followings: [
				48455786, // CSGO国服官方号的 UID
				474595627, // CSGO官方赛事
				2183230, // 玩机器
				9838560, // 菊咕咕
				22192872, // igxe
				25195727, // ququ
				203680252, // aycs2
				309491479, // 内格夫
				317953117, // csgo-miku
				373076765, // tyloo
				381435385, // 茄子
				384942089, // 德云两鬼
				409588881, // csboy
				437744340, // 王喜顺
				472514992, // navi
				480810988, // g2
				512105432, // 玉麒麟
				645647361, // BUFF
				1497263761, // 哑巴老六
				3494376720304904, // kennys
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
			keywords: ["格历奇GLITCH", "YouTube GLITCH", "GLITCH", "GLITCH入驻b站", "无机杀手", "Murder Drones", "神奇数字马戏团", "The Amazing Digital Circus"],
			followings: [
				49442838, // 格历奇GLITCH官方号的 UID
				1554039777, // 冒充GLITCH官方号的 UID
			]
		},
		{
			displayName: "彩虹六号：围攻",
			displayIcon: "https://i0.hdslb.com/bfs/game/0f80bc73fc12a30c7f9c42f4e304a125f9aa1f10.jpg@100w_100h.webp",
			keywords: ["彩虹6号：围攻", "彩虹六号", "彩六", "R6S", "Rainbow Six Siege"],
			followings: [
				1661612, // Hex今天切墙了吗
				1932102, // 溪木的龙裔
				3227461, // 乔伊奥斯托雷
				3933162, // 蚊子
				17098554, // 豆豆最棒
				98991109, // 角社区
				115545042, // 梅西杰的西餐厅
				140403337, // 塔塔kira
				415890389, // 高板大芥末
			]
		},
		{
			displayName: "无畏契约",
			displayIcon: "https://i0.hdslb.com/bfs/face/fab938edd3ddc88be9d32aa34f32f9e11c2a9401.jpg@100w_100h.webp",
			keywords: ["无畏契约", "瓦罗兰特", "VCTCN", "valorant", "VOLRANT"],
			followings: [
				147546636, // 无畏契约官方号的 UID
				17061834, // 无畏契约皮肤
				65427780, // 无畏契约GAME社区
				1004246390, // 无畏契约电竞
				1716434113, // 无畏契约资讯
				2071691173, // 无畏契约赛事
				3546375144867905, // TE溯无畏契约分部
			]
		},
		{
			displayName: "战争雷霆",
			displayIcon: "https://i0.hdslb.com/bfs/face/ea6602ab4693de4275d0a1ecf1d125305fbcfe29.jpg@100w_100h.webp",
			keywords: ["战争雷霆", "war thunder", "WAR THUNDER", "War Thunder", "warthunder", "WARTHUNDER", "WarThunder"],
			followings: [
				3913997, // 战争雷霆卡拉斯代肝
				16924537, // 战争雷霆火星观察局
				73481426, // 战争雷霆玩机器
				240815879, // 战争雷霆老7
				346681604, // 战争雷霆高手
				391722832, // 战争雷霆射击场字幕组
				414868466, // 战争雷霆丶光头大虾
				486601806, // 战争雷霆击破王
				524304343, // 阿鹿战争雷霆
				698176379, // 战争雷霆手游语音包
				1178344156, // 战争雷霆少年
				1257283304, // 代肝战争雷霆手游
				1564031960, // 战争雷霆第一代肝
				1651275886, // 战争雷霆牢大
				3461580928846036, // 战争雷霆主页详情联系
				3493269723941470, // 战争雷霆普通玩家
				3494378783902577, // 战争雷霆一一广告
				3546554933709598, // 战争雷霆手游德系测评
				3546658866464818, // 战争雷霆视频搬运工
			],
			blacklist: [
				3913997, // 战争雷霆卡拉斯代肝
				16924537, // 战争雷霆火星观察局
				73481426, // 战争雷霆玩机器
				240815879, // 战争雷霆老7
				346681604, // 战争雷霆高手
				391722832, // 战争雷霆射击场字幕组
				414868466, // 战争雷霆丶光头大虾
				486601806, // 战争雷霆击破王
				524304343, // 阿鹿战争雷霆
				698176379, // 战争雷霆手游语音包
				1178344156, // 战争雷霆少年
				1257283304, // 代肝战争雷霆手游
				1564031960, // 战争雷霆第一代肝
				1651275886, // 战争雷霆牢大
				3461580928846036, // 战争雷霆主页详情联系
				3493269723941470, // 战争雷霆普通玩家
				3494378783902577, // 战争雷霆一一广告
				3546554933709598, // 战争雷霆手游德系测评
				3546658866464818, // 战争雷霆视频搬运工
			]
		},
		{
			displayName: "Fate/Grand Order",
			displayIcon: "https://i0.hdslb.com/bfs/face/464d57b188e80e96afb054005a311d243c827d59.jpg@100w_100h.webp",
			keywords: ["命运-冠位指定", "命运/冠位指定", "FGO", "Fate/Grand Order", "Fate", "Grand Order", "冠位指定", "御主", "从者"],
			followings: [
				233108841, // 命运-冠位指定官方号的 UID
			]
		},
		{
			displayName: "女神异闻录: 夜幕魅影",
			displayIcon: "https://i0.hdslb.com/bfs/face/af550ab38b0e231dfdd8c85dbcf27ed599820e34.jpg@100w_100h.webp",
			keywords: ["互动抽奖 #女神异闻录", "#女神异闻录", "#解构愤怒的骇客#", "P5X", "P5R", "佐原双叶", "雨宫莲", "新岛真", "坂本龙司", "摩尔加纳"],
			followings: [
				1606210274, // 女神异闻录夜幕魅影官方号的 UID
			]
		},
		{
			displayName: "MyGO/AveMujica",
			displayIcon: "https://i0.hdslb.com/bfs/face/5f70adc443b0739c237847ef29acaea07a13db71.jpg@100w_100h.webp",
			keywords: ["MyGo!!!!!", "MyGo", "mygo", "AveMujica", "Mujica", "avemujica", "mujica", "母鸡卡", "阿瓦母鸡卡", "高松灯", "千早爱音", "要乐奈", "长崎爽世", "长崎素世", "椎名立希", "丰川祥子", "若叶睦", "偷摸零", "阿侬酱", "长期素食", "三角初华", "八幡海铃", "祐天寺若麦"],
			followings: [
				1459104794, // MyGO_AveMujica
				304107221 // BanGDream_MyGO
			],
		},
		{
			displayName: "GBC",
			displayIcon: "哭",
			keywords: ["GirlsBandCry", "GIRLSBANDCRY", "girlsbandcry", "girls band cry", "Girls Band Cry", "GBC", "gbc", "哭泣少女乐队", "少女乐队哭", "井芹仁菜", "河原木桃香", "安和昴", "海老冢智", "RUPA", "有刺无刺"],
		},
		{
			displayName: "孤独摇滚",
			displayIcon: "孤",
			keywords: ["孤独摇滚！", "BOCCHI THE ROCK!", "ぼっち・ざ・ろっく！", "后藤独", "伊地知虹夏", "山田凉", "喜多郁代", "纽带乐队", "结束乐队", "結束バンド", "波奇酱", "小孤独"],
		},
		{
			displayName: "黑神话: 悟空",
			displayIcon: "https://i0.hdslb.com/bfs/face/5fdac7d9820175f5f0ae1b6c33968bb8f64cc82c.jpg@100w_100h.webp",
			keywords: ["#六样情#", "黑神话：悟空", "黑神话: 悟空", "黑神话:悟空", "黑神话·悟空", "黑神话悟空", "Black Myth: Wukong", "Black Myth:Wukong", "黑悟空", "黑吗喽", "黑猴"],
			followings: [
				642389251, // 黑神话悟空官方号的 UID
			]
		},
		{
			displayName: "小马宝莉",
			displayIcon: "https://i0.hdslb.com/bfs/face/7a81dfd45db8333cbbce412b9a93d0f732261dd0.jpg@100w_100h.webp",
			keywords: ["宝莉", "云宝", "碧琪", "萍琪", "暮光", "暮暮", "紫悦", "小蝶", "瑞瑞", "虹林檎", "序蝶", "粉毛组", "图书组"],
			followings: [
				5517794, // WonderLS
				6881238, // PonyDaily
				8346596, // 斯朗Shiron
				12651008, // 虹云彼方
				12719091, // 习成PBU
				14824857, // 丢丢之王
				16497847, // 小杯冠
				18251508, // 千景
				19443010, // CokeCoffee
				21618817, // CNBC马展
				22938997, // 霹雳神偷
				23737695, // 不恰萝卜の兔子
				27708737, // 雅欣妮砸
				28344516, // 中二病大狮子
				29254354, // Tridashie
				32218088, // 紫鬃骊驹
				37479021, // 小马宝莉点播厅
				37719736, // 灵翼Lingyeee|CSBC马展
				38818936, // 荆荆荆竹野
				44134944, // 青焰小马
				44162034, // 玛奇马骑马骑马
				51688809, // Stellar-Windy
				66970100, // LUMO_Xu
				95119610, // 与君醉桃坞
				118936756, // 心军RD
				141792972, // 音灵灵
				143348211, // 暮光闪闪_Twilight
				159413920, // BronyTown
				162857987, // 神通广大的超级闪闪
				173407173, // Mushak植物
				205022800, // 霜月月月月
				291253032, // 魔熠小星星-c-
				299313851, // 荧光_Fluorescence
				306310521, // 幻歌精神状态良好
				319298296, // 小马国男孩
				340472568, // 马圈视野
				346748701, // Twilight-Shimmer
				352400157, // 叶翼叶芝
				359143428, // 赤昧灯辉
				381352558, // TTSS
				381647702, // Coryzen
				401633058, // 短笛横吹1231
				403110171, // 红染之凌
				409790680, // Talirian
				429649720, // White_AL
				442392499, // 友谊俱乐部starlight苍鱼
				475290371, // Douershun
				480137948, // Silvery_SKY
				481261734, // 一只星月star
				485600404, // 御坂美麒
				496801702, // bf官方
				525140745, // Uncle-Chai
				529496831, // Unkinfo_
				536402568, // 糖希酱
				550924902, // 流光叆叇_ふきおくる
				596133695, // 酒不可食用X
				597085888, // Stellar_Dusk暮辰
				606568713, // 费杰龙只会画画
				641391025, // 凝霜cream
				646801310, // cbf重庆马迷嘉年华
				671656021, // 神七233
				695521854, // 凝安---
				1080164448, // LemonCola柠檬可乐
				1100577818, // 苍筤feather
				1117091922, // 神风小马同人绘画
				1122442912, // Viento动画工作室
				1160291544, // ShunHsi瞬息色彩
				1235216769, // MLP-紫悦
				1259597415, // 翠虹-nuyadable
				1355029670, // zyh黑风
				1436757844, // Lydia-Windy
				1584226296, // _海盐気泡水_
				1599773009, // 晴云字幕组
				1625041793, // Eastquestria-东马厂牌
				1630607440, // Fimtale官方
				1676425649, // Starsky_Bearer
				1694237999, // 画马丧志的屑彩梦
				1774687156, // 呆呆猫
				1999706609, // 羽落05
				2052819254, // BladeFeather
				3461563140802631, // hhzzy
				3493080399349765, // 慕芯w
				3493110080342763, // 彩霞闪闪_开学消失版
				3493114880722969, // 泠老师的遗嘱
				3493118047422505, // MLP-Twilight
				3493135629945549, // KARINA_WHITE
				3493293801343294, // 晶云QwQ
				3494365531999068, // ry_Xplosion
				3537122323597967, // 线牌洗衣机
				3546388015089937, // 中央空调tear
				3546559893473298, // 暗冥优莉
				3546588335049207, // 星雪凌晶-Snowy_Twinkle
				3546632490584150, // 涂山-秋卉
			]
		},
		{
			displayName: "孙笑川",
			displayIcon: "https://i0.hdslb.com/bfs/face/946857bdbbe15c419e24a60cda6ae96b2ae348ca.jpg@100w_100h.webp",
			keywords: ["孙笑川", "笑川"],
			followings: [402574397],
		},
		{
			displayName: "电棍otto",
			displayIcon: "♿",
			keywords: ["电棍otto", "otto", "♿", "栗老师", "电棍笑传", "踩背", "踩踩背", "ccb", "CCB"],
			followings: [
				628845081, // 电棍otto
				1071498861, // 栗老师动画教学
				2103512502, // 文梧凤
				494759113, // Dr-山雨欲来
				1728547, // 泠风kaze
			],
		},
		{
			displayName: "涩涩",
			displayIcon: "😍",
			keywords: ["R16", "R18"],
			followings: [
				// 目前先收集这么多，如需完善数据可提 Pull Request 或者 Issues
				3403527, // 蒋七七ChiChan
				10671099, // 蓝纹兔子
				12506114, // 无所事事青叶酱
				17328861, // 御坂猫猫neko
				35347825, // 沉迷吃饭的萧雪
				73491123, // 夜御寒
				138789848, // 铃舟同学吖
				191483432, // gbm白鲸
				233227396, // 叫我长藤就好了
				330657633, // 钉宫草莓
				413417470, // 房房别闹
				1306242888, // 次元与星空之缘
			],
		},
		{
			displayName: "这辈子有了",
			displayIcon: "https://i0.hdslb.com/bfs/emote/63c9d1a31c0da745b61cdb35e0ecb28635675db2.png@100w_100h.webp",
			keywords: ["这辈子有了"],
		},
		{
			displayName: "学生",
			displayIcon: "学",
			keywords: ["班级", "年级", "同学", "小学", "初中", "高中", "中考", "高考", "四六级", "学生党", "不放假", "防沉迷", "上学", "开学", "班里", "班委", "放寒假", "写作业", "学校的", "我们班", "我们老师", "我们学校"],
			keywordsReverse: ["上班", "工作", "领导", "老板", "工位", "公司"]
		},
		{
			displayName: "互助",
			displayIcon: "互",
			keywords: ["互关", "互赞", "回赞", "回关", "不取关", "电磁力互助", "必回", "互相关注", "互相点赞"],
		}
	]

	const checkerSpecial = [
		{
			displayName: "伪成分",
			displayIcon: "🤩",
			reason: "这辈子有了",
		}
	]

	// 加入检测仙家军成分，目前仅支持黑名单和关注列表，数据来源：仙家军成分查询Helper
	xmlhttpRequest({ url: "https://gcore.jsdelivr.net/gh/Darknights1750/XianLists@main/xianLists.json" })
		.then(res => {
			console.log(`【（改）B站成分检测器】即时\n仙家军列表加载完成\n`, res)
			checkers.push({
				displayName: "仙家军",
				displayIcon: "仙",
				blacklist: [...res.xianList, ...res.xianLv1List, ...res.xianLv2List, ...res.xianLv3List],
				followings: [...res.xianList, ...res.xianLv1List, ...res.xianLv2List, ...res.xianLv3List]
			});
		})
		.catch(error => {
			console.error(`【（改）B站成分检测器】即时\n仙家军列表加载失败\n`, error);
		});

	/**
	 * 对输入的UID数字进行排序，并保留注释。
	 * 已暴露到脚本作用域的全局窗口，您可直接在浏览器控制台调用该函数。
	 *
	 * 运行：
	   sort(`1661612, // Hex今天切墙了吗
	   3227461, // 乔伊奥斯托雷
	   115545042, // 梅西杰的西餐厅
	   3933162,
	   140403337, // 塔塔kira
	   98991109, // 角社区
	   17098554, // 豆豆最棒
	   1932102,
	   415890389 // 高板大芥末`)
	 * 输出：
	   1661612, // Hex今天切墙了吗
	   1932102,
	   3227461, // 乔伊奥斯托雷
	   3933162,
	   17098554, // 豆豆最棒
	   98991109, // 角社区
	   115545042, // 梅西杰的西餐厅
	   140403337, // 塔塔kira
	   415890389, // 高板大芥末
	 *
	 * @param {string} inputText - 输入包含数字和注释的文本。
	 * @returns {string} - 排序后的文本，保留了注释。
	 */
	unsafeWindow.sort = function (inputText) {
		const regex = /(\d+),?\s*(?:\/\/(.*))?/g;
		let entries = [];
		let match;
		let seenNumbers = new Set(); // 用于记录已经出现的数字

		while ((match = regex.exec(inputText)) !== null) {
			let number = parseInt(match[1]);
			if (!seenNumbers.has(number)) { // 如果这个数字还没有出现过
				entries.push({
					number: number,
					comment: match[2] ? match[2].trim() : '' // 处理可能不存在的注释
				});
				seenNumbers.add(number); // 将这个数字标记为已出现
			}
		}

		entries.sort((a, b) => a.number - b.number);

		let sortedText = entries.map(entry => entry.comment
			? `${entry.number}, // ${entry.comment}`
			: `${entry.number},`).join('\n');

		console.log(sortedText);
	}

	unsafeWindow.getc = function () {
		let text
		for (let item of checkers) {
			text = (text ? text : "") + item.displayName + "、"
		}
		for (let item of checkerSpecial) {
			text = (text ? text : "") + item.displayName + "、"
		}
		console.log(`【（改）B站成分检测器】即时\n${text.slice(0, -1)}`)
	}

	/**
	 * 防止代码因其他原因被执行多次
	 * 这段代码出自 Via轻插件，作者谷花泰
	 */
	let key = encodeURIComponent('（改）B站成分检测器:主代码');
	if (window[key]) return;
	window[key] = true;
	console.log("【（改）B站成分检测器】即时\n运行中...")

	// 创建样式
	addCheckerStyle(false);

	// 空间动态api
	const cardApiUrl = 'https://api.bilibili.com/x/web-interface/card?mid='
	const dynamicApiUrl = 'https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space?host_mid='
	const followingApiUrl = 'https://api.bilibili.com/x/relation/followings?vmid='

	const searchIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></path></svg>`
	const checkButton = `<div class="composition-checkable"><div class="composition-badge-control"><span class="composition-name-control" title="点击查询用户成分">${searchIcon}</span></div></div>`
	const copyIcon = `<svg width="12" height="12" viewBox="0 0 17 17" fill="none"><path d="M0 0H10V4H4V10H0V0Z" fill="currentColor"/><path d="M16 6H6V16H16V6Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></path></svg>`
	const tickIcon = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><g><polyline points="3.7 14.3 9.6 19 20.3 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`
	const copyButton = `<div class="composition-copy"><div class="composition-badge-control"><span class="composition-name-control" title="点击复制用户规则">${copyIcon}</span></div></div>`
	const checked = {}
	const checking = {}
	let dom = ''

	// 支持 pakku? (建议开启“隐藏用户成分名称”)
	/*waitForKeyElements('.pakku-panel-footer div p a[href]', (element) => {
		if (element && element.length > 0) {
			let button = $(checkButton)
			let initialText = element.text().trim();

			if (element.parent().find(".composition-checkable, .composition-checked, .composition-copy"))
				element.parent().find(".composition-checkable, .composition-checked, .composition-copy").remove()

			element.parent().after(button);
			button.css({ "margin": "8px 5px" });
			button.one('click', function () {
				checkComposition(element.text().trim().split(' ').shift(), element.text().trim().split(' ').pop(), element, button.find(".composition-name-control"), element.parent(), (GM_getValue('Lite') === 'true' ? { "margin": "10px 0 10px 8px" } : { "margin": "10px 0" }))
			})
			button.click()

			// 可能只会有一个元素，所以监听用户名刷新
			element.on('DOMSubtreeModified', function () {
				let button = $(checkButton)
				let currentText = $(this).text().trim();
				if (currentText === initialText) return;

				initialText = currentText;
				if (element.parent().find(".composition-checkable, .composition-checked, .composition-copy"))
					element.parent().find(".composition-checkable, .composition-checked, .composition-copy").remove()

				button.css({ "margin": "8px 5px" });
				button.off('click').one('click', function () {
					checkComposition(element.text().trim().split(' ').shift(), element.text().trim().split(' ').pop(), element, button.find(".composition-name-control"), element.parent(), (GM_getValue('Lite') === 'true' ? { "margin": "10px 0 10px 8px" } : { "margin": "10px 0" }))
				})

				element.after(button);
				button.click()
			})
		}
	})*/

	// 2024版评论
	waitForKeyElements("div#info div#user-name[data-user-profile-id]", (element) => {
		if (element && element.length > 0) {
			let style = document.createElement("style");
			style.rel = 'stylesheet';
			style.innerHTML = addCheckerStyle(true)
			element.before(style)

			let button = $(checkButton)
			element.after(button)
			button.one('click', function () {
				checkComposition(element.attr("data-user-profile-id"), "", element, button.find(".composition-name-control"), element, '')
			})
			if (GM_getValue('Auto') === 'true') button.click()

			let copy = $(copyButton)
			if (copyName === true) element.next().after(copy)
			copy.on('click', function () {
				let eltx = element.text().trim()
				let name = eltx.charAt(0) == "@" ? eltx.substring(1) : eltx
				let id = element.attr("data-user-profile-id")
				let info = `${id}, // ${name}`
				GM_setClipboard(info)
				copy.find('svg').replaceWith(tickIcon)
				setTimeout(function () {
					copy.find('svg').replaceWith(copyIcon)
				}, 2000)
			})
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
			button.one('click', function () {
				checkComposition(element.attr("data-user-profile-id"), "", element, button.find(".composition-name-control"), element, '')
			})
			if (GM_getValue('Auto') === 'true') button.click()

			let copy = $(copyButton)
			if (copyName === true) element.next().after(copy)
			copy.on('click', function () {
				let eltx = element.text().trim()
				let name = eltx.charAt(0) == "@" ? eltx.substring(1) : eltx
				let id = element.attr("data-user-profile-id")
				let info = `${id}, // ${name}`
				GM_setClipboard(info)
				copy.find('svg').replaceWith(tickIcon)
				setTimeout(function () {
					copy.find('svg').replaceWith(copyIcon)
				}, 2000)
			})
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

			if (element.parent().parent().parent().find(".composition-checkable, .composition-checked, .composition-copy"))
				element.parent().parent().parent().find(".composition-checkable, .composition-checked, .composition-copy").remove()

			button.css({ "margin": "8px 5px" });
			button.one('click', function () {
				checkComposition(element.parent().parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1], "", element, button.find(".composition-name-control"), element.parent().parent(), (GM_getValue('Lite') === 'true' ? { "margin": "2px 0 10px 8px" } : { "margin": "0 0 10px" }))
			})
			element.parent().parent().after(button);
			if (GM_getValue('Auto') === 'true') button.click()

			let copy = $(copyButton)
			copy.css({ "margin": "8px 5px" });
			if (copyName === true) element.parent().parent().next().after(copy)
			copy.on('click', function () {
				let eltx = element.text().trim()
				let name = eltx.charAt(0) == "@" ? eltx.substring(1) : eltx
				let id = element.parent().parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1]
				let info = `${id}, // ${name}`
				GM_setClipboard(info)
				copy.find('svg').replaceWith(tickIcon)
				setTimeout(function () {
					copy.find('svg').replaceWith(copyIcon)
				}, 2000)
			})

			// jQuerty 不支持监听 shadowRoot DOM 元素变化，所以这里用原生 MutationObserver 来监听元素变化
			const observer = new MutationObserver(mutations => {
				for (let mutation of mutations) {
					if (mutation.type === 'childList' || mutation.type === 'characterData') {
						let button = $(checkButton)
						let currentText = element.text().trim();
						if (currentText === initialText) return;

						initialText = currentText;
						if (element.parent().parent().parent().find(".composition-checkable, .composition-checked, .composition-copy"))
							element.parent().parent().parent().find(".composition-checkable, .composition-checked, .composition-copy").remove();

						button.css({ "margin": "8px 5px" });
						button.off('click').one('click', function () {
							checkComposition(element.parent().parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1], "", element, button.find(".composition-name-control"), element.parent().parent(), (GM_getValue('Lite') === 'true' ? { "margin": "2px 0 10px 8px" } : { "margin": "0 0 10px" }));
						});

						element.parent().parent().after(button);
						if (GM_getValue('Auto') === 'true') button.click();

						let copy = $(copyButton)
						copy.css({ "margin": "8px 5px" });
						if (copyName === true) element.parent().parent().next().after(copy)
						copy.off('click').on('click', function () {
							let eltx = element.text().trim()
							let name = eltx.charAt(0) == "@" ? eltx.substring(1) : eltx
							let id = element.parent().parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1]
							let info = `${id}, // ${name}`
							GM_setClipboard(info)
							copy.find('svg').replaceWith(tickIcon)
							setTimeout(function () {
								copy.find('svg').replaceWith(copyIcon)
							}, 2000)
						})
					}
				};
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
			button.one('click', function () {
				checkComposition(element.attr("data-user-id"), "", element, button.find(".composition-name-control"), element, '')
			})
			if (GM_getValue('Auto') === 'true') button.click()

			let copy = $(copyButton)
			if (copyName === true) element.next().after(copy)
			copy.on('click', function () {
				let eltx = element.text().trim()
				let name = eltx.charAt(0) == "@" ? eltx.substring(1) : eltx
				let id = element.attr("data-user-id")
				let info = `${id}, // ${name}`
				GM_setClipboard(info)
				copy.find('svg').replaceWith(tickIcon)
				setTimeout(function () {
					copy.find('svg').replaceWith(copyIcon)
				}, 2000)
			})
		}
	});

	// 2022版子评论
	waitForKeyElements("div > div.sub-user-info div.sub-user-name[data-user-id]", (element) => {
		if (element && element.length > 0) {
			let button = $(checkButton)
			element.after(button)
			button.one('click', function () {
				checkComposition(element.attr("data-user-id"), "", element, button.find(".composition-name-control"), element, '')
			})
			if (GM_getValue('Auto') === 'true') button.click()

			let copy = $(copyButton)
			if (copyName === true) element.next().after(copy)
			copy.on('click', function () {
				let eltx = element.text().trim()
				let name = eltx.charAt(0) == "@" ? eltx.substring(1) : eltx
				let id = element.attr("data-user-id")
				let info = `${id}, // ${name}`
				GM_setClipboard(info)
				copy.find('svg').replaceWith(tickIcon)
				setTimeout(function () {
					copy.find('svg').replaceWith(copyIcon)
				}, 2000)
			})
		}
	});

	// 2022版含@的评论
	waitForKeyElements("span a.jump-link.user[data-user-id]", (element) => {
		if (element && element.length > 0) {
			let button = $(checkButton)
			element.after(button)
			button.one('click', function () {
				checkComposition(element.attr("data-user-id"), "", element, button.find(".composition-name-control"), element, '')
			})
			if (GM_getValue('Auto') === 'true') button.click()

			let copy = $(copyButton)
			if (copyName === true) element.next().after(copy)
			copy.on('click', function () {
				let eltx = element.text().trim()
				let name = eltx.charAt(0) == "@" ? eltx.substring(1) : eltx
				let id = element.attr("data-user-id")
				let info = `${id}, // ${name}`
				GM_setClipboard(info)
				copy.find('svg').replaceWith(tickIcon)
				setTimeout(function () {
					copy.find('svg').replaceWith(copyIcon)
				}, 2000)
			})
		}
	});

	// 2022版用户卡片
	waitForKeyElements("div.user-card div.card-content div.card-user-info a.card-user-name", (element) => {
		if (element && element.length > 0 && element.parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1].length > 0) {
			let button = $(checkButton)
			element.parent().parent().after(button);
			button.css({ "margin": "8px 5px" });
			button.one('click', function () {
				checkComposition(element.parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1], "", element, button.find(".composition-name-control"), element.parent().parent(), (GM_getValue('Lite') === 'true' ? { "margin": "2px 0 10px 8px" } : { "margin": "0 0 10px" }))
			})
			if (GM_getValue('Auto') === 'true') button.click()

			let copy = $(copyButton)
			copy.css({ "margin": "8px 5px" });
			if (copyName === true) element.parent().parent().next().after(copy)
			copy.on('click', function () {
				let eltx = element.text().trim()
				let name = eltx.charAt(0) == "@" ? eltx.substring(1) : eltx
				let id = element.parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1]
				let info = `${id}, // ${name}`
				GM_setClipboard(info)
				copy.find('svg').replaceWith(tickIcon)
				setTimeout(function () {
					copy.find('svg').replaceWith(copyIcon)
				}, 2000)
			})
		}
	});

	// 2022版动态用户卡片
	waitForKeyElements("div.bili-user-profile div.bili-user-profile-view div.bili-user-profile-view__info div.bili-user-profile-view__info__header a.bili-user-profile-view__info__uname", (element) => {
		if (element && element.length > 0 && element.parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1].length > 0) {
			let button = $(checkButton)
			let initialText = element.text().trim();

			if (element.parent().parent().parent().parent().find(".composition-checkable, .composition-checked, .composition-copy"))
				element.parent().parent().parent().parent().find(".composition-checkable, .composition-checked, .composition-copy").remove()

			element.parent().parent().parent().after(button);
			button.css({ "margin": "8px 5px" });
			button.one('click', function () {
				checkComposition(element.parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1], "", element, button.find(".composition-name-control"), element.parent().parent().parent(), (GM_getValue('Lite') === 'true' ? { "margin": "2px 0 10px 8px" } : { "margin": "0 0 10px" }))
			})
			if (GM_getValue('Auto') === 'true') button.click()

			let copy = $(copyButton)
			if (copyName === true) element.parent().parent().parent().next().after(copy)
			copy.css({ "margin": "8px 5px" });
			copy.on('click', function () {
				let eltx = element.text().trim()
				let name = eltx.charAt(0) == "@" ? eltx.substring(1) : eltx
				let id = element.parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1]
				let info = `${id}, // ${name}`
				GM_setClipboard(info)
				copy.find('svg').replaceWith(tickIcon)
				setTimeout(function () {
					copy.find('svg').replaceWith(copyIcon)
				}, 2000)
			})

			// 可能只会有一个元素，所以监听用户名刷新
			element.on('DOMSubtreeModified', function () {
				let button = $(checkButton)
				let currentText = $(this).text().trim();
				if (currentText === initialText) return;

				initialText = currentText;
				if (element.parent().parent().parent().parent().find(".composition-checkable, .composition-checked, .composition-copy"))
					element.parent().parent().parent().parent().find(".composition-checkable, .composition-checked, .composition-copy").remove()

				button.css({ "margin": "8px 5px" });
				button.off('click').one('click', function () {
					checkComposition(element.parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1], "", element, button.find(".composition-name-control"), element.parent().parent().parent(), (GM_getValue('Lite') === 'true' ? { "margin": "2px 0 10px 8px" } : { "margin": "0 0 10px" }))
				})

				element.parent().parent().parent().after(button);
				if (GM_getValue('Auto') === 'true') button.click()

				let copy = $(copyButton)
				if (copyName === true) element.parent().parent().parent().next().after(copy)
				copy.css({ "margin": "8px 5px" });
				copy.off('click').on('click', function () {
					let eltx = element.text().trim()
					let name = eltx.charAt(0) == "@" ? eltx.substring(1) : eltx
					let id = element.parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1]
					let info = `${id}, // ${name}`
					GM_setClipboard(info)
					copy.find('svg').replaceWith(tickIcon)
					setTimeout(function () {
						copy.find('svg').replaceWith(copyIcon)
					}, 2000)
				})
			})
		}
	});

	// 旧版评论
	waitForKeyElements("div.reply-wrap > div > div.user a.name[data-usercard-mid]", (element) => {
		if (element && element.length > 0) {
			let button = $(checkButton)
			element.after(button)
			button.one('click', function () {
				checkComposition(element.attr("data-usercard-mid"), "", element, button.find(".composition-name-control"), element, '')
			})
			if (GM_getValue('Auto') === 'true') button.click()

			let copy = $(copyButton)
			if (copyName === true) element.next().after(copy)
			copy.on('click', function () {
				let eltx = element.text().trim()
				let name = eltx.charAt(0) == "@" ? eltx.substring(1) : eltx
				let id = element.attr("data-usercard-mid")
				let info = `${id}, // ${name}`
				GM_setClipboard(info)
				copy.find('svg').replaceWith(tickIcon)
				setTimeout(function () {
					copy.find('svg').replaceWith(copyIcon)
				}, 2000)
			})
		}
	});

	// 旧版用户卡片
	waitForKeyElements("div.user-card div.info p.user a.name", (element) => {
		if (element && element.length > 0 && element.parent().parent().parent().find("a.like").attr("mid")) {
			let button = $(checkButton)
			element.parent().parent().parent().find("div.btn-box").after(button);
			button.css({ "margin": "8px 5px" });
			button.one('click', function () {
				checkComposition(element.parent().parent().parent().find("a.like").attr("mid"), "", element, button.find(".composition-name-control"), element.parent().parent().parent().find("div.btn-box"), (GM_getValue('Lite') === 'true' ? { "margin": "2px 0 10px 8px" } : { "margin": "0 0 10px" }))
			})
			if (GM_getValue('Auto') === 'true') button.click()

			let copy = $(copyButton)
			copy.css({ "margin": "8px 5px" });
			if (copyName === true) element.parent().parent().parent().find("div.btn-box").next().after(copy)
			copy.on('click', function () {
				let eltx = element.text().trim()
				let name = eltx.charAt(0) == "@" ? eltx.substring(1) : eltx
				let id = element.parent().parent().parent().find("a.like").attr("mid")
				let info = `${id}, // ${name}`
				GM_setClipboard(info)
				copy.find('svg').replaceWith(tickIcon)
				setTimeout(function () {
					copy.find('svg').replaceWith(copyIcon)
				}, 2000)
			})
		}
	});

	// 用户中心 关注列表、粉丝列表
	waitForKeyElements("div.content a.title span.fans-name", (element) => {
		if (element && element.length > 0) {
			if (element.parent().parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1].length > 0) {
				let button = $(checkButton)
				button.css({ "overflow": "hidden", "margin-bottom": "10px" });
				element.parent().after(button)
				button.one('click', function () {
					checkComposition(element.parent().parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1], "", element, button.find(".composition-name-control"), element.parent(), { "overflow": "hidden", "margin-bottom": "10px" })
				})
				if (GM_getValue('Auto') === 'true') button.click()

				let copy = $(copyButton)
				copy.css({ "overflow": "hidden", "margin-bottom": "10px" });
				if (copyName === true) element.parent().next().after(copy)
				copy.on('click', function () {
					let eltx = element.text().trim()
					let name = eltx.charAt(0) == "@" ? eltx.substring(1) : eltx
					let id = element.parent().parent().find('a[href*="space.bilibili.com"]').attr('href').match(/space\.bilibili\.com\/(\d+)/)[1]
					let info = `${id}, // ${name}`
					GM_setClipboard(info)
					copy.find('svg').replaceWith(tickIcon)
					setTimeout(function () {
						copy.find('svg').replaceWith(copyIcon)
					}, 2000)
				})
			}
		}
	});

	// 旧版包含@的评论
	waitForKeyElements("div.reply-wrap > div > p.text a[data-usercard-mid]", (element) => {
		if (element && element.length > 0) {
			let button = $(checkButton)
			element.after(button)
			button.one('click', function () {
				checkComposition(element.attr("data-usercard-mid"), "", element, button.find(".composition-name-control"), element, '')
			})
			if (GM_getValue('Auto') === 'true') button.click()

			let copy = $(copyButton)
			if (copyName === true) element.next().after(copy)
			copy.on('click', function () {
				let eltx = element.text().trim()
				let name = eltx.charAt(0) == "@" ? eltx.substring(1) : eltx
				let id = element.attr("data-usercard-mid")
				let info = `${id}, // ${name}`
				GM_setClipboard(info)
				copy.find('svg').replaceWith(tickIcon)
				setTimeout(function () {
					copy.find('svg').replaceWith(copyIcon)
				}, 2000)
			})
		}
	});

	// 旧版 回复、纯@评论
	waitForKeyElements("span.text-con a[data-usercard-mid]", (element) => {
		if (element && element.length > 0) {
			let button = $(checkButton)
			element.after(button)
			button.one('click', function () {
				checkComposition(element.attr("data-usercard-mid"), "", element, button.find(".composition-name-control"), element, '')
			})
			if (GM_getValue('Auto') === 'true') button.click()

			let copy = $(copyButton)
			if (copyName === true) element.next().after(copy)
			copy.on('click', function () {
				let eltx = element.text().trim()
				let name = eltx.charAt(0) == "@" ? eltx.substring(1) : eltx
				let id = element.attr("data-usercard-mid")
				let info = `${id}, // ${name}`
				GM_setClipboard(info)
				copy.find('svg').replaceWith(tickIcon)
				setTimeout(function () {
					copy.find('svg').replaceWith(copyIcon)
				}, 2000)
			})
		}
	});

	// 用户搜索结果
	waitForKeyElements("li.user-item div.info-wrap div.headline a[href]", (element) => {
		if (element && element.length > 0 && element.attr('href').match(/space\.bilibili\.com\/(\d+)/)[1].length > 0) {
			let button = $(checkButton)
			element.parent().children().last().after(button)
			button.one('click', function () {
				checkComposition(element.attr('href').match(/space\.bilibili\.com\/(\d+)/)[1], "", element, button.find(".composition-name-control"), element.parent().children().last(), '')
			})
			if (GM_getValue('Auto') === 'true') button.click()

			let copy = $(copyButton)
			if (copyName === true) element.parent().children().last().after(copy)
			copy.on('click', function () {
				let eltx = element.text().trim()
				let name = eltx.charAt(0) == "@" ? eltx.substring(1) : eltx
				let id = element.attr('href').match(/space\.bilibili\.com\/(\d+)/)[1]
				let info = `${id}, // ${name}`
				GM_setClipboard(info)
				copy.find('svg').replaceWith(tickIcon)
				setTimeout(function () {
					copy.find('svg').replaceWith(copyIcon)
				}, 2000)
			})
		}
	});

	// 直播间弹幕列表评论
	waitForKeyElements("div.chat-items div.chat-item", (element) => {
		if (element && element.length > 0) {
			let point = $(`<span class="chat-item">👆</span>`)
			element.after(point)
			let button = $(checkButton)
			element.next().after(button)
			button.one('click', function () {
				checkComposition(element.attr("data-uid"), element.attr("data-uname"), element, button.find(".composition-name-control"), element, '')
				point.remove()
			})
			if (GM_getValue('Auto') === 'true') button.click()

			let copy = $(copyButton)
			if (copyName === true) element.next().next().after(copy)
			copy.on('click', function () {
				let name = element.attr("data-uname")
				let id = element.attr("data-uid")
				let info = `${id}, // ${name}`
				GM_setClipboard(info)
				copy.find('svg').replaceWith(tickIcon)
				setTimeout(function () {
					copy.find('svg').replaceWith(copyIcon)
				}, 2000)
			})

			// 众生平等，删掉除了名字和文本之外的元素
			// element.find('.danmaku-item-left').children(':not(.common-nickname-wrapper, .action, [class*="gift-"], [class^="composition"])').remove();
			// element.children(':not(.common-nickname-wrapper, .action, [class*="danmaku-item-"], [class*="gift-"], [class*="dp-i"], [class^="composition"])').remove();
		}
	});

	// 移除掉不显示内容的 .level-link 来确保评论与按钮的间隔正常
	waitForKeyElements("a.level-link", (element) => {
		if (element.attr('href') && element.attr('href').includes('help.html') && element.find('img').length === 0) {
			element.remove();
		}
	})

	// 添加标签
	function installComposition(rule, elemload, eleminst, elemcss) {
		let badge = $(`<div class="composition-checked" title="此图标为“${rule.displayName}”，点击查看已识别用户" ${GM_getValue('Lite') === 'true' ? 'style="margin:2px 0 2px 8px!important"' : ""}><div class="composition-badge">
			<span class="composition-name" ${GM_getValue('Lite') === 'true' ? 'style="padding:0px!important;"' : ""}>${GM_getValue('Lite') === 'true' ? "" : rule.displayName}</span>
			${rule.displayIcon ? (
				rule.displayIcon.match("https:") ? `<img referrer="no-referrer" referrerPolicy="no-referrer" src="${rule.displayIcon}" class="composition-icon" ${GM_getValue('Lite') === 'true' ? 'style="margin-right:-6px!important;"' : ""}>` :
					rule.displayIcon.match("http:") ? `<img referrer="no-referrer" referrerPolicy="no-referrer" src="${rule.displayIcon}" class="composition-icon" ${GM_getValue('Lite') === 'true' ? 'style="margin-right:-6px!important;"' : ""}>` :
						rule.displayIcon.match("data:") ? `<img src="${rule.displayIcon}" class="composition-icon" ${GM_getValue('Lite') === 'true' ? 'style="margin-right:-6px!important;"' : ""}>` :
							`<span class="composition-icon" ${GM_getValue('Lite') === 'true' ? 'style="margin-right:-6px!important;"' : ""}>${rule.displayIcon}</span>`
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
	function checkComposition(id, elemname, element, elemload, eleminst, elemcss) {
		// 用户名称获取
		let eltx = element.text().trim()
		let name = elemname || (eltx.charAt(0) == "@" ? eltx.substring(1) : eltx)

		elemload.text('…')
		elemload.attr('title', '正在查询中，等下吧...')

		if (checked[id] != undefined) {
			let found = checked[id]
			if (found.length > 0) {
				for (let rule of found) {
					installComposition(rule, elemload, eleminst, elemcss)
				}
				console.log(`【（改）B站成分检测器】缓存\n检测到 ${name} ${id} 的成分为\n`, found.map(it => ({ name: it.displayName, reason: it.reason, item: it.item, keyword: it.keyword, uid: it.uid, full: it.full })))
			} else {
				console.log(`【（改）B站成分检测器】缓存\n检测到 ${name} ${id} 的成分为 无`)
				elemload.parent().parent().attr('class', 'composition-checked');
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
			detectComposition(id, name)
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
							<div style="margin:0;font-size:large;">${name}</div>
							<div id="tips" style="color: #fb7299;font-size:medium;"><a href="https://space.bilibili.com/${id}/" target="_blank" style="color: #fb7299;">UID ${id}</a></div>
							`;
						for (let i = 0; i < value.length; i++) {
							let reason = value[i].keyword || value[i].uid
							let icon = value[i].img ? (
								value[i].img.match("https:") ? `<img referrer="no-referrer" referrerPolicy="no-referrer" src="${value[i].img}" class="composition-icon">` :
									value[i].img.match("http:") ? `<img referrer="no-referrer" referrerPolicy="no-referrer" src="${value[i].img}" class="composition-icon">` :
										value[i].img.match("data:") ? `<img src="${value[i].img}" class="composition-icon">` :
											`<span class="composition-icon">${value[i].img}</span>`
							) : ''
							dom += `
							<div style="margin-top: 10px;">
								<div class="composition-badge" style="cursor: default!important;">
									<span class="composition-name">${value[i].name}</span>
									${icon}
								</div>
								<div style="margin-top: 8px;">
									<div class="composition-name">原因：${value[i].reason}</div>
									<div class="composition-name">匹配：${reason}</div>
									${typeof value[i].item === 'string' ? '<div class="composition-name">内容：' + value[i].item + '</div>' : ''}
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
						if (found.length > 0) found.reverse();
						for (let elements of checking[id]) {
							if (found.length > 0) {
								for (let rule of found) {
									installComposition(rule, elements.elemload, elements.eleminst, elements.elemcss);
								}
							} else {
								elements.elemload.parent().parent().attr('class', 'composition-checked');
								elements.elemload.text('无');
								elements.elemload.attr('title', '点击查看已查询过的用户');
								elements.elemload.on('click', function () {
									showAllUser();
								});
							}
						}
					} else {
						for (let elements of checking[id]) {
							elements.elemload.parent().parent().attr('class', 'composition-checked');
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
						elements.elemload.parent().parent().one('click', function () {
							checkComposition(id, name, elements.element, elements.elemload, elements.eleminst, elements.elemcss)
						})
					}
					delete checking[id];
				});
		}
	}
	dom = `<div>
	<div id="tips">因判断关键词较为广泛，可能会出现误杀的现象</div>
	<div id="tips">脚本还在测试阶段，喜欢的话还请留下你的评论</div>
	<div id="tips">Ctrl+F 可以快速在本页中搜索内容</div>
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

	GM_registerMenuCommand("慢速点击已有按钮(少触发风控,不适用新版评论)", () => {
		let timeout = 2000 + (Math.floor(Math.random() * 2000) + 1);
		let count = 0;
		$('.composition-checkable').each(function () {
			let element = $(this);
			count++;
			setTimeout(function () {
				element.click();
			}, count * timeout);
		});
	});

	GM_registerMenuCommand("快速点击已有按钮(易触发风控,不适用新版评论)", () => {
		let timeout = 1000;
		let count = 0;
		$('.composition-checkable').each(function () {
			let element = $(this);
			count++;
			setTimeout(function () {
				element.click();
			}, count * timeout);
		});
	});

	function request(option) {
		return new Promise((resolve, reject) => {
			const { url, method = 'GET', headers = {}, body } = option;
	
			fetch(url, {
				method,
				headers,
				body,
				credentials: 'include',
			})
				.then(async (response) => {
					if (!response.ok) {
						reject(new Error(`HTTP error! Status: ${response.status}`));
						return;
					}
					try {
						const res = await response.json();
						resolve(res);
					} catch (err) {
						reject(new Error('Failed to parse JSON response: ' + err.message));
					}
				})
				.catch((error) => {
					reject(error);
				});
		});
	}

	function xmlhttpRequest(option) {
		return new Promise((resolve, reject) => {
			let httpRequest = typeof GM_xmlhttpRequest !== "undefined" ? GM_xmlhttpRequest : GM.xmlHttpRequest;
			httpRequest({
				method: 'GET',
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
			message.info(`已禁用 ${tips}<br/>新内容已生效，旧内容刷新后生效。`, true);
		} else {
			GM_setValue(conf_name, 'true');
			message.info(`已启用 ${tips}<br/>新内容已生效，旧内容刷新后生效。`, true);
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
				return new Promise(async (resolve) => {
					// 获取用户卡片
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
							detectComposition(card.mid, card.name)
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
							value[i].img.match("http:") ? `<img referrer="no-referrer" referrerPolicy="no-referrer" src="${value[i].img}" class="composition-icon">` :
								value[i].img.match("data:") ? `<img src="${value[i].img}" class="composition-icon">` :
									`<span class="composition-icon">${value[i].img}</span>`
					) : ''
					final += `
					<div style="margin-top: 25px;">
						<div class="composition-badge">
							<span class="composition-name">${value[i].name}</span>
							${icon}
						</div>
						<div style="margin-top: 12px;">
							<div class="composition-name">原因：${value[i].reason}</div>
							<div class="composition-name">匹配：${reason}</div>
							${typeof value[i].item === 'string' ? '<div class="composition-name">内容：' + value[i].item + '</div>' : ''}
						</div>
					</div>`;
				}
				Swal.fire({
					title: info.name,
					imageUrl: info.face,
					imageAlt: `${info.name}的头像`,
					imageWidth: 200,
					imageHeight: 200,
					html: `<div>
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

	if (GM_getValue('Lite') === 'true') {
		GM_registerMenuCommand('隐藏用户成分名称(仅显示图片)：✅ 已启用', function () {
			setting('Lite', '隐藏用户成分名称')
		});
	} else {
		GM_registerMenuCommand('隐藏用户成分名称(仅显示图片)：❌ 已禁用', function () {
			setting('Lite', '隐藏用户成分名称')
		});
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
		$('body').before(style);
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
			.swal2-container {z-index: 1145141919810;}
			`;
		let bilicss = `
			[class^="composition-c"] {
				display: inline-block !important;
				cursor: pointer !important;
			}

			.composition-name-control svg {
				vertical-align: middle !important;
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
				background: #574AB830 !important;
				border-radius: 10px !important;
				margin: 0 0 0 6px !important;
				font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;
			}

			.composition-name-control {
				line-height: 13px !important;
				font-size: 12px !important;
				color: #7367F0 !important;
				padding: 2px 8px !important;
			}

			/* 调整下评论中的粉丝勋章部分，防止按不到按钮 */
			.sailing {
				z-index: -1 !important;
			}
			`;
		if (text === true) return bilicss;

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

	function detectComposition(id, name) {
		return new Promise(async (resolve, reject) => {
			try {
				// 存储检测结果的数组
				let found = [];
				// 存储错误的数组
				let errors = [];

				// 设定请求
				async function followingRequest() {
					let currentPage = 1, maxPages = 2, pageSize, totalPages, totalFollowings, fetchedFollowings = [];
					while (true) {
						try {
							console.log(`【（改）B站成分检测器】即时\n正在获取 ${name} ${id} 关注列表的第 ${currentPage} 页`);

							// 发起请求
							let followingContent = await request({
								url: `${followingApiUrl}${id}&pn=${currentPage}`,
								headers: {
									'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
								},
							});

							if (followingContent.code === 0) {
								let following = followingContent.data.list.map(it => it.mid);
								fetchedFollowings = fetchedFollowings.concat(following);

								if (currentPage === 1) {
									totalFollowings = followingContent.data.total; // 获取关注总数
									if (totalFollowings === 0) break; // 啥都没关注时，直接结束
									pageSize = followingContent.data.list.length; // 获取每页数量
									totalPages = Math.min(Math.ceil(totalFollowings / pageSize), maxPages);// 先得到 大致页数 并与 最多可获取页数 对比然后取其中最小数
									if (totalPages === 1) break; // 只有一页时，直接结束
								}
								if (currentPage >= totalPages) break; // 达到最大页数时结束
								currentPage++; // 获取下一页
							} else if (followingContent.code === 22115) {
								console.warn(`【（改）B站成分检测器】即时\n获取 ${name} ${id} 关注列表失败，对方已关闭展示关注列表，错误码：${followingContent.code}`);
								break;
							} else if (followingContent.code === -352) {
								console.error(`【（改）B站成分检测器】即时\n获取 ${name} ${id} 关注列表的第 ${currentPage} 页失败，已触发哔哩哔哩风控，错误码：${followingContent.code}`);
								errors.push(new CodeError(`获取关注列表的第 ${currentPage} 页失败，已触发哔哩哔哩风控，错误码：${followingContent.code}`));
								break;
							} else {
								if (fetchedFollowings.length > 0) {
									if (debug) console.error(`【（改）B站成分检测器】即时\n获取 ${name} ${id} 关注列表的第 ${currentPage} 页失败，错误码：${followingContent.code}`);
								} else {
									errors.push(new CodeError(`获取关注列表的第 ${currentPage} 页失败，错误码：${followingContent.code}`));
								}
							}
						} catch (error) {
							console.error(`【（改）B站成分检测器】即时\n获取 ${name} ${id} 关注列表的第 ${currentPage} 页时发生错误`, error);
							errors.push(error);
						}
					}
					return fetchedFollowings;
				}

				// 设定请求
				async function dynamicRequest() {
					let currentPage = 1, maxPages = 2, offset, fetchedDynamics = [];
					while (true) {
						try {
							console.log(`【（改）B站成分检测器】即时\n正在获取 ${name} ${id} 空间动态的第 ${currentPage} 页`);

							// 发起请求
							let dynamicContent = await request({
								url: `${dynamicApiUrl}${id}${offset ? ('&offset=' + offset) : ""}`,
								headers: {
									"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
									"referer": "https://www.bilibili.com"
								},
							});

							if (dynamicContent.code === 0) {
								let items = dynamicContent.data.items;
								fetchedDynamics = fetchedDynamics.concat(items);

								offset = dynamicContent.data.offset; // 更新下一页的 offset

								// 是否有更多内容或者已达到最大页数
								if (!dynamicContent.data.has_more || currentPage >= maxPages) {
									break;
								}

								currentPage++; // 获取下一页
							} else if (dynamicContent.code === -352) {
								console.error(`【（改）B站成分检测器】即时\n获取 ${name} ${id} 空间动态的第 ${currentPage} 页失败，已触发哔哩哔哩风控，错误码：${dynamicContent.code}`);
								throw new CodeError(`获取空间动态的第 ${currentPage} 页失败，已触发哔哩哔哩风控，错误码：${dynamicContent.code}`);
							} else {
								if (found.length > 0) {
									if (debug) console.error(`【（改）B站成分检测器】即时\n获取 ${name} ${id} 空间动态的第 ${currentPage} 页失败，错误码：${dynamicContent.code}`);
								} else {
									throw new CodeError(`获取空间动态的第 ${currentPage} 页失败，错误码：${dynamicContent.code}`);
								}
								break;
							}
						} catch (error) {
							if (debug) console.error(`【（改）B站成分检测器】即时\n获取 ${name} ${id} 空间动态的第 ${currentPage} 页失败`, error);
							errors.push(error);
							break;
						}
					}
					return fetchedDynamics;
				}

				console.log(`【（改）B站成分检测器】即时\n正在检查用户 ${name} ${id} 的成分...`);

				// 检查用户是否在黑名单中
				try {
					for (let rule of checkers) {
						if (rule.blacklist) {
							for (let mid of rule.blacklist) {
								mid = mid.toString()
								if (id === mid) {
									found.push({
										...rule,
										reason: `黑名单`,
										keyword: "uid" + mid
									});
								}
							}
						}
					}
				} catch (error) {
					if (debug) console.error(`【（改）B站成分检测器】即时\n获取 ${name} ${id} 是否在命中名单失败`, error);
					errors.push(error);
				}

				// 检查关注列表
				try {
					let following = await followingRequest();
					for (let rule of checkers) {
						if (rule.followings) {
							for (let mid of rule.followings) {
								// 直接比较 mid 和 following 中的值
								if (following.some(f => f === mid)) {
									found.push({
										...rule,
										uid: "uid" + mid,
										reason: `关注列表`
									});
								}
							}
						}
					}
				} catch (error) {
					if (debug) console.error(`【（改）B站成分检测器】即时\n获取 ${name} ${id} 关注列表失败`, error);
					errors.push(error);
				}


				// 检查动态内容
				try {
					let dynamic = await dynamicRequest();
					let dynamicFound = [];
					for (let rule of checkers) {
						if (rule.keywords) {
							for (let i = 0; i < dynamic.length; i++) {
								let item = dynamic[i]
								let text = item.modules?.module_dynamic?.desc?.text;
								let videoTitle = item.modules?.module_dynamic?.major?.archive?.title;
								let videoDesc = item.modules?.module_dynamic?.major?.archive?.desc;
								let orig = item.orig?.modules?.module_dynamic?.desc?.text;
								let origName = item.orig?.modules?.module_author?.name;

								let matchedRule = null;
								let matchedContent = null;
								let matchedReason = '';

								// 检测内容
								if (text && rule.keywords.find(keyword => text.includes(keyword))) {
									matchedRule = rule;
									matchedContent = text;
									matchedReason = `空间动态内容`;
								}

								// 检测转发
								if (orig && rule.keywords.find(keyword => orig.includes(keyword))) {
									matchedRule = rule;
									matchedContent = `${origName} - ${orig}`;
									matchedReason = `空间动态转发`;
								}

								// 检测视频标题
								if (videoTitle && rule.keywords.find(keyword => videoTitle.includes(keyword))) {
									matchedRule = rule;
									matchedContent = videoTitle;
									matchedReason = `空间动态视频标题`;
								}

								// 检测视频简介
								if (videoDesc && rule.keywords.find(keyword => videoDesc.includes(keyword))) {
									matchedRule = rule;
									matchedContent = videoDesc;
									matchedReason = `空间动态视频简介`;
								}

								if (rule.keywordsReverse) {
									// 检测内容
									if (text && rule.keywordsReverse.find(keyword => text.includes(keyword))) {
										continue;
									}
									// 检测转发
									if (orig && rule.keywordsReverse.find(keyword => orig.includes(keyword))) {
										continue;
									}
									// 检测视频标题
									if (videoTitle && rule.keywordsReverse.find(keyword => videoTitle.includes(keyword))) {
										continue;
									}
									// 检测视频简介
									if (videoDesc && rule.keywordsReverse.find(keyword => videoDesc.includes(keyword))) {
										continue;
									}
								}

								if (matchedRule) {
									dynamicFound.push({
										...matchedRule,
										full: item,
										reason: matchedReason,
										item: matchedContent,
										keyword: matchedRule.keywords ? matchedRule.keywords.find(keyword => matchedContent.includes(keyword)) : "无"
									});
								}
							}
						}
					}
					let countMap = {}, finalFound = [];
					// 先统计好重复出现次数
					dynamicFound.forEach(found => {
						let item = found.item;
						countMap[item] = (countMap[item] || 0) + 1;
					});
					// 过滤伪成分
					dynamicFound.forEach(found => {
						let item = found.item;
						if ((countMap[item] >= 5 && item.includes("、")) || countMap[item] > 8) {
							finalFound.push({
								...checkerSpecial[0],
								full: found.full,
								item: found.item,
								keyword: `${found.displayName} - ${found.keyword}`
							})
						} else {
							finalFound.push(found);
						}
					});
					found.push(...finalFound);
				} catch (error) {
					if (debug) console.error(`【（改）B站成分检测器】即时\n获取 ${name} ${id} 空间动态失败`, error);
					errors.push(error);
				}

				if (found.length > 0) {
					// 先按原始排序（按照 checkers 列表来排序）
					found.sort((a, b) => {
						const indexA = checkers.findIndex(c => c.displayName === a.displayName);
						const indexB = checkers.findIndex(c => c.displayName === b.displayName);
						return indexA - indexB;
					});

					// 再按出现次数排序（成分相关程度越高越靠前）
					let nameCount = {};
					found.forEach(item => {
						nameCount[item.displayName] = (nameCount[item.displayName] || 0) + 1;
					});
					found.sort((a, b) => nameCount[b.displayName] - nameCount[a.displayName]);

					console.log(`【（改）B站成分检测器】即时\n检测到 ${name} ${id} 的成分为\n`, found.map(it => ({ name: it.displayName, reason: it.reason, item: it.item, keyword: it.keyword, uid: it.uid, full: it.full })))
				} else if (errors.length > 0) {
					throw new CodeError(errors)
				}

				// 返回检测结果
				resolve(found);
			} catch (error) {
				if (debug) console.error(`【（改）B站成分检测器】即时\n检测 ${name} ${id} 的成分失败`, error);
				reject(error)
			}
		})
	}

	/*--- waitForKeyElements(): 一个实用函数，用于 Greasemonkey 脚本，
	它可以检测和处理AJAX加载的内容。
	此外，此函数还支持在使用 `shadowRoot` 的页面上运行。
	使用示例：
		base.waitForKeyElements (
			"div.comments"
			, commentCallbackFunction
		);
		// 页面特定的函数，用于在找到节点时执行我们想要的操作。
		function commentCallbackFunction (jNode) {
			jNode.text ("waitForKeyElements() 更改了这段注释。");
		}
	重要提示：这个函数需要你的脚本加载了jQuery。
	*/
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
			for (let element of allElements) {
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
			};
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
				}, 500);
				controlObj[controlKey] = timeControl;
			}
		}
		waitForKeyElements.controlObj = controlObj;
	}
})()
// 我们不反对游戏，我们反对的只是逆天人。
