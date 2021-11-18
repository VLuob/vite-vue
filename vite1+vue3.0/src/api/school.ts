import { _Get, _Post } from "../utils/http";
import qs from "qs";
const school = {
   // 统一后台登录
   SsoLogin: (params: any) => _Post("/WebApi/SsoLogin", qs.stringify(params)),
   //退出登录
   Logout: (params: any) => _Get("/WebApi/Logout", params),
   //获取组织机构名称
   GetClassOrgList: (params?: any) => _Get("/ClassInfo/GetClassOrgList", params),
   //获取指定组织机构下班级的列表
   GetClassList: (params: any) => _Get("/ClassInfo/GetClassList", params),
   //获取指定班级的课程列表
   GetClassCourseList: (params: any) => _Get("/ClassInfo/GetClassCourseList", params),
   //获取指定班级的公告
   GetClassAnnoun: (params: any) => _Get("/ClassInfo/GetClassAnnoun", params),
   //获取指定课时详情列表
   GetClassLessonList: (params: any) => _Get("/ClassInfo/GetClassLessonList", params),
   //获取指定班级的学生列表
   GetStudentList: (params: any) => _Get("/ClassInfo/GetStudentList", params),
   //获取指定课时的作业详细信息
   GetLessonWorkInfo: (params: any) => _Get("/ClassInfo/GetLessonWorkInfo", params),
   //通过班级码获取班级信息
   GetClassNameByCode: (params: any) => _Get("/ClassInfo/GetClassNameByCode", params),
   // 申请加入班级
   InviteJoinClass: (params: any) => _Post("/ClassInfo/InviteJoinClass", qs.stringify(params)),
   // 同意或拒绝入班邀请
   JoinClassConfirm: (params: any) => _Post("/ClassInfo/JoinClassConfirm", qs.stringify(params)),
   // 获取我的消息列表
   GetMyMessageList: (params: any) => _Get("/SysMsg/GetMyMessageList", params),
   // 标记已读消息
   MarkMsgRead: (params: any) => _Post("/SysMsg/MarkMsgRead", qs.stringify(params)),
   // 获取未读消息的总数
   GetMyUnreadMsgCount: (params: any) => _Get("/SysMsg/GetMyUnreadMsgCount", params),
   // 删除消息
   DelMsg: (params: any) => _Post("/SysMsg/DelMsg", qs.stringify(params)),
   // 清空消息
   EmptyMsg: (params: any) => _Post("/SysMsg/EmptyMsg", qs.stringify(params)),
   // 获取我的作业点评
   GetMyWorkReview: (params: any) => _Get("/ClassInfo/GetMyWorkReview", params)
};
export default school;
