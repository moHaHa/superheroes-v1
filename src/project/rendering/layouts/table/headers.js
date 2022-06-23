let array = {
    article: [
       
       
        {
            text: "رابط المقالة",
            align: "start",
            value: "url",
            width: 200,
        },
        {
            text: "عنوان المقالة",
            align: "start",
            value: "title",
            width: 200,
        },
        {
            text: "صورة",
            align: "start",
            value: "image",
            width: 200,
        },
        {
            text: "وصف",
            align: "start",
            value: "description",
            width: 200,
        },
        
        { text: "", value: "actions", sortable: false },
    ],
    course: [
        {
            text: "عنوان الكورس",
            align: "start",
            value: "title",
            width: 200,
        },
        {
            text: "رابط صورة تعبر عن الكورس",
            align: "start",
            value: "image",
            width: 200,
        },
        {
            text: "عدد دروس الكورس",
            align: "start",
            value: "lessons",
        },
        {
            text: "عدد ساعات الكورس",
            align: "start",
            value: "hours",
        },
        {
            text: "سعر الكورس",
            align: "start",
            value: "price",
        },
        { text: "Actions", value: "actions", sortable: false },
    ],
   
    playlist: [
        {
            text: "رابط قائمة تشغيل على يوتيوب",
            align: "start",
            value: "url",
        },
        
        { text: "Actions", value: "actions", sortable: false },
    ],
    user: [
        {
            text: "Title",
            align: "start",
            value: "title",
        },
        {
            text: "Description",
            align: "start",
            value: "description",
            width: 400,
        },
        {
            text: "Article URL",
            align: "start",
            value: "url",
        },
        { text: "Actions", value: "actions", sortable: false },
    ],
};
export default array