var clock = new Vue({
    el: "#clock",
    data: {
        time: "",
        date: "",
        subject: "",
        next: "",
        checkedEET: ["true"],
        notelink: "<a href='https://csitauthority.github.io/8thSem/en/notes/'>NOTE</a>"
    }
});

var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
    var now = new Date();
    var countDownDate = (trackingInformation = TrackExam(now))[0];
    cd = countDownDate - now;
    var days = Math.floor(cd / (1000 * 60 * 60 * 24));
    var hours = Math.floor((cd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((cd % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((cd % (1000 * 60)) / 1000);
    clock.time =
        zeroPadding(days, 2) +
        "d:" +
        zeroPadding(hours, 2) +
        ":" +
        zeroPadding(minutes, 2) +
        ":" +
        zeroPadding(seconds, 2);
    var dateOfUpcomingExam = new Date(trackingInformation[3]);
    var dateOfNextExam = new Date(trackingInformation[4]);
    console.log(dateOfUpcomingExam);
    clock.date =
        zeroPadding(dateOfUpcomingExam.getFullYear(), 4) +
        "-" +
        zeroPadding(dateOfUpcomingExam.getMonth() + 1, 2) +
        "-" +
        zeroPadding(dateOfUpcomingExam.getDate(), 2) +
        " " +
        week[dateOfUpcomingExam.getDay()];
    clock.subject = trackingInformation[1];
    clock.next =
        "Next Exam: " +
        trackingInformation[2] +
        " (" +
        zeroPadding(dateOfUpcomingExam.getFullYear(), 4) +
        "-" +
        zeroPadding(dateOfNextExam.getMonth() + 1, 2) +
        "-" +
        zeroPadding(dateOfNextExam.getDate(), 2) +
        " " +
        week[dateOfNextExam.getDay()] +
        ")";
    clock.notelink = trackingInformation[5];
}

function zeroPadding(num, digit) {
    var zero = "";
    for (var i = 0; i < digit; i++) {
        zero += "0";
    }
    return (zero + num).slice(-digit);
}

function TrackExam(now) {
    console.log("now=" + now.getTime());
    var examDates = [
        "January 23, 2018",
        "January 26, 2018",
        "January 29, 2018",
        "February 01, 2018",
        "February 04, 2018"
    ];
    var subjectNames = ["Data Warehousing and Data Mining", "IPv6 / DN ", "Cloud Computing", "NS / DOOD", "GIS / DSS", " "];
     var noteURL = [
        "<a href='https://csitauthority.github.io/8thSem/en/notes/csc-451-datawarehousing-and-datamining/'>NOTE</a>",
        "<a href='https://csitauthority.github.io/8thSem/en/notes/csc-453-advanced-networking-with-ipv6/'>NOTE-1</a>&nbsp;<a href='https://csitauthority.github.io/8thSem/en/notes/csc-454-distributed-networking/'>NOTE-2</a>",
        "<a href='https://csitauthority.github.io/8thSem/en/notes/csc-458-cloud-computing/'>NOTE</a>",
        "<a href='https://csitauthority.github.io/8thSem/en/notes/csc-455-network-security/'>NOTE-1</a>&nbsp;<a href='https://csitauthority.github.io/8thSem/en/notes/csc-457-distributed-and-oo-database/'>NOTE-2</a>",
        "<a href='https://csitauthority.github.io/8thSem/en/notes/csc-459-geographical-information-system/'>NOTE-1</a>&nbsp;<a href='https://csitauthority.github.io/8thSem/en/notes/all-other-subjects/'>NOTE-2</a>"
    ];

    function ExamTime(x) {
        if (document.getElementById("exactExamTime").checked) {
            return new Date(examDates[x] + " 12:00").getTime();
        } // ehh sorry I don't know thme exam time yet!
        return new Date(examDates[x]).getTime();
    }

    function KnowEvents(x) {
        var recurseVal = x;
        if (ExamTime(x) - now > 0 && x <= examDates.length) {
            var countDownDate = ExamTime(x);
        } else {
            if (x > examDates.length) {
                return examDates.length;
            }
            x = x + 1;
            recurseVal = KnowEvents(x);
        }
        return recurseVal; //returns the day of the upcoming exam
    }

    var examIndex = KnowEvents(0); //returns the current day of exam value
    
    var trackingInformation = [
        ExamTime(examIndex), //sends countdown to auto update function
        subjectNames[examIndex], //upcoming subject
        subjectNames[examIndex + 1], //next subject
        examDates[examIndex],
        examDates[examIndex + 1],
        noteURL[examIndex]
    ];
    return trackingInformation;
}