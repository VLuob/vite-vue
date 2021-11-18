import { _Get, _Post } from "../utils/http";

const live = {
   // 获取直播
   GetLiveLessonInfo: (params: any) => _Get("LiveLesson/GetLiveLessonInfo", params),
};
export default live;
