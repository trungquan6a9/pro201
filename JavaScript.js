// JavaScript Document
var hinh = [ "Mix3.jpg", "Mate 20.jpg", "XZ3.jpg", "Bphone 3.jpg", "XS MAX.jpg", "Note 9.jpg", "Find X.jpg", "HTC.jpg", "G7.jpg",];

var so = ["1/9", "2/9", "3/9", "4/9", "5/9", "6/9", "7/9", "8/9", "9/9"];

var p1 = [
		"Mi MIX 3 camera trượt độc đáo, RAM 10 GB được Xiaomi giới thiệu tại Việt Nam",
		"Trên tay Huawei Mate 20 Pro và Mate 20: thiết kế mới, cấu hình mới, camera xịn, sạc siêu nhanh",
		"Đánh giá Sony Xperia XZ3: Mọi thứ đều tuyệt, ngoại trừ thời lượng pin",
		"Bphone 3 <br/>Điện thoại chất phong cách chất<br/> Smartphone cao cấp made in Vietnam",
		"Trên tay và đánh giá nhanh iPhone Xs Max tại Việt Nam: Sức hút khó cưỡng",
		"Trên tay Samsung Galaxy Note9: Hướng nhiều đến công việc hơn",
		"OPPO Find X chính thức ra mắt tại Việt Nam!",
		"HTC U12+ ra mắt: Màn hình Quad HD+, 2 bộ camera kép",
		"LG G7 ThinQ chính thức ra mắt: Flagship hiện nay có gì, ThinQ có đó!",
		];

var p2 = [
		"Ngày: 02/11/2018 XiaoMi",
		"Ngày: 01/11/2018 Huawei",
		"Ngày: 21/10/2018 Sony",
		"Ngày: 10/10/2018 BKAV", 
		"Ngày: 22/09/2018 Apple",
		"Ngày: 10/08/2018 SamSung",
		"Ngày: 21/07/2018 Oppo",
		"Ngày: 23/05/2018 HTC",
		"Ngày: 02/05/2018 LG",
		];

var p3 = [
		"Chiều nay, Xiaomi Mi MIX 3 đã chính thức được giới thiệu tại Việt Nam. Nhưng không phải thông qua một buổi sự kiện chính thức & hoành tráng mà chỉ là một cuộc gặp gỡ thân mật giữa hãng và giới báo chí. Đây là chiếc smartphone sở hữu camera trượt độc đáo và đặc biệt là có phiên bản RAM lên đến 10 GB.",
		"Huawei Mate 20 Pro được xem là mẫu smartphone trang bị nhiều công nghệ mới mẻ, cao cấp nhất hiện nay trên thị trường. Chưa hết, nó còn sở hữu nhiều “cái nhất” mà chưa smartphone nào làm được.", 
		"Theo đánh giá thực hiện bởi trang công nghệ AndroidPIT, Xperia XZ3 đã được Sony cải tiến đáng kể so với những đời Xperia trước đó: Ngôn ngữ thiết kế được tinh chỉnh, phần mềm được tối ưu hóa và camera thể hiện xuất sắc. Tuy nhiên, chiếc smartphone của Sony còn tồn tại điểm yếu về thời lượng pin.",
		"Trong sáng nay, Bphone 3 chính thức ra mắt với 2 phiên bản tiêu chuẩn và cao cấp. Với những tính năng mới, nhiều người cho rằng Bphone 3 lần này chắc chắn sẽ rất thu hút cùng với một mức giá rất hợp lý.",
		"Iphone Xs Max là chiếc smartphone thu hút rất nhiều sự chú ý của giới công nghệ và cộng đồng người dùng. Mới đây, team tin tức đã có dịp trên tay sản phẩm này tại Việt Nam. Chúng ta cùng xem chiếc điện thoại sở hữu màn hình lớn nhất trong lịch sử iPhone có gì nổi bật nhé!",
		"Những gì mà Samsung nói về Galaxy Note9 năm nay cho thấy nó hướng đến công việc nhiều hơn là chạy theo những thứ mới lạ. Giống kiểu như Samsung muốn quay về bản chất của dòng Note. Chúng ta có S Pen được trang bị Bluetooth giúp điều khiển nhiều thứ trên Note9 mà trước đây phải dùng đến thiết bị ngoài.",
		"Sau một thời gian dài vắng bóng, dòng Find của OPPO đã chính thức quay trở lại thị trường Việt Nam. Với chiếc Find X, OPPO hứa hẹn sẽ cạnh tranh sòng phẳng với Samsung và Apple ở phân khúc cao cấp. Trước đó, họ đã liên tục “làm mưa làm gió” nhóm smartphone tầm trung bằng những sản phẩm dòng F.",
		"Đây được xem là phiên bản nâng cấp của HTC U11+ với một số nâng cấp đáng giá, trong đó nổi bật nhất là 2 bộ cảm biến camera kép ở mặt trước lẫn mặt sau.",
		"Đúng như dự kiến trước đó, hôm nay (2/5) LG đã chính thức trình làng chiếc flagship mang tên gọi LG G7 ThinQ. Nhìn chung đây là một smartphone sở hữu thiết kế đẹp mắt, cấu hình mạnh mẽ và chạy hệ điều hành Android 8 Oreo mới nhất.",
		];

var links = ["Mix 3/Mix3.html",
			"Mate 20/Mate20.html",
			"XZ 3/XZ3.html",
			"Bphone/Bphone 3.html",
			"XS MAX/XS MAX.html",
			"Note9/Note9.html",
			"Oppo/FindX.html",
			"HTC/HTC.html",
			"G7/G7.html",];
var count = 0;

var wallpaper = ["Wallpapers/1 (1).jpg", 
				"Wallpapers/1 (2).jpg",
				"Wallpapers/1 (3).jpg",
				"Wallpapers/1 (4).jpg",
				"Wallpapers/1 (5).jpg",
				"Wallpapers/1 (6).jpg",
				"Wallpapers/1 (7).jpg",
				"Wallpapers/1 (8).jpg",
				"Wallpapers/1 (9).jpg",
				"Wallpapers/1 (10).jpg",
				"Wallpapers/1 (11).jpg",
				"Wallpapers/1 (12).jpg",
				];
				
var soAnh = ["1/12", "2/12", "3/12", "4/12", "5/12", "6/12", "7/12", "8/12", "9/12", "10/12", "11/12", "12/12"];

function openMusic1(){
	location.href="Music1.html";
}
function openMusic2(){
	location.href="Music2.html";
}
function openMusic3(){
	location.href="Music3.html";
}
function openMusic4(){
	location.href="Music4.html";
}
function openMusic5(){
	location.href="Music5.html";
}
function openMusic6(){
	location.href="Music6.html";
}


function openVideo1(){
	location.href="Video1.html";
}
function openVideo2(){
	location.href="Video2.html";
}
function openVideo3(){
	location.href="Video3.html";
}

function homepage(){
	location.href="Main.html";
}

function nextwall(){
	if(count < wallpaper.length - 1){
		count++;
		var wall=document.getElementById("w1");
		var demSo=document.getElementById("countPic");
		
		wall.src=wallpaper[count];
		demSo.innerHTML=soAnh[count];
	}
}

function previouswall(){
	if(count > 0){
		count--;
		var wall=document.getElementById("w1");
		var demSo=document.getElementById("countPic");
		
		wall.src=wallpaper[count];
		demSo.innerHTML=soAnh[count];
	}
}

function next(){
	if(count < hinh.length - 1){
		count++;
		var anhTo=document.getElementById("i1");
		var demSo=document.getElementById("countNum");
		var dong1=document.getElementById("p1");
		var dong2=document.getElementById("p2");
		var dong3=document.getElementById("p3");
		anhTo.src=hinh[count];
		demSo.innerHTML=so[count];
		dong1.innerHTML=p1[count];
		dong2.innerHTML=p2[count];
		dong3.innerHTML=p3[count];
		
		document.getElementById('a1').setAttribute('href',links[count]);
	}
}
function previous(){
	if(count > 0){
		count--;
		var anhTo=document.getElementById("i1");
		var demSo=document.getElementById("countNum");
		var dong1=document.getElementById("p1");
		var dong2=document.getElementById("p2");
		var dong3=document.getElementById("p3");
		anhTo.src=hinh[count];
		demSo.innerHTML=so[count];
		dong1.innerHTML=p1[count];
		dong2.innerHTML=p2[count];
		dong3.innerHTML=p3[count];
		
		document.getElementById('a1').setAttribute('href',links[count]);
	
	}
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var t=document.getElementById("menu");
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("scroll").style.display = "block";
		t.setAttribute("class", "d1b");
    } else {
        document.getElementById("scroll").style.display = "none";
		t.setAttribute("class", "d1a");
    }
}

// When the user clicks on the button, scroll to the top of the document
var id;
function troLen(){
	if(window.pageYOffset>=10){
		var y=window.pageYOffset;//lấy tọa độ thanh cuộn dọc
		y = y - 500;
		if(y <= 0){
			window.clearInterval(id);
		}
		window.scrollTo(0,y);
	}
}

function cuonTrang(){
		id = window.setInterval(troLen,10);
}

function openWallpaper(){
	location.href="#.html";
}
function openMusic(){
	location.href="#.html";
}
function openVideo(){
	location.href="#.html";
}
function openBphone(){
	location.href="../Bphone/Bphone 3.html";
}
function openNote9(){
	location.href="../Note9/Note9.html";
}
function openG7(){
	location.href="../G7/G7.html";
}
function openHTC(){
	location.href="../HTC/HTC.html";
}
function openMate20(){
	location.href="../Mate 20/Mate20.html";
}
function openMix3(){
	location.href="../Mix 3/Mix3.html";
}
function openXSMAX(){
	location.href="../XS MAX/XS MAX.html";
}
function openXZ3(){
	location.href="../XZ 3/XZ3.html";
}
function openOppo(){
	location.href="../Oppo/FindX.html";
}
//------------------------------------------------------------------------------------------------
$(".project").hover3d({
  selector: ".project__card",
  shine: true,
});
$(".project").hover3d({

  // selector for element
  selector      : null,

  // Perspective value for 3d space
  perspective   : 2500,

  // Mouse movement sensitivity
  sensitivity   : 20,

  // Default behavior is the element will follow the mouse, look like it facing the mouse
  invert        : false,

  // Add shining layer
  shine       : false,

  // Helper class when mouse hover in the element
  hoverInClass  : "hover-in",

  // Helper class when mouse hover Out the element
  hoverOutClass : "hover-out",

  // Helper class when the mouse is hovering the element
  hoverClass    : "hover-3d"
  
});


//------------------------------------------------------------------------------------------------

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function submitButton(){
	window.alert("Thanks for your Feedback!");
	location.href="Bphone 3.html";
}









